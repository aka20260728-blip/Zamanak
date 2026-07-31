function applySavedThemeAndLang() {
    const savedLang = localStorage.getItem('zamanak_lang') || 'ar';
    const savedTheme = localStorage.getItem('zamanak_theme') || 'dark';
    
    // تطبيق الوضع
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if(document.getElementById('theme-icon')) document.getElementById('theme-icon').innerText = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        if(document.getElementById('theme-icon')) document.getElementById('theme-icon').innerText = '🌙';
    }
    
    // تطبيق اتجاه اللغة والخطوط
    document.documentElement.dir = (savedLang === 'ar' || savedLang === 'ur') ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
    
    const align = (savedLang === 'ar' || savedLang === 'ur') ? 'right' : 'left';
    document.querySelectorAll('.tool-card, .results-box, .content-container').forEach(c => c.style.textAlign = align);
    if(document.getElementById('langSelect')) document.getElementById('langSelect').value = savedLang;
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('zamanak_theme', isLight ? 'light' : 'dark');
    if(document.getElementById('theme-icon')) document.getElementById('theme-icon').innerText = isLight ? '☀️' : '🌙';
}

// تشغيل المزامنة فور تحميل أي صفحة في الموقع تلقائياً
window.addEventListener('DOMContentLoaded', applySavedThemeAndLang);
