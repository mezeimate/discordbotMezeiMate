const Discord = require('discord.js');
const { prefix, token, appIDWot, host, user, pwd, apitoken } = require('./config.json');
const fetch = require("node-fetch");
const axios = require("axios");
const feeldy = new Discord.Client();
feeldy.login(token)

/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    stream: true
});*/

/*
        KREDITEKRE SZABHATÓ SZINT, 50 kredit alatt Amatőr, 100 alatt Csak gamer, 150 alatt rendszergazda, 200 felett Programozó....
*/
//con.connect();

function helyesAgyazott() { }
function helytelenAgyazott() { }

var comm = [""];

var szitu = ["Lazítok bby!", "Épp most nyeltem le az utolsó csavar desszertem!", "Kicsit beolajozom magam, mindjárt jövök!",
    "Nem megyünk egy Valorantot?;)", "Én magam vagyok a mesterséges intelligencia! Bip-Bip!",
    "BBY❤", "Végre hogy megkérdezted, már kezdtem lecsukni a vasat."];

var interest = ["Ha átfúrnánk a Földet, 42 percnyi szabadesés után érnénk ki a lyuk másik végén. Persze ez nem igazán kivitelezhető, mivel elég hamar égnénk porrá a Föld magjának hőmérsékletétől. Plusz a gravitáció miatt, abban a pillanatban ahogy kiérnénk a Föld másik végére, egyből elkezdenénk visszafele “zuhanni”.",
    "Ha 70 ember összegyűlik egy szobában, 99,99 százalék a valószínűsége, hogy legalább kettőjüknek ugyanazon a napon van a születésnapja.",
    "Az Egyesült Államokban több tigrist tartanak magánkézben, mint amennyi szabadon él az egész világon.",
    "Kleopátra a Holdra szálláshoz közelebb élt időben, mint az egyiptomi piramisok megépítéséhez. A gízai nagy piramist Kr.e. 2540 körül építették. Kleopátra Kr.e. 69 és 30 között élt, a Holdra pedig 1969-ben lépett először ember.",
    "A brit légitársaságokhoz tartozó pilóták 43%-a ismerte el, hogy aludt már el repülés közben.",
    "4 milliárd évvel ezelőtt a napok sokkal rövidebbek voltak a Földön, mivel 3-4-szer gyorsabban forgott. A Hold létezése nélkül mindössze 6-8 órásak lennének napjaink.",
    "Abraham Lincoln gyilkosának, John Wilkes Booth-nak a testvére mentette meg Lincoln fiát, Robertet, amikor alig egy évvel a gyilkosság előtt a fiú, Robert a vonat alá esett.",
    "A naprendszer legnagyobb vulkánja 22 km magas és a Marson található. ",
    "Az első ember, akinek házhoz szállították a pizzát Savoyai Margit olasz királyné volt 1889-ben.",
    "Néhány éve 30 ezer sárga gumikacsa és játék került a tengerbe egy baleset következtében. Ezek a játékok azóta is segítik a tudósokat az áramlások tanulmányozásában.",
    "A nílusi krokodil olyannyira „összebarátkozott” a vízzel, hogy akár 2 órán keresztül is képes a víz alatt lesben állni és várni a gyanútlan áldozatra.",
    "Az égen több csillag van, mint amennyi homokszem a földön.",
    "A délutáni alvás legalkalmasabb időpontja 1 és féle 3 között van, hiszen ekkor kicsit csökkent az emberek testhőmérséklete és elálmosodunk.",
    "A kék naplemente nem ritka jelenség a Marson.",
    "Az Univerzum 5%-át teszi ki az az anyag, amit az ember érzékelni képes, a maradék 95% a sötét anyag."];

