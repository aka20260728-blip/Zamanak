document.addEventListener("DOMContentLoaded", () => {
    // 1. استدعاء ومزامنة الإعدادات المحفوظة فور تحميل الصفحة
    const savedLang = localStorage.getItem("zamanak_lang") || "ar";
    const savedTheme = localStorage.getItem("zamanak_theme") || "light";
    
    // تطبيق اللغة والوضع المختار على عناصر التحكم
    const langSelect = document.getElementById("languageSelect");
    if(langSelect) langSelect.value = savedLang;
    
    changeLanguage(savedLang); 
    applyTheme(savedTheme);

    // 2. ربط الأحداث لعناصر شريط التنقل
    if(langSelect) {
        langSelect.addEventListener("change", (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem("zamanak_lang", selectedLang);
            changeLanguage(selectedLang);
        });
    }

    const themeBtn = document.getElementById("darkModeToggle");
    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme") || "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            localStorage.setItem("zamanak_theme", newTheme);
            applyTheme(newTheme);
        });
    }
});

// دالة تطبيق الوضع الداكن والفاتح
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.removeAttribute("data-theme");
    }
}

// دالة تغيير اللغة وتحديث اتجاه مستطيل الإعلان
function changeLanguage(lang) {
    // تغيير اتجاه الصفحة العام حسب اللغة
    if (lang === "ar" || lang === "ur") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = lang;
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = lang;
    }

    // استدعاء دالة تحديث مستطيل الإعلان ليتماشى مع اللغة المحددة
    updateAdDirection(lang);
    
    // [ملاحظة هندسية]: هنا يمكنك إضافة أكواد ترجمة باقي عناصر صفحاتك بناءً على المتغير (lang)
}

// دالة تحديث اتجاه الإعلان ونصوصه التسويقية الذكية
function updateAdDirection(lang) {
    const adText = document.getElementById("movingAdText");
    if (!adText) return;

    // إزالة كلاسات الحركة القديمة لمنع التعليق
    adText.classList.remove("scroll-rtl", "scroll-ltr");

    if (lang === "ar" || lang === "ur") {
        adText.classList.add("scroll-rtl");
        adText.style.right = "100%"; // نقطة البداية لليمين
        adText.innerText = "مرحباً بكم في منصة زمانك العالمية - حساب تفاصيل الميلاد، ذكريات الزواج، والدقة الفلكية المعتمدة!";
    } else {
        adText.classList.add("scroll-ltr");
        adText.style.left = "100%"; // نقطة البداية لليسار
        adText.innerText = "Welcome to Zamanak Global Platform - Calculate birthday secrets, marriage memories, and certified astronomical accuracy!";
    }
}

// محرك الإثارة والتشويق (يُستدعى عند حساب نتائج الميلاد أو الزواج)
function triggerCalculationWithSuspense(lang, callbackSuccess) {
    const loader = document.getElementById("loadingEffect");
    const resultBox = document.getElementById("resultContainer");
    const textNode = document.getElementById("loadingText");
    
    if(!loader) return;

    const messages = {
        ar: ["جاري قراءة الأسرار الكونية...", "جاري مطابقة تقويم أم القرى الدقيق...", "تحليل العدادات التراكمية حياً..."],
        en: ["Reading cosmic secrets...", "Matching precise astronomical data...", "Calculating live counters..."],
        tr: ["Kozmik sırlar okunuyor...", "Astronomik veriler eşleştiriliyor...", "Canlı sayaçlar hesaplanıyor..."],
        ur: ["کائناتی راز پڑھے جا رہے ہیں...", "فلکیاتی ڈیٹا کا موازنہ کیا جا رہا ہے...", "براہ راست کاؤنٹرز کا حساب لگایا جا رہا ہے..."]
    };

    const currentMessages = messages[lang] || messages["ar"];
    textNode.innerText = currentMessages[Math.floor(Math.random() * currentMessages.length)];

    if(resultBox) resultBox.style.display = "none";
    loader.style.display = "flex";

    // تأثير الانتظار المشوق لمدة 1.5 ثانية
    setTimeout(() => {
        loader.style.display = "none";
        if(resultBox) {
            resultBox.style.display = "block";
            resultBox.classList.add("fade-in-effect");
        }
        // تشغيل الحسابات الحقيقية وعرض الأرقام بعد انتهاء الوميض
        if(callbackSuccess) callbackSuccess();
    }, 1500); 
}

