// =========================================
// 1. قائمة الألعاب (بيانات الألعاب مع السعر)
// =========================================
const gamesData = [
    { name: "Mortal Kombat-Armageddon", img: "ps2-mortal-kombat-armageddon.jpg" },
    { name: "Delta Force:Black Hawk Down-Team Sabre", img: "ps2-black-hawk-down.jpg" },
    { name: "Jet Li: Rise to Honor", img: "ps2-jt-le.jpg" },
    { name: "BLOODY ROAR 4", img: "ps2-bloody-roar-4.jpg" },
    { name: "BRATZ MOVIE", img: "ps2-bratz-movie.jpg" },
    { name: "GOD OF WAR 2", img: "ps2-god-of-war-2.jpg" },
    { name: "The Lord of the Rings The Return of the King", img: "ps2-lord-of-the-rings.jpg" },
    { name: "History Channel: Civil War - Secret Missions", img: "ps2-civil-war-2.jpg" },
    { name: "Def Jam: Fight for NY", img: "ps2-def-jam-fight.jpg" },
    { name: "Battle Stadium D.O.N ", img: "ps2-dragon-naruto-onepiece.jpg" },
    { name: "Castlevania: Lament of Innocence", img: "ps2-castlevania.jpg" },
    { name: "Die Hard Arcade", img: "ps2-die-hard-arcade.jpg" },
    { name: "GLADIATOR", img: "ps2-gladiator.jpg" },
    { name: "GRENDIZER", img: "ps2-grendizer.jpg" },
    { name: "INCREDIBLES", img: "ps2-incredibles.jpg" },
    { name: "KING ARTHUR", img: "ps2-king-arthur.jpg" },
    { name: "ONIMUSHA 3", img: "ps2-onimusha-3.jpg" },
    { name: "Mercenaries-Playground of Destruction", img: "ps2-mercenaries.jpg" },
    { name: "POWER RANGER", img: "ps2-power-ranger.jpg" },
    { name: "RATATOUILLE", img: "ps2-ratatouille.jpg" },
    { name: "ANGOLA 2010", img: "ps2-angola-2010.jpg" },
    { name: "FIFA STREET", img: "ps2-fifa-street.jpg" },
    { name: "PES 2018 MAX", img: "ps2-pes-2018-max.jpg" },
    { name: "PES 2019", img: "ps2-pes-2019.jpg" },
    { name: "PES 2013 ENG", img: "ps2-pes-2013-eng.jpg" },
    { name: "WE PES 2020 PS2 HD", img: "ps2-we-pes-2020-ps2-hd.jpg" },
    { name: "PES 2017 MAX", img: "ps2-pes-2017-max.jpg" },
    { name: "PES 2020 BLEZZ PATCH", img: "ps2-pes-2020-blezz-patch.jpg" },
    { name: "SPAIN CUP 2012", img: "ps2-spain-cup-2012.jpg" },
    { name: "WINNING 2012", img: "ps2-winning-2012.jpg" },
    { name: "EFOOTBALL 2022 PS2", img: "ps2-efootball-2022-ps2.jpg" },
    { name: "FIFA 23 PS2", img: "ps2-fifa-23-ps2.jpg" },
    { name: "PES 2024 EFOOTBALL PS2", img: "ps2-pes-2024-efootball-ps2.jpg" },
    { name: "PES 2023", img: "ps2-pes-2023.jpg" },
    { name: "ALL STARS", img: "ps2-all-stars.jpg" },
    { name: "SMACKDOWN 2005", img: "ps2-smackdown-2005.jpg" },
    { name: "SMACKDOWN 2004", img: "ps2-smackdown-2004.jpg" },
    { name: "W2K19", img: "ps2-w2k19.jpg" },
    { name: "WWE 2011", img: "ps2-wwe-2011.jpg" },
    { name: "ALA ELDIN", img: "ps2-ala-eldin.jpg" },
    { name: "BATMAN BEGINS", img: "ps2-batman-begins.jpg" },
    { name: "BATMAN", img: "ps2-batman.jpg" },
    { name: "BEN 10 ALIEN FORCE", img: "ps2-ben-10-alien-force.jpg" },
    { name: "IRON MAN", img: "ps2-iron-man.jpg" },
    { name: "JUSTICE LEAGUE HEROES", img: "ps2-justice-league-heroes.jpg" },
    { name: "NINJA TURTLES 2", img: "ps2-ninja-turtles-2.jpg" },
    { name: "SPIDER MAN 2", img: "ps2-spider-man-2.jpg" },
    { name: "SPIDER MAN 4", img: "ps2-spider-man-4.jpg" },
    { name: "SUPERMAN BATMAN", img: "ps2-superman-batman.jpg" },
    { name: "TARZAN 2", img: "ps2-tarzan-2.jpg" },
    { name: "TARZAN", img: "ps2-tarzan.jpg" },
    { name: "ULTIMATE SPIDER MAN", img: "ps2-ultimate-spider-man.jpg" },
    { name: "X-MEN LEGENDS", img: "ps2-x-men-legends.jpg" },
    { name: "GTA VICE CITY", img: "ps2-gta-vice-city.jpg" },
    { name: "GTA SAN ANDREAS", img: "ps2-gta-san-andreas.jpg" },
    { name: "BATTLE STADIUM DON", img: "ps2-battle-stadium-don.jpg" },
    { name: "DBZ SAGAS", img: "ps2-dbz-sagas.jpg" },
    { name: "DRAGON BALL Z", img: "ps2-dragon-ball-z.jpg" },
    { name: "KOF 2003", img: "ps2-kof-2003.jpg" },
    { name: "KOF MAXIMUM IMPACT", img: "ps2-kof-maximum-impact.jpg" },
    { name: "MK ARMAGEDDON", img: "ps2-mk-armageddon.jpg" },
    { name: "MORTAL KOMBAT 6", img: "ps2-mortal-kombat-6.jpg" },
    { name: "NARUTO SHIPPUDEN 4", img: "ps2-naruto-shippuden-4.jpg" },
    { name: "ONE PIECE", img: "ps2-one-piece.jpg" },
    { name: "TEKKEN TAG", img: "ps2-tekken-tag.jpg" },
    { name: "WAR OF THE MONSTERS", img: "ps2-war-of-the-monsters.jpg" },
    { name: "DRIVER 3", img: "ps2-driver-3.jpg" },
    { name: "MOTOGP 4", img: "ps2-motogp-4.jpg" },
    { name: "BURNOUT 4", img: "ps2-burnout-4.jpg" },
    { name: "CAR RUMBEL", img: "ps2-car-rumbel.jpg" },
    { name: "CRAZY FROG RACER", img: "ps2-crazy-frog-racer.jpg" },
    { name: "CRAZY TAXI 11", img: "ps2-crazy-taxi-11.jpg" },
    { name: "DEVIL KINGS", img: "ps2-devil-kings.jpg" },
    { name: "MOTOSEKLAT", img: "ps2-motoseklat.jpg" },
    { name: "NFS HOT PURSUIT 3", img: "ps2-nfs-hot-pursuit-3.jpg" },
    { name: "NFS UNDERGROUND 2", img: "ps2-nfs-underground-2.jpg" },
    { name: "NFS CARBON", img: "ps2-nfs-carbon.jpg" },
    { name: "CRASH NITRO", img: "ps2-crash-nitro.jpg" },
    { name: "BLACK OPS 1", img: "ps2-black-ops-1.jpg" },
    { name: "GUN SURVIVOR 3", img: "ps2-gun-survivor-3.jpg" },
    { name: "HITMAN 3", img: "ps2-hitman-3.jpg" },
    { name: "ALIENS VS PREDATOR EXTINCTION", img: "ps2-aliens-vs-predator-extinction.jpg" },
    { name: "ARMY MEN SARGE WAR", img: "ps2-army-men-sarge-war.jpg" },
    { name: "BAD BOYS 2", img: "ps2-bad-boys-2.jpg" },
    { name: "CALL OF DUTY 3", img: "ps2-call-of-duty-3.jpg" },
    { name: "CALL OF DUTY 4 WORLD AT WAR", img: "ps2-call-of-duty-4-world-at-war.jpg" },
    { name: "DEAD TO RIGHTS", img: "ps2-dead-to-rights.jpg" },
    { name: "GOD OF WAR 2 ALT", img: "ps2-god-of-war-2-alt.jpg" },
    { name: "METAL SLUG 6", img: "ps2-metal-slug-6.jpg" },
    { name: "METAL SLUG ANTHOLOGY", img: "ps2-metal-slug-anthology.jpg" },
    { name: "MEDAL OF HONOR", img: "ps2-medal-of-honor.jpg" },
    { name: "METAL SLUG 4", img: "ps2-metal-slug-4.jpg" },
    { name: "METAL SLUG 5", img: "ps2-metal-slug-5.jpg" },
    { name: "RESIDENT EVIL DEAD AIM", img: "ps2-resident-evil-dead-aim.jpg" },
    { name: "RESIDENT EVIL CODE VERONICA X", img: "ps2-resident-evil-code-veronica-x.jpg" },
    { name: "RESIDENT EVIL OUTBREAK", img: "ps2-resident-evil-outbreak.jpg" },
    { name: "RESIDENT EVIL 4", img: "ps2-resident-evil-4.jpg" },
    { name: "T3 REDEMPTION", img: "ps2-t3-redemption.jpg" },
    { name: "UNDER FIRE 007", img: "ps2-under-fire-007.jpg" },
    { name: "DEAD 2 RIGHTS", img: "ps2-dead-2-rights.jpg" },
    { name: "GIT LEE 2", img: "ps2-git-lee-2.jpg" },
    { name: "JAWS", img: "ps2-jaws.jpg" },
    { name: "BARBIE HORSE", img: "ps2-barbie-horse.jpg" },
    { name: "BARBIE ISLAND PRINCESS", img: "ps2-barbie-island-princess.jpg" },
    { name: "DONALD DUCK", img: "ps2-donald-duck.jpg" },
    { name: "DORA THE EXPLORER", img: "ps2-dora-the-explorer.jpg" },
    { name: "DORA JOURNEY PURPLE PLANET", img: "ps2-dora-journey-purple-planet.jpg" },
    { name: "FINDING NEMO", img: "ps2-finding-nemo.jpg" },
    { name: "PAC MAN", img: "ps2-pac-man.jpg" },
    { name: "TOM AND JERRY", img: "ps2-tom-and-jerry.jpg" },
    { name: "TOY STORY 3", img: "ps2-toy-story-3.jpg" },
    { name: "BILLIARD", img: "ps2-billiard.jpg" },
    { name: "TENNIS 2", img: "ps2-tennis-2.jpg" },
    { name: "BOMBERMAN", img: "ps2-bomberman.jpg" },
    { name: "EVIL DEAD", img: "ps2-evil-dead.jpg" },
    { name: "SEGA AGES 2500", img: "ps2-sega-ages-2500.jpg" },
    { name: "VAN HELSING", img: "ps2-van-helsing.jpg" },
    { name: "VIEWTIFUL JOE", img: "ps2-viewtiful-joe.jpg" },
    { name: "ZENA", img: "ps2-zena.jpg" },
    { name: "BUFFU", img: "ps2-buffu.jpg" },
    { name: "CRASH MASH 3", img: "ps2-crash-mash-3.jpg" },
    { name: "CASTLEVANIA", img: "ps2-castlevania.jpg" },
    { name: "CHAINEDIVE LOCK MEGA MAN", img: "ps2-chainedive-lock-mega-man.jpg" },
    { name: "CHANA ARBIK", img: "ps2-chana-arbik.jpg" },
    { name: "CHAOS LEGION", img: "ps2-chaos-legion.jpg" },
    { name: "CRASH OF THE TITANS", img: "ps2-crash-of-the-titans.jpg" },
    { name: "DEVIL MAY CRY 3", img: "ps2-devil-may-cry-3.jpg" },
    { name: "DEVIL MAY CRY", img: "ps2-devil-may-cry.jpg" },
    { name: "ERAGON", img: "ps2-eragon.jpg" },
    { name: "ESPGALUA", img: "ps2-espgalua.jpg" },
    { name: "FULLMETAL ALCHEMIST", img: "ps2-fullmetal-alchemist-broken-angel.jpg" },
    { name: "GHOST RIDER", img: "ps2-ghost-rider.jpg" },
    { name: "GLADIATOR ALT", img: "ps2-gladiator-alt.jpg" },
    { name: "GODHAND", img: "ps2-godhand.jpg" },
    { name: "GOD OF WAR 1 2 4", img: "ps2-god-of-war-1-2-4.jpg" },
    { name: "JACKIE CHAN ADVENTURES", img: "ps2-jackie-chan-adventures.jpg" },
    { name: "MORTAL KOMBAT SHAOLIN MONKS", img: "ps2-mortal-kombat-shaolin-monks.jpg" },
    { name: "THE MUMMY", img: "ps2-the-mummy.jpg" },
    { name: "TRANSFORMERS", img: "ps2-transformers-the-game.jpg" }
];

