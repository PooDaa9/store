// =========================================
// 1. قائمة الألعاب (بيانات الألعاب مع السعر)
// =========================================
const ps2Games = [
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
    { name: "Disney's Stitch Experiment 626", img: "ps2-stitch626.jpg" },
    { name: "Ed, Edd n Eddy The Mis-Edventures", img: "ps2-ed-edd.jpg" },
    { name: "Harry Potter e la camera dei segreti", img: "ps2-harry-potter.jpg" },
    { name: "Incredible Hulk", img: "ps2-incredible-hulk-1.jpg" },
    { name: "DreamWorks Kung Fu Panda", img: "ps2-kungfu-oanda.jpg" },
    { name: "Metal Slug 3", img: "ps2-metal-slug-3.jpg" },
    { name: "Neo Contra", img: "ps2-neo-contra.jpg" },
    { name: "Teenage Mutant Ninja Turtles", img: "ps2-teemage-ninja.jpg" },
    { name: "TMNT The Videogame", img: "ps2-tmnt-the-game.jpg" },
    { name: "Sonic Riders", img: "ps2-sonic-riders.jpg" },
    { name: "Spider-Man 3", img: "ps2-spider-man-3.jpg" },
    { name: "SpongeBob SquarePants Revenge of the Flying Dutchman", img: "ps2-spongebob-flying.jpg" },
    { name: "Bloody Roar 3", img: "ps2-bloody-roar-3.jpg" },
    { name: "Marvel Ultimate Alliance 2", img: "ps2-marval-ultimate-allince2.jpg" },
    { name: "Tom Clancy's Ghost Recon Jungle Storm", img: "ps2-jungle-storm.jpg" },
    { name: "Jit lee Rise to Honor 2", img: "ps2-jit-lee-2.jpg" },
    { name: "Jumper Griffin's Story", img: "ps2-jumper.jpg" },
    { name: "Sonic Unleashed", img: "ps2-sonic-unleashed.jpg" },
    { name: "The Matrix Path of Neo", img: "ps2-the-matrix.jpg" },
    { name: "Soulcalibur II", img: "ps2-soulcalibur-2.jpg" },
    { name: "Need for Speed Undercover", img: "ps2-nfs-under.jpg" }
];

// قائمة ألعاب PSP
const pspGames = [
    { name: "Ben 10 Protector of Earth", img: "psp-ben10-pro.jpg" },
    { name: "Call of Duty Roads to Victory", img: "psp-cod-roads.jpg" },
    { name: "FIFA Street 2", img: "psp-fifa-street-2.jpg" },
    { name: "Grand Theft Auto Vice City Stories", img: "psp-gta-vice-city-stories.jpg" },
    { name: "Metal Slug Anthology", img: "psp-metal-slug-anthology.jpg" },
    { name: "Mortal Kombat Unchained", img: "psp-mortal-kombat-unchained.jpg" },
    { name: "Pro Evolution Soccer 2014", img: "psp-pes-2014.jpg" },
    { name: "WWE SmackDown vs RAW 2011", img: "psp-wwe-2011.jpg" }
];