var bejla = [
    "Előveszem a szemüvegem",
    "és felrakom a fejemre",
    "Megfogom a lábamot",
    "és kimegyek a mezőre",
    "Sok mindenki van már ott",
    "de én is ott leszek",
    "És odahívok mindenkit",
    "és azt mondom nekik",
    "Figyeljetek,",
    "béla vagyok, béla vagyok, egy gombgyárban dolgozom",
    "És azt mondja a főnököm:",
    "te béla, te béla, nem dolgozol rendesen",
    "Nyomdd azt a gombot a jobb kezeddel is",
    "béla vagyok, béla vagyok, egy gombgyárban dolgozom",
    "És azt mondja a főnököm:",
    "te béla, te béla, nem dolgozol rendesen",
    "Nyomdd azt a gombot a bal kezeddel is",
    "Béla vagyok, Béla vagyok, egy gombgyárban dolgozom",
    "És azt mondja a főnököm:",
    "Te Béla, te Béla, nem dolgozol rendesen,",
    "Nyomdd azt a gombot a jobb lábaddal is",
    "Béla vagyok, Béla vagyok, egy gombgyárban dolgozom",
    "És azt mondja a főnököm:",
    "Te Béla, te Béla, nem dolgozol rendesen,",
    "Nyomdd azt a gombot a bal lábaddal is",
    "/tts Bélavagyok\nBélavagyok\nBélavagyok\nBéla, Béla, Béla, Béla"];


const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Én vagyok az Feeldy, a bot növendék!🤖')
    .setAuthor('Mi vagyunk a Hakkerek')
    .setDescription('Mutatom a parancsaim!😊\n~wotacc {fióknév} (ESPORT)\n~Hey Feeldy!\n~Mizu Feeldy?\n~érdekesség\n~quiz (Ne hasznald!)')
    .setThumbnail('https://static.wikia.nocookie.net/gup/images/e/e4/Wot_logo.png/revision/latest?cb=20170123230734') // kis icon jobb felül a beagyazasba
    .setTimestamp();

feeldy.on('ready', () => {
    feeldy.user.setActivity('~help', { type: 'WATCHING' });
    console.log("Feeldy üzemképes!");
});


