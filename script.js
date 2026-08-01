// قاموس الترجمة الفورية المركزي لـ زمانك (مقتصر على العربية والإنجليزية بأعلى كفاءة ومعادلات موسعة)
const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "🌌 منصة زمانك (Zamanak) الفلكية الشاملة",
        mainDesc: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعية لعمرك حياً ومباشرة.",
        art1Title: "⏳ هندسة وعلم الأزمان الكونيه", art1Text: " canب الأزمان ليست مجرد أرقام تتوالى في فراغ، بل هي تدوير فلكي دقيق يرتبط ميكانيكياً بحركة الأجرام السماوية ودورات الكواكب ومجموعات النجوم في قبة الفضاء. نحن نربط حركة عمرك بنبض المجرة الفعلي.",
        art2Title: "🔮 أسرار ومسارات الأبراج والطوالع", art2Text: "إن تموضع الشمس والقمر والتقاطعات الكوكبية لحظة خروجك إلى هذا الكون يترك بصمة طاقية فريدة تؤثر على ملامح طالعك الفلكي وتكشف ملامح مسارك الزمني الفريد عبر الأبراج الاثني عشر الأساسية بدقة متناهية.",
        art3Title: "🌟 طاقة الأجرام وحساب التراكم", art3Text: "ترتبط عدادات زمانك التراكمية الحية بالتاريخين الهجري والميلادي لتعيش تفاصيل ثواني ودقائق عمرك بالتناغم الكامل مع نبض ودورات المجرة الكبرى حياً ومباشرة دون أي تعليق أو تجمد برمي.",
        about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة عبر التاريخ الهجري والميلادي.",
        birthTitle: "🎂 أسرار ميلادك الفلكي الكوني", birthDesc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية العميقة.",
        marriageTitle: "💍 عداد الرابطة الزوجية اللحظي حياً", marriageDesc: "احسبوا اللحظات، الساعات، والدقائق التراكمية لرحلتكم المشتركة معاً بدقة مطلقة.",
        privacyTitle: "🔒 سياسة الخصوصية وأمان البيانات", termsTitle: "📜 الشروط والأحكام لاستخدام المنصة", contactTitle: "✉️ اتصل بنا والدعم الفوري للخدمة",
        wingGame: "🎮 جناح التسلية السريعة", wingPuzzle: "🔮 أسرار وألغاز طالعك", puzzleQ: "س: ما هو الكوكب الأكثر لمعاناً في سماء الليل؟", puzzleA: "عرض الإجابة الفلكية", gameScore: "النقاط الفلكية الحالية: ", clickGame: "اضغط لتجميع طاقة النجوم ✨",
        lblHijri: "التقويم الهجري ذكي", lblDay: "اختر اليوم", lblMonth: "اختر الشهر", lblYear: "اختر السنة", resTitle: "النتائج والحسابات التراكمية",
        resDays: "إجمالي الأيام التي عشتها:", resHours: "إجمالي الساعات الكلية التراكمية:", resMinutes: "إجمالي الدقائق التراكمية الحية:",
        shareBtn: "🚀 مشاركة النتائج المذهلة فيروسياً", copyBtn: "📋 نسخ كود البطاقة الفورية", loadingText: "جاري الاتصال بالمحرك الفلكي لـ زمانك واستقراء النجوم والطالع الفلكي لحياتك..."
    },
    en: {
        navHome: "Home", navBirth: "Birth", navMarriage: "Marriage", navPrivacy: "Privacy", navTerms: "Terms", navContact: "Contact Us",
        mainTitle: "🌌 Zamanak Comprehensive Astronomical Platform",
        mainDesc: "Welcome to the grand global gateway to explore celestial movements, epochs, and live alignment of your age.",
        art1Title: "⏳ Cosmic Time Engineering", art1Text: "Time is not just a sequence of numbers, but a precise celestial rotation mechanically linked to planetary orbits around the sun and grand stellar grids. We bind your age to the galactic heartbeat.",
        art2Title: "🔮 Secrets of Zodiacs & Ascendants", art2Text: "The positioning of the Sun and Moon at your precise birth moment leaves an energetic blueprint shaping your astronomical ascendant traits and exposing your matrix across the 12 cosmic signs.",
        art3Title: "🌟 Planetary Energies & Accumulation", art3Text: "Zamanak live cumulative counters connect Hijri and Gregorian charts together, allowing your life seconds to expand in absolute harmony with the rotation of interstellar matrices.",
        about: "Zamanak Global Astronomical Project - Calculate your age details and live moments with extreme accuracy.",
        birthTitle: "🎂 Cosmic Astronomical Birth Secrets", birthDesc: "Discover the details of your unique cosmic journey with ultimate precision and highest standards.",
        marriageTitle: "💍 Live Cumulative Marriage Counter", marriageDesc: "Calculate the precise live moments, hours, and cumulative minutes of your beautiful journey together.",
        privacyTitle: "🔒 Privacy Policy & Data Security", termsTitle: "📜 Platform Terms & Conditions", contactTitle: "✉️ Contact Us & Instant Support Service",
        wingGame: "🎮 Mini Entertainment Wing", wingPuzzle: "🔮 Cosmic Puzzles & Riddles", puzzleQ: "Q: Which is the brightest planet in the night sky?", puzzleA: "Show Cosmic Answer", gameScore: "Current Astral Points: ", clickGame: "Click to gather star energy ✨",
        lblHijri: "Smart Hijri Calendar", lblDay: "Select Day", lblMonth: "Select Month", lblYear: "Select Year", resTitle: "Results & Cumulative Calculations",
        resDays: "Total days lived:", resHours: "Total cumulative hours:", resMinutes: "Total live cumulative minutes:",
        shareBtn: "🚀 Share Amazing Results Virally", copyBtn: "📋 Copy Instant Card Data", loadingText: "Connecting to Zamanak Astronomical Engine and casting your planetary charts..."
    }
};

function applyGlobalLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    const transIds = [
        ['nav-home', 'navHome'], ['nav-birth', 'navBirth'], ['nav-marriage', 'navMarriage'],
        ['nav-privacy', 'navPrivacy'], ['nav-terms', 'navTerms'], ['nav-contact', 'navContact'],
        ['movingAdText', 'about'], ['main-title', 'mainTitle'], ['main-desc', 'mainDesc'],
        ['art1-title', 'art1Title'], ['art1-text', 'art1Text'], ['art2-title', 'art2Title'],
        ['art2-text', 'art2Text'], ['art3-title', 'art3Title'], ['art3-text', 'art3Text'],
        ['birth-page-title', 'birthTitle'], ['birth-page-desc', 'birthDesc'],
        ['marriage-page-title', 'marriageTitle'], ['marriage-page-desc', 'marriageDesc'],
        ['privacy-title', 'privacyTitle'], ['terms-title', 'termsTitle'], ['contact-title', 'contactTitle'],
        ['wing-game-title', 'wingGame'], ['wing-puzzle-title', 'wingPuzzle'], ['puzzle-q', 'puzzleQ'],
        ['puzzle-btn-text', 'puzzleA'], ['game-click-btn', 'clickGame'], ['lbl-hijri', 'lblHijri'],
        ['lbl-select-day', 'lblDay'], ['lbl-select-month', 'lblMonth'], ['lbl-select-year', 'lblYear'],
        ['res-title', 'resTitle'], ['res-days', 'resDays'], ['res-hours', 'resHours'],
        ['res-minutes', 'resMinutes'], ['viralShareBtn', 'shareBtn'], ['copyCardBtn', 'copyBtn'], ['loadingText', 'loadingText']
    ];

    transIds.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if(el) el.textContent = data[key];
    });

    // ترجمة حقول اتصل بنا فورا دون ثبات لتلافي الخلل السابق
    const formName = document.getElementById('form-name');
    const formEmail = document.getElementById('form-email');
    const formMsg = document.getElementById('form-msg');
    const formSub = document.getElementById('form-submit');
    
    if(formName) formName.setAttribute('placeholder', lang === 'ar' ? 'الاسم الكامل' : 'Full Name');
    if(formEmail) formEmail.setAttribute('placeholder', lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address');
    if(formMsg) formMsg.setAttribute('placeholder', lang === 'ar' ? 'نص الرسالة والاستفسار الكوني' : 'Your message and cosmic inquiry');
    if(formSub) formSub.textContent = lang === 'ar' ? 'إرسال الرسالة الفورية' : 'Send Instant Message';

    localStorage.setItem('zamanak_lang', lang);
    const selectEl = document.getElementById('languageSelect');
    if(selectEl) selectEl.value = lang;
}
let currentDay, currentMonth, currentYear;
let isHijriActive = false;
let counterInterval;
let gamePoints = 0;

