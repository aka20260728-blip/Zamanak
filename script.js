let currentDay, currentMonth, currentYear;
let isHijriActive = false;
let counterInterval;
let gamePoints = 0;

// دالة فرض لغة العرض الصارمة وإخفاء وإظهار كتل الـ HTML المقيدة
function applyGlobalLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('zamanak_lang', lang);
    
    // إظهار نصوص اللغة المحددة وإخفاء الأخرى تماماً لمنع حدوث تداخل أو ظهور نقاط
    document.querySelectorAll('[data-lang]').forEach(el => {
        if(el.getAttribute('data-lang') === lang) {
            el.style.display = (el.tagName === 'SPAN' || el.tagName === 'A') ? 'inline' : 'block';
        } else {
            el.style.display = 'none';
        }
    });
    
    const selectEl = document.getElementById('languageSelect');
    if(selectEl) selectEl.value = lang;
    
    // تعديل نصوص حقول الإدخال فورا وبدون أخطاء تجميدية
    const formName = document.getElementById('form-name');
    const formEmail = document.getElementById('form-email');
    const formMsg = document.getElementById('form-msg');
    
    if(formName) formName.setAttribute('placeholder', lang === 'ar' ? 'الاسم الكامل' : 'Full Name');
    if(formEmail) formEmail.setAttribute('placeholder', lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address');
    if(formMsg) formMsg.setAttribute('placeholder', lang === 'ar' ? 'نص الرسالة والاستفسار الكوني' : 'Your message and cosmic inquiry');
    
    const txt = document.getElementById('game-score-text');
    if(txt) txt.textContent = (lang === 'en' ? 'Astral Points: ' : 'النقاط الفلكية الحالية: ') + gamePoints;
}

// قراءة تاريخ اليوم الفعلي لجهاز المستخدم وحقنه تلقائياً كخيار افتراضي فوري
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
        title.textContent = isHijriActive ? "اختر اليوم الهجري" : "اختر اليوم";
        const max = isHijriActive ? 30 : 31;
        for(let i=1; i<=max; i++) createItem(i+" 📅", () => { currentDay=i; document.getElementById('selectedDayText').textContent=i+" 📅"; closeModal(); });
    } else if (type === 'month') {
        title.textContent = isHijriActive ? "اختر الشهر الهجري" : "اختر الشهر";
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

function playZamanakGame() {
    gamePoints += 10;
    const isEn = localStorage.getItem('zamanak_lang') === 'en';
    document.getElementById('game-score-text').textContent = (isEn ? 'Astral Points: ' : 'النقاط الفلكية الحالية: ') + gamePoints;
}

function revealPuzzle() {
    const isEn = localStorage.getItem('zamanak_lang') === 'en';
    alert(isEn ? 'Answer: Venus ✨' : 'الإجابة: كوكب الزهرة ✨');
}

function scrollPolicyToTop(boxId) {
    const box = document.getElementById(boxId);
    if(box) box.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    const hjOut = document.getElementById('hijriOutput');
    if(hjOut) {
        hjOut.style.display = isHijriActive ? 'block' : 'none';
        if(isHijriActive) {
            const hMonths = ["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"];
            const isEn = localStorage.getItem('zamanak_lang') === 'en';
            hjOut.textContent = isEn ? `Converted Hijri Date: ${currentDay} ${hMonths[(currentMonth-1)%12]} ${currentYear-579} AH 🌙` : `المقابل الهجري الفلكي الذكي: ${currentDay} ${hMonths[(currentMonth-1)%12]} ${currentYear-579} هـ 🌙`;
        }
    }
    
    if (!currentYear || !currentMonth || !currentDay) return;
    let baseDate = new Date(currentYear, currentMonth - 1, currentDay);

    const checkElement = document.getElementById('res-days-val');
    if (!checkElement) return; // الحظر الآمن ضد التجمد البرمي في الصفحات السياسية

    counterInterval = setInterval(() => {
        let diff = new Date() - baseDate;
        if(diff > 0) {
            let days = Math.floor(diff / (1000*60*60*24));
            let hours = Math.floor(diff / (1000*60*60));
            let mins = Math.floor(diff / (1000*60));
            
            document.getElementById('res-days-val').textContent = days.toLocaleString();
            document.getElementById('res-hours-val').textContent = hours.toLocaleString();
            document.getElementById('res-mins-val').textContent = mins.toLocaleString();
        }
    }, 1000);
}

function sendZamanakEmail() {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const msg = document.getElementById('form-msg').value;
    const mailtoLink = `mailto:aka20260728@://gmail.com from Zamanak User: ${encodeURIComponent(name)}&body=User Email: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(msg)}`;
    window.location.href = mailtoLink;
}

function copyZamanakCard() {
    const days = document.getElementById('res-days-val')?.textContent || '-';
    const text = `🌌 نتائج بطاقتي من زمانك العالمي (Zamanak):\nإجمالي الأيام الفلكية الكلية: ${days}\nاحسب لحظات عمرك حياً عبر رابط الموقع لايف!`;
    navigator.clipboard.writeText(text).then(() => {
        const isEn = localStorage.getItem('zamanak_lang') === 'en';
        alert(isEn ? 'Card data copied!' : 'تم نسخ تفاصيل بطاقتك الفورية لحافظة الهاتف بنجاح!');
    });
}

function shareZamanakViral() {
    if (navigator.share) {
        navigator.share({ title: 'Zamanak', text: 'احسب تفاصيل عمرك ولحظاتك حياً بدقة فلكية مباشرة عبر زمانك.', url: window.location.href });
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

    if (document.getElementById('res-days-val')) {
        triggerLoadingAndCalculate();
    }
});