feeldy.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === `${prefix}help`) {
        msg.channel.send(helpEmbed);
    }

    else if (msg.content.toLocaleLowerCase() === `${prefix}hey feeldy!`) {
        msg.react('💋');
        msg.reply('Hi BBY!<3');
    }

    else if (msg.content.toLocaleLowerCase() === `${prefix}mizu feeldy?`) {
        msg.reply(szitu[Math.floor(Math.random() * szitu.length)]);
    }

    else if (msg.content.toLocaleLowerCase() === `${prefix}érdekesség`) {
        msg.reply(interest[Math.floor(Math.random() * interest.length)]);
    }

    var bemenetW = msg.content.toLocaleLowerCase();
    var parancsVagott = bemenetW.split(" ", 2);
    if (parancsVagott[0] === `${prefix}wotacc`) {

        axios.get('https://api.worldoftanks.eu/wot/account/list/?application_id='+appIDWot+'&search='+parancsVagott[1])
        .then((res) => {
            //console.log('Account ID:', res.data.data[0].account_id)
            var accID = res.data.data[0].account_id;

            axios.get('https://api.worldoftanks.eu/wot/account/info/?application_id='+appIDWot+'&account_id='+res.data.data[0].account_id)
            .then((res) => {
                //console.log('Clan ID:', res.data.data[accID].clan_id);
                //console.log('ACC INF:', res.data.data[accID].statistics.all);
                var battles                 = res.data.data[accID].statistics.all.battles; //csatak szama
                var survived_battles        = res.data.data[accID].statistics.all.survived_battles; // tulelt csatak
                var wins                    = res.data.data[accID].statistics.all.wins; // megnyert csatak
                var draws                   = res.data.data[accID].statistics.all.draws; // döntetlen csatak szama
                var losses                  = res.data.data[accID].statistics.all.losses; // elvesztett csatak

                var totalExperience         = res.data.data[accID].statistics.all.xp; // total XP
                var maxXp                   = res.data.data[accID].statistics.all.max_xp; // legtöbb xp egy csataba
                var battle_avg_xp           = res.data.data[accID].statistics.all.battle_avg_xp; // atlagos csata tapasztalati pont
                var dropped_capture_points  = res.data.data[accID].statistics.all.dropped_capture_points; // bazisvédelmi pontok
                var capture_points          = res.data.data[accID].statistics.all.capture_points; // bazisfoglalasi pontok

                var shots                   = res.data.data[accID].statistics.all.shots; // lövések
                var damage_dealt            = res.data.data[accID].statistics.all.damage_dealt; // kiosztott sebzés
                var max_damage              = res.data.data[accID].statistics.all.max_damage; // legtöbb sebzés egy csataban
                var avg_damage_assisted     = res.data.data[accID].statistics.all.avg_damage_assisted; // atlagos assist (upto 8.8)
                var frags                   = res.data.data[accID].statistics.all.frags; // megsemmisitett ellenség
                var max_frags               = res.data.data[accID].statistics.all.max_frags; // legtöbb megsemmisitett ellenség egy csataban

                var damage_received         = res.data.data[accID].statistics.all.damage_received; // kapott sebzés
                var direct_hits_received    = res.data.data[accID].statistics.all.direct_hits_received; // közvetlen találatok
                var avg_damage_blocked      = res.data.data[accID].statistics.all.avg_damage_blocked; // atlag blokkolt lövések
                var no_dmg_direct_hits_rec  = res.data.data[accID].statistics.all.no_damage_direct_hits_received; // lepattano kapott talalat
                var hits_percents           = res.data.data[accID].statistics.all.hits_percents; // talalati arany
                var enemiesSpotted          = res.data.data[accID].statistics.all.spotted; // spottolt ellenség
                
                var wotLogo = "https://static.wikia.nocookie.net/gup/images/e/e4/Wot_logo.png/revision/latest?cb=20170123230734";

                const wotStatEmb = new Discord.MessageEmbed()
                    .setColor('#03c900')
	                .setTitle(parancsVagott[1]+" statisztikája")
	                //.setDescription('Some description here')
	                .setThumbnail(wotLogo)
	                .addFields(
		                { name: 'Csata statisztika', value: 'Csaták száma:\nTúlélt csaták száma:\nMegnyert csaták:\nDöntetlen csaták:\nElbukott csaták:', inline: true },
		                { name: 'Érték', value: battles+"\n"+survived_battles+"\n"+wins+"\n"+draws+"\n"+losses+"\n", inline: true },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Tapasztalati pontok', value: 'Összes XP:\nLegtöbb XP egy csatában:\nÁtlagos XP:\nBázisvédelmi pontok:\nBázisfoglalási pontok:', inline: true },
		                { name: 'Érték', value: totalExperience+"\n"+maxXp+"\n"+battle_avg_xp+"\n"+dropped_capture_points+"\n"+capture_points+"\n", inline: true },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Lövés statisztika', value: 'Lövés\nKiosztott sebzés:\nLegtöbb sebzés egy csatában:\nÁtlagos assist\nMegsemmisített ellenség:\nLegtöbb megsemmisített ellenség:', inline: true },
		                { name: 'Érték', value: shots+"\n"+damage_dealt+"\n"+max_damage+"\n"+avg_damage_assisted+"\n"+frags+"\n"+max_frags+"\n", inline: true },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Elszenvedett károk', value: 'Kapott sebzés:\nKözvetlen találatok száma:\nÁtlagosan blokkolt lövések\nKapott de lepattano találatok:\nTalálati arány:\nFelderített ellenség:', inline: true },
		                { name: 'Érték', value: damage_received+"\n"+direct_hits_received+"\n"+avg_damage_blocked+"\n"+no_dmg_direct_hits_rec+"\n"+hits_percents+"\n"+enemiesSpotted+"\n", inline: true },
	                )
	                //.addField('Inline field title', 'Some value here', true)
	                .setTimestamp()
	                .setFooter('Feeldy WoT fiók statisztika', wotLogo);

                msg.channel.send(wotStatEmb);

            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            const wotErr = new Discord.MessageEmbed()
                    .setColor('#03c900')
	                .setTitle("Nem található az alábbi felhasználónév!")
	                .setDescription(parancsVagott[1])
	                .setThumbnail("https://static.wikia.nocookie.net/gup/images/e/e4/Wot_logo.png/revision/latest?cb=20170123230734")
	                //.addField('Inline field title', 'Some value here', true)
	                .setTimestamp()
	                .setFooter('Feeldy WoT fiók statisztika', "https://static.wikia.nocookie.net/gup/images/e/e4/Wot_logo.png/revision/latest?cb=20170123230734");
            msg.channel.send(wotErr);
        })
    }
    
    

    
    // FEJLESZTÉS ALATT ! ! ! ! ! ! ! ! 
/*
    else if (msg.content.toLocaleLowerCase() === `${prefix}quiz`) {
        aktualid = msg.author.id;

        con.query("SELECT id, user_id, kredit FROM kredit WHERE user_id = \"" + aktualid + "\";", function (err, result, fields) {
            if (err) { console.log(err.message); }

            else {
                if (result.length) {
                    ujEgyenleg = Math.max(result[0].kredit, 0);
                }
                else {
                    ujEgyenleg = 0;
                }
            }
        });

        //console.log(usere);
        var sql;
        //KREDIT ELÁGAZÁS!
        let questions = [];
        let kerdes = "";
        let difficulty = "";
        let correct = "";

        fetch("https://opentdb.com/api.php?amount=1&category=18&type=boolean").then(res => {
            return res.json();
        })
            .then(loadedQuestions => {
                //console.log(loadedQuestions.results);
                questions = loadedQuestions.results.map(loadedQuestion => {
                    kerdes = loadedQuestion.question
                    while (kerdes.includes("&quot;")) {
                        kerdes = kerdes.replace("&quot;", "\"");
                    }
                    while (kerdes.includes("&#039;")) {
                        kerdes = kerdes.replace("&#039;", "\'");
                    }

                    difficulty = loadedQuestion.difficulty
                    correct = loadedQuestion.correct_answer

                    const quizEmb = new Discord.MessageEmbed()
                        .setColor('#03c900')
                        .setTitle(kerdes)
                        .setDescription("Difficulty: " + difficulty);

                    msg.channel.send(quizEmb);
                    msg.react('👍').then(() => msg.react('👎'));

                    const filter = (reaction, user) => {
                        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
                    };

                    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                        .then(collected => {
                            const reaction = collected.first();

                            if (reaction.emoji.name === '👍' && correct == 'True') {
                                kreditosztos(aktualid, 2, msg); // JÓ VÁLASZ 

                            }
                            else if (reaction.emoji.name === '👎' && correct == 'False') {
                                kreditosztos(aktualid, 2, msg);// JÓ VÁLASZ 
                            }
                            else {
                                kreditosztos(aktualid, -1, msg); // ROSSZ VÁLASZ 

                            }
                        })
                        .catch(collected => {
                        });
                });
            })
            .catch(err => {
                console.error(err);
            });
        //- - - - - - - - - - -
    }*/


}); 