// ثوابت الأرقام
const PHONE_NUMBER = "01278566009";
const WHATSAPP_NUMBER = "201278566009";
const GAME_PRICE = "10";

// =========================================
// 2. كود تغيير اللغة (عربي / إنجليزي)
// =========================================
let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // تغيير نصوص العناصر اللي فيها data-ar و data-en
    document.querySelectorAll('[data-ar]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    // تغيير placeholder للبحث لو موجود
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = searchInput.getAttribute(`data-${currentLang}`);
    }

    // تغيير نص زرار اللغة نفسه
    document.getElementById('lang-toggle').innerText = currentLang === 'ar' ? 'English' : 'عربي';
    
    // إعادة رسم الألعاب عشان السعر يتغير لو حبيت (اختياري)
    if (document.getElementById('gamesGrid')) {
        renderGames(); 
    }
}

// =========================================
// 3. كود عرض الألعاب والبحث والفلترة
// =========================================
let currentLetter = 'all';
let searchQuery = '';

function renderGames() {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return; // لو إحنا في صفحة الرئيسية مش هيشتغل

    grid.innerHTML = ''; // تفريغ الشبكة

    // فلترة الألعاب حسب الحرف والبحث
    const filteredGames = gamesData.filter(game => {
        const matchLetter = currentLetter === 'all' || game.name.startsWith(currentLetter);
        const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchLetter && matchSearch;
    });

    if (filteredGames.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8b949e;">${currentLang === 'ar' ? 'لا توجد ألعاب مطابقة للبحث.' : 'No games found.'}</p>`;
        return;
    }

    // إنشاء الكروت
    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        // لو الصورة مش موجودة، نظهر شكل بديل
        const imageContent = `
            <img src="images/${game.img}" alt="${game.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="no-image" style="display:none;">
                ${currentLang === 'ar' ? 'صورة اللعبة' : 'Game Image'}<br>${game.img}
            </div>
        `;

        card.innerHTML = `
            <div class="game-image-container">
                ${imageContent}
            </div>
            <div class="game-info">
                <div class="game-title">PS2 - ${game.name}</div>
                <div class="game-price">${GAME_PRICE} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</div>
                <div class="game-actions">
                    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('أريد أطلب لعبة: ' + game.name)}" target="_blank" class="btn-action-wa">
                        ${currentLang === 'ar' ? 'واتساب' : 'WhatsApp'}
                    </a>
                    <a href="tel:${PHONE_NUMBER}" class="btn-action-call">
                        ${currentLang === 'ar' ? 'اتصل' : 'Call'}
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// =========================================
// 4. تشغيل الأحداث (Event Listeners)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // تفعيل البحث
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderGames();
        });
    }

    // تفعيل الفلترة الأبجدية
    const alphaButtons = document.querySelectorAll('.alpha-btn');
    if (alphaButtons.length > 0) {
        alphaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // إزالة active من كل الأزرار
                alphaButtons.forEach(b => b.classList.remove('active'));
                // إضافة active للزرار اللي اتضغط
                e.target.classList.add('active');
                
                currentLetter = e.target.getAttribute('data-letter');
                renderGames();
            });
        });
    }

    // رسم الألعاب أول مرة
    if (document.getElementById('gamesGrid')) {
        renderGames();
    }
});