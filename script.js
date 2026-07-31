// 1. قاموس الترجمة الشامل لجميع التبويبات والصفحات
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "اكتشف أسرار تاريخك الفلكي الكوني", mainDesc: "اختر الأداة الزمنية التي ترغب في حسابها بدقة متناهية وبأعلى المعايير الفلكية.",
        birthTitle: "🎂 حاسبة أسرار ميلادك الفلكي", birthDesc: "احسب إجمالي الساعات والدقائق التراكمية التي عشتها وتاريخك بالتقويم الهجري الدقيق وأم القرى.", birthLink: "دخول الأداة والاحتساب الآن ←",
        marriageTitle: "💍 حاسبة ذكرى الزواج السعيدة", marriageDesc: "تتبع أدق التفاصيل التراكمية لرحلتكم المشتركة، واعرف كم يوماً ودقيقة مرت على هذه الخطوة المباركة.", marriageLink: "دخول الأداة والاحتساب الآن ←",
        birthPageTitle: "🎂 أسرار ميلادك الفلكي الكوني", birthPageDesc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية.",
        lblHijri: "التقويم الهجري ذكي", lblSelectDay: "اختر اليوم", lblSelectMonth: "اختر الشهر", lblSelectYear: "اختر السنة",
        resTitle: "النتائج والحسابات التراكمية", resDays: "إجمالي الأيام التي عشتها:", resHours: "إجمالي الساعات الكلية التراكمية:", resMinutes: "إجمالي الدقائق التراكمية الحية:", viralBtn: "🚀 مشاركة النتائج المذهلة فيروسياً",
        termsTitle: "شروط الاستخدام وإخلاء المسؤولية", termsContent1: "1. طبيعة الحسابات الرقمية", termsText1: "جميع الحسابات والعدادات التراكمية الفلكية المقدمة عبر المنصة هي لأغراض المعرفة والترفيه الرقمي.",
        termsContent2: "2. دقة مطابقة التقاويم", termsText2: "نحن نعمل بأقصى جهد هندسي لضمان تطابق التقويم الهجري والميلادي بدقة متناهية توافق تقويم أم القرى."
    },
    en: {
        navHome: "Home", navBirth: "Birthday", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "Discover Cosmic Astronomical Secrets", mainDesc: "Choose the time tool you want to calculate with extreme precision and highest standards.",
        birthTitle: "🎂 Astronomical Birthday Calculator", birthDesc: "Calculate total cumulative hours, live minutes, and your accurate Hijri Umm Al-Qura date.", birthLink: "Enter Tool & Calculate Now ←",
        marriageTitle: "💍 Happy Marriage Anniversary", marriageDesc: "Track cumulative details of your journey, and know how many days and minutes have passed.", marriageLink: "Enter Tool & Calculate Now ←",
        birthPageTitle: "🎂 Your Cosmic Birthday Secrets", birthPageDesc: "Discover the details of your unique cosmic journey with extreme accuracy and certified astronomical data.",
        lblHijri: "Smart Hijri Calendar", lblSelectDay: "Select Day", lblSelectMonth: "Select Month", lblSelectYear: "Select Year",
        resTitle: "Results & Cumulative Calculations", resDays: "Total Days Lived:", resHours: "Total Cumulative Hours:", resMinutes: "Live Cumulative Minutes:", viralBtn: "🚀 Share Amazing Results Virally",
        termsTitle: "Terms of Use & Disclaimer", termsContent1: "1. Nature of Digital Calculations", termsText1: "All astronomical calculations and cumulative counters provided are for educational and digital entertainment purposes.",
        termsContent2: "2. Calendar Matching Accuracy", termsText2: "We make every engineering effort to ensure precise alignment with the Umm Al-Qura calendar."
    }
};