// مصفوفة أسماء الأشهر للغات المختلفة لتسهيل البناء الذكي
const monthNames = {
    ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

// الدالة الرئيسية لفتح النافذة المنبثقة وبناء الشبكة (Grid) حسب النوع المعطى
function openPopup(type) {
    const modal = document.getElementById("datePopupModal");
    const title = document.getElementById("popupTitle");
    const gridContainer = document.getElementById("popupGridItems");
    const currentLang = localStorage.getItem("zamanak_lang") || "ar";

    if (!modal || !gridContainer) return;

    // تصفير المحتوى القديم للشبكة قبل البناء الجديد
    gridContainer.innerHTML = "";

    if (type === 'day') {
        title.innerText = currentLang === 'ar' ? "اختر اليوم" : "Select Day";
        // بناء أيام الشهر من 1 إلى 31 في مربعات متناسقة
        for (let i = 1; i <= 31; i++) {
            createGridElement(i, i, 'day', modal);
        }
    } 
    else if (type === 'month') {
        title.innerText = currentLang === 'ar' ? "اختر الشهر" : "Select Month";
        // بناء أشهر السنة الـ 12
        const months = monthNames[currentLang] || monthNames['ar'];
        months.forEach((month, index) => {
            createGridElement(month, index + 1, 'month', modal);
        });
    } 
    else if (type === 'year') {
        title.innerText = currentLang === 'ar' ? "اختر السنة" : "Select Year";
        // بناء السنوات ديناميكياً من السنة الحالية نزولاً لـ 100 سنة مضت
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 100; i--) {
            createGridElement(i, i, 'year', modal);
        }
    }

    // إظهار النافذة المنبثقة بأسلوب مرن موسط في الشاشة
    modal.style.display = "flex";
}

// دالة فرعية لصناعة مربعات الشبكة وتحديد حدث الضغط عليها
function createGridElement(text, value, type, modalElement) {
    const gridContainer = document.getElementById("popupGridItems");
    const item = document.createElement("div");
    item.className = "grid-item";
    item.innerText = text;

    item.onclick = () => {
        if (type === 'day') {
            document.getElementById("selectedDayText").innerText = text + " 📅";
            localStorage.setItem("selected_day", value);
        } else if (type === 'month') {
            document.getElementById("selectedMonthText").innerText = text + " 🌙";
            localStorage.setItem("selected_month", value);
        } else if (type === 'year') {
            document.getElementById("selectedYearText").innerText = text + " ⏳";
            localStorage.setItem("selected_year", value);
        }

        // إغلاق النافذة المنبثقة تلقائياً فور اختيار الرقم
        modalElement.style.display = "none";

        // استدعاء دالة التشويق والحساب التلقائي اللحظي دون أزرار
        const lang = localStorage.getItem("zamanak_lang") || "ar";
        if (typeof triggerCalculationWithSuspense === "function") {
            triggerCalculationWithSuspense(lang, () => {
                // [ملاحظة هندسية]: ضع اسم دالة الحسابات الفلكية الحقيقية الخاصة بك هنا ليتم تحديث الأرقام والعدادات فوراً
                console.log("تم تحديث البيانات الفلكية والعدادات بنجاح!");
            });
        }
    };

    gridContainer.appendChild(item);
}

// إغلاق النافذة المنبثقة عند الضغط خارج صندوق المربعات للأمان
window.onclick = function(event) {
    const modal = document.getElementById("datePopupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
