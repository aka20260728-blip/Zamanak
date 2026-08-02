document.addEventListener("DOMContentLoaded", () => {
    // التثبيت المطلق للوضع الداكن دون ارتداد بصري
    localStorage.setItem('zamanak-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    // قاموس المعطيات للترجمة الشاملة بما فيها محتوى الكروت الثلاثية والمسابقة والأجنحة والمقالات
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
            art1Title: "🐋 برج الحوت: عمق طاقة المياه والمجرات السحيقة",
            art1Text: "يُمثل برج الحوت نهاية الدورة الفلكية الكبرى، وهو مستودع الطاقات الروحية والوجدانية في نظام زمانك. يمتلك مواليد هذا البرج تردداً كوكبياً متناغماً مع نبتون، مما يمنحهم حدساً فلكياً فائقاً وقدرة على استشعار تقلبات الخطوط الزمنية بيسر وسهولة.",
            art2Title: "🪐 تأثير زحل الميكانيكي على مسارات الأعمار",
            art2Text: "يعتبر كوكب زحل هو المهندس الهيكلي للزمن في الحسابات الفلكية. عندما يتقاطع زحل مع طالعك الميكانيكي، فإنه يفرض فترة من إعادة التقييم البصري والروحي لخطواتك، مما يجعل حساب عمرك بالدقة الثنائية أمراً بالغ الأهمية للحفاظ على التوازن الكوني.",
            art3Title: "🌞 بوابات الشموس: كيف تؤثر الطاقة النجمية على الروابط حياً؟",
            art3Text: "الشموس ليست مجرد كرات غازية ملتهبة، بل هي العقل النابض للمنظومة الفلكية. كل تدفق طاقي يخرج من البوابات النجمية يعيد صياغة العدادات الحية لأعمارنا، ويتحكم مباشرة في مسارات التسلية والثقافة الكونية التي نتأثر بها يومياً.",
            wingRightTitle: "🎮 جناح التسلية السريعة",
            clickText: "اضغط على الكرة لتوليد النقاط الفلكية 🌟",
            scoreText: "النقاط الحالية: ",
            wingLeftTitle: "🧠 مسابقة زمانك (10 أسئلة)",
            correctText: "الصح: ",
            wrongText: "الخطأ: ",
            quizFinished: "🎉 انتهت المسابقة! نتيجتك النهائية هي: ",
            restartQuiz: "إعادة المحاولة 🔄"
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
            art1Title: "🐋 Pisces: The Deep Energy of Water and Ancient Galaxies",
            art1Text: "Pisces represents the end of the grand astronomical cycle, serving as the reservoir of spiritual energies in the Zamanak system. Natives of this sign possess a planetary frequency tuned to Neptune, granting them high intuition.",
            art2Title: "🪐 Saturn's Mechanical Impact on Life Paths",
            art2Text: "Saturn is considered the structural engineer of time in astronomical calculations. When Saturn intersects with your mechanical ascendant, it forces a cosmic recalibration period, making precise dual age tracking essential.",
            art3Title: "🌞 Solar Gateways: How Star Energy Affects Live Connections",
            art3Text: "Suns are not just burning gas spheres, but the pulsing heart of the astronomical system. Every energy flow from stellar gateways reshapes our live counters and directly controls our daily cosmic paths.",
            wingRightTitle: "🎮 Quick Entertainment Wing",
            clickText: "Click the ball to generate astral points 🌟",
            scoreText: "Current Score: ",
            wingLeftTitle: "🧠 Zamanak Quiz (10 Questions)",
            correctText: "Correct: ",
            wrongText: "Wrong: ",
            quizFinished: "🎉 Quiz Finished! Your final score is: ",
            restartQuiz: "Restart Quiz 🔄"
        }
    };
    // بنك الأسئلة الثقافية المكون من 10 أسئلة متكاملة ومقسمة لكل لغة لضمان الدقة
    const quizQuestions = {
        ar: [
            { q: "ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", o: ["الزهرة", "المريخ", "المشتري", "زحل"], a: 0 },
            { q: "كم يبلغ عدد الأبراج الفلكية الرئيسية؟", o: ["10 أبراج", "12 برجاً", "14 برجاً", "9 أبراج"], a: 1 },
            { q: "ما هو الجرم المسؤول عن ظاهرة المد والجزر؟", o: ["الشمس", "النيازك", "القمر", "الثقب الأسود"], a: 2 },
            { q: "أي كوكب يعرف بالكوكب الأحمر؟", o: ["عطارد", "المريخ", "نبتون", "أورانوس"], a: 1 },
            { q: "ما هو أكبر كوكب في المجموعة الشمسية؟", o: ["الأرض", "زحل", "المشتري", "الزهرة"], a: 2 },
            { q: "كم تستغرق الأرض لتكمل دورة كاملة حول الشمس؟", o: ["365 يوماً", "24 ساعة", "30 يوماً", "12 شهراً"], a: 0 },
            { q: "ما هو الكوكب الأقرب إلى الشمس؟", o: ["عطارد", "الزهرة", "الأرض", "المريخ"], a: 0 },
            { q: "أي برج يرمز إليه بمخلوق من الأساطير المائية؟", o: ["الحوت", "العقرب", "الجدي", "السرطان"], a: 2 },
            { q: "ما هو النجم المركزي للمجموعة الشمسية؟", o: ["نجم الشمال", "الشمس", "الشعرى اليمانية", "الردف"], a: 1 },
            { q: "أي كوكب يشتهر بحلقاته الباهرة المحيطة به؟", o: ["أورانوس", "المشتري", "زحل", "نبتون"], a: 2 }
        ],
        en: [
            { q: "Which planet is the brightest in the night sky?", o: ["Venus", "Mars", "Jupiter", "Saturn"], a: 0 },
            { q: "How many main zodiac signs are there?", o: ["10 Signs", "12 Signs", "14 Signs", "9 Signs"], a: 1 },
            { q: "Which celestial body is responsible for tides?", o: ["Sun", "Meteors", "Moon", "Black Hole"], a: 2 },
            { q: "Which planet is known as the Red Planet?", o: ["Mercury", "Mars", "Neptune", "Uranus"], a: 1 },
            { q: "What is the largest planet in our solar system?", o: ["Earth", "Saturn", "Jupiter", "Venus"], a: 2 },
            { q: "How long does Earth take to orbit the Sun?", o: ["365 Days", "24 Hours", "30 Days", "12 Months"], a: 0 },
            { q: "What is the closest planet to the Sun?", o: ["Mercury", "Venus", "Earth", "Mars"], a: 0 },
            { q: "Which zodiac is represented by a sea-goat?", o: ["Pisces", "Scorpio", "Capricorn", "Cancer"], a: 2 },
            { q: "What is the central star of our solar system?", o: ["North Star", "Sun", "Sirius", "Vega"], a: 1 },
            { q: "Which planet is famous for its bright rings?", o: ["Uranus", "Jupiter", "Saturn", "Neptune"], a: 2 }
        ]
    };

    // متغيرات الحالة العامة للنظام
    let currentLang = localStorage.getItem('zamanak-lang') || 'ar';
    let quizScore = 0;
    let currentQuestionIndex = 0;
    let mouseClickScore = 0;

        // دالة تحديث الواجهة الرسومية بالكامل وضبط التوجه والترجمات والمقالات
    function initLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // ربط عناصر الهيكل المركزي
        document.getElementById('announcementText').innerText = dictionary[lang].topBar;
        document.getElementById('mainTitleText').innerText = dictionary[lang].mainTitle;
        document.getElementById('welcomeText').innerText = dictionary[lang].welcome;
        
        document.getElementById('c1Title').innerText = dictionary[lang].card1Title;
        document.getElementById('c1Desc').innerText = dictionary[lang].card1Desc;
        document.getElementById('c2Title').innerText = dictionary[lang].card2Title;
        document.getElementById('c2Desc').innerText = dictionary[lang].card2Desc;
        document.getElementById('c3Title').innerText = dictionary[lang].card3Title;
        document.getElementById('c3Desc').innerText = dictionary[lang].card3Desc;

        // ربط نصوص المقالات الموسعة الفاخرة
        document.getElementById('art1TitleText').innerText = dictionary[lang].art1Title;
        document.getElementById('art1BodyText').innerText = dictionary[lang].art1Text;
        document.getElementById('art2TitleText').innerText = dictionary[lang].art2Title;
        document.getElementById('art2BodyText').innerText = dictionary[lang].art2Text;
        document.getElementById('art3TitleText').innerText = dictionary[lang].art3Title;
        document.getElementById('art3BodyText').innerText = dictionary[lang].art3Text;

        // ربط عناصر الأجنحة الطرفية (التسلية والمسابقة)
        document.getElementById('rightWingTitle').innerText = dictionary[lang].wingRightTitle;
        document.getElementById('clickActionText').innerText = dictionary[lang].clickText;
        document.getElementById('scorePrefix').innerText = dictionary[lang].scoreText;
        document.getElementById('leftWingTitle').innerText = dictionary[lang].wingLeftTitle;

        // إعادة تصفير العدادات الخاصة بالمسابقة عند تبديل اللغة للتأمين
        currentQuestionIndex = 0;
        quizScore = 0;
        document.getElementById('liveQuizScore').innerText = quizScore;
        loadQuizQuestion();
    }

    // التنصت لزر تبديل لغة المنصة الفاخر
    document.getElementById('langSwitcher').addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('zamanak-lang', currentLang);
        initLanguage(currentLang);
    });
    // ميكانيكية بناء وحقن الأسئلة والخيارات داخل الجناح الأيسر
    function loadQuizQuestion() {
        const questionsList = quizQuestions[currentLang];
        const container = document.getElementById('quizOptionsContainer');
        const questionText = document.getElementById('quizQuestionText');

        // فحص حالة انتهاء الـ 10 أسئلة لإبراز لوحة النتيجة النهائية
        if (currentQuestionIndex >= 10 || currentQuestionIndex >= questionsList.length) {
            questionText.innerText = dictionary[currentLang].quizFinished + " (" + quizScore + ")";
            container.innerHTML = `<button class="zamanak-btn" id="btnRestartQuiz">${dictionary[currentLang].restartQuiz}</button>`;
            
            document.getElementById('btnRestartQuiz').addEventListener('click', () => {
                currentQuestionIndex = 0;
                quizScore = 0;
                document.getElementById('liveQuizScore').innerText = quizScore;
                loadQuizQuestion();
            });
            return;
        }

        const data = questionsList[currentQuestionIndex];
        questionText.innerText = `(${currentQuestionIndex + 1}/10) ${data.q}`;
        container.innerHTML = '';
        
        // توليد أزرار الاختيارات ديناميكياً وحقنها في الهيكل
        data.o.forEach((option, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = option;
            btn.addEventListener('click', () => checkUserAnswer(idx, data.a));
            container.appendChild(btn);
        });
    }

    // دالة الفرز واحتساب النقاط بالزيادة والنقصان ميكانيكياً
    function checkUserAnswer(userIndex, correctIndex) {
        if (userIndex === correctIndex) {
            quizScore += 1; // إضافة نقطة للإجابة الصحيحة
        } else {
            quizScore -= 1; // خصم نقطة للإجابة الخاطئة
        }
        document.getElementById('liveQuizScore').innerText = quizScore;
        currentQuestionIndex++;
        loadQuizQuestion();
    }

    // تشغيل لعبة التسلية الميكانيكية بضغط الماوس في الجناح الأيمن لحساب طاقة النجوم
    document.getElementById('mouseBallClicker').addEventListener('click', () => {
        mouseClickScore++;
        document.getElementById('liveGameScore').innerText = mouseClickScore;
    });

    // الإقلاع والتشغيل الذكي الأوتوماتيكي عند تحميل الصفحة
    initLanguage(currentLang);
});

                          
