document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem('zamanak-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    const dictionary = {
        ar: {
            topBar: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظتك بدقة عالية",
            mainTitle: "منصة زمانك (Zamanak) الفلكية الشاملة",
            welcome: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعة لعمرك حياً ومباشرة.",
            card1Title: "📜 هندسة وعلم الأزمان الكونية",
            card1Desc: "الأزمان ليست مجرد أرقام تتوالى في فراغ، بل هي تدوير فلكي دقيق يرتبط ميكانيكياً بحركة الأجرام السماوية ودورات الكواكب ومجموعات النجوم.",
            card2Title: "🔮 أسرار ومسارات الأبراج والطوالع",
            card2Desc: "إن تموضع الشمس والقمر والتقاطعات الكوكبية لحظة خروجك إلى هذا الكون يترك بصمة طاقية فريدة تؤثر على ملامح طالعك الفلكي.",
            card3Title: "🌌 طاقة الأجرام وحساب التراكم",
            card3Desc: "ترتبط عدادات زمانك التراكمية الحية بالتاريخين الهجري والميلادي لتعيش تفاصيل ثواني ودقائق عمرك بالتناغم الكامل مع نبض المجرة الكبرى.",
            art1Title: "🐋 برج الحوت: عمق طاقة المياه والمجرات السحيقة",
            art1Text: "يُمثل برج الحوت نهاية الدورة الفلكية الكبرى، وهو مستودع الطاقات الروحية والوجدانية في نظام زمانك. يمتلك مواليد هذا البرج حدساً فلكياً فائقاً وقدرة على استشعار تقلبات الخطوط الزمنية بيسر وسهولة وتناغم مطلق.",
            art2Title: "🪐 تأثير زحل الميكانيكي على مسارات الأعمار",
            art2Text: "يعتبر كوكب زحل هو المهندس الهيكلي للزمن في الحسابات الفلكية. عندما يتقاطع زحل مع طالعك الميكانيكي، فإنه يفرض فترة من إعادة التقييم البصري والروحي لخطواتك، مما يجعل حساب عمرك بالدقة الثنائية أمراً بالغ الأهمية للحفاظ على التوازن الكوني الصافي.",
            art3Title: "🌞 بوابات الشموس: كيف تؤثر الطاقة النجمية على الروابط حياً؟",
            art3Text: "الشموس ليست مجرد كرات غازية ملتهبة، بل هي العقل النابض للمنظومة الفلكية. كل تدفق طاقي يخرج من البوابات النجمية يعيد صياغة العدادات الحية لأعمارنا، ويتحكم مباشرة في مسارات التسلية والثقافة الكونية التي نتأثر بها يومياً عبر بوابات العرض النظيفة والروقان المركزي.",
            wingRightTitle: "🎮 لعبة ركل الكرة نحو الهدف",
            clickText: "انقر على الكرة الفيروزية لتسديدها نحو المرمى الوردي المتحرك!",
            scoreText: "النقاط المحرزة: ",
            wingLeftTitle: "🧠 مسابقة زمانك (10 أسئلة)",
            quizFinished: "🎉 انتهت المسابقة! نتيجتك النهائية هي: ",
            restartQuiz: "إعادة المحاولة 🔄",
            gameOverText: "🎮 انتهت الـ 10 محاولات! نقاطك النهائية: ",
            playAgainText: "العب مجدداً ⚽"
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
            art3Text: "Suns are not just burning gas spheres, but the pulsing heart of the astronomical system. Every energy flow from stellar gateways reshapes our live counters and directly controls our daily cosmic paths accurately.",
            wingRightTitle: "🎮 Shoot the Cosmic Ball Game",
            clickText: "Click the cyan ball to shoot it towards the moving pink goal post!",
            scoreText: "Goals Scored: ",
            wingLeftTitle: "🧠 Zamanak Quiz (10 Questions)",
            quizFinished: "🎉 Quiz Finished! Your final score is: ",
            restartQuiz: "Restart Quiz 🔄",
            gameOverText: "🎮 Game Over (10 Shots)! Your final goals: ",
            playAgainText: "Play Again ⚽"
        }
    };
    const quizQuestions = {
        ar: [
            { q: "ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", o: ["الزهرة", "المريخ", "المشتري"], a: 0 },
            { q: "كم يبلغ عدد الأبراج الفلكية الرئيسية؟", o: ["10 أبراج", "12 برجاً", "14 برجاً"], a: 1 },
            { q: "ما هو الجرم المسؤول عن ظاهرة المد والجزر؟", o: ["الشمس", "النيازك", "القمر"], a: 2 },
            { q: "أي كوكب يعرف بالكوكب الأحمر؟", o: ["عطارد", "المريخ", "نبتون"], a: 1 },
            { q: "ما هو أكبر كوكب في المجموعة الشمسية؟", o: ["الأرض", "زحل", "المشتري"], a: 2 },
            { q: "كم تستغرق الأرض لتكمل دورة كاملة حول الشمس？", o: ["365 يوماً", "24 ساعة", "30 يوماً"], a: 0 },
            { q: "ما هو الكوكب الأقرب إلى الشمس؟", o: ["عطارد", "الزهرة", "الأرض"], a: 0 },
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
    let quizScore = 0;
    let currentQuestionIndex = 0;
    
    // متغيرات لعبة ركل الكرة والـ 10 محاولات
    let gameScore = 0;
    let shotsCount = 0;
    let isBallFlying = false;
    function initLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        if(document.getElementById('announcementText')) document.getElementById('announcementText').innerText = dictionary[lang].topBar;
        if(document.getElementById('mainTitleText')) document.getElementById('mainTitleText').innerText = dictionary[lang].mainTitle;
        if(document.getElementById('welcomeText')) document.getElementById('welcomeText').innerText = dictionary[lang].welcome;
        
        if(document.getElementById('c1Title')) document.getElementById('c1Title').innerText = dictionary[lang].card1Title;
        if(document.getElementById('c1Desc')) document.getElementById('c1Desc').innerText = dictionary[lang].card1Desc;
        if(document.getElementById('c2Title')) document.getElementById('c2Title').innerText = dictionary[lang].card2Title;
        if(document.getElementById('c2Desc')) document.getElementById('c2Desc').innerText = dictionary[lang].card2Desc;
        if(document.getElementById('c3Title')) document.getElementById('c3Title').innerText = dictionary[lang].card3Title;
        if(document.getElementById('c3Desc')) document.getElementById('c3Desc').innerText = dictionary[lang].card3Desc;

        if(document.getElementById('art1TitleText')) document.getElementById('art1TitleText').innerText = dictionary[lang].art1Title;
        if(document.getElementById('art1BodyText')) document.getElementById('art1BodyText').innerText = dictionary[lang].art1Text;
        if(document.getElementById('art2TitleText')) document.getElementById('art2TitleText').innerText = dictionary[lang].art2Title;
        if(document.getElementById('art2BodyText')) document.getElementById('art2BodyText').innerText = dictionary[lang].art2Text;
        if(document.getElementById('art3TitleText')) document.getElementById('art3TitleText').innerText = dictionary[lang].art3Title;
        if(document.getElementById('art3BodyText')) document.getElementById('art3BodyText').innerText = dictionary[lang].art3Text;

        if(document.getElementById('rightWingTitle')) document.getElementById('rightWingTitle').innerText = dictionary[lang].wingRightTitle;
        if(document.getElementById('clickActionText')) document.getElementById('clickActionText').innerText = dictionary[lang].clickText;
        if(document.getElementById('scorePrefix')) document.getElementById('scorePrefix').innerText = dictionary[lang].scoreText;
        if(document.getElementById('leftWingTitle')) document.getElementById('leftWingTitle').innerText = dictionary[lang].wingLeftTitle;

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

    function loadQuizQuestion() {
        const questionsList = quizQuestions[currentLang];
        const container = document.getElementById('quizOptionsContainer');
        const questionText = document.getElementById('quizQuestionText');

        if(!container || !questionText) return;

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
        
        data.o.forEach((option, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = option;
            btn.addEventListener('click', () => {
                if (idx === data.a) quizScore += 1;
                else quizScore -= 1;
                document.getElementById('liveQuizScore').innerText = quizScore;
                currentQuestionIndex++;
                loadQuizQuestion();
            });
            container.appendChild(btn);
        });
    }

    // --- ⚽ منطق لعبة تسديد الكرة الفلكية لـ 10 محاولات حاسمة ---
    const goalPost = document.getElementById('goalPost');
    const shootBall = document.getElementById('shootBall');
    const resultAlert = document.getElementById('gameResultAlert');

    // جعل الهدف الوردي (المرمى) يتحرك أوتوماتيكياً يميناً ويساراً للتحدي
    let goalDirection = 1;
    let goalPositionX = 90;
    setInterval(() => {
        if(goalPost && shotsCount < 10) {
            goalPositionX += 6 * goalDirection;
            if(goalPositionX > 170 || goalPositionX < 10) goalDirection *= -1;
            goalPost.style.left = goalPositionX + "px";
        }
    }, 40);

    if(shootBall) {
        shootBall.addEventListener('click', () => {
            if(isBallFlying || shotsCount >= 10) return;

            isBallFlying = true;
            shotsCount++;
            document.getElementById('gameShotsCount').innerText = shotsCount;

            // إطلاق الكرة للأعلى نحو خط الهدف
            shootBall.style.bottom = "165px";

            setTimeout(() => {
                // ميكانيكية فحص التطابق الهندسي (هل الكرة ضربت الهدف المتحرك؟)
                const ballLeft = 108;
                if (ballLeft >= goalPositionX && ballLeft <= (goalPositionX + 60)) {
                    gameScore += 1; // إصابة صحيحة تزيد النقاط
                    document.getElementById('liveGameScore').innerText = gameScore;
                }

                // إرجاع الكرة لنقطة البداية للاستعداد للركلة التالية
                setTimeout(() => {
                    shootBall.style.bottom = "20px";
                    isBallFlying = false;

                    // فحص انتهاء الـ 10 محاولات الكلية للعبة
                    if(shotsCount >= 10 && resultAlert) {
                        resultAlert.style.display = "block";
                        resultAlert.innerHTML = `
                            <p>${dictionary[currentLang].gameOverText} <strong>${gameScore}</strong>/10</p>
                            <button class="zamanak-btn" style="margin-top:8px; font-size:11px;" id="btnResetGame">${dictionary[currentLang].playAgainText}</button>
                        `;
                        document.getElementById('btnResetGame').addEventListener('click', () => {
                            gameScore = 0;
                            shotsCount = 0;
                            document.getElementById('liveGameScore').innerText = gameScore;
                            document.getElementById('gameShotsCount').innerText = shotsCount;
                            resultAlert.style.display = "none";
                        });
                    }
                }, 200);
            }, 400);
        });
    }

    initLanguage(currentLang);
});
