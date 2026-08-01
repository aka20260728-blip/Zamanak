<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zamanak - زمانك العالمي</title>
    <!-- ربط ملف التنسيق الموحد -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- القائمة العلوية والتنقل الذكي -->
    <nav class="zamanak-navbar">
        <div class="nav-container">
            <a href="index.html" class="zamanak-logo">ZAMANAK</a>
            <ul class="nav-links">
                <li><a href="index.html" data-i18n-nav="home">الرئيسية</a></li>
                <li><a href="birthday.html" data-i18n-nav="birthday">ذكرى الميلاد</a></li>
                <li><a href="marriage.html" data-i18n-nav="marriage">ذكرى الزواج</a></li>
                <li><a href="privacy.html" data-i18n-nav="privacy">سياسة الخصوصية</a></li>
                <li><a href="terms.html" data-i18n-nav="terms">الشروط والأحكام</a></li>
                <li><a href="contact.html" data-i18n-nav="contact">اتصل بنا</a></li>
            </ul>
            <!-- أزرار محرك الترجمة السريعة -->
            <div class="lang-switcher">
                <button onclick="switchZamanakLanguage('ar')">AR</button>
                <button onclick="switchZamanakLanguage('en')">EN</button>
                <button onclick="switchZamanakLanguage('tr')">TR</button>
            </div>
        </div>
    </nav>

    <!-- شريط الشرح والتنقل الذكي الفيروسي (انسيابي من اليسار لليمين بدون كلمة أدسينس) -->
    <div class="explainer-bar-wrapper">
        <div class="explainer-bar">
            <span data-i18n-nav="about">مشروع زمانك الفلكي العالمي - احسب تفاصيل عمرك ولحظاتك بدقة فلكية متناهية عبر التاريخ الهجري والميلادي حياً ومباشرة.</span>
        </div>
    </div>

    <!-- الحاوية الرئيسية (بنية التوسط وحواف الأمان 5 سم) -->
    <main class="zamanak-main-container">
        
        <!-- قسم التحكم بالتقويم والمحرك الفلكي -->
        <section class="astronomical-control">
            <div class="calendar-toggle">
                <label class="switch">
                    <input type="checkbox" id="hijriToggle" onchange="toggleHijriEngine()">
                    <span class="slider round"></span>
                </label>
                <span class="toggle-label">التقويم الهجري الذكي</span>
            </div>

            <!-- شبكة الأيام الهيدروليكية المنبثقة (Grid Popup) -->
            <div class="grid-popup-container">
                <h3 id="gridTitle">اختر يومك الفلكي (دمج رقم وشهر لراحة العين):</h3>
                <div id="daysGrid" class="days-grid">
                    <!-- سيتم توليد الـ 31 أو 30 يوماً ديناميكياً بواسطة الجافا سكريبت هنا -->
                </div>
            </div>
        </section>

        <!-- عدادات العرض الحية التراكمية (بلا تجمد) -->
        <section class="live-counters-section">
            <div class="counter-card">
                <span class="counter-value" id="liveDays">0</span>
                <span class="counter-label">أيام</span>
            </div>
            <div class="counter-card">
                <span class="counter-value" id="liveHours">0</span>
                <span class="counter-label">ساعات</span>
            </div>
            <div class="counter-card">
                <span class="counter-value" id="liveMinutes">0</span>
                <span class="counter-label">دقائق</span>
            </div>
            <div class="counter-card">
                <span class="counter-value" id="liveSeconds">0</span>
                <span class="counter-label">ثواني حية</span>
            </div>
        </section>

        <!-- نموذج اتصل بنا الديناميكي المترجم -->
        <section class="contact-section">
            <h2 data-i18n-form="submit">اتصل بنا</h2>
            <form id="zamanakContactForm" class="zamanak-form">
                <input type="text" data-i18n-form="name" placeholder="الاسم الكامل" required>
                <input type="email" data-i18n-form="email" placeholder="البريد الإلكتروني" required>
                <textarea data-i18n-form="message" placeholder="نص الرسالة" rows="5" required></textarea>
                <button type="submit" data-i18n-form="submit">إرسال الرسالة الفورية</button>
            </form>
        </section>

    </main>

    <!-- ربط ملف المحرك البرمجي الموحد -->
    <script src="script.js"></script>
</body>
</html>
