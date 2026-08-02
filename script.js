document.addEventListener("DOMContentLoaded", () => {
    // التأكيد المطلق للوضع الداكن دون ارتداد
    localStorage.setItem('zamanak-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    // بنية المعطيات للترجمة الشاملة بما فيها محتوى الكروت الثلاثية والمسابقة والأجنحة
    const dictionary = {
        ar: {
            topBar: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظتك بدقة",
            mainTitle: "منصة زمانك (Zamanak) الفلكية الشاملة",
            welcome: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعة لعمرك حياً ومباشرة.",
            card1Title: "📜 هندسة وعلم الأزمان الكونية",
            card1Desc: "الأزمان ليست مجرد أرقام تتوالى في فراغ، بل هي تدوير فلكي دقيق يرتبط ميكانيكياً بحركة الأجرام السماوية ودورات الكواكب ومجموعات النجوم.",
            card2Title: "🔮 أسرار ومسارات الأبراج والطوالع",
            card2Desc: "إن تموضع الشمس والقمر والتقاطعات الكوكبية لحظة خروجك إلى هذا الكون يترك بصمة طاقية فريدة تؤثر على ملامح طالعك الفلكي.",
            card3Title: "🌌 طاقة الأجرام وحساب التراكم",
            card3Desc: "ترتبط عدادات زمانك التراكمية الحية بالتاريخين الهجري والميلادي لتعيش تفاصيل ثواني ودقائق عمرك بالتناغم الكامل مع نبض المجرة الكبرى.",
            wingRightTitle: "🎮 جناح التسلية السريعة",
            clickText: "اضغط لتجميع طاقة النجوم ✨",
            scoreText: "النقاط الفلكية الحالية: ",
            wingLeftTitle: "🧠 المسابقة الثقافية",
            correctText: "الصح: ",
            wrongText: "الخطأ: "
        },
        en: {
            topBar: "Zamanak Global Astronomical Project - Calculate your age details accurately",
            mainTitle: "Zamanak Comprehensive Astronomical Platform",
            welcome: "Welcome to the grand global gateway to extrapolate celestial movements, cosmic times, and live astral connections.",
            card1Title: "📜 Engineering of Cosmic Times",
            card1Desc: "Times are not merely sequential numbers in a void, but a precise astronomical rotation mechanically linked to celestial bodies.",
            card2Title: "🔮 Secrets of Zodiacs & Ascendants",
            card2Desc: "The positioning of the sun, moon, and planetary intersections at your birth leaves a unique energetic imprint on your cosmic traits.",
            card3Title: "🌌 Planetary Energy & Accumulation",
            card3Desc: "Zamanak live accumulative counters tie both Hijri & Gregorian timelines together to sync your seconds with the grand galactic pulse.",
            wingRightTitle: "🎮 Quick Entertainment Wing",
            clickText: "Click to gather star power ✨",
            scoreText: "Current Astral Score: ",
            wingLeftTitle: "🧠 Cultural Quiz",
            correctText: "Correct: ",
            wrongText: "Wrong: "
        }
    };

    // بنية بيانات الأسئلة الثقافية اللامتناهية التبديل حسب اللغة
    const quizQuestions = {
        ar: [
            { q: "ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", o: ["الزهرة", "المريخ", "المشتري", "زحل"], a: 0 },
            { q: "كم يبلغ عدد الأبراج الفلكية الرئيسية؟", o: ["10 أبراج", "12 برجاً", "14 برجاً", "9 أبراج"], a: 1 },
            { q: "ما هو الجرم المسؤول عن ظاهرة المد والجزر؟", o: ["الشمس", "النيازك", "القمر", "الثقب الأسود"], a: 2 }
        ],
        en: [
            { q: "Which planet is the brightest in the night sky?", o: ["Venus", "Mars", "Jupiter", "Saturn"], a: 0 },
            { q: "How many main zodiac signs are there?", o: ["10 Signs", "12 Signs", "14 Signs", "9 Signs"], a: 1 },
            { q: "Which celestial body is responsible for tides?", o: ["Sun", "Meteors", "Moon", "Black Hole"], a: 2 }
        ]
    };

    let currentLang = localStorage.getItem('zamanak-lang') || 'ar';
    let correctCount = 0;
    let wrongCount = 0;
    let currentQuestionIndex = 0;
    let gameScore = 0;

    function initLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // تبديل المحتوى المركزي بالكامل ومحاذاة النصوص ميكانيكياً
        document.getElementById('announcementText').innerText = dictionary[lang].topBar;
        document.getElementById('mainTitleText').innerText = dictionary[lang].mainTitle;
        document.getElementById('welcomeText').innerText = dictionary[lang].welcome;
        
        document.getElementById('c1Title').innerText = dictionary[lang].card1Title;
        document.getElementById('c1Desc').innerText = dictionary[lang].card1Desc;
        document.getElementById('c2Title').innerText = dictionary[lang].card2Title;
        document.getElementById('c2Desc').innerText = dictionary[lang].card2Desc;
        document.getElementById('c3Title').innerText = dictionary[lang].card3Title;
        document.getElementById('c3Desc').innerText = dictionary[lang].card3Desc;

        document.getElementById('rightWingTitle').innerText = dictionary[lang].wingRightTitle;
        document.getElementById('clickActionText').innerText = dictionary[lang].clickText;
        document.getElementById('scorePrefix').innerText = dictionary[lang].scoreText;
        
        document.getElementById('leftWingTitle').innerText = dictionary[lang].wingLeftTitle;
        document.getElementById('correctLabel').innerText = dictionary[lang].correctText;
        document.getElementById('wrongLabel').innerText = dictionary[lang].wrongText;

        // إعادة تصفير وعرض سؤال المسابقة باللغة الجديدة
        currentQuestionIndex = 0;
        loadQuizQuestion();
    }

    // زر تبديل اللغة الفاخر في الهيدر العلوي لشريط المتصفح
    document.getElementById('langSwitcher').addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('zamanak-lang', currentLang);
        initLanguage(currentLang);
    });

    // محرك المسابقة التفاعلية الذكي لفرز نتائج الصح والخطأ
    function loadQuizQuestion() {
        const questionsList = quizQuestions[currentLang];
        if (!questionsList || currentQuestionIndex >= questionsList.length) {
            currentQuestionIndex = 0; // حلقة لامتناهية لإعادة تدوير الأسئلة بكفاءة
        }
        const data = questionsList[currentQuestionIndex];
        document.getElementById('quizQuestionText').innerText = data.q;
        
        const optionsContainer = document.getElementById('quizOptionsContainer');
        optionsContainer.innerHTML = '';
        
        data.o.forEach((option, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = option;
            btn.addEventListener('click', () => checkUserAnswer(idx, data.a));
            optionsContainer.appendChild(btn);
        });
    }

    function checkUserAnswer(userIndex, correctIndex) {
        if (userIndex === correctIndex) {
            correctCount++;
            document.getElementById('correctScore').innerText = correctCount;
        } else {
            wrongCount++;
            document.getElementById('wrongScore').innerText = wrongCount;
        }
        currentQuestionIndex++;
        loadQuizQuestion(); // انتقال فوري للسؤال التالي بدون منبثقات مزعجة
    }

    // لعبة النيون في الجناح الأيمن لحساب النقاط الحية
    document.getElementById('neonClicker').addEventListener('click', () => {
        gameScore++;
        document.getElementById('liveGameScore').innerText = gameScore;
    });

    // التشغيل التلقائي عند الإقلاع
    initLanguage(currentLang);
});
