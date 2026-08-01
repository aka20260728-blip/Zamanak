// ==========================================================================
// 1. قاموس محرك الترجمة الفورية المتوافق مع معرفاتك القديمة
// ==========================================================================
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        title: "🎂 أسرار ميلادك الفلكي الكوني",
        desc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية.",
        lblHijri: "التقويم الهجري ذكي", lblDay: "اختر اليوم", lblMonth: "اختر الشهر", lblYear: "اختر السنة",
        resTitle: "النتائج والحسابات التراكمية", resDays: "إجمالي الأيام التي عشتها:", resHours: "إجمالي الساعات الكلية التراكمية:", resMinutes: "إجمالي الدقائق التراكمية الحية:",
        shareBtn: "🚀 مشاركة النتائج المذهلة فيروسياً", loading: "جاري الاتصال بالمحرك الفلكي لـ زمانك...",
        about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة عبر التاريخ الهجري والميلادي."
    },
    en: {
        navHome: "Home", navBirth: "Birth", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        title: "🎂 Cosmic Astronomical Birth Secrets",
        desc: "Discover the details of your unique cosmic journey with ultimate precision and highest standards.",
        lblHijri: "Smart Hijri Calendar", lblDay: "Select Day", lblMonth: "Select Month", lblYear: "Select Year",
        resTitle: "Results & Cumulative Calculations", resDays: "Total days lived:", resHours: "Total cumulative hours:", resMinutes: "Total live cumulative minutes:",
        shareBtn: "🚀 Share Amazing Results Virally", loading: "Connecting to Zamanak Astronomical Engine...",
        about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy."
    },
    tr: {
        navHome: "Ana Sayfa", navBirth: "Doğum Günü", navMarriage: "Evlilik", navPrivacy: "Gizlilik", navTerms: "Şartlar", navContact: "İletişim",
        title: "🎂 Kozmik Astronomik Doğum Sırları",
        desc: "Eşsiz kozmik yolculuğunuzun detaylarını üstün doğruluk ve en yüksek astronomik standartlarla keşfedin.",
        lblHijri: "Akıllı Hicri Takvim", lblDay: "Gün Seç", lblMonth: "Ay Seç", lblYear: "Yıl Seç",
        resTitle: "Sonuçlar ve Kümülatif Hesaplamalar", resDays: "Yaşanılan toplam gün:", resHours: "Toplam kümülatif saat:", resMinutes: "Toplam canlı kümülatif dakika:",
        shareBtn: "🚀 Harika Sonuçları Viral Olarak Paylaş", loading: "Zamanak Astronomi Motoruna Bağlanıyor...",
        about: "Zamanak Küresel Astronomik Projesi - Yaş detaylarınızı ve canlı anlarınızı üstün doğrulukla hesaplayın."
    },
    ur: {
        navHome: "ہوم", navBirth: "پیدائش", navMarriage: "شادی", navPrivacy: "رازداری", navTerms: "شرائط", navContact: "رابطہ کریں",
        title: "🎂 آپ کی کائناتی پیدائش کے فلکیاتی اسرار",
        desc: "انتہائی درستگی اور اعلیٰ ترین فلکیاتی معیارات کے ساتھ اپنے منفرد کائناتی سفر کی تفصیلات دریافت کریں۔",
        lblHijri: "سمارٹ ہجری کیلنڈر", lblDay: "دن منتخب کریں", lblMonth: "مہینہ منتخب کریں", lblYear: "سال منتخب کریں۔",
        resTitle: "نتائج اور مجموعی حسابات", resDays: "کل گذارے ہوئے دن:", resHours: "کل مجموعی گھنٹے:", resMinutes: "کل لائیو مجموعی منٹ:",
        shareBtn: "🚀 حیرت انگیز نتائج وائرل شیئر کریں", loading: "زمانک فلکیاتی انجن سے منسلک ہو رہا ہے...",
        about: "زمانک عالمی فلکیاتی پروجیکٹ - ہجری اور عیسوی تاریخوں کے ذریعے اپنی عمر کی تفصیلات اور لائیو لمحات کا انتہائی درستگی کے ساتھ حساب لگائیں . "
    }
};

// دالة تطبيق الترجمة الفورية المباشرة
function applyLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

    document.getElementById('nav-home').textContent = data.navHome;
    document.getElementById('nav-birth').textContent = data.navBirth;
    document.getElementById('nav-marriage').textContent = data.navMarriage;
    document.getElementById('nav-privacy').textContent = data.navPrivacy;
    document.getElementById('nav-terms').textContent = data.navTerms;
    document.getElementById('nav-contact').textContent = data.navContact;
    
    document.getElementById('birth-page-title').textContent = data.title;
    document.getElementById('birth-page-desc').textContent = data.desc;
    document.getElementById('lbl-hijri').textContent = data.lblHijri;
    document.getElementById('lbl-select-day').textContent = data.lblDay;
    document.getElementById('lbl-select-month').textContent = data.lblMonth;
    document.getElementById('lbl-select-year').textContent = data.lblYear;
    
    document.getElementById('res-title').textContent = data.resTitle;
    document.getElementById('res-days').textContent = data.resDays;
    document.getElementById('res-hours').textContent = data.resHours;
    document.getElementById('res-minutes').textContent = data.resMinutes;
    document.getElementById('viralShareBtn').textContent = data.shareBtn;
    document.getElementById('loadingText').textContent = data.loading;
    document.getElementById('movingAdText').textContent = data.about;

    localStorage.setItem('zamanak_lang', lang);
}

// تفعيل ميكانيكية زر تبديل الوضع الداكن/الفاتح
const darkModeToggle = document.getElementById('darkModeToggle');
if(darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('zamanak_theme', newTheme);
    });
}
