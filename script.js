// =========================================
// 1. قائمة الألعاب (بيانات الألعاب مع السعر)
// =========================================
const gamesData = [
    { name: "Mortal Kombat Armageddon", img: "ps2-mortal-kombat-armageddon.jpg" },
    { name: "Delta Force Black Hawk Down", img: "ps2-black-hawk-down.jpg" },
    { name: "Jet Li Rise to Honor", img: "ps2-jt-le.jpg" },
    { name: "Bloody Roar 4", img: "ps2-bloody-roar-4.jpg" },
    { name: "Bratz Movie", img: "ps2-bratz-movie.jpg" },
    { name: "God of War 2", img: "ps2-god-of-war-2.jpg" },
    { name: "Lord of the Rings", img: "ps2-lord-of-the-rings.jpg" },
    { name: "Civil War 2", img: "ps2-civil-war-2.jpg" },
    { name: "Def Jam Fight for NY", img: "ps2-def-jam-fight.jpg" },
    { name: "Dragon Naruto One Piece", img: "ps2-dragon-naruto-onepiece.jpg" },
    { name: "Castlevania Lament of Innocence", img: "ps2-castlevania.jpg" },
    { name: "Die Hard Arcade", img: "ps2-die-hard-arcade.jpg" },
    { name: "Gladiator Sword of Vengeance", img: "ps2-gladiator.jpg" },
    { name: "Grendizer", img: "ps2-grendizer.jpg" },
    { name: "The Incredibles", img: "ps2-incredibles.jpg" },
    { name: "King Arthur", img: "ps2-king-arthur.jpg" },
    { name: "Onimusha 3 Demon Siege", img: "ps2-onimusha-3.jpg" },
    { name: "Mercenaries Playground of Destruction", img: "ps2-mercenaries.jpg" },
    { name: "Power Rangers Dino Thunder", img: "ps2-power-ranger.jpg" },
    { name: "Ratatouille", img: "ps2-ratatouille.jpg" },
    { name: "Angola 2010", img: "ps2-angola-2010.jpg" },
    { name: "FIFA Street", img: "ps2-fifa-street.jpg" },
    { name: "PES 2018", img: "ps2-pes-2018.jpg" },
    { name: "PES 2019", img: "ps2-pes-2019.jpg" },
    { name: "PES 2013", img: "ps2-pes-2013.jpg" },
    { name: "eFootball PES 2020", img: "ps2-pes-2020.jpg" },
    { name: "PES 2017", img: "ps2-pes-2017.jpg" },
    { name: "Winning 2012", img: "ps2-winning-2012.jpg" },
    { name: "eFootball 2022 PS2", img: "ps2-efootball-2022-ps2.jpg" },
    { name: "eFootball 2024", img: "ps2-pes-2024-efootball-ps2.jpg" },
    { name: "eFootball PES 2023", img: "ps2-pes-2023.jpg" },
    { name: "WWE All Stars", img: "ps2-all-stars.jpg" },
    { name: "WWE SmackDown vs Raw", img: "ps2-smackdown-2005.jpg" },
    { name: "WWE SmackDown Here Comes the Pain", img: "ps2-smackdown-2004.jpg" },
    { name: "WWE Smackdown vs Raw 2019", img: "ps2-w2k19.jpg" },
    { name: "WWE Smackdown vs Raw 2011", img: "ps2-wwe-2011.jpg" },
    { name: "Quest for Aladdin's Treasure", img: "ps2-ala-eldin.jpg" },
    { name: "Batman Begins", img: "ps2-batman-begins.jpg" },
    { name: "Batman Vengeance", img: "ps2-batman.jpg" },
    { name: "Ben 10 Alien Force", img: "ps2-ben-10-alien-force.jpg" },
    { name: "Iron Man", img: "ps2-iron-man.jpg" },
    { name: "Justice League Heroes", img: "ps2-justice-league-heroes.jpg" },
    { name: "Teenage Mutant Ninja Turtles 2", img: "ps2-ninja-turtles-2.jpg" },
    { name: "Spider-Man 2", img: "ps2-spider-man-2.jpg" },
    { name: "Spider Man 4", img: "ps2-spider-man-4.jpg" },
    { name: "Tarzan Untamed", img: "ps2-tarzan-2.jpg" },
    { name: "Ultimate Spider Man", img: "ps2-ultimate-spider-man.jpg" },
    { name: "X-Men Legends", img: "ps2-x-men-legends.jpg" },
    { name: "GTA Vice City", img: "ps2-gta-vice-city.jpg" },
    { name: "GTA San Andreas", img: "ps2-gta-san-andreas.jpg" },
    { name: "Dragon Ball Z Sagas", img: "ps2-dbz-sagas.jpg" },
    { name: "Dragon Ball Z Budokai 3", img: "ps2-dragon-ball-z.jpg" },
    { name: "King of Fighters Neowave", img: "ps2-kof-2003.jpg" },
    { name: "King of Fighters Maximum Impact", img: "ps2-kof-maximum-impact.jpg" },
    { name: "Mortal Kombat Deception", img: "ps2-mortal-kombat-6.jpg" },
    { name: "Naruto Shippuden Ultimate Ninja 4", img: "ps2-naruto-shippuden-4.jpg" },
    { name: "Fighting for One Piece", img: "ps2-one-piece.jpg" },
    { name: "Tekken Tag Tournament", img: "ps2-tekken-tag.jpg" },
    { name: "War of the Monsters", img: "ps2-war-of-the-monsters.jpg" },
    { name: "Driver 3", img: "ps2-driver-3.jpg" },
    { name: "MotoGP 4", img: "ps2-motogp-4.jpg" },
    { name: "Burnout Revenge", img: "ps2-burnout-4.jpg" },
    { name: "Rumble Racing", img: "ps2-car-rumbel.jpg" },
    { name: "Crazy Frog Racer", img: "ps2-crazy-frog-racer.jpg" },
    { name: "Crazy Taxi", img: "ps2-crazy-taxi-11.jpg" },
    { name: "Devil Kings", img: "ps2-devil-kings.jpg" },
    { name: "Freekstyle", img: "ps2-motoseklat.jpg" },
    { name: "Need for Speed Hot Pursuit 2", img: "ps2-nfs-hot-pursuit-3.jpg" },
    { name: "Need for Speed Underground 2", img: "ps2-nfs-underground-2.jpg" },
    { name: "Need for Speed Carbon", img: "ps2-nfs-carbon.jpg" },
    { name: "Crash Nitro Kart", img: "ps2-crash-nitro.jpg" },
    { name: "Psi-Ops The Mindgate Conspiracy", img: "ps2-black-ops-1.jpg" },
    { name: "Gun Survivor 3 Dino Crisis", img: "ps2-gun-survivor-3.jpg" },
    { name: "Hitman Contracts", img: "ps2-hitman-3.jpg" },
    { name: "Aliens vs Predator Extinction", img: "ps2-aliens-vs-predator-extinction.jpg" },
    { name: "Army Men Sarge War", img: "ps2-army-men-sarge-war.jpg" },
    { name: "Bad Boys 2", img: "ps2-bad-boys-2.jpg" },
    { name: "Call of Duty 3", img: "ps2-call-of-duty-3.jpg" },
    { name: "Call of Duty World at War", img: "ps2-call-of-duty-4-world-at-war.jpg" },
    { name: "Dead to Rights II", img: "ps2-dead-to-rights.jpg" },
    { name: "Metal Slug 6", img: "ps2-metal-slug-6.jpg" },
    { name: "Metal Slug Anthology", img: "ps2-metal-slug-anthology.jpg" },
    { name: "Medal of Honor Frontline", img: "ps2-medal-of-honor.jpg" },
    { name: "Metal Slug 4", img: "ps2-metal-slug-4.jpg" },
    { name: "Metal Slug 5", img: "ps2-metal-slug-5.jpg" },
    { name: "Resident Evil Dead Aim", img: "ps2-resident-evil-dead-aim.jpg" },
    { name: "Resident Evil Code Veronica X", img: "ps2-resident-evil-code-veronica-x.jpg" },
    { name: "Resident Evil Outbreak", img: "ps2-resident-evil-outbreak.jpg" },
    { name: "Resident Evil 4", img: "ps2-resident-evil-4.jpg" },
    { name: "Terminator 3 The Redemption", img: "ps2-t3-redemption.jpg" },
    { name: "007 Agent Under Fire", img: "ps2-under-fire-007.jpg" },
    { name: "Dead to Rights", img: "ps2-dead-2-rights.jpg" },
    { name: "Jaws Unleashed", img: "ps2-jaws.jpg" },
    { name: "Barbie Horse Adventures", img: "ps2-barbie-horse.jpg" },
    { name: "Barbie as The Island Princess", img: "ps2-barbie-island-princess.jpg" },
    { name: "Donald Duck PK", img: "ps2-donald-duck.jpg" },
    { name: "Dora the Explorer", img: "ps2-dora-journey-purple-planet.jpg" },
    { name: "Finding Nemo", img: "ps2-finding-nemo.jpg" },
    { name: "Pac-Man World Rally", img: "ps2-pac-man.jpg" },
    { name: "Tom and Jerry", img: "ps2-tom-and-jerry.jpg" },
    { name: "Toy Story 3", img: "ps2-toy-story-3.jpg" },
    { name: "International Pool Championship", img: "ps2-billiard.jpg" },
    { name: "Virtua Tennis 2", img: "ps2-tennis-2.jpg" },
    { name: "Evil Dead Regeneration", img: "ps2-evil-dead.jpg" },
    { name: "Van Helsing", img: "ps2-van-helsing.jpg" },
    { name: "Viewtiful Joe", img: "ps2-viewtiful-joe.jpg" },
    { name: "Xena Warrior Princess", img: "ps2-zena.jpg" },
    { name: "Buffy Chaos Bleeds", img: "ps2-buffu.jpg" },
    { name: "Crash The Wrath of Cortex", img: "ps2-crash-mash-3.jpg" },
    { name: "Castlevania", img: "ps2-castlevania.jpg" },
    { name: "ChainDive", img: "ps2-chainedive.jpg" },
    { name: "The Legend of China Chuanqi", img: "ps2-chana-arbik.jpg" },
    { name: "Chaos Legion", img: "ps2-chaos-legion.jpg" },
    { name: "Crash of the Titans", img: "ps2-crash-of-the-titans.jpg" },
    { name: "Devil May Cry 3", img: "ps2-devil-may-cry-3.jpg" },
    { name: "Eragon", img: "ps2-eragon.jpg" },
    { name: "Espgaluda", img: "ps2-espgalua.jpg" },
    { name: "Fullmetal Alchemist Broken Angel", img: "ps2-fullmetal-alchemist-broken-angel.jpg" },
    { name: "Ghost Rider", img: "ps2-ghost-rider.jpg" },
    { name: "God Hand", img: "ps2-godhand.jpg" },
    { name: "God of War", img: "ps2-god-of-war.jpg" },
    { name: "Jackie Chan Adventures", img: "ps2-jackie-chan-adventures.jpg" },
    { name: "Mortal Kombat Shaolin Monks", img: "ps2-mortal-kombat-shaolin-monks.jpg" },
    { name: "The Mummy Returns", img: "ps2-the-mummy.jpg" },
    { name: "Transformers The Game", img: "ps2-transformers-the-game.jpg" },
    { name: "Incredible Hulk Ultimate Destruction", img: "ps2-halk.jpg" },
    { name: "Need for Speed Most Wanted", img: "ps2-nfs-most.jpg" },
    { name: "Twisted Metal Black", img: "ps2-twisted-black.jpg" },
    { name: "Superman Shadow of Apokolips", img: "ps2-superman.jpg" },
    { name: "Ben 10 Protector of Earth", img: "ps2-ben10-pro.jpg" },
    { name: "Ben 10 Ultimate Alien", img: "ps2-ben10-ultimate-alien.jpg" },
    { name: "GTA 3", img: "ps2-gta3.jpg" },
    { name: "Marvel vs Capcom 2", img: "ps2-marvel-capcom2.jpg" },
    { name: "Mission Impossible Operation Surma", img: "ps2-mission-impossible.jpg" },
    { name: "Prince of Persia Trilogy", img: "ps2-prince-trilogy.jpg" },
    { name: "SpongeBob and Friends Unite", img: "ps2-spongebop-friends.jpg" },
    { name: "Tekken 4", img: "ps2-tekken4.jpg" },
    { name: "Need for Speed Undercover", img: "ps2-nfs-under.jpg" }
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

    document.querySelectorAll('[data-ar]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = searchInput.getAttribute(`data-${currentLang}`);
    }

    document.getElementById('lang-toggle').innerText = currentLang === 'ar' ? 'English' : 'عربي';
    
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
    if (!grid) return;

    grid.innerHTML = '';

    const filteredGames = gamesData.filter(game => {
        const matchLetter = currentLetter === 'all' || game.name.startsWith(currentLetter);
        const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchLetter && matchSearch;
    });

    if (filteredGames.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8b949e;">${currentLang === 'ar' ? 'لا توجد ألعاب مطابقة للبحث.' : 'No games found.'}</p>`;
        return;
    }

    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
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
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderGames();
        });
    }

    const alphaButtons = document.querySelectorAll('.alpha-btn');
    if (alphaButtons.length > 0) {
        alphaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                alphaButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                currentLetter = e.target.getAttribute('data-letter');
                renderGames();
            });
        });
    }

    if (document.getElementById('gamesGrid')) {
        renderGames();
    }
});