function initDefaultDate() {
    const today = new Date();
    currentDay = today.getDate();
    currentMonth = today.getMonth() + 1;
    currentYear = today.getFullYear();
    
    const dayTxt = document.getElementById('selectedDayText');
    const monTxt = document.getElementById('selectedMonthText');
    const yrTxt = document.getElementById('selectedYearText');
    
    if(dayTxt) dayTxt.textContent = currentDay + " 📅";
    if(monTxt) {
        const months = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
        monTxt.textContent = months[currentMonth - 1] + " 🌙";
    }
    if(yrTxt) yrTxt.textContent = currentYear + " ⏳";
}

function openPopup(type) {
    const modal = document.getElementById('datePopupModal');
    const title = document.getElementById('popupTitle');
    const grid = document.getElementById('popupGridItems');
    if(!modal || !grid) return;
    
    grid.innerHTML = '';
    modal.style.display = 'flex';

    if (type === 'day') {
        title.textContent = "اختر اليوم";
        const max = isHijriActive ? 30 : 31;
        for(let i=1; i<=max; i++) createItem(i+" 📅", () => { currentDay=i; document.getElementById('selectedDayText').textContent=i+" 📅"; closeModal(); });
    } else if (type === 'month') {
        title.textContent = "اختر الشهر";
        const months = isHijriActive ? ["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"] : ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
        months.forEach((m, idx) => createItem((idx+1)+" - "+m+" 🌙", () => { currentMonth=idx+1; document.getElementById('selectedMonthText').textContent=m+" 🌙"; closeModal(); }));
    } else if (type === 'year') {
        title.textContent = "اختر السنة";
        const end = new Date().getFullYear();
        for(let i=end; i>=1940; i--) createItem(i+" ⏳", () => { currentYear=i; document.getElementById('selectedYearText').textContent=i+" ⏳"; closeModal(); });
    }
}

function createItem(text, cb) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    item.textContent = text;
    item.onclick = cb;
    document.getElementById('popupGridItems').appendChild(item);
}

function closeModal() {
    document.getElementById('datePopupModal').style.display = 'none';
    triggerLoadingAndCalculate();
}

function scrollPolicyToTop(boxId) {
    const box = document.getElementById(boxId);
    if(box) box.scrollTo({ top: 0, behavior: 'smooth' });
}

function playZamanakGame() {
    gamePoints += 10;
    const txt = document.getElementById('game-score-text');
    if(txt) txt.textContent = (localStorage.getItem('zamanak_lang')==='en'?'Astral Points: ':'النقاط الفلكية الحالية: ') + gamePoints;
}

function revealPuzzle() {
    const ans = localStorage.getItem('zamanak_lang') === 'en' ? 'Answer: Venus ✨' : 'الإجابة: كوكب الزهرة ✨';
    alert(ans);
}