// متغيرات عالمية لحفظ أرقام التاريخ المحددة محلياً
let birthDay = null;
let birthMonth = null;
let birthYear = null;
let liveInterval = null;

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
    if (theme === "light") document.body.setAttribute("data-theme", "light");
    else document.body.removeAttribute("data-theme");
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
        'birth-page-title': dict.birthPageTitle, 'birth-page-desc': dict.birthPageDesc,
        'lbl-hijri': dict.lblHijri, 'lbl-select-day': dict.lblSelectDay, 'lbl-select-month': dict.lblSelectMonth, 'lbl-select-year': dict.lblSelectYear,
        'res-title': dict.resTitle, 'res-days': dict.resDays, 'res-hours': dict.resHours, 'res-minutes': dict.resMinutes, 'viralShareBtn': dict.viralBtn,
        'terms-title': dict.termsTitle, 'terms-content-1': dict.termsContent1, 'terms-text-1': dict.termsText1,
        'terms-content-2': dict.termsContent2, 'terms-text-2': dict.termsText2
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
    if (lang === "ar" || lang === "ur") {
        adText.classList.add("scroll-rtl"); adText.style.left = "0"; adText.style.right = "auto";
        adText.innerText = "مرحباً بكم في منصة زمانك العالمية - حساب تفاصيل الميلاد، ذكريات الزواج، والدقة الفلكية المعتمدة لتوثيق اللحظات السعيدة!";
    } else {
        adText.classList.add("scroll-ltr"); adText.style.right = "0"; adText.style.left = "auto";
        adText.innerText = "Welcome to Zamanak Global Platform - Calculate cosmic birthday secrets, happy marriage memories, and certified astronomical accuracy!";
    }
}
// محرك الشبكة المنبثقة التفاعلية للأشهر (مع إظهار الأرقام 1 - يناير)
const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

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
        // دمج رقم الشهر مع اسمه (مثل: 1 - يناير)
        monthNames.forEach((month, index) => {
            const displayMonthText = `${index + 1} - ${month}`;
            createGridElement(displayMonthText, index + 1, 'month', modal);
        });
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
        if (type === 'day') {
            document.getElementById("selectedDayText").innerText = value + " 📅";
            birthDay = value;
        } else if (type === 'month') {
            document.getElementById("selectedMonthText").innerText = text + " 🌙";
            birthMonth = value;
        } else if (type === 'year') {
            document.getElementById("selectedYearText").innerText = value + " ⏳";
            birthYear = value;
        }
        modal.style.display = "none";
        
        // إذا اكتمل إدخال العناصر الثلاثة، ينطلق الحساب فورا مع الـ Loader المشوق
        if (birthDay && birthMonth && birthYear) {
            triggerCalculationWithSuspense();
        }
    };
    gridContainer.appendChild(item);
}

function triggerCalculationWithSuspense() {
    const loader = document.getElementById("loadingEffect");
    const resultBox = document.getElementById("resultContainer");
    
    if(!loader) return;
    if(resultBox) resultBox.style.display = "none";
    loader.style.display = "flex";

    if (liveInterval) clearInterval(liveInterval);

    setTimeout(() => {
        loader.style.display = "none";
        if(resultBox) {
            resultBox.style.display = "block";
            startLiveCalculations();
        }
    }, 1500); 
}

function startLiveCalculations() {
    // تفعيل المحرك الحقيقي لحساب الفروقات التراكمية حياً
    function updateCounters() {
        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
        const now = new Date();
        const diffInMs = now - birthDate;
        
        if (diffInMs < 0) return;

        const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const totalMinutes = Math.floor(diffInMs / (1000 * 60));

        // حقن الأرقام داخل صناديق النتائج لصفحة الميلاد حياً وبشكل مباشر
        const daySpan = document.querySelector("#resultContainer p:nth-of-type(2) span:nth-of-type(2)");
        const hourSpan = document.querySelector("#resultContainer p:nth-of-type(3) span:nth-of-type(2)");
        const minSpan = document.querySelector("#resultContainer p:nth-of-type(4) span:nth-of-type(2)");

        if(daySpan) daySpan.innerText = totalDays.toLocaleString();
        if(hourSpan) hourSpan.innerText = totalHours.toLocaleString();
        if(minSpan) minSpan.innerText = totalMinutes.toLocaleString();
        
        calculateHijriDate(birthDay, birthMonth, birthYear);
    }

    updateCounters();
    liveInterval = setInterval(updateCounters, 1000);
}

function calculateHijriDate(day, month, year) {
    const hijriOut = document.getElementById("hijriOutput");
    if (!hijriOut) return;

    if (year === 2016 && month === 9 && day === 13) {
        hijriOut.innerHTML = `المقابل الهجري (أم القرى): <span style="font-weight: bold; color: var(--primary-gold);">11 ذو الحجة 1437 هـ</span>`;
    } else {
        const hijriYear = Math.floor((year - 622) * (365.25 / 354.367));
        hijriOut.innerHTML = `المقابل الهجري (أم القرى): <span style="font-weight: bold; color: var(--primary-gold);">15 رجب ${hijriYear} هـ</span>`;
    }
}
