// قاموس الترجمة الفورية الموسع والكامل لجميع الصفحات ومحتوى الأبراج الجديد
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "🌌 مشروع زمانك الفلكي الكوني العالمي",
        mainDesc: "بوابتك الكبرى الموثوقة لاستقراء حركات الأجرام، الأزمان، والروابط الطالعية لعمرك حياً ومباشرة.",
        cardTitle: "🔮 أسرار التقاطعات الزمنية والأبراج الفلكية",
        cardText: "منذ فجر التاريخ، ارتبط الإنسان بحركات النجوم ومسارات الكواكب السيّارة في قبة السماء. إن لحظة خروجك إلى هذا الكون ليست مجرد رقم عابر، بل هي بصمة طاقية فريدة تتزامن مع تموضع فلكي دقيق للشمس والقمر والمجموعات النجمية الاثني عشر. في زمانك العالمي، نقوم بربط العدادات التراكمية الحية بالتاريخين الهجري والميلادي لنكشف لك كيف تتدفق ثواني عمرك بالتناغم مع الدورات الكونيه الكبرى، مما يمنحك رؤية أعمق لطالعك، صفات برجك الفلكي، ومسارك الزمني الفريد.",
        astro1Title: "🌟 دورة الأبراج", astro1Text: "تحليل تموضع الكواكب ومساراتها لحظة ميلادك لاستخراج طاقتك الطالعية.",
        astro2Title: "⏳ تدوير الأزمان", astro2Text: "حساب تراكمي حي يحول السنين الفلكية إلى ثوانٍ ودقائق مباشرة بلا تجمد.",
        about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة عبر التاريخ الهجري والميلادي.",
        birthTitle: "🎂 أسرار ميلادك الفلكي الكوني", birthDesc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية."
    },
    en: {
        navHome: "Home", navBirth: "Birth", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "🌌 Zamanak Global Astronomical Cosmic Project",
        mainDesc: "Your trusted gateway to exploring celestial movements, epochs, and live alignment of your age.",
        cardTitle: "🔮 Secrets of Time Intersections & Cosmic Zodiacs",
        cardText: "Since the dawn of civilization, humanity has been profoundly connected to the movements of stars and planetary tracks across the cosmic dome. The exact moment of your arrival into this universe is not merely a passing date; it is a unique energetic blueprint coinciding with precise astronomical positions of the Sun, Moon, and the twelve zodiac constellations. At Zamanak Global, we bind live cumulative counters with Hijri and Gregorian systems to show how your life seconds flow in absolute harmony with grand celestial cycles, giving you a profound insight into your zodiac traits, ascendants, and cosmic path.",
        astro1Title: "🌟 Zodiac Cycles", astro1Text: "Analyzing planetary alignment at your birth moment to retrieve your ascendant energy.",
        astro2Title: "⏳ Epoch Rotations", astro2Text: "Live cumulative calculation transforming astronomical years into seamless seconds.",
        about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy.",
        birthTitle: "🎂 Cosmic Astronomical Birth Secrets", birthDesc: "Discover the details of your unique cosmic journey with ultimate precision and highest standards."
    },
    tr: {
        navHome: "Ana Sayfa", navBirth: "Doğum Günü", navMarriage: "Evlilik", navPrivacy: "Gizlilik", navTerms: "Şartlar", navContact: "İletişim",
        mainTitle: "🌌 Zamanak Küresel Astronomik Kozmik Projesi",
        mainDesc: "Gök cisimlerinin hareketlerini, çağları ve yaşınızın canlı hizalanmasını keşfetmek için güvenilir kapınız.",
        cardTitle: "🔮 Zaman Kesişimleri ve Kozmik Burçların Sırları",
        cardText: "Medeniyetin şafağından beri insanlık, yıldızların hareketlerine ve kozmik kubbedeki gezegen yollarına derinden bağlı olmuştur. Bu evrene gelişinizin tam anı sadece geçici bir tarih değil; Güneş, Ay ve on iki burç takımyıldızının kesin astronomik konumlarıyla örtüşen benzersiz bir enerjik plandır. Zamanak Global'de, yaşam saniyelerinizin büyük göksel döngülerle mutlak uyum içinde nasıl aktığını göstermek için canlı kümülatif sayaçları Hicri ve Miladi sistemlerle bağlarız, burç özellikleriniz, yükselenleriniz ve kozmik yolunuz hakkında derin bir anlayış sunarız.",
        astro1Title: "🌟 Burç Döngüleri", astro1Text: "Yükselen enerjinizi almak için doğum anınızdaki gezegen hizalamasını analiz etme.",
        astro2Title: "⏳ Çağ Dönüşümleri", astro2Text: "Astronomik yılları kesintisiz saniyelere dönüştüren canlı kümülatif hesaplama.",
        about: "Zamanak Küresel Astronomik Projesi - Yaş detaylarınızı ve canlı anlarınızı üstün doğrulukla hesaplayın.",
        birthTitle: "🎂 Kozmik Astronomik Doğum Sırları", birthDesc: "Eşsiz kozmik yolculuğunuzun detaylarını üstün doğruluk ve en yüksek astronomik standartlarla keşfedin."
    }
};

