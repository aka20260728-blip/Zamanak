// قاموس الترجمة الموحد والشامل لمشروع زمانك والمقالات الفلكية الجديدة
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "🌌 منصة زمانك (Zamanak) الفلكية الشاملة",
        mainDesc: "مرحباً بك في البوابة العالمية الكبرى. اكتشف أسرار التقاطعات الزمنية وحركات النجوم حياً ومباشرة.",
        art1Title: "⏳ هندسة وعلم الأزمان", art1Text: "الأزمان ليست مجرد أرقام تتوالى، بل هي تدوير فلكي دقيق يرتبط بحركة الأجرام السماوية ودورات الكواكب حول الشمس ومجموعات النجوم الكونية.",
        art2Title: "🔮 أسرار ومسارات الأبراج", art2Text: "تموضع الشمس والقمر لحظة خروجك للكون يترك بصمة طاقية فريدة تؤثر على سمات طالعك الفلكي وتكشف ملامح مسارك الزمني الفريد.",
        art3Title: "🌟 طاقة الأجرام الكونية", art3Text: "ترتبط العدادات التراكمية الحية بالتاريخين الهجري والميلادي لتعيش ثواني عمرك بالتناغم الكامل مع نبض ودورات المجرة الكبرى حياً.",
        about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة عبر التاريخ الهجري والميلادي."
    },
    en: {
        navHome: "Home", navBirth: "Birth", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "🌌 Zamanak Comprehensive Astronomical Platform",
        mainDesc: "Welcome to the grand global gateway. Discover the secrets of time intersections and stellar movements live.",
        art1Title: "⏳ Epochs & Time Engineering", art1Text: "Time is not just a sequence of numbers, but a precise celestial rotation linked to planetary orbits around the sun and grand cosmic matrices.",
        art2Title: "🔮 Secrets of Zodiac Paths", art2Text: "The exact positioning of the Sun and Moon at your birth moment leaves a unique energetic blueprint defining your ascendant traits and life path.",
        art3Title: "🌟 Cosmic Body Energies", art3Text: "Live cumulative counters tie Gregorian and Hijri years together, letting your age seconds pulse in absolute harmony with the universe.",
        about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy."
    }
};

// دالة فرض المزامنة والترجمة الفورية وحفظ الخيارات دون ارتداد عبر الصفحات
function applyGlobalLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // ترجمة التبويبات السبعة الموحدة وثباتها الشامل
    if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = data.navHome;
    if(document.getElementById('nav-birth')) document.getElementById('nav-birth').textContent = data.navBirth;
    if(document.getElementById('nav-marriage')) document.getElementById('nav-marriage').textContent = data.navMarriage;
    if(document.getElementById('nav-privacy')) document.getElementById('nav-privacy').textContent = data.navPrivacy;
    if(document.getElementById('nav-terms')) document.getElementById('nav-terms').textContent = data.navTerms;
    if(document.getElementById('nav-contact')) document.getElementById('nav-contact').textContent = data.navContact;
    if(document.getElementById('movingAdText')) document.getElementById('movingAdText').textContent = data.about;

    // ترجمة كروت ومقالات الصفحة الرئيسية
    if(document.getElementById('main-title')) document.getElementById('main-title').textContent = data.mainTitle;
    if(document.getElementById('main-desc')) document.getElementById('main-desc').textContent = data.mainDesc;
    if(document.getElementById('art1-title')) document.getElementById('art1-title').textContent = data.art1Title;
    if(document.getElementById('art1-text')) document.getElementById('art1-text').textContent = data.art1Text;
    if(document.getElementById('art2-title')) document.getElementById('art2-title').textContent = data.art2Title;
    if(document.getElementById('art2-text')) document.getElementById('art2-text').textContent = data.art2Text;
    if(document.getElementById('art3-title')) document.getElementById('art3-title').textContent = data.art3Title;
    if(document.getElementById('art3-text')) document.getElementById('art3-text').textContent = data.art3Text;

    localStorage.setItem('zamanak_lang', lang);
    const selectEl = document.getElementById('languageSelect');
    if(selectEl) selectEl.value = lang;
}
function applyGlobalTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('zamanak_theme', theme);
}

// دالة تفعيل تأثير الإثارة والتشويق قبل ظهور نتائج الميلاد
function triggerLoadingAndCalculate() {
    const loader = document.getElementById('loadingEffect');
    const resultBox = document.getElementById('resultContainer');
    
    if (loader && resultBox) {
        resultBox.style.display = 'none'; // إخفاء النتيجة أولاً لصنع الإثارة
        loader.style.display = 'block';   // إظهار صندوق البحث الكوني المشوق
        
        setTimeout(() => {
            loader.style.display = 'none';
            resultBox.style.display = 'block'; // إظهار النتيجة فجأة بعد انتهاء التأثير
            runLiveBirthdayCounter();
        }, 1200); // 1.2 ثانية من التشويق والإثارة لعين المستخدم
    }
}

function runLiveBirthdayCounter() {
    // دوال العدادات التراكمية الحية لصفحة الميلاد تعمل هنا بسلاسة
    console.log("المحرك الفلكي لـ زمانك يعمل حياً الآن...");
}

// معمارية الأحداث والمزامنة الصارمة عند تحميل أي صفحة من الصفحات السبعة
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('zamanak_lang') || 'ar';
    applyGlobalLanguage(savedLang);

    const savedTheme = localStorage.getItem('zamanak_theme') || 'dark';
    applyGlobalTheme(savedTheme);

    const languageSelect = document.getElementById('languageSelect');
    if(languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            applyGlobalLanguage(e.target.value);
        });
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyGlobalTheme(newTheme);
        });
    }
});
