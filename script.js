// ==========================================================================
// 1. قاموس محرك الترجمة الفورية الكامل (7 صفحات + حقول الدعم)
// ==========================================================================
const zamanakTranslations = {
    ar: {
        nav: { home: "الرئيسية", birthday: "ذكرى الميلاد", marriage: "ذكرى الزواج", privacy: "سياسة الخصوصية", terms: "الشروط والأحكام", contact: "اتصل بنا", about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة." },
        form: { name: "الاسم الكامل", email: "البريد الإلكتروني", message: "نص الرسالة والطلب", submit: "إرسال الرسالة الفورية", title: "اتصل بنا" },
        counters: { days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثواني حية" }
    },
    en: {
        nav: { home: "Home", birthday: "Birthday", marriage: "Marriage", privacy: "Privacy Policy", terms: "Terms & Conditions", contact: "Contact Us", about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy." },
        form: { name: "Full Name", email: "Email Address", message: "Your Message", submit: "Send Instant Message", title: "Contact Us" },
        counters: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Live Seconds" }
    },
    tr: {
        nav: { home: "Ana Sayfa", birthday: "Doğum Günü", marriage: "Evlilik", privacy: "Gizlilik Politikası", terms: "Şartlar ve Koşullar", contact: "İletişim", about: "Zamanak Küresel Astronomik Projesi - Yaş detaylarınızı وبواسطة canlı anlarınızı üstün doğrulukla hesaplayın." },
        form: { name: "Ad Soyad", email: "E-posta Adresi", message: "Mesajınız", submit: "Anında Mesaj Gönder", title: "İletişim" },
        counters: { days: "Gün", hours: "Saat", minutes: "Dakika", seconds: "Canlı Saniye" }
    }
};

function switchZamanakLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // ترجمة القائمة وشريط الشرح الفيروسي
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
        const key = el.getAttribute('data-i18n-nav');
        if (zamanakTranslations[lang].nav[key]) el.textContent = zamanakTranslations[lang].nav[key];
    });

    // ترجمة حقول النماذج والعناوين
    document.querySelectorAll('[data-i18n-form]').forEach(el => {
        const key = el.getAttribute('data-i18n-form');
        const trans = zamanakTranslations[lang].form[key];
        if (trans) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.setAttribute('placeholder', trans);
            else el.textContent = trans;
        }
    });

    // ترجمة بطاقات العدادات الحية
    document.querySelectorAll('[data-i18n-counter]').forEach(el => {
        const key = el.getAttribute('data-i18n-counter');
        if (zamanakTranslations[lang].counters[key]) el.textContent = zamanakTranslations[lang].counters[key];
    });

    localStorage.setItem('zamanak_lang', lang);
}

// ==========================================================================
// 2. المحرك الفلكي للشبكة الهيدروليكية لراحة العين (30/31 يوماً)
// ==========================================================================
let maxDays = 31; 
let chosenDay = 1;
let liveInterval;

function buildHydraulicGrid() {
    const grid = document.getElementById('daysGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    for (let i = 1; i <= maxDays; i++) {
        const cell = document.createElement('div');
        cell.classList.add('day-cell');
        if (i === chosenDay) cell.classList.add('active');
        cell.textContent = i; // دمج الأرقام بشكل نظيف ومريح للعين
        
        cell.onclick = function() {
            document.querySelectorAll('.day-cell').forEach(c => c.classList.remove('active'));
            cell.classList.add('active');
            chosenDay = i;
            initAstronomicalCounter(); 
        };
        grid.appendChild(cell);
    }
}

function toggleHijriEngine() {
    const isHijri = document.getElementById('hijriToggle').checked;
    // التقلص الهيدروليكي الميكانيكي: الهجري 30 يوماً والميلادي 31 يوماً تلقائياً
    maxDays = isHijri ? 30 : 31;
    if (chosenDay > maxDays) chosenDay = maxDays;
    buildHydraulicGrid();
    initAstronomicalCounter();
}

// ==========================================================================
// 3. دوال العدادات الحية التراكمية لجميع السنين (بدون تعليق أو تجمد)
// ==========================================================================
function initAstronomicalCounter() {
    if (liveInterval) clearInterval(liveInterval);
    
    // تاريخ مرجعي مرن يعتمد على الصفحة الحالية (ميلاد أو زواج)
    const isMarriagePage = window.location.pathname.includes('marriage.html');
    let pastTargetDate = isMarriagePage ? new Date("2018-10-10T00:00:00") : new Date("1998-06-15T00:00:00");
    
    // حقن اليوم المختار ديناميكياً من الشبكة
    pastTargetDate.setDate(chosenDay);

    liveInterval = setInterval(() => {
        const rightNow = new Date();
        const deltaMs = rightNow - pastTargetDate;
        
        if (deltaMs > 0) {
            const secs = Math.floor(deltaMs / 1000);
            const mins = Math.floor(secs / 60);
            const hrs = Math.floor(mins / 60);
            const days = Math.floor(hrs / 24);
            
            // حقن مباشر في الـ DOM للعدادات الحية
            if(document.getElementById('daysVal')) document.getElementById('daysVal').textContent = days.toLocaleString();
            if(document.getElementById('hoursVal')) document.getElementById('hoursVal').textContent = (hrs % 24).toLocaleString();
            if(document.getElementById('minsVal')) document.getElementById('minsVal').textContent = (mins % 60).toLocaleString();
            if(document.getElementById('secsVal')) document.getElementById('secsVal').textContent = (secs % 60).toLocaleString();
        }
    }, 1000);
}

// التشغيل الموحد المبدئي عند جهوزية المستند
document.addEventListener("DOMContentLoaded", () => {
    const initialLang = localStorage.getItem('zamanak_lang') || 'ar';
    switchZamanakLanguage(initialLang);
    buildHydraulicGrid();
    initAstronomicalCounter();
});
