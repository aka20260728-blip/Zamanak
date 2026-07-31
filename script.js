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
}

function updateAdDirection(lang) {
    const adText = document.getElementById("movingAdText");
    if (!adText) return;

    adText.classList.remove("scroll-rtl", "scroll-ltr");

    if (lang === "ar" || lang === "ur") {
        adText.classList.add("scroll-rtl");
        adText.style.left = "0";
        adText.style.right = "auto";
        adText.innerText = "مرحباً بكم في منصة زمانك العالمية - حساب تفاصيل الميلاد، ذكريات الزواج، والدقة الفلكية المعتمدة المستوفية لشروط أدسينس!";
    } else {
        adText.classList.add("scroll-ltr");
        adText.style.right = "0";
        adText.style.left = "auto";
        adText.innerText = "Welcome to Zamanak Global Platform - Calculate birthday secrets, marriage memories, and certified astronomical accuracy!";
    }
}

// محرك فتح النوافذ المنبثقة الذكية للتواريخ للبرتدي والزواج
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
