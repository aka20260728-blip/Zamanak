const translations = {
    ar: {
        navHome: "الرئيسية", navBirth: "الميلاد", navMarriage: "الزواج", navPrivacy: "الخصوصية", navTerms: "الشروط", navContact: "اتصل بنا",
        mainTitle: "🌌 منصة زمانك (Zamanak) الفلكية الشاملة",
        mainDesc: "مرحباً بك في البوابة العالمية الكبرى لاستقراء حركات الأجرام، الأزمان، والروابط الطالعية لعمرك حياً ومباشرة.",
        art1Title: "⏳ هندسة وعلم الأزمان الكونيه", art1Text: "الأزمان ليست مجرد أرقام تتوالى في فراغ، بل هي تدوير فلكي دقيق يرتبط ميكانيكياً بحركة الأجرام السماوية ودورات الكواكب ومجموعات النجوم في قبة الفضاء. نحن نربط حركة عمرك بنبض المجرة الفعلي.",
        art2Title: "🔮 أسرار ومسارات الأبراج والطوالع", art2Text: "إن تموضع الشمس والقمر والتقاطعات الكوكبية لحظة خروجك إلى هذا الكون يترك بصمة طاقية فريدة تؤثر على ملامح طالعك الفلكي وتكشف ملامح مسارك الزمني الفريد عبر الأبراج الاثني عشر الأساسية بدقة متناهية.",
        art3Title: "🌟 طاقة الأجرام وحساب التراكم", art3Text: "ترتبط عدادات زمانك التراكمية الحية بالتاريخين الهجري والميلادي لتعيش تفاصيل ثواني ودقائق عمرك بالتناغم الكامل مع نبض ودورات المجرة الكبرى حياً ومباشرة دون أي تعليق أو تجمد برمي.",
        about: "مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية حياً ومباشرة عبر التاريخ الهجري والميلادي.",
        birthTitle: "🎂 أسرار ميلادك الفلكي الكوني", birthDesc: "اكتشف تفاصيل رحلتك الكونية الفريدة بدقة متناهية وبأعلى المعايير الفلكية العميقة.",
        contactTitle: "✉️ اتصل بنا والدعم الفوري للخدمة"
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
        contactTitle: "✉️ Contact Us & Instant Support Service"
    }
};

function applyGlobalLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = data.navHome;
    if(document.getElementById('nav-birth')) document.getElementById('nav-birth').textContent = data.navBirth;
    if(document.getElementById('nav-marriage')) document.getElementById('nav-marriage').textContent = data.navMarriage;
    if(document.getElementById('nav-privacy')) document.getElementById('nav-privacy').textContent = data.navPrivacy;
    if(document.getElementById('nav-terms')) document.getElementById('nav-terms').textContent = data.navTerms;
    if(document.getElementById('nav-contact')) document.getElementById('nav-contact').textContent = data.navContact;
    if(document.getElementById('movingAdText')) document.getElementById('movingAdText').textContent = data.about;

    if(document.getElementById('main-title')) document.getElementById('main-title').textContent = data.mainTitle;
    if(document.getElementById('main-desc')) document.getElementById('main-desc').textContent = data.mainDesc;
    if(document.getElementById('art1-title')) document.getElementById('art1-title').textContent = data.art1Title;
    if(document.getElementById('art1-text')) document.getElementById('art1-text').textContent = data.art1Text;
    if(document.getElementById('art2-title')) document.getElementById('art2-title').textContent = data.art2Title;
    if(document.getElementById('art2-text')) document.getElementById('art2-text').textContent = data.art2Text;
    if(document.getElementById('art3-title')) document.getElementById('art3-title').textContent = data.art3Title;
    if(document.getElementById('art3-text')) document.getElementById('art3-text').textContent = data.art3Text;
    if(document.getElementById('birth-page-title')) document.getElementById('birth-page-title').textContent = data.birthTitle;
    if(document.getElementById('birth-page-desc')) document.getElementById('birth-page-desc').textContent = data.birthDesc;
    if(document.getElementById('contact-title')) document.getElementById('contact-title').textContent = data.contactTitle;

    localStorage.setItem('zamanak_lang', lang);
}
let currentDay = 13, currentMonth = 9, currentYear = 2016;
let isHijri = false;
let counterInterval;

function openPopup(type) {
    const modal = document.getElementById('datePopupModal');
    const title = document.getElementById('popupTitle');
    const grid = document.getElementById('popupGridItems');
    if(!modal || !grid) return;
    
    grid.innerHTML = '';
    modal.style.display = 'flex';

    if (type === 'day') {
        title.textContent = "اختر اليوم";
        const max = isHijri ? 30 : 31;
        for(let i=1; i<=max; i++) createItem(i, i+" 📅", () => { currentDay=i; document.getElementById('selectedDayText').textContent=i+" 📅"; closeModal(); });
    } else if (type === 'month') {
        title.textContent = "اختر الشهر";
        const months = isHijri ? ["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"] : ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
        months.forEach((m, idx) => createItem(idx+1, (idx+1)+" - "+m+" 🌙", () => { currentMonth=idx+1; document.getElementById('selectedMonthText').textContent=m+" 🌙"; closeModal(); }));
    } else if (type === 'year') {
        title.textContent = "اختر السنة";
        const end = new Date().getFullYear();
        for(let i=end; i>=1940; i--) createItem(i, i+" ⏳", () => { currentYear=i; document.getElementById('selectedYearText').textContent=i+" ⏳"; closeModal(); });
    }
}

function createItem(val, text, cb) {
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

// دالة تفعيل تأثير الإثارة والتشويق لصفحة الميلاد لمنع التجمد وصنع الغموض للمستخدم
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
        }, 1200); // 1.2 ثانية تأثير تشويق وإثارة كامل
    }
}

function startLiveCalculation() {
    if(counterInterval) clearInterval(counterInterval);
    let birth = new Date(currentYear, currentMonth - 1, currentDay);
    
    counterInterval = setInterval(() => {
        let diff = new Date() - birth;
        if(diff > 0) {
            let days = Math.floor(diff / (1000*60*60*24));
            let hours = Math.floor(diff / (1000*60*60));
            let mins = Math.floor(diff / (1000*60));
            
            const daysSpan = document.getElementById('res-days-val');
            const hoursSpan = document.getElementById('res-hours-val');
            const minsSpan = document.getElementById('res-mins-val');
            
            if(daysSpan) daysSpan.textContent = days.toLocaleString();
            if(hoursSpan) hoursSpan.textContent = hours.toLocaleString();
            if(minsSpan) minsSpan.textContent = mins.toLocaleString();
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
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
    if(hj) hj.addEventListener('change', (e) => { isHijri = e.target.checked; triggerLoadingAndCalculate(); });

    triggerLoadingAndCalculate();
});