// قائمة ألعاب PS3
const ps3Games = [
    { name: "Assassin's Creed: Brotherhood", img: "ps3-ac-brotherhood.jpg" },
    { name: "Adventure Time The Secret of the Nameless Kingdom", img: "ps3-adventure-time.jpg" },
    { name: "Afro Samurai", img: "ps3-afro-samurai.jpg" },
    { name: "Aliens Colonial Marines", img: "ps3-aliens-colonial-marines.jpg" },
    { name: "Alone in the Dark", img: "ps3-alone-in-the-dark.jpg" },
    { name: "Alpha Protocol", img: "ps3-alpha-protocol.jpg" },
    { name: "Angry Birds Star Wars", img: "ps3-angry-birds-star-wars.jpg" },
    { name: "Angry Birds Trilogy", img: "ps3-angry-birds-trilogy.jpg" },
    { name: "Army of Two The 40th Day", img: "ps3-army-of-two-the-40th-day.jpg" },
    { name: "Army of Two The Devils Cartel", img: "ps3-army-of-two-the-devils-cartel.jpg" },
    { name: "Arthur and the Revenge of Maltazard", img: "ps3-arthur-and-the-revenge-of-maltazard.jpg" },
    { name: "Assassins Creed", img: "ps3-assassins-creed.jpg" },
    { name: "Assassins Creed II", img: "ps3-assassins-creed-ii.jpg" },
    { name: "Assassins Creed III", img: "ps3-assassins-creed-iii.jpg" },
    { name: "Assassins Creed IV Black Flag", img: "ps3-assassins-creed-iv-black-flag.jpg" },
    { name: "Assassins Creed Rogue", img: "ps3-assassins-creed-rogue.jpg" },
    { name: "Avatar THE GAME", img: "ps3-avatar.jpg" },
    { name: "Barbie and Her Sisters Puppy Rescue", img: "ps3-barbie-and-her-sisters-puppy-rescue.jpg" },
    { name: "Batman Arkham Asylum Game of the Year Edition", img: "ps3-batman-arkham-asylum-game-of-the-year-edition.jpg" },
    { name: "Batman Arkham City", img: "ps3-batman-arkham-city.jpg" },
    { name: "Batman Arkham Origins", img: "ps3-batman-arkham-origins.jpg" },
    { name: "Battle vs Chess", img: "ps3-battle-vs-chess.jpg" },
    { name: "Battlefield 4", img: "ps3-battlefield-4.jpg" },
    { name: "Battlefield Hardline", img: "ps3-battlefield-hardline.jpg" },
    { name: "Ben 10 Omniverse", img: "ps3-ben-10-omniverse.jpg" },
    { name: "Ben 10 Omniverse 2", img: "ps3-ben-10-omniverse-2.jpg" },
    { name: "Ben 10 Ultimate Alien Cosmic Destruction", img: "ps3-ben-10-ultimate-alien-cosmic-destruction.jpg" },
    { name: "Beowulf", img: "ps3-beowulf.jpg" },
    { name: "Bionic Commando", img: "ps3-bionic-commando.jpg" },
    { name: "BioShock", img: "ps3-bioshock.jpg" },
    { name: "BioShock 2", img: "ps3-bioshock-2.jpg" },
    { name: "BioShock Infinite Complete Edition", img: "ps3-bioshock-infinite-complete-edition.jpg" },
    { name: "Blades of Time", img: "ps3-blades-of-time.jpg" },
    { name: "Bladestorm", img: "ps3-bladestorm.jpg" },
    { name: "Blur", img: "ps3-blur.jpg" },
    { name: "Bullstorm", img: "ps3-bullstorm.jpg" },
    { name: "Burnout Paradise", img: "ps3-burnout-paradise.jpg" },
    { name: "Burnout Paradise The Ultimate Box", img: "ps3-burnout-paradise-the-ultimate-box.jpg" },
    { name: "Cabelas African Adventures", img: "ps3-cabelas-african-adventures.jpg" },
    { name: "Call of Duty 4 Modern Warfare", img: "ps3-call-of-duty-4-modern-warfare.jpg" },
    { name: "Call of Duty Advanced Warfare", img: "ps3-call-of-duty-advanced-warfare.jpg" },
    { name: "Call of Duty Black Ops", img: "ps3-call-of-duty-black-ops.jpg" },
    { name: "Call of Duty Black Ops II", img: "ps3-call-of-duty-black-ops-ii.jpg" },
    { name: "Call of Duty Black Ops III", img: "ps3-call-of-duty-black-ops-iii.jpg" },
    { name: "Call of Duty Ghosts", img: "ps3-call-of-duty-ghosts.jpg" },
    { name: "Call of Duty Modern Warfare 2", img: "ps3-call-of-duty-modern-warfare-2.jpg" },
    { name: "Call of Duty Modern Warfare 3", img: "ps3-call-of-duty-modern-warfare-3.jpg" },
    { name: "Captain America", img: "ps3-captain-america.jpg" },
    { name: "Cars 2", img: "ps3-cars-2.jpg" },
    { name: "Cartoon Network Punch Time Explosion XL", img: "ps3-cartoon-network-punch-time-explosion-xl.jpg" },
    { name: "Castlevania Lords of Shadow", img: "ps3-castlevania-lords-of-shadow.jpg" },
    { name: "Castlevania Lords of Shadow 2", img: "ps3-castlevania-lords-of-shadow-2.jpg" },
    { name: "Crysis 3", img: "ps3-crysis-3.jpg" },
    { name: "Dark Sector", img: "ps3-dark-sector.jpg" },
    { name: "Dark Souls", img: "ps3-dark-souls.jpg" },
    { name: "Darksiders II", img: "ps3-darksiders-ii.jpg" },
    { name: "Dead Island", img: "ps3-dead-island.jpg" },
    { name: "Dead Island Riptide", img: "ps3-dead-island-riptide.jpg" },
    { name: "Dead or Alive 5 Last Round", img: "ps3-dead-or-alive-5-last-round.jpg" },
    { name: "Dead Rising 2 Off the Record", img: "ps3-dead-rising-2-off-the-record.jpg" },
    { name: "Dead Space", img: "ps3-dead-space.jpg" },
    { name: "Dead to Rights Retribution", img: "ps3-dead-to-rights-retribution.jpg" },
    { name: "Deadpool", img: "ps3-deadpool.jpg" },
    { name: "Demon's Souls", img: "ps3-demons-souls.jpg" },
    { name: "Deus Ex Human Revolution", img: "ps3-deus-ex-human-revolution.jpg" },
    { name: "Devil May Cry 4", img: "ps3-devil-may-cry-4.jpg" },
    { name: "Diablo III", img: "ps3-diablo-iii.jpg" },
    { name: "Diablo III Reaper of Souls Ultimate Evil Edition", img: "ps3-diablo-iii-reaper-of-souls-ultimate-evil-edition.jpg" },
    { name: "Dirt 3", img: "ps3-dirt-3.jpg" },
    { name: "Dirt Showdown", img: "ps3-dirt-showdown.jpg" },
    { name: "Disney Bolt", img: "ps3-disney-bolt.jpg" },
    { name: "Disney Pixar Brave", img: "ps3-disney-pixar-brave.jpg" },
    { name: "Disney Universe", img: "ps3-disney-universe.jpg" },
    { name: "Dragon Age II", img: "ps3-dragon-age-ii.jpg" },
    { name: "Dragon Age Inquisition", img: "ps3-dragon-age-inquisition.jpg" },
    { name: "Dragon Ball Raging Blast 2", img: "ps3-dragon-ball-raging-blast-2.jpg" },
    { name: "Dragon Ball Z Battle of Z", img: "ps3-dragon-ball-z-battle-of-z.jpg" },
    { name: "Dragon Ball Z Burst Limit", img: "ps3-dragon-ball-z-burst-limit.jpg" },
    { name: "Dragon Ball Xenoverse", img: "ps3-dragon-ball-xenoverse.jpg" },
    { name: "Driver San Francisco", img: "ps3-driver-san-francisco.jpg" },
    { name: "Dynasty Warriors 6 Empires", img: "ps3-dynasty-warriors-6-empires.jpg" },
    { name: "EA Sports MMA", img: "ps3-ea-sports-mma.jpg" },
    { name: "EA Sports Grand Slam Tennis 2", img: "ps3-ea-sports-grand-slam-tennis-2.jpg" },
    { name: "Earth Defense Force 2025", img: "ps3-earth-defense-force-2025.jpg" },
    { name: "Enslaved Odyssey to the West", img: "ps3-enslaved-odyssey-to-the-west.jpg" },
    { name: "F.E.A.R.", img: "ps3-fear.jpg" },
    { name: "Fairy Fencer F", img: "ps3-fairy-fencer-f.jpg" },
    { name: "Fallout 3", img: "ps3-fallout-3.jpg" },
    { name: "Fantastic 4", img: "ps3-fantastic-4.jpg" },
    { name: "Far Cry 3", img: "ps3-far-cry-3.jpg" },
    { name: "Far Cry 4", img: "ps3-far-cry-4.jpg" },
    { name: "Fast & Furious Showdown", img: "ps3-fast-and-furious-showdown.jpg" },
    { name: "FIFA 19", img: "ps3-fifa-19.jpg" },
    { name: "FIFA Street 3", img: "ps3-fifa-street-3.jpg" },
    { name: "FIFA Street 4", img: "ps3-fifa-street-4.jpg" },
    { name: "Fight Night Round 4", img: "ps3-fight-night-round-4.jpg" },
    { name: "Fracture", img: "ps3-fracture.jpg" },
    { name: "G-Force", img: "ps3-g-force.jpg" },
    { name: "GI Joe Rise of Cobra", img: "ps3-gi-joe-rise-of-cobra.jpg" },
    { name: "God of War 3", img: "ps3-god-of-war-3.jpg" },
    { name: "God of War Ascension", img: "ps3-god-of-war-ascension.jpg" },
    { name: "God of War Collection", img: "ps3-god-of-war-collection.jpg" },
    { name: "Godzilla", img: "ps3-godzilla.jpg" },
    { name: "Green Lantern Rise of the Manhunters", img: "ps3-green-lantern-rise-of-the-manhunters.jpg" },
    { name: "GRID 2", img: "ps3-grid-2.jpg" },
    { name: "GTA IV", img: "ps3-gta-iv.jpg" },
    { name: "GTA V", img: "ps3-gta-v.jpg" },
    { name: "GTA San Andreas", img: "ps3-gta-san-andreas.jpg" },
    { name: "Guilty Gear Xrd", img: "ps3-guilty-gear-xrd.jpg" },
    { name: "Hannah Montana The Movie", img: "ps3-hannah-montana-the-movie.jpg" },
    { name: "Harry Potter", img: "ps3-harry-potter.jpg" },
    { name: "Hellboy", img: "ps3-hellboy.jpg" },
    { name: "Hitman HD Trilogy", img: "ps3-hitman-hd-trilogy.jpg" },
    { name: "Homefront", img: "ps3-homefront.jpg" },
    { name: "Hot Wheels Worlds Best Driver", img: "ps3-hot-wheels-worlds-best-driver.jpg" },
    { name: "How to Train Your Dragon 2", img: "ps3-how-to-train-your-dragon-2.jpg" },
    { name: "Ice Age 3", img: "ps3-ice-age-3.jpg" },
    { name: "Ice Age 4 Continental Drift Arctic Games", img: "ps3-ice-age-4-continental-drift-arctic-games.jpg" },
    { name: "inFAMOUS", img: "ps3-infamous.jpg" },
    { name: "inFAMOUS 2", img: "ps3-infamous-2.jpg" },
    { name: "Injustice Gods Among Us", img: "ps3-injustice-gods-among-us.jpg" },
    { name: "Injustice Gods Among Us Ultimate Edition", img: "ps3-injustice-gods-among-us-ultimate-edition.jpg" },
    { name: "Iron Man 2", img: "ps3-iron-man-2.jpg" },
    { name: "James Bond Blood Stone", img: "ps3-james-bond-blood-stone.jpg" },
    { name: "JoJos Bizarre Adventure All Star Battle", img: "ps3-jojos-bizarre-adventure-all-star-battle.jpg" },
    { name: "Just Cause 2", img: "ps3-just-cause-2.jpg" },
    { name: "Kane and Lynch Dead Men", img: "ps3-kane-and-lynch-dead-men.jpg" },
    { name: "Killzone 3", img: "ps3-killzone-3.jpg" },
    { name: "Kung Fu Panda Showdown of Legendary Legends", img: "ps3-kung-fu-panda-showdown-of-legendary-legends.jpg" },
    { name: "Le Tour de France 2012", img: "ps3-le-tour-de-france-2012.jpg" },
    { name: "Lego Batman 3", img: "ps3-lego-batman-3.jpg" },
    { name: "Lego Indiana Jones 2 The Adventure Continues", img: "ps3-lego-indiana-jones-2-the-adventure-continues.jpg" },
    { name: "Lego Jurassic World", img: "ps3-lego-jurassic-world.jpg" },
    { name: "Lego Marvel Super Heroes", img: "ps3-lego-marvel-super-heroes.jpg" },
    { name: "LittleBigPlanet 3", img: "ps3-littlebigplanet-3.jpg" },
    { name: "LittleBigPlanet Karting", img: "ps3-littlebigplanet-karting.jpg" },
    { name: "Madagascar Kartz", img: "ps3-madagascar-kartz.jpg" },
    { name: "Mafia II", img: "ps3-mafia-ii.jpg" },
    { name: "Marvel vs Capcom 3", img: "ps3-marvel-vs-capcom-3.jpg" },
    { name: "Mass Effect 2", img: "ps3-mass-effect-2.jpg" },
    { name: "Max Payne 3", img: "ps3-max-payne-3.jpg" },
    { name: "Medal of Honor", img: "ps3-medal-of-honor.jpg" },
    { name: "Medal of Honor Airborne", img: "ps3-medal-of-honor-airborne.jpg" },
    { name: "Medal of Honor Warfighter", img: "ps3-medal-of-honor-warfighter.jpg" },
    { name: "Megamind", img: "ps3-megamind.jpg" },
    { name: "Metal Gear Solid 4 Guns of the Patriots", img: "ps3-metal-gear-solid-4-guns-of-the-patriots.jpg" },
    { name: "Metal Gear Solid V Ground Zeroes", img: "ps3-metal-gear-solid-v-ground-zeroes.jpg" },
    { name: "Metal Gear Solid V The Phantom Pain", img: "ps3-metal-gear-solid-v-the-phantom-pain.jpg" },
    { name: "Metal Gear Rising Revengeance", img: "ps3-metal-gear-rising-revengeance.jpg" },
    { name: "Metro Last Light", img: "ps3-metro-last-light.jpg" },
    { name: "Middle Earth Shadow of Mordor", img: "ps3-middle-earth-shadow-of-mordor.jpg" },
    { name: "Midnight Club Los Angeles", img: "ps3-midnight-club-los-angeles.jpg" },
    { name: "Minecraft PlayStation 3 Edition", img: "ps3-minecraft-playstation-3-edition.jpg" },
    { name: "Minecraft Story Mode", img: "ps3-minecraft-story-mode.jpg" },
    { name: "Monopoly", img: "ps3-monopoly.jpg" },
    { name: "Monsters vs Aliens", img: "ps3-monsters-vs-aliens.jpg" },
    { name: "Mortal Kombat Komplete Edition", img: "ps3-mortal-kombat-komplete-edition.jpg" },
    { name: "Mortal Kombat vs DC Universe", img: "ps3-mortal-kombat-vs-dc-universe.jpg" },
    { name: "Motorstorm", img: "ps3-motorstorm.jpg" },
    { name: "Motorcycle Club", img: "ps3-motorcycle-club.jpg" },
    { name: "Motorstorm Apocalypse", img: "ps3-motorstorm-apocalypse.jpg" },
    { name: "Murdered Soul Suspect", img: "ps3-murdered-soul-suspect.jpg" },
    { name: "MX vs ATV Supercross", img: "ps3-mx-vs-atv-supercross.jpg" },
    { name: "Naruto Shippuden Ultimate Ninja Storm 3", img: "ps3-naruto-shippuden-ultimate-ninja-storm-3.jpg" },
    { name: "Naruto Shippuden Ultimate Ninja Storm Generations", img: "ps3-naruto-shippuden-ultimate-ninja-storm-generations.jpg" },
    { name: "Naruto Shippuden Ultimate Ninja Storm Revolution", img: "ps3-naruto-shippuden-ultimate-ninja-storm-revolution.jpg" },
    { name: "NBA 2K17", img: "ps3-nba-2k17.jpg" },
    { name: "NBA 2K18", img: "ps3-nba-2k18.jpg" },
    { name: "NBA Jam", img: "ps3-nba-jam.jpg" },
    { name: "NBA Street Home Court", img: "ps3-nba-street-home-court.jpg" },
    { name: "Need for Speed Most Wanted", img: "ps3-need-for-speed-most-wanted.jpg" },
    { name: "Need for Speed Rivals", img: "ps3-need-for-speed-rivals.jpg" },
    { name: "Need for Speed The Run", img: "ps3-need-for-speed-the-run.jpg" },
    { name: "Need for Speed Undercover", img: "ps3-need-for-speed-undercover.jpg" },
    { name: "NeverDead", img: "ps3-neverdead.jpg" },
    { name: "Ninja Gaiden 2", img: "ps3-ninja-gaiden-2.jpg" },
    { name: "Ninja Gaiden 3", img: "ps3-ninja-gaiden-3.jpg" },
    { name: "One Piece Pirate Warriors 3", img: "ps3-one-piece-pirate-warriors-3.jpg" },
    { name: "One Piece Unlimited World Red", img: "ps3-one-piece-unlimited-world-red.jpg" },
    { name: "Pac-Man and the Ghostly Adventures 2", img: "ps3-pac-man-and-the-ghostly-adventures-2.jpg" },
    { name: "Payday 2", img: "ps3-payday-2.jpg" },
    { name: "Pirates of the Caribbean At Worlds End", img: "ps3-pirates-of-the-caribbean-at-worlds-end.jpg" },
    { name: "Prince of Persia The Forgotten Sands", img: "ps3-prince-of-persia-the-forgotten-sands.jpg" },
    { name: "Prince of Persia Trilogy", img: "ps3-prince-of-persia-trilogy.jpg" },
    { name: "Pro Evolution Soccer 2013", img: "ps3-pro-evolution-soccer-2013.jpg" },
    { name: "Pro Evolution Soccer 2016", img: "ps3-pro-evolution-soccer-2016.jpg" },
    { name: "Pro Evolution Soccer 2018", img: "ps3-pro-evolution-soccer-2018.jpg" },
    { name: "Pro Evolution Soccer 2023", img: "ps3-pro-evolution-soccer-2023.jpg" },
	{ name: "Pro Evolution Soccer 2026", img: "ps3-pro-evolution-soccer-2026.jpg" },
    { name: "Prototype", img: "ps3-prototype.jpg" },
    { name: "Prototype 2", img: "ps3-prototype-2.jpg" },
    { name: "Rango", img: "ps3-rango.jpg" },
    { name: "Ratatouille", img: "ps3-ratatouille.jpg" },
    { name: "Rayman Legends", img: "ps3-rayman-legends.jpg" },
    { name: "Red Dead Redemption", img: "ps3-red-dead-redemption.jpg" },
    { name: "Red Dead Redemption Nightmare", img: "ps3-red-dead-redemption-nightmare.jpg" },
    { name: "Red Faction Armageddon", img: "ps3-red-faction-armageddon.jpg" },
    { name: "Ride", img: "ps3-ride.jpg" },
    { name: "Rio", img: "ps3-rio.jpg" },
    { name: "Saints Row 2", img: "ps3-saints-row-2.jpg" },
    { name: "Saints Row IV", img: "ps3-saints-row-iv.jpg" },
    { name: "Saints Row The Third", img: "ps3-saints-row-the-third.jpg" },
    { name: "Shift 2 Unleashed", img: "ps3-shift-2-unleashed.jpg" },
    { name: "Silent Hill Downpour", img: "ps3-silent-hill-downpour.jpg" },
    { name: "Skyrim", img: "ps3-skyrim.jpg" },
    { name: "Sleeping Dogs", img: "ps3-sleeping-dogs.jpg" },
    { name: "Sniper Elite 3", img: "ps3-sniper-elite-3.jpg" },
    { name: "Sniper Elite V2", img: "ps3-sniper-elite-v2.jpg" },
    { name: "Sniper Ghost Warrior", img: "ps3-sniper-ghost-warrior.jpg" },
    { name: "Sonata", img: "ps3-sonata.jpg" },
    { name: "Sonic AllStars Racing Transformed", img: "ps3-sonic-allstars-racing-transformed.jpg" },
    { name: "Sonic Ultimate Genesis Collection", img: "ps3-sonic-ultimate-genesis-collection.jpg" },
    { name: "Spec Ops The Line", img: "ps3-spec-ops-the-line.jpg" },
    { name: "Spider-Man Edge of Time", img: "ps3-spider-man-edge-of-time.jpg" },
    { name: "Spider-Man Shattered Dimensions", img: "ps3-spider-man-shattered-dimensions.jpg" },
    { name: "Split Second Velocity", img: "ps3-split-second-velocity.jpg" },
    { name: "SpongeBob SquarePants Planktons Robotic Revenge", img: "ps3-spongebob-squarepants-planktons-robotic-revenge.jpg" },
    { name: "Sports Champions", img: "ps3-sports-champions.jpg" },
    { name: "Start the Party", img: "ps3-start-the-party.jpg" },
    { name: "Street Fighter IV", img: "ps3-street-fighter-iv.jpg" },
    { name: "Street Fighter X Tekken", img: "ps3-street-fighter-x-tekken.jpg" },
    { name: "Super Mario Bros", img: "ps3-super-mario-bros.jpg" },
    { name: "Super Street Fighter IV", img: "ps3-super-street-fighter-iv.jpg" },
    { name: "Teenage Mutant Ninja Turtles Danger of the Ooze", img: "ps3-teenage-mutant-ninja-turtles-danger-of-the-ooze.jpg" },
    { name: "Tekken 6", img: "ps3-tekken-6.jpg" },
    { name: "Tekken Tag Tournament 2", img: "ps3-tekken-tag-tournament-2.jpg" },
    { name: "The Amazing Spider-Man", img: "ps3-the-amazing-spider-man.jpg" },
    { name: "The Amazing Spider-Man 2", img: "ps3-the-amazing-spider-man-2.jpg" },
    { name: "The Evil Within", img: "ps3-the-evil-within.jpg" },
    { name: "The Golden Compass", img: "ps3-the-golden-compass.jpg" },
    { name: "The Jak and Daxter Trilogy", img: "ps3-the-jak-and-daxter-trilogy.jpg" },
    { name: "The Last of Us", img: "ps3-the-last-of-us.jpg" },
    { name: "The Lego Movie Videogame", img: "ps3-the-lego-movie-videogame.jpg" },
    { name: "The Lord of the Rings Conquest", img: "ps3-the-lord-of-the-rings-conquest.jpg" },
    { name: "The Shoot", img: "ps3-the-shoot.jpg" },
    { name: "The Smurfs 2", img: "ps3-the-smurfs-2.jpg" },
    { name: "The Walking Dead", img: "ps3-the-walking-dead.jpg" },
    { name: "The Incredible Hulk", img: "ps3-the-incredible-hulk.jpg" },
    { name: "Thief", img: "ps3-thief.jpg" },
    { name: "Thor God of Thunder", img: "ps3-thor-god-of-thunder.jpg" },
    { name: "Tom Clancys Ghost Recon Advanced Warfighter 2", img: "ps3-tom-clancys-ghost-recon-advanced-warfighter-2.jpg" },
    { name: "Tomb Raider", img: "ps3-tomb-raider.jpg" },
    { name: "Tony Hawks Proving Ground", img: "ps3-tony-hawks-proving-ground.jpg" },
    { name: "Top Spin 4", img: "ps3-top-spin-4.jpg" },
    { name: "Toy Story 3", img: "ps3-toy-story-3.jpg" },
    { name: "Transformers Rise of the Dark Spark", img: "ps3-transformers-rise-of-the-dark-spark.jpg" },
    { name: "Tron Evolution", img: "ps3-tron-evolution.jpg" },
    { name: "Turbo Super Stunt Squad", img: "ps3-turbo-super-stunt-squad.jpg" },
    { name: "Two Worlds II", img: "ps3-two-worlds-ii.jpg" },
    { name: "Uncharted 2 Among Thieves", img: "ps3-uncharted-2-among-thieves.jpg" },
    { name: "Uncharted 3 Drakes Deception", img: "ps3-uncharted-3-drakes-deception.jpg" },
    { name: "Uncharted Drakes Fortune", img: "ps3-uncharted-drakes-fortune.jpg" },
    { name: "Unreal Tournament 3", img: "ps3-unreal-tournament-3.jpg" },
    { name: "UP", img: "ps3-up.jpg" },
    { name: "Virtua Tennis 4", img: "ps3-virtua-tennis-4.jpg" },
    { name: "Watch Dogs", img: "ps3-watch-dogs.jpg" },
    { name: "Wet", img: "ps3-wet.jpg" },
    { name: "WWE 2K16", img: "ps3-wwe-2k16.jpg" },
    { name: "WWE 2K17", img: "ps3-wwe-2k17.jpg" },
    { name: "WWE All Stars", img: "ps3-wwe-all-stars.jpg" },
    { name: "Yaiba Ninja Gaiden Z", img: "ps3-yaiba-ninja-gaiden-z.jpg" },
    { name: "Yakuza 4", img: "ps3-yakuza-4.jpg" },
    { name: "Young Justice Legacy", img: "ps3-young-justice-legacy.jpg" }
];