// SZINTÉN
var ujEgyenleg = 0;
var ujU;
function kreditosztos(userId, kredites, msg) { // ERHI FEELD COMBÓ

    con.query("SELECT id, user_id, kredit FROM kredit WHERE user_id = \"" + userId + "\";", function (err, result, fields) {
        if (err) { console.log(err.message); }

        else {
            if (result.length) {
                if (ujEgyenleg + kredites > 0) { //Math.max(result[0].kredit + kredites, 0);
                    ujEgyenleg += kredites;
                }
            }

            if (kredites == 2) {
                if (result.length) {
                    const quizT = new Discord.MessageEmbed()
                        .setColor('#03c900')
                        .setTitle("Helyes válasz!")
                        .setDescription(ujEgyenleg + " az aktuális kredited.");
                    msg.reply(quizT);
                }
                else {
                    const quizT = new Discord.MessageEmbed()
                        .setColor('#03c900')
                        .setTitle("Helyes válasz!")
                        .setDescription(2 + " az aktuális kredited.");
                    msg.reply(quizT);
                }
                ujU = "INSERT INTO kredit (user_id, kredit) VALUES (\"" + userId + "\", \"" + 2 + "\");"
            }
            else {
                const quizF = new Discord.MessageEmbed()
                    .setColor('#bf0000')
                    .setTitle("Helytelen válasz!")
                    .setDescription(ujEgyenleg + " az aktuális kredited.");
                msg.reply(quizF);
                ujU = "INSERT INTO kredit (user_id, kredit) VALUES (\"" + userId + "\", \"" + 0 + "\");"
            }
            con.query(!result.length
                ? (ujU)
                : ("UPDATE kredit SET kredit = \"" + ujEgyenleg + "\" WHERE user_id = \"" + userId + "\";"));
        }
    });
}