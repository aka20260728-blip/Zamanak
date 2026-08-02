document.addEventListener("DOMContentLoaded", () => {
    // استدعاء متغيرات الحالة من المستودع الأول المعزول تلقائياً
    const dictionary = zamanakDictionary;
    const quizQuestions = zamanakQuizQuestions;

    let currentLang = localStorage.getItem('zamanak-lang') || 'ar';
    let quizScore = 0; 
    let currentQuestionIndex = 0;
    let gameScore = 0; 
    let shotsCount = 0; 
    let isBallFlying = false;

    // محرك حقن الكلمات والمقالات وتبديل الواجهة الرسومية
    function initLanguage(lang) {
        document.documentElement.lang = lang; 
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        const els = ['announcementText', 'mainTitleText', 'welcomeText', 'c1Title', 'c1Desc', 'c2Title', 'c2Desc', 'c3Title', 'c3Desc', 'infoCard1Title', 'infoCard1Desc', 'infoCard2Title', 'infoCard2Desc', 'infoCard3Title', 'infoCard3Desc', 'infoCard4Title', 'infoCard4Desc', 'art1TitleText', 'art1BodyText', 'art2TitleText', 'art2BodyText', 'art3TitleText', 'art3BodyText', 'rightWingTitle', 'clickActionText', 'scorePrefix', 'leftWingTitle'];
        els.forEach(id => { if(document.getElementById(id)) document.getElementById(id).innerText = dictionary[lang][id]; });
        
        currentQuestionIndex = 0; 
        quizScore = 0;
        if(document.getElementById('liveQuizScore')) document.getElementById('liveQuizScore').innerText = quizScore;
        loadQuizQuestion();
    }

    if(document.getElementById('langSwitcher')) {
        document.getElementById('langSwitcher').addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('zamanak-lang', currentLang); 
            initLanguage(currentLang);
        });
    }

    // ميكانيكية حساب نقاط المسابقة وتدوير الـ 10 أسئلة بالجمع والخصم
    function loadQuizQuestion() {
        const questionsList = quizQuestions[currentLang]; 
        const container = document.getElementById('quizOptionsContainer'); 
        const questionText = document.getElementById('quizQuestionText');
        if(!container || !questionText) return;

        if (currentQuestionIndex >= 10) {
            questionText.innerText = dictionary[currentLang].quizFinished + " (" + quizScore + ")";
            container.innerHTML = `<button class="zamanak-btn" id="btnRestartQuiz">${dictionary[currentLang].restartQuiz}</button>`;
            document.getElementById('btnRestartQuiz').addEventListener('click', () => { currentQuestionIndex = 0; quizScore = 0; document.getElementById('liveQuizScore').innerText = quizScore; loadQuizQuestion(); });
            return;
        }

        const data = questionsList[currentQuestionIndex]; 
        questionText.innerText = `(${currentQuestionIndex + 1}/10) ${data.q}`; 
        container.innerHTML = '';
        
        data.o.forEach((option, idx) => {
            const btn = document.createElement('button'); btn.className = 'btn-option'; btn.innerText = option;
            btn.addEventListener('click', () => { if (idx === data.a) quizScore += 1; else quizScore -= 1; document.getElementById('liveQuizScore').innerText = quizScore; currentQuestionIndex++; loadQuizQuestion(); });
            container.appendChild(btn);
        });
    }

    // --- ⚽ فيزياء الكرة المتطورة: الخروج عند الخطأ والثبات عند الإصابة ---
    const goalPost = document.getElementById('goalPost');
    const shootBall = document.getElementById('shootBall');
    const gamePitch = document.getElementById('gamePitch');
    const resultAlert = document.getElementById('gameResultAlert');

    let goalDirection = 1; 
    let goalPositionX = 90;
    
    // محرك حركة المرمى الوردي التلقائي
    setInterval(() => { if(goalPost && shotsCount < 10) { goalPositionX += 5 * goalDirection; if(goalPositionX > 180 || goalPositionX < 10) goalDirection *= -1; goalPost.style.left = goalPositionX + "px"; } }, 35);

    if(shootBall && gamePitch) {
        shootBall.addEventListener('click', () => {
            if(isBallFlying || shotsCount >= 10) return;
            isBallFlying = true; 
            shotsCount++;
            document.getElementById('gameShotsCount').innerText = shotsCount;

            const ballLeft = 108;
            const isHit = (ballLeft >= goalPositionX && ballLeft <= (goalPositionX + 60));

            if (isHit) {
                // تصفير الـ overflow ليظل داخل المربع عند الإصابة ويحسب الهدف
                gamePitch.style.setProperty('overflow', 'hidden', 'important');
                shootBall.style.transition = "bottom 0.23s ease-out";
                shootBall.style.bottom = "185px";

                setTimeout(() => {
                    gameScore += 1;
                    document.getElementById('liveGameScore').innerText = gameScore;
                    shootBall.style.boxShadow = "0 0 25px #ff007f";
                    setTimeout(() => { resetBallPosition(); }, 300);
                }, 240);
            } else {
                // فتح الـ overflow للسماح للكرة بالطيران خارج حدود المربع تماماً عند الخطأ!
                gamePitch.style.setProperty('overflow', 'visible', 'important');
                shootBall.style.transition = "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                shootBall.style.bottom = "290px"; 

                setTimeout(() => { resetBallPosition(); }, 500);
            }
        });
    }

    function resetBallPosition() {
        if(!shootBall) return;
        shootBall.style.transition = "none"; 
        shootBall.style.bottom = "20px";
        shootBall.style.boxShadow = "0 0 10px #00f2fe";
        setTimeout(() => { isBallFlying = false; checkGameOver(); }, 50);
    }

    function checkGameOver() {
        if(shotsCount >= 10 && resultAlert) {
            resultAlert.style.display = "block";
            resultAlert.innerHTML = `<p>${dictionary[currentLang].gameOverText} <strong>${gameScore}</strong>/10</p><button class="zamanak-btn" style="margin-top:8px; font-size:11px;" id="btnResetGame">${dictionary[currentLang].playAgainText}</button>`;
            document.getElementById('btnResetGame').addEventListener('click', () => { gameScore = 0; shotsCount = 0; document.getElementById('liveGameScore').innerText = gameScore; document.getElementById('gameShotsCount').innerText = shotsCount; resultAlert.style.display = "none"; });
        }
    }

    initLanguage(currentLang);
});
