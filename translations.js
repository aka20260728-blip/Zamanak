// --- مستودع البيانات الفلكية الموحد لمنصة زمانك ---
const zamanakDictionary = {
    ar: {
        topBar: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظتك بدقة عالية",
        mainTitle: "منصة زمانك (Zamanak) الفلكية الشاملة",
        welcome: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعة لعمرك حياً ومباشرة.",
        card1Title: "📜 هندسة وعلم الأزمان الكونية", card1Desc: "زمانك يعتمد تدوير فلكي دقيق يرتبط بحركة الأجرام الكونية السابحة.",
        card2Title: "🔮 أسرار ومسارات الأبراج", card2Desc: "تموضع الشمس والقمر يترك بصمة طاقية فريدة على ملامح طالعك الفلكي.",
        card3Title: "🌌 طاقة الأجرام وحساب التراكم", card3Desc: "مزامنة التاريخين الهجري والميلادي لتعيش تفاصيل ثواني عمرك بالتناغم الكامل.",
        infoCard1Title: "🎯 دليل الأبراج وطوالع الفلك", infoCard1Desc: "تنقسم الأبراج في محرك زمانك إلى أربع مجموعات تخصصية: نارية، ترابية، هوائية، ومائية حية.",
        infoCard2Title: "🕌 الأشهر الحُرُم ومكانتها", infoCard2Desc: "الأشهر الحُرُم هي أربعة أشهر عظمى في التقويم الهجري الميكانيكي (ذو القعدة، ذو الحجة، محرم، ورجب).",
        infoCard3Title: "🕋 المناسبات الدينية الكبرى", infoCard3Desc: "تتبع دقيق لمواعيد بزوغ أهلة الهجرة السنوية وعيد الفطر وعيد الأضحى وموسم الحج المعظم حياً.",
        infoCard4Title: "📿 فضائل الاستغفار وجلب الأرزاق", infoCard4Desc: "الاستغفار يمثل الرابط الروحي الأكبر لتطهير السجلات وتحويل خطوط الزمن الجافة إلى تدفقات وفيرة وغيث مدرار.",
        art1Title: "🐋 برج الحوت: عمق طاقة المياه والمجرات السحيقة", art1Text: "يُمثل برج الحوت نهاية الدورة الفلكية الكبرى، وهو مستودع الطاقات الروحية. مواليد هذا البرج يمتلكون حدساً فلكياً فائقا يربطهم بنبض المجرة العميقة.",
        art2Title: "🪐 تأثير زحل الميكانيكي على مسارات الأعمار", art2Text: "يعتبر زحل هو المهندس الهيكلي للزمن. عندما يتقاطع زحل مع طالعك الميكانيكي، فإنه يفرض فترة من إعادة التقييم البصري والروحي لخطوات خطك الزمني حياً وبكل روقان.",
        art3Title: "🌞 بوابات الشموس والطاقة النجمية حياً", art3Text: "الشموس هي العقل النابض للمنظومة الفلكية. كل تدفق طاقي يخرج من البوابات النجمية يعيد صياغة العدادات الحية لأعمارنا، ويتحكم بمخرجات العرض المركزي.",
        wingRightTitle: "🎮 لعبة تسديد الطاقة الكونية", clickText: "انقر ركلة قوية! إذا أصبت الهدف الوردي تفوز، وإذا أخطأته تطير الكرة خارج الميدان وتعود!",
        scoreText: "الأهداف: ", wingLeftTitle: "🧠 مسابقة زمانك (10 أسئلة)", quizFinished: "🎉 انتهت المسابقة! نتيجتك النهائية هي: ", restartQuiz: "إعادة المحاولة 🔄",
        gameOverText: "🎮 انتهت المحاولات! الأهداف المسجلة: ", playAgainText: "العب مجدداً ⚽"
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
        gameOverText: "🎮 Game Over! Your final goals: ", playAgainText: "Play Again ⚽"
    }
};

const zamanakQuizQuestions = {
    ar: [
        { q: "ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", o: ["الزهرة", "المريخ", "المشتري"], a: 0 },
        { q: "كم يبلغ عدد الأبراج الفلكية الرئيسية؟", o: ["10 أبراج", "12 برجاً", "14 برجاً"], a: 1 },
        { q: "ما هو الجرم المسؤول عن ظاهرة المد والجزر؟", o: ["الشمس", "النيازك", "القمر"], a: 2 },
        { q: "أي كوكب يعرف بالكوكب الأحمر؟", o: ["عطارد", "المريخ", "نبتون"], a: 1 },
        { q: "ما هو أكبر كوكب في المجموعة الشمسية؟", o: ["الأرض", "زحل", "المشتري"], a: 2 },
        { q: "كم تستغرق الأرض لتكمل دورة كاملة حول الشمس؟", o: ["365 يوماً", "24 ساعة", "30 يوماً"], a: 0 },
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
