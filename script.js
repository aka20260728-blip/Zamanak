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
