// 1. قاموس الترجمة الشامل لجميع عناصر الصفحة الرئيسية والتبويبات
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "اكتشف أسرار تاريخك الفلكي الكوني", mainDesc: "اختر الأداة الزمنية التي ترغب في حسابها بدقة متناهية وبأعلى المعايير الفلكية.",
        birthTitle: "🎂 حاسبة أسرار ميلادك الفلكي", birthDesc: "احسب إجمالي الساعات والدقائق التراكمية التي عشتها وتاريخك بالتقويم الهجري الدقيق وأم القرى.", birthLink: "دخول الأداة والاحتساب الآن ←",
        marriageTitle: "💍 حاسبة ذكرى الزواج السعيدة", marriageDesc: "تتبع أدق التفاصيل التراكمية لرحلتكم المشتركة، واعرف كم يوماً ودقيقة مرت على هذه الخطوة المباركة.", marriageLink: "دخول الأداة والاحتساب الآن ←"
    },
    en: {
        navHome: "Home", navBirth: "Birthday", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "Discover Cosmic Astronomical Secrets", mainDesc: "Choose the time tool you want to calculate with extreme precision and highest standards.",
        birthTitle: "🎂 Astronomical Birthday Calculator", birthDesc: "Calculate total cumulative hours, live minutes, and your accurate Hijri Umm Al-Qura date.", birthLink: "Enter Tool & Calculate Now ←",
        marriageTitle: "💍 Happy Marriage Anniversary", marriageDesc: "Track cumulative details of your journey, and know how many days and minutes have passed.", marriageLink: "Enter Tool & Calculate Now ←"
    },
    tr: {
        navHome: "Anasayfa", navBirth: "Doğum Günü", navMarriage: "Evlilik", navPrivacy: "Gizlilik", navTerms: "Şartlar", navContact: "İletişim",
        mainTitle: "Kozmik Astronomik Sırları Keşfedin", mainDesc: "En yüksek astronomik standartlarla hesaplamak istediğiniz zaman aracını seçin.",
        birthTitle: "🎂 Astronomik Doğum Günü Hesaplayıcı", birthDesc: "Yaşadığınız toplam saat ve dakikayı, doğru Hicri Ümmü El-Kura tarihini hesaplayın.", birthLink: "Araca Girin ve Hesaplayın ←",
        marriageTitle: "💍 Mutlu Evlilik Yıldönümü", marriageDesc: "Yolculuğunuzun birikimli ayrıntılarını takip edin, kaç gün ve dakika geçtiğini öğrenin.", marriageLink: "Araca Girin ve Hesaplayın ←"
    },
    ur: {
        navHome: "ہوم پیج", navBirth: "پیدائش", navMarriage: "شادی", navPrivacy: "رازداری", navTerms: "شرائط", navContact: "رابطہ کریں",
        mainTitle: "اپنے کائناتی فلکیاتی راز دریافت کریں", mainDesc: "انتہائی درستگی اور اعلیٰ فلکیاتی معیارات کے ساتھ حساب لگانے کے لیے ٹول منتخب کریں۔",
        birthTitle: "🎂 فلکیاتی تاریخ پیدائش کیلکولیٹر", birthDesc: "کل گھنٹوں، منٹوں اور اپنے درست ہجری ام القریٰ کیلنڈر کی تاریخ کا حساب لگائیں۔", birthLink: "ٹول میں داخل ہوں اور حساب لگائیں ←",
        marriageTitle: "💍 شادی کی سالگرہ مبارک", marriageDesc: "اپنے مشترکہ سفر کی تفصیلات کو ٹریک کریں، اور جانیں کہ کتنے دن اور منٹ گزر چکے ہیں۔", marriageLink: "ٹول میں داخل ہوں اور حساب لگائیں ←"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("zamanak_lang") || "ar";
    const savedTheme = localStorage.getItem("zamanak_theme") || "dark";
    
    const langSelect = document.getElementById("languageSelect");
    if(langSelect) langSelect.value = savedLang;
    
    changeLanguage(savedLang); 
    applyTheme(savedTheme);

    if(langSelect) {
        langSelect.addEventListener("change", (e) => {
            localStorage.setItem("zamanak_lang", e.target.value);
            changeLanguage(e.target.value);
        });
    }

    const themeBtn = document.getElementById("darkModeToggle");
    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme") || "dark";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            localStorage.setItem("zamanak_theme", newTheme);
            applyTheme(newTheme);
        });
    }
});