// قائمة ألعاب PS4
const ps4Games = [
    { name: "7 Days To Die", img: "ps4-7-days-to-die.jpg" },
    { name: "ARK Survival Evolved", img: "ps4-ark-survival-evolved.jpg" },
    { name: "Assassin's Creed Mirage", img: "ps4-assassins-creed-mirage.jpg" },
    { name: "Assassin's Creed Odyssey", img: "ps4-assassins-creed-odyssey.jpg" },
    { name: "Assassin's Creed Origins", img: "ps4-assassins-creed-origins.jpg" },
    { name: "Assassin's Creed Valhalla", img: "ps4-assassins-creed-valhalla.jpg" },
    { name: "Assassins Creed Freedom Cry", img: "ps4-assassins-creed-freedom-cry.jpg" },
    { name: "Away Out", img: "ps4-away-out.jpg" },
    { name: "Batman Arkham Knight", img: "ps4-batman-arkham-knight.jpg" },
    { name: "Battlefield 1", img: "ps4-battlefield-1.jpg" },
    { name: "Battlefield V", img: "ps4-battlefield-v.jpg" },
    { name: "BEN 10", img: "ps4-ben-10.jpg" },
    { name: "Ben 10 Power Trip", img: "ps4-ben-10-power-trip.jpg" },
    { name: "Blue Rider", img: "ps4-blue-rider.jpg" },
    { name: "Call of Duty Black Ops 3", img: "ps4-call-of-duty-black-ops-3.jpg" },
    { name: "Call of Duty Black Ops 4", img: "ps4-call-of-duty-black-ops-4.jpg" },
    { name: "Call of Duty Vanguard", img: "ps4-call-of-duty-vanguard.jpg" },
    { name: "Captain Tsubasa Rise Of New Champions", img: "ps4-captain-tsubasa-rise-of-new-champions.jpg" },
    { name: "Control", img: "ps4-control.jpg" },
    { name: "Crash Bandicoot It's About Time", img: "ps4-crash-bandicoot-4-its-about-time.jpg" },
    { name: "Crash Bandicoot N. Sane Trilogy", img: "ps4-crash-bandicoot-n-sane-trilogy.jpg" },
    { name: "Crash car", img: "ps4-crash-car.jpg" },
    { name: "Cup head", img: "ps4-cuphead.jpg" },
    { name: "Cyberpunk 2077", img: "ps4-cyberpunk-2077.jpg" },
    { name: "Dark Souls III The Fire Fades Edition", img: "ps4-dark-souls-iii-the-fire-fades-edition.jpg" },
    { name: "Days Gone", img: "ps4-days-gone.jpg" },
    { name: "Dead Island 2", img: "ps4-dead-island-2.jpg" },
    { name: "Detroit Become Human", img: "ps4-detroit-become-human.jpg" },
    { name: "DMC5", img: "ps4-dmc5.jpg" },
    { name: "EA FC 24", img: "ps4-ea-fc-24.jpg" },
    { name: "EA FC 25", img: "ps4-ea-fc-25.jpg" },
	{ name: "EA FC 27", img: "ps4-ea-fc-27.jpg" },
    { name: "eFootball 2026 PX", img: "ps4-efootball-2026-px.jpg" },
	{ name: "eFootball 2027 bitbox", img: "ps4-efootball-2027-bitbox.jpg" },
    { name: "eFootball PES 2021 Season Update", img: "ps4-efootball-pes-2021-season-update.jpg" },
    { name: "Far Cry 6", img: "ps4-far-cry-6.jpg" },
    { name: "Ghost of Tsushima", img: "ps4-ghost-of-tsushima.jpg" },
    { name: "Ghostrunner", img: "ps4-ghostrunner.jpg" },
    { name: "God Of War", img: "ps4-god-of-war.jpg" },
    { name: "God of War III Remastered", img: "ps4-god-of-war-iii-remastered.jpg" },
    { name: "GOW Ragnarok", img: "ps4-gow-ragnarok.jpg" },
    { name: "GRIP", img: "ps4-grip.jpg" },
    { name: "GTA III", img: "ps4-gta-iii.jpg" },
    { name: "GTA San Andreas", img: "ps4-gta-san-andreas.jpg" },
    { name: "GTA V", img: "ps4-gta-v.jpg" },
    { name: "GTA Vice City", img: "ps4-gta-vice-city.jpg" },
    { name: "High On Life", img: "ps4-high-on-life.jpg" },
    { name: "Hitman 2", img: "ps4-hitman-2.jpg" },
    { name: "Horizon Forbidden West", img: "ps4-horizon-forbidden-west.jpg" },
    { name: "Horizon Zero Dawn", img: "ps4-horizon-zero-dawn.jpg" },
    { name: "InFAMOUS Second Son", img: "ps4-infamous-second-son.jpg" },
    { name: "Infamous The First Light", img: "ps4-infamous-the-first-light.jpg" },
    { name: "Inside", img: "ps4-inside.jpg" },
    { name: "It Takes Two", img: "ps4-it-takes-two.jpg" },
    { name: "Jumanji The Video Game", img: "ps4-jumanji-the-video-game.jpg" },
    { name: "Jump Force", img: "ps4-jump-force.jpg" },
    { name: "Kena Bridge of Spirits", img: "ps4-kena-bridge-of-spirits.jpg" },
    { name: "KOF 97", img: "ps4-kof-97.jpg" },
    { name: "Kung Fu Panda", img: "ps4-kung-fu-panda.jpg" },
    { name: "LEGO Batman 3", img: "ps4-lego-batman-3.jpg" },
    { name: "Lego Worlds", img: "ps4-lego-worlds.jpg" },
    { name: "Little Big Planet 3", img: "ps4-little-big-planet-3.jpg" },
    { name: "Little Nightmares II", img: "ps4-little-nightmares-ii.jpg" },
    { name: "Little Nightmares III", img: "ps4-little-nightmares-iii.jpg" },
    { name: "Mafia 3", img: "ps4-mafia-3.jpg" },
    { name: "Mafia Definitive Edition", img: "ps4-mafia-definitive-edition.jpg" },
    { name: "Mafia II Definitive Edition", img: "ps4-mafia-ii-definitive-edition.jpg" },
    { name: "MARIO", img: "ps4-mario.jpg" },
    { name: "Marvel's Avengers", img: "ps4-marvels-avengers.jpg" },
    { name: "Marvel's Guardians of the Galaxy", img: "ps4-marvels-guardians-of-the-galaxy.jpg" },
    { name: "Marvel's Spider-Man", img: "ps4-marvels-spider-man.jpg" },
    { name: "Marvel's Spider-Man Miles Morales", img: "ps4-marvels-spider-man-miles-morales.jpg" },
    { name: "Max The Curse Of Brotherhood", img: "ps4-max-the-curse-of-brotherhood.jpg" },
    { name: "Metro Exodus", img: "ps4-metro-exodus.jpg" },
    { name: "Minecraft", img: "ps4-minecraft.jpg" },
    { name: "Mortal Kombat 11", img: "ps4-mortal-kombat-11.jpg" },
    { name: "Naruto Shippuden Ultimate Ninja Storm 4", img: "ps4-naruto-shippuden-ultimate-ninja-storm-4.jpg" },
    { name: "Need for Speed Heat", img: "ps4-need-for-speed-heat.jpg" },
    { name: "Need for Speed Payback", img: "ps4-need-for-speed-payback.jpg" },
    { name: "Need for Speed Hot Pursuit Remastered", img: "ps4-need-for-speed-hot-pursuit-remastered.jpg" },
    { name: "Nickelodeon All-Star Brawl", img: "ps4-nickelodeon-all-star-brawl.jpg" },
    { name: "Nier Automata", img: "ps4-nier-automata.jpg" },
    { name: "Oddworld New n Tasty", img: "ps4-oddworld-new-n-tasty.jpg" },
    { name: "PES 19", img: "ps4-pes-19.jpg" },
    { name: "PES 26 Monster", img: "ps4-pes-26-monster.jpg" },
    { name: "PES27 monstor batch", img: "ps4-pes27-mage-batch.jpg" },
    { name: "Prince of Persia The Lost Crown", img: "ps4-prince-of-persia-the-lost-crown.jpg" },
    { name: "Ratchet & Clank", img: "ps4-ratchet-and-clank.jpg" },
    { name: "Rayman Legends", img: "ps4-rayman-legends.jpg" },
    { name: "Red Dead Redemption 2", img: "ps4-red-dead-redemption-2.jpg" },
    { name: "Resident Evil 2", img: "ps4-resident-evil-2.jpg" },
    { name: "Resident Evil 3 Remake", img: "ps4-resident-evil-3-remake.jpg" },
    { name: "Resident Evil 4 Remaster", img: "ps4-resident-evil-4-remaster.jpg" },
    { name: "Resident Evil 7 Biohazard", img: "ps4-resident-evil-7-biohazard.jpg" },
    { name: "Resident Evil Revelations 2", img: "ps4-resident-evil-revelations-2.jpg" },
    { name: "Resident Evil Village", img: "ps4-resident-evil-village.jpg" },
    { name: "Resident Evil Origins Collection", img: "ps4-resident-evil-origins-collection.jpg" },
    { name: "Rise of The Tomb Raider 20 Year Celebration", img: "ps4-rise-of-the-tomb-raider-20-year-celebration.jpg" },
    { name: "Road Rage", img: "ps4-road-rage.jpg" },
    { name: "Saints Row", img: "ps4-saints-row.jpg" },
    { name: "Sekiro Shadows Die Twice", img: "ps4-sekiro-shadows-die-twice.jpg" },
    { name: "SIFU", img: "ps4-sifu.jpg" },
    { name: "Sniper Elite: Resistance", img: "ps4-sniper-elite.jpg" },
    { name: "SOINC X SHADWO", img: "ps4-soinc-x-shadwo.jpg" },
    { name: "SONICMANIA", img: "ps4-sonicmania.jpg" },
    { name: "SONICCOLORSULTIM", img: "ps4-soniccolorsultim.jpg" },
    { name: "STRAY", img: "ps4-stray.jpg" },
    { name: "Street Fighter 6", img: "ps4-street-fighter-6.jpg" },
    { name: "Streets of Rage 4", img: "ps4-streets-of-rage-4.jpg" },
    { name: "Teenage Mutant Ninja Turtles Arcade Wrath of the Mutants", img: "ps4-teenage-mutant-ninja-turtles-arcade-wrath-of-the-mutants.jpg" },
    { name: "Tekken 7", img: "ps4-tekken-7.jpg" },
    { name: "Tennis 2", img: "ps4-tennis-2.jpg" },
    { name: "The Evil Within 2", img: "ps4-the-evil-within-2.jpg" },
    { name: "The King of Fighters XV", img: "ps4-the-king-of-fighters-xv.jpg" },
    { name: "The Last of Us Part II", img: "ps4-the-last-of-us-part-ii.jpg" },
    { name: "The Last of Us Remastered", img: "ps4-the-last-of-us-remastered.jpg" },
    { name: "The Witcher 3 Wild Hunt", img: "ps4-the-witcher-3-wild-hunt.jpg" },
    { name: "UFC4", img: "ps4-ufc4.jpg" },
    { name: "Uncharted 4", img: "ps4-uncharted-4.jpg" },
    { name: "Uncharted Lost Legacy", img: "ps4-uncharted-lost-legacy.jpg" },
	{ name: "UNCHARTED™ The Nathan Drake Collection", img: "ps4-uncharted-collection.jpg" },
    { name: "Watch Dogs 2", img: "ps4-watch-dogs-2.jpg" },
    { name: "Watch Dogs Legion Resistance Edition", img: "ps4-watch-dogs-legion-resistance-edition.jpg" },
    { name: "WWE 2K Battlegrounds", img: "ps4-wwe-2k-battlegrounds.jpg" },
    { name: "WWE 2K24", img: "ps4-wwe-2k24.jpg" }
];


// =========================================
// تحديد القائمة والسعر بناءً على اسم الصفحة
// =========================================
let gamesData = [];
let consoleName = "";
let currentPrice = "";

if (window.location.pathname.includes("PSPgames.html")) {
    gamesData = pspGames;
    consoleName = "PSP";
    currentPrice = "20";
} else if (window.location.pathname.includes("PS3games.html")) {
    gamesData = ps3Games;
    consoleName = "PS3";
    currentPrice = "30";
} else if (window.location.pathname.includes("PS4games.html")) {
    gamesData = ps4Games; // ربطنا ألعاب PS4 هنا
    consoleName = "PS4";
    currentPrice = "30"; // حط السعر اللي انت عايزه للـ PS4
} else {
    gamesData = ps2Games;
    consoleName = "PS2";
    currentPrice = "10";
}

// ثوابت الأرقام
const PHONE_NUMBER = "01278566009";
const WHATSAPP_NUMBER = "201278566009";

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
                <div class="game-title">${consoleName} - ${game.name}</div>
                <div class="game-price">${currentPrice} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}</div>
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