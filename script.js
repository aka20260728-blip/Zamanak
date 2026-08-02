document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem('zamanak-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    // مستودع البيانات الفلكية الموحد لمنع ظهور كلمة undefined نهائياً على شاشتك حياً
    const dictionary = {
        ar: {
            topBar: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظتك بدقة عالية",
            mainTitle: "منصة زمانك (Zamanak) الفلكية الشاملة",
            welcome: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعة لعمرك حياً ومباشرة.",
            card1Title: "📜 هندسة وعلم الأزمان الكونية", card1Desc: "زمانك يعتمد تدوير فلكي دقيق يرتبط بحركة الأجرام الكونية السابحة.",
            card2Title: "🔮 أسرار ومسارات الأبراج", card2Desc: "تموضع الشمس والقمر يترك بصمة طاقية فريدة على ملامح طالعك الفلكي.",
            card3Title: "🌌 طاقة الأجرام وحساب التراكم", card3Desc: "مزامنة التاريخين الهجري والميلادي لتعيش تفاصيل ثواني عمرك بالتناغم الكامل.",
            infoCard1Title: "🎯 دليل الأبراج وطوالع الفلك", infoCard1Desc: "تنقسم الأبراج في محرك زمانك إلى أربع مجموعات تخصصية: نارية، ترابية، هوائية، ومائية حية.",
            infoCard2Title: "🕌 الأشهر الحُرُم ومكانتها", infoCard2Desc: "الأشهر الحُرُم هي أربعة أشهر عظمى في التقويم الهجري الميكانيكية (ذو القعدة، ذو الحجة، محرم، ورجب).",
            infoCard3Title: "🕋 المناسبات الدينية الكبرى", infoCard3Desc: "تتبع دقيق لمواعيد بزوغ أهلة الهجرة السنوية وعيد الفطر وعيد الأضحى وموسم الحج المعظم حياً.",
            infoCard4Title: "📿 فضائل الاستغفار وجلب الأرزاق", infoCard4Desc: "الاستغفار يمثل الرابط الروحي الأكبر لتطهير السجلات وتحويل خطوط الزمن الجافة إلى تدفقات وفيرة وغيث مدرار.",
            art1Title: "🐋 برج الحوت: عمق طاقة المياه والمجرات السحيقة", art1Text: "يُمثل برج الحوت نهاية الدورة الفلكية الكبرى، وهو مستودع الطاقات الروحية. مواليد هذا البرج يمتلكون حدساً فلكياً فائقا يربطهم بنبض المجرة العميقة.",
            art2Title: "🪐 تأثير زحل الميكانيكي على مسارات الأعمار", art2Text: "يعتبر زحل هو المهندس الهيكلي للزمن. عندما يتقاطع زحل مع طالعك الميكانيكي، فإنه يفرض فترة من إعادة التقييم البصري والروحي لخطوات خطك الزمني حياً وبكل روقان وصراحة مطلقة.",
            art3Title: "🌞 بوابات الشموس والطاقة النجمية حياً", art3Text: "الشموس هي العقل النابض للمنظومة الفلكية. كل تدفق طاقي يخرج من البوابات النجمية يعيد صياغة العدادات الحية لأعمارنا، ويتحكم بمخرجات العرض المركزي الفاخر لزمانك الفلكي الشامل الممتد.",
            wingRightTitle: "🎮 لعبة تسديد الطاقة الكونية", clickText: "انقر ركلة قوية! إذا أصبت الهدف الوردي تفوز، وإذا أخطأته تطير الكرة خارج الميدان وتعود!",
            scoreText: "الأهداف: ", wingLeftTitle: "🧠 مسابقة زمانك (10 أسئلة)", quizFinished: "🎉 انتهت المسابقة! نتيجتك النهائية هي: ", restartQuiz: "إعادة المحاولة 🔄",
            gameOverText: "🎮 انتهت المحاولات! الأهداف المسجلة: ", playAgainText: "العب مجدداً ⚽",
            gamePlayText: "تشغيل محاكمة الحركة ▶️", gamePauseText: "إيقاف الحركة مؤقتاً ⏸️"
        },
        en: {
            topBar: "Zamanak Global Astronomical Project - Calculate your age details accurately",
            mainTitle: "Zamanak Comprehensive Astronomical Platform",
            welcome: "Welcome to the grand global gateway to extrapolate celestial movements and live astral connections.",
            card1Title: "📜 Cosmic Times", card1Desc: "Times are a precise astronomical rotation mechanically linked to celestial bodies.",
            card2Title: "🔮 Secrets of Zodiacs", card2Desc: "The positioning of the sun leaves a unique energetic imprint on your cosmic traits.",
            card3Title: "🌌 Planetary Energy", card3Desc: "Zamanak live counters tie both Hijri & Gregorian timelines together.",
            infoCard1Title: "🎯 Zodiacs Guide", infoCard1Desc: "Zodiac signs in Zamanak engine split into four specific cosmic categories.",
            infoCard2Title: "🕌 The Sacred Months", infoCard2Desc: "The Sacred Months are Dhu al-Qadah, Dhu al-Hijjah, Muharram, and Rajab.",
            infoCard3Title: "🕋 Major Spiritual Occasions", infoCard3Desc: "Zamanak tracks moon crescents to lock annual Hijri dates and Eid seasons.",
            infoCard4Title: "📿 Virtues of Istighfar", infoCard4Desc: "Seeking forgiveness functions as the greatest spiritual tool to clear records.",
            art1Title: "🐋 Pisces: The Deep Energy of Water", art1Text: "Pisces serves as the reservoir of spiritual energies in the Zamanak system. Natives of this sign possess high intuition.",
            art2Title: "🪐 Saturn's Impact on Life Paths", art2Text: "Saturn forces a cosmic recalibration period, making precise dual age tracking essential.",
            art3Title: "🌞 Solar Gateways & Star Energy", art3Text: "Every energy flow from stellar gateways reshapes our live counters and directly controls our daily cosmic paths accurately.",
            wingRightTitle: "🎮 Cosmic Shoot Game", clickText: "Click to shoot! Hit the moving pink goal to win, miss and it flies out!",
            scoreText: "Goals: ", wingLeftTitle: "🧠 Zamanak Quiz (10 Questions)", quizFinished: "🎉 Quiz Finished! Your score: ", restartQuiz: "Restart 🔄",
            gameOverText: "🎮 Game Over! Your final goals: ", playAgainText: "Play Again ⚽",
            gamePlayText: "Start Motion Engine ▶️", gamePauseText: "Pause Motion Engine ⏸️"
        }
    };
    const quizQuestions = {
        ar: [
            { q: "ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", o: ["الزهرة", "المريخ", "المشتري"], a: 0 },
            { q: "كم يبلغ عدد الأبراج الفلكية الرئيسية؟", o: ["10 أبراج", "12 برجاً", "14 برجاً"], a: 1 },
            { q: "ما هو الجرم المسؤول عن ظاهرة المد والجزر؟", o: ["الشمس", "النيازك", "القمر"], a: 2 },
            { q: "أي كوكب يعرف بالكوكب الأحمر؟", o: ["عطارد", "المريخ", "نبتون"], a: 1 },
            { q: "ما هو أكبر كوكب في المجموعة الشمسية؟", o: ["الأرض", "زحل", "المشتري"], a: 2 },
            { q: "كم تستغرق الأرض لتكمل دورة كاملة حول الشمس؟", o: ["365 يوماً", "24 ساعة", "30 يوماً"], a: 0 },
            { q: "ما هو الكوكب الأقرب إلى الشمس？", o: ["عطارد", "الزهرة", "الأرض"], a: 0 },
            { q: "أي برج يرمز إليه بمخلوق من الأساطير المائية؟", o: ["الحوت", "العقرب", "الجدي"], a: 2 },
            { q: "ما هو النجم المركزي للمجموعة الشمسية؟", o: ["نجم الشمال", "الشمس", "الردف"], a: 1 },
            { q: "أي كوكب يشتهر بحلقاته الباهرة المحيطة به؟", o: ["أورانوس", "المشتري", "زحل"], a: 2 }
        ],
        en: [
            { q: "Which planet is the brightest in the night sky?", o: ["Venus", "Mars", "Jupiter"], a: 0 },
            { q: "How many main zodiac signs are there?", o: ["10 Signs", "12 Signs", "14 Signs"], a: 1 },
            { q: "Which celestial body is responsible for tides?", o: ["Sun", "Meteors", "Moon"], a: 2 },
            { q: "Which planet is known as the Red Planet?", o: ["Mercury", "Mars", "Neptune"], a: 1 },
            { q: "What is the largest planet in our solar system?", o: ["Earth", "Saturn", "Jupiter", "Venus"], a: 2 },
            { q: "How long does Earth take to orbit the Sun?", o: ["365 Days", "24 Hours", "30 Days"], a: 0 },
            { q: "What is the closest planet to the Sun?", o: ["Mercury", "Venus", "Earth"], a: 0 },
            { q: "Which zodiac is represented by a sea-goat?", o: ["Pisces", "Scorpio", "Capricorn", "Cancer"], a: 2 },
            { q: "What is the central star of our solar system?", o: ["North Star", "Sun", "Sirius"], a: 1 },
            { q: "Which planet is famous for its bright rings?", o: ["Uranus", "Jupiter", "Saturn", "Neptune"], a: 2 }
        ]
    };

    let currentLang = localStorage.getItem('zamanak-lang') || 'ar';
    let quizScore = 0; let currentQuestionIndex = 0;
    let gameScore = 0; let shotsCount = 0; let isBallFlying = false;
    
    // مفتاح حالة تشغيل وإيقاف اللعبة برمجياً من ملاحظتك الأخيرة
    let isGameRunning = true; 
    function initLanguage(lang) {
        document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        const els = ['announcementText', 'mainTitleText', 'welcomeText', 'c1Title', 'c1Desc', 'c2Title', 'c2Desc', 'c3Title', 'c3Desc', 'infoCard1Title', 'infoCard1Desc', 'infoCard2Title', 'infoCard2Desc', 'infoCard3Title', 'infoCard3Desc', 'infoCard4Title', 'infoCard4Desc', 'art1TitleText', 'art1BodyText', 'art2TitleText', 'art2BodyText', 'art3TitleText', 'art3BodyText', 'rightWingTitle', 'clickActionText', 'scorePrefix', 'leftWingTitle'];
        els.forEach(id => { if(document.getElementById(id)) document.getElementById(id).innerText = dictionary[lang][id]; });
        
        // تحديث نص زر التحكم في اللعبة حسب اللغة النشطة حياً ومباشرة
        updateGameToggleBtnText();
        
        currentQuestionIndex = 0; quizScore = 0;
        if(document.getElementById('liveQuizScore')) document.getElementById('liveQuizScore').innerText = quizScore;
        loadQuizQuestion();
    }

    if(document.getElementById('langSwitcher')) {
        document.getElementById('langSwitcher').addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('zamanak-lang', currentLang); initLanguage(currentLang);
        });
    }

    function loadQuizQuestion() {
        const questionsList = quizQuestions[currentLang]; const container = document.getElementById('quizOptionsContainer'); const questionText = document.getElementById('quizQuestionText');
        if(!container || !questionText) return;
        if (currentQuestionIndex >= 10) {
            questionText.innerText = dictionary[currentLang].quizFinished + " (" + quizScore + ")";
            container.innerHTML = `<button class="zamanak-btn" id="btnRestartQuiz">${dictionary[currentLang].restartQuiz}</button>`;
            document.getElementById('btnRestartQuiz').addEventListener('click', () => { currentQuestionIndex = 0; quizScore = 0; document.getElementById('liveQuizScore').innerText = quizScore; loadQuizQuestion(); });
            return;
        }
        const data = questionsList[currentQuestionIndex]; questionText.innerText = `(${currentQuestionIndex + 1}/10) ${data.q}`; container.innerHTML = '';
        data.o.forEach((option, idx) => {
            const btn = document.createElement('button'); btn.className = 'btn-option'; btn.innerText = option;
            btn.addEventListener('click', () => { if (idx === data.a) quizScore += 1; else quizScore -= 1; document.getElementById('liveQuizScore').innerText = quizScore; currentQuestionIndex++; loadQuizQuestion(); });
            container.appendChild(btn);
        });
    }

    // --- ⚽ ميكانيكية حركة وتصادم وتثبيت أزرار اللعبة التنافسية الكونية ---
    const goalPost = document.getElementById('goalPost');
    const shootBall = document.getElementById('shootBall');
    const gamePitch = document.getElementById('gamePitch');
    const resultAlert = document.getElementById('gameResultAlert');
    const gameToggleBtn = document.getElementById('gameToggleBtn');

    let goalDirection = 1; let goalPositionX = 90;
    
    // محرك حركة المرمى الوردي التلقائي (يتوقف فورا إذا قمنا بالضغط على زر الإيقاف مؤقتا)
    setInterval(() => { 
        if(goalPost && shotsCount < 10 && isGameRunning) { 
            goalPositionX += 5 * goalDirection; 
            if(goalPositionX > 180 || goalPositionX < 10) goalDirection *= -1; 
            goalPost.style.left = goalPositionX + "px"; 
        } 
    }, 35);

    // مفتاح روقان تشغيل وإيقاف اللعبة الميكانيكي
    if(gameToggleBtn) {
        gameToggleBtn.addEventListener('click', () => {
            isGameRunning = !isGameRunning;
            updateGameToggleBtnText();
        });
    }

    function updateGameToggleBtnText() {
        if(!gameToggleBtn) return;
        gameToggleBtn.innerText = isGameRunning ? dictionary[currentLang].gamePauseText : dictionary[currentLang].gamePlayText;
        gameToggleBtn.style.borderColor = isGameRunning ? "#ff007f" : "#00f2fe";
        gameToggleBtn.style.color = isGameRunning ? "#ff007f" : "#00f2fe";
    }

    if(shootBall && gamePitch) {
        shootBall.addEventListener('click', () => {
            // منع الركل في حالة الإيقاف المؤقت أو انتهاء المحاولات العشرة
            if(isBallFlying || shotsCount >= 10 || !isGameRunning) return;
            isBallFlying = true; shotsCount++;
            document.getElementById('gameShotsCount').innerText = shotsCount;

            const ballLeft = 108;
            const isHit = (ballLeft >= goalPositionX && ballLeft <= (goalPositionX + 60));

            if (isHit) {
                gamePitch.style.setProperty('overflow', 'hidden', 'important');
                shootBall.style.transition = "bottom 0.23s ease-out";
                shootBall.style.bottom = "185px";
                setTimeout(() => {
                    gameScore += 1; document.getElementById('liveGameScore').innerText = gameScore;
                    shootBall.style.boxShadow = "0 0 25px #ff007f";
                    setTimeout(() => { resetBallPosition(); }, 300);
                }, 240);
            } else {
                gamePitch.style.setProperty('overflow', 'visible', 'important');
                shootBall.style.transition = "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                shootBall.style.bottom = "290px"; // الطيران للخارج بحرية تامة عند الخطأ
                setTimeout(() => { resetBallPosition(); }, 500);
            }
        });
    }

    function resetBallPosition() {
        if(!shootBall) return;
        shootBall.style.transition = "none"; shootBall.style.bottom = "20px";
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