function applyTheme(theme) {
    if (theme === "light") {
        document.body.setAttribute("data-theme", "light");
    } else {
        document.body.removeAttribute("data-theme");
    }
}

function changeLanguage(lang) {
    document.documentElement.dir = (lang === "ar" || lang === "ur") ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    updateAdDirection(lang);
    translatePageElements(lang);
}

// دالة الترجمة الفورية واللحظية لجميع النصوص والشروحات بناء على القاموس
function translatePageElements(lang) {
    const dict = translations[lang] || translations["ar"];
    
    // ترجمة أزرار التنقل (الروابط) إذا كانت موجودة بالصفحة
    const elements = {
        'nav-home': dict.navHome, 'nav-birth': dict.navBirth, 'nav-marriage': dict.navMarriage,
        'nav-privacy': dict.navPrivacy, 'nav-terms': dict.navTerms, 'nav-contact': dict.navContact,
        'main-title': dict.mainTitle, 'main-desc': dict.mainDesc,
        'birth-title': dict.birthTitle, 'birth-desc': dict.birthDesc, 'birth-link': dict.birthLink,
        'marriage-title': dict.marriageTitle, 'marriage-desc': dict.marriageDesc, 'marriage-link': dict.marriageLink
    };

    for (let id in elements) {
        const el = document.getElementById(id);
        if (el && elements[id]) {
            el.innerText = elements[id];
        }
    }
}

function updateAdDirection(lang) {
    const adText = document.getElementById("movingAdText");
    if (!adText) return;
    adText.classList.remove("scroll-rtl", "scroll-ltr");

    if (lang === "ar" || lang === "ur") {
        adText.classList.add("scroll-rtl");
        adText.style.left = "0"; adText.style.right = "auto";
        adText.innerText = "مرحباً بكم في منصة زمانك العالمية - حساب تفاصيل الميلاد، ذكريات الزواج، والدقة الفلكية المعتمدة المستوفية لشروط أدسينس!";
    } else {
        adText.classList.add("scroll-ltr");
        adText.style.right = "0"; adText.style.left = "auto";
        adText.innerText = "Welcome to Zamanak Global Platform - Calculate birthday secrets, marriage memories, and certified astronomical accuracy!";
    }
}

// محرك فتح وغلق النوافذ المنبثقة التفاعلية لمنع التداخل والـ تجميد
const monthNames = {
    ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
};

function openPopup(type) {
    const modal = document.getElementById("datePopupModal");
    const title = document.getElementById("popupTitle");
    const gridContainer = document.getElementById("popupGridItems");
    if (!modal || !gridContainer) return;

    gridContainer.innerHTML = "";

    if (type === 'day') {
        title.innerText = "اختر اليوم";
        for (let i = 1; i <= 31; i++) createGridElement(i, i, 'day', modal);
    } else if (type === 'month') {
        title.innerText = "اختر الشهر";
        monthNames.ar.forEach((month, index) => createGridElement(month, index + 1, 'month', modal));
    } else if (type === 'year') {
        title.innerText = "اختر السنة";
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 100; i--) createGridElement(i, i, 'year', modal);
    }
    modal.style.display = "flex";
}

function createGridElement(text, value, type, modal) {
    const gridContainer = document.getElementById("popupGridItems");
    const item = document.createElement("div");
    item.className = "grid-item";
    item.innerText = text;
    item.onclick = () => {
        if (type === 'day') document.getElementById("selectedDayText").innerText = text + " 📅";
        else if (type === 'month') document.getElementById("selectedMonthText").innerText = text + " 🌙";
        else if (type === 'year') document.getElementById("selectedYearText").innerText = text + " ⏳";
        modal.style.display = "none";
    };
    gridContainer.appendChild(item);
}