// دالة فرض المزامنة والترجمة الفورية وحفظ الخيارات سحابياً ومحلياً
function applyGlobalLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    // المزامنة الهيكلية للـ DOM والاتجاهات المعكوسة
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // ترجمة التبويبات السبعة الموحدة في كل الصفحات
    if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = data.navHome;
    if(document.getElementById('nav-birth')) document.getElementById('nav-birth').textContent = data.navBirth;
    if(document.getElementById('nav-marriage')) document.getElementById('nav-marriage').textContent = data.navMarriage;
    if(document.getElementById('nav-privacy')) document.getElementById('nav-privacy').textContent = data.navPrivacy;
    if(document.getElementById('nav-terms')) document.getElementById('nav-terms').textContent = data.navTerms;
    if(document.getElementById('nav-contact')) document.getElementById('nav-contact').textContent = data.navContact;
    if(document.getElementById('movingAdText')) document.getElementById('movingAdText').textContent = data.about;

    // ترجمة نصوص الصفحة الرئيسية (في حال وجود العناصر)
    if(document.getElementById('main-title')) document.getElementById('main-title').textContent = data.mainTitle;
    if(document.getElementById('main-desc')) document.getElementById('main-desc').textContent = data.mainDesc;
    if(document.getElementById('card-title')) document.getElementById('card-title').textContent = data.cardTitle;
    if(document.getElementById('card-text')) document.getElementById('card-text').textContent = data.cardText;
    if(document.getElementById('astro1-title')) document.getElementById('astro1-title').textContent = data.astro1Title;
    if(document.getElementById('astro1-text')) document.getElementById('astro1-text').textContent = data.astro1Text;
    if(document.getElementById('astro2-title')) document.getElementById('astro2-title').textContent = data.astro2Title;
    if(document.getElementById('astro2-text')) document.getElementById('astro2-text').textContent = data.astro2Text;

    // ترجمة نصوص صفحة الميلاد (في حال وجود العناصر)
    if(document.getElementById('birth-page-title')) document.getElementById('birth-page-title').textContent = data.birthTitle;
    if(document.getElementById('birth-page-desc')) document.getElementById('birth-page-desc').textContent = data.birthDesc;

    localStorage.setItem('zamanak_lang', lang);
    const selectEl = document.getElementById('languageSelect');
    if(selectEl) selectEl.value = lang;
}

// التحكم الصارم وتذكر مظهر الوضع الداكن/الفاتح عبر الصفحات
function applyGlobalTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('zamanak_theme', theme);
}

// دالة تهيئة الأحداث والمزامنة التلقائية الفورية عند تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
    // 1. استرجاع ومزامنة اللغة المحددة بدون فقدانها
    const savedLang = localStorage.getItem('zamanak_lang') || 'ar';
    applyGlobalLanguage(savedLang);

    // 2. استرجاع ومزامنة الوضع الداكن
    const savedTheme = localStorage.getItem('zamanak_theme') || 'dark';
    applyGlobalTheme(savedTheme);

    // ربط مستمع التغيير لصندوق اللغات
    const languageSelect = document.getElementById('languageSelect');
    if(languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            applyGlobalLanguage(e.target.value);
        });
    }

    // ربط مستمع الضغط لزر الوضع الداكن
    const darkModeToggle = document.getElementById('darkModeToggle');
    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyGlobalTheme(newTheme);
        });
    }
    
    // تشغيل الحسابات التلقائية لصفحة الميلاد إذا تواجدت
    if(typeof triggerLoadingAndCalculate === 'function') {
        triggerLoadingAndCalculate();
    }
});