function triggerLoadingAndCalculate() {
    const loader = document.getElementById('loadingEffect');
    const results = document.getElementById('resultContainer');
    if(loader && results) {
        results.style.display = 'none';
        loader.style.display = 'block';
        setTimeout(() => {
            loader.style.display = 'none';
            results.style.display = 'block';
            startLiveCalculation();
        }, 1200); 
    }
}

function startLiveCalculation() {
    if(counterInterval) clearInterval(counterInterval);
    
    // محاكاة تحويل الهجري الفعلي عند الضغط والتفعيل
    if(isHijriActive) {
        const hjOut = document.getElementById('hijriOutput');
        if(hjOut) hjOut.style.display = 'block';
    }
    
    let baseDate = new Date(currentYear, currentMonth - 1, currentDay);
    if(window.location.pathname.includes('marriage.html')) {
        baseDate = new Date(currentYear, currentMonth - 1, currentDay); // زواج
    }

    counterInterval = setInterval(() => {
        let diff = new Date() - baseDate;
        if(diff > 0) {
            let days = Math.floor(diff / (1000*60*60*24));
            let hours = Math.floor(diff / (1000*60*60));
            let mins = Math.floor(diff / (1000*60));
            
            const dSpan = document.getElementById('res-days-val');
            const hSpan = document.getElementById('res-hours-val');
            const mSpan = document.getElementById('res-mins-val');
            
            if(dSpan) dSpan.textContent = days.toLocaleString();
            if(hSpan) hSpan.textContent = hours.toLocaleString();
            if(mSpan) mSpan.textContent = mins.toLocaleString();
        }
    }, 1000);
}

function sendZamanakEmail() {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const msg = document.getElementById('form-msg').value;
    
    if(!name || !email || !msg) { alert(localStorage.getItem('zamanak_lang')==='en'?'Please fill all fields':'يرجى ملء جميع الحقول أولاً'); return; }
    
    const mailtoLink = `mailto:aka20260728@://gmail.com from Zamanak User: ${encodeURIComponent(name)}&body=User Email: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(msg)}`;
    window.location.href = mailtoLink;
}

function copyZamanakCard() {
    const days = document.getElementById('res-days-val')?.textContent || '-';
    const hrs = document.getElementById('res-hours-val')?.textContent || '-';
    const text = `🌌 نتائج بطاقتي من زمانك العالمي (Zamanak):\nإجمالي الأيام: ${days}\nإجمالي الساعات الكلية: ${hrs}\nاحسب عمرك حياً عبر الرابط لايف!`;
    navigator.clipboard.writeText(text).then(() => {
        alert(localStorage.getItem('zamanak_lang')==='en'?'Card data copied to clipboard!':'تم نسخ تفاصيل بطاقتك الفورية لحافظة هاتف ميكانيكياً!');
    });
}

function shareZamanakViral() {
    const days = document.getElementById('res-days-val')?.textContent || '-';
    if (navigator.share) {
        navigator.share({
            title: 'Zamanak Global',
            text: `🌌 احسب تفاصيل وعمرك حياً ومباشرة عبر زمانك العالمي. إجمالي أيامي الفلكية: ${days}`,
            url: window.location.href
        }).catch(console.error);
    } else {
        copyZamanakCard();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initDefaultDate();
    const lang = localStorage.getItem('zamanak_lang') || 'ar';
    applyGlobalLanguage(lang);
    
    const theme = localStorage.getItem('zamanak_theme') || 'dark';
    document.body.setAttribute('data-theme', theme);
    
    const sel = document.getElementById('languageSelect');
    if(sel) sel.addEventListener('change', (e) => applyGlobalLanguage(e.target.value));
    
    const tgl = document.getElementById('darkModeToggle');
    if(tgl) tgl.addEventListener('click', () => {
        let nt = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', nt);
        localStorage.setItem('zamanak_theme', nt);
    });

    const hj = document.getElementById('hijriCheckbox');
    if(hj) hj.addEventListener('change', (e) => { isHijriActive = e.target.checked; triggerLoadingAndCalculate(); });

    triggerLoadingAndCalculate();
});
