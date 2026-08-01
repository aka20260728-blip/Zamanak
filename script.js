// ==========================================
// 1. قاموس محرك الترجمة الفورية الكامل
// ==========================================
const zamanakTranslations = {
    ar: {
        nav: { home: "الرئيسية", birthday: "ذكرى الميلاد", marriage: "ذكرى الزواج", privacy: "سياسة الخصوصية", terms: "الشروط والأحكام", contact: "اتصل بنا", about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة." },
        contactForm: { name: "الاسم الكامل", email: "البريد الإلكتروني", message: "نص الرسالة", submit: "إرسال الرسالة الفورية" }
    },
    en: {
        nav: { home: "Home", birthday: "Birthday", marriage: "Marriage Anniversary", privacy: "Privacy Policy", terms: "Terms & Conditions", contact: "Contact Us", about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy." },
        contactForm: { name: "Full Name", email: "Email Address", message: "Your Message", submit: "Send Instant Message" }
    },
    tr: {
        nav: { home: "Ana Sayfa", birthday: "Doğum Günü", marriage: "Evlilik Yıldönümü", privacy: "Gizlilik Politikası", terms: "Şartlar ve Koşullar", contact: "İletişim", about: "Zamanak Küresel Astronomik Projesi - Yaş detaylarınızı ve canlı anlarınızı üstün doğrulukla hesaplayın." },
        contactForm: { name: "Ad Soyad", email: "E-posta Adresi", message: "Mesajınız", submit: "Anında Mesaj Gönder" }
    }
};

function switchZamanakLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // ترجمة القائمة العلوية والشرح
    document.querySelectorAll('[data-i18n-nav]').forEach(element => {
        const key = element.getAttribute('data-i18n-nav');
        if (zamanakTranslations[lang].nav[key]) {
            element.textContent = zamanakTranslations[lang].nav[key];
        }
    });

    // ترجمة حقول اتصل بنا
    document.querySelectorAll('[data-i18n-form]').forEach(element => {
        const key = element.getAttribute('data-i18n-form');
        const translation = zamanakTranslations[lang].contactForm[key];
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        }
    });
    localStorage.setItem('zamanak_lang', lang);
}

// ==========================================
// 2. المحرك الفلكي والشبكة الهيدروليكية للأيام
// ==========================================
let targetDaysCount = 31; // الافتراضي ميلادي 31 يوماً
let selectedDay = 1;

function generateDaysGrid() {
    const gridContainer = document.getElementById('daysGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = ''; // تنظيف الشبكة
    
    for (let i = 1; i <= targetDaysCount; i++) {
        const cell = document.createElement('div');
        cell.classList.add('day-cell');
        if (i === selectedDay) cell.classList.add('active');
        
        // دمج رقم وشهر لراحة العين (مثال تبسيطي تلسكوبي لراحة عين المستخدم)
        cell.textContent = i; 
        
        cell.onclick = function() {
            document.querySelectorAll('.day-cell').forEach(c => c.classList.remove('active'));
            cell.classList.add('active');
            selectedDay = i;
            restartAstronomicalCounter(); // إعادة تشغيل العداد الفلكي بناء على اليوم المختار
        };
        gridContainer.appendChild(cell);
    }
}

// دالة تفعيل المحرك الفلكي والتقويم الهجري الذكي (الشبكة الهيدروليكية)
function toggleHijriEngine() {
    const isHijri = document.getElementById('hijriToggle').checked;
    
    // التقلص الهيدروليكي التلقائي: التقويم الهجري لا يتعدى 30 يوماً فلكياً
    targetDaysCount = isHijri ? 30 : 31;
    if (selectedDay > targetDaysCount) selectedDay = targetDaysCount;
    
    generateDaysGrid();
    restartAstronomicalCounter();
}

// ==========================================
// 3. محرك العدادات الحية التراكمية (بدون تجمد)
// ==========================================
let counterInterval;
// تعيين تاريخ مرجعي وهمي تراكمي يتغير ديناميكياً لتشغيل العداد لايف
let basePastDate = new Date("1995-05-15T00:00:00"); 

function startLiveCounter() {
    if (counterInterval) clearInterval(counterInterval);
    
    counterInterval = setInterval(() => {
        const now = new Date();
        // تعديل اليوم بناء على اختيار المستخدم من الشبكة الهيدروليكية
        basePastDate.setDate(selectedDay);
        
        const differenceInMs = now - basePastDate;
        
        if (differenceInMs > 0) {
            const totalSeconds = Math.floor(differenceInMs / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);
            
            // حقن الأرقام حية داخل واجهة العرض التراكمية
            document.getElementById('liveDays').textContent = totalDays.toLocaleString();
            document.getElementById('liveHours').textContent = (totalHours % 24).toLocaleString();
            document.getElementById('liveMinutes').textContent = (totalMinutes % 60).toLocaleString();
            document.getElementById('liveSeconds').textContent = (totalSeconds % 60).toLocaleString();
        }
    }, 1000); // تحديث فوري كل ثانية بلا تجمد
}

function restartAstronomicalCounter() {
    startLiveCounter();
}

// تشغيل التهيئة المبدئية عند التحميل
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('zamanak_lang') || 'ar';
    switchZamanakLanguage(savedLang);
    generateDaysGrid();
    startLiveCounter();
});
