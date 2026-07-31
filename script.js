const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "اكتشف أسرار تاريخك الفلكي الكوني", mainDesc: "اختر الأداة الزمنية التي ترغب في حسابها بدقة متناهية وبأعلى المعايير الفلكية.",
        birthTitle: "🎂 حاسبة أسرار ميلادك الفلكي", birthDesc: "احسب إجمالي الساعات والدقائق التراكمية التي عشتها وتاريخك بالتقويم الهجري الدقيق وأم القرى.", birthLink: "دخول الأداة والاحتساب الآن ←",
        marriageTitle: "💍 حاسبة ذكرى الزواج السعيدة", marriageDesc: "تتبع أدق التفاصيل التراكمية لرحلتكم المشتركة، واعرف كم يوماً ودقيقة مرت على هذه الخطوة المباركة.", marriageLink: "دخول الأداة والاحتساب الآن ←",
        // ترجمات صفحة الميلاد الجديدة
        birthPageTitle: "🎂 أسرار ميلادك الفلكي الكوني", birthPageDesc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية.",
        lblHijri: "التقويم الهجري ذكي", lblSelectDay: "اختر اليوم", lblSelectMonth: "اختر الشهر", lblSelectYear: "اختر السنة",
        resTitle: "النتائج والحسابات التراكمية", resDays: "إجمالي الأيام التي عشتها:", resHours: "إجمالي الساعات الكلية التراكمية:", resMinutes: "إجمالي الدقائق التراكمية الحية:", viralBtn: "🚀 مشاركة النتائج المذهلة فيروسياً"
    },
    en: {
        navHome: "Home", navBirth: "Birthday", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "Discover Cosmic Astronomical Secrets", mainDesc: "Choose the time tool you want to calculate with extreme precision and highest standards.",
        birthTitle: "🎂 Astronomical Birthday Calculator", birthDesc: "Calculate total cumulative hours, live minutes, and your accurate Hijri Umm Al-Qura date.", birthLink: "Enter Tool & Calculate Now ←",
        marriageTitle: "💍 Happy Marriage Anniversary", marriageDesc: "Track cumulative details of your journey, and know how many days and minutes have passed.", marriageLink: "Enter Tool & Calculate Now ←",
        // ترجمات صفحة الميلاد بالإنجليزية
        birthPageTitle: "🎂 Your Cosmic Birthday Secrets", birthPageDesc: "Discover the details of your unique cosmic journey with extreme accuracy and certified astronomical data.",
        lblHijri: "Smart Hijri Calendar", lblSelectDay: "Select Day", lblSelectMonth: "Select Month", lblSelectYear: "Select Year",
        resTitle: "Results & Cumulative Calculations", resDays: "Total Days Lived:", resHours: "Total Cumulative Hours:", resMinutes: "Live Cumulative Minutes:", viralBtn: "🚀 Share Amazing Results Virally"
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

function translatePageElements(lang) {
    const dict = translations[lang] || translations["ar"];
    
    const elements = {
        'nav-home': dict.navHome, 'nav-birth': dict.navBirth, 'nav-marriage': dict.navMarriage,
        'nav-privacy': dict.navPrivacy, 'nav-terms': dict.navTerms, 'nav-contact': dict.navContact,
        'main-title': dict.mainTitle, 'main-desc': dict.mainDesc,
        'birth-title': dict.birthTitle, 'birth-desc': dict.birthDesc, 'birth-link': dict.birthLink,
        'marriage-title': dict.marriageTitle, 'marriage-desc': dict.marriageDesc, 'marriage-link': dict.marriageLink,
        // ربط معرفات صفحة الميلاد الجديدة
        'birth-page-title': dict.birthPageTitle, 'birth-page-desc': dict.birthPageDesc,
        'lbl-hijri': dict.lblHijri, 'lbl-select-day': dict.lblSelectDay, 'lbl-select-month': dict.lblSelectMonth, 'lbl-select-year': dict.lblSelectYear,
        'res-title': dict.resTitle, 'res-days': dict.resDays, 'res-hours': dict.resHours, 'res-minutes': dict.resMinutes, 'viralShareBtn': dict.viralBtn
    };

    for (let id in elements) {
        const el = document.getElementById(id);
        if (el && elements[id]) el.innerText = elements[id];
    }
}

function updateAdDirection(lang) {
    const adText = document.getElementById("movingAdText");
    if (!adText) return;
    adText.classList.remove("scroll-rtl", "scroll-ltr");

    // تم حذف كلمة أدسينس وأصبحت العبارة احترافية تسويقية خالصة
    if (lang === "ar" || lang === "ur") {
        adText.classList.add("scroll-rtl");
        adText.style.left = "0"; adText.style.right = "auto";
        adText.innerText = "مرحباً بكم في منصة زمانك العالمية - حساب تفاصيل الميلاد، ذكريات الزواج، والدقة الفلكية المعتمدة لتوثيق اللحظات السعيدة!";
    } else {
        adText.classList.add("scroll-ltr");
        adText.style.right = "0"; adText.style.left = "auto";
        adText.innerText = "Welcome to Zamanak Global Platform - Calculate cosmic birthday secrets, happy marriage memories, and certified astronomical accuracy!";
    }
}

// محرك الشبكة المنبثقة الذكية
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
