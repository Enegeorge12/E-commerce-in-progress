let produse = [
    // Franta
    {id:1,
      "producator": "Albert Bichot",
      "name": "ALBERT BICHOT SAINT – AUBIN",
      "wine": "alb",
      "image": "./Vinuri/albert Bichot saint-aubin.jpg" ,
      "price": 213,
      "description":
        "Un vin deosebit de complex, intent şi cremos, cu o mineralitate delicată şi o bună aciditate.",
      "year": "2013",
      "country": "Franta",
      "variety": "Chardonnay"
    },
    {id:2,
      "producator": "Albert Bichot",
      "name": "ALBERT BICHOT-secret de famille pino noir",
      "wine": "rosu",
      "image":
        "./Vinuri/ALBERT BICHOT-secret de famille pinot noir.jpg",
      "price": 123,
      "year": "2017",
      "country": "Franta",
      "description":
        "Este un vin fermecător, care prezintă arome fructate predominante de coacăze negre și fructe de pădure roșii. Catifelat și mătăsos, acest vin are o structură moale, echilibrată pe palat, care se încheie cu un finisaj delicat, care amintește de fructe roșii.",
      "variety": "Pinot Noir"
    },
    {id:3,
      "producator": "Dom Perignon",
      "name": "DOM PERIGNON- BRUT VINTAGE ",
      "wine": "champagne",
      "image":"./Vinuri/dom perignon brut vintage.jpg",
      "price": 1059,
      "year": "2010",
      "country": "Franta",
      "description":
        "Dom Perignon este sinonim cu excelenţa şi celebritatea. Are un caracter luminos redat de o culoare galben pal cu reflexe aurii. Aromele se deschid într-un pastel de note florale şi fructe confiate, completate de note de panificaţie şi lemn dulce.",
      "variety": "Champagne"
    },
    {id:4,
      "producator": "Dom Perignon",
      "name": "DOM PERIGNON - ROSE VINTAGE  ",
      "wine": "champagne",
      "image":
        "./Vinuri/DOM PERIGNON - ROSE VINTAGE.jpg",
      "price": 1660,
      "year": "2006",
      "country": "Franta",
      "description":
        " Dom Perignon Rose este expresia echilibrului perfect între Chardonnay şi Pinot Noir. Este obţinută din struguri Pinot Noir şi Chardonnay din producţia aceluiaşi an, fiind ulterior maturată pe drojdii cel putin 7 ani, această maturare neafectând însă fineţea gustului. Dom Perignon Rose are un perlaj îndrăzneţ dar catifelat şi este caracterizată de note florale şi fructate precum note de petale de trandafir, flori de cireş, căpşuni, zmeură, fragi şi caise uscate. Temperatura recomandată de servire: 8-10°C.  ",
      "variety": "Champagne"
    },
    {id:5,
      "producator": "Egly Ouriet",
      "name": "EGLY OURIET - GRAND CRU MILLESIME ",
      "wine": "champagne",
      "image":
        "./Vinuri/EGLY OURIET GRAND CRU MILLESIME 2006.jpg",
        
      "price": 750, 
      "year": "2006",
      "country": "Franta",
      "description":
        "Strugurii folosiţi pentru producerea acestei Şampanii au fost culeşi de pe parcele cu vii de peste 50 de ani vechime, din Grand Cru Ambonnay. Vinul a fost maturat în butoaie de stejar, fără fermentaţie malolactică. Înainte de degorjare, vinul a petrecut 96 de luni pe drojdii, în sticlă, dezvoltând astfel aome intense de condimente exotice, fructe confiate şi pişcot. Gustul său este proaspăt, suculent şi catifelat, cu senzaţii foarte intense şi complexe, o combinaţie de tonuri sangvinice, de frunze uscate şi senzaţii de sare marină şi praf de calcar. Un vin extrem de bine lucrat, energic şi mineral. ",
      "variety": "Champagne"
    },
    {id:6,
      "producator": "Egly Ouriet",
      "name": "EGLY OURIET - BLANC DE NOIRS GRAND CRU ",
      "wine": "champagne",
      "image":
        "./Vinuri/EGLY OURIET - BLANC DE NOIRS GRAND CRU.jpg",
      "price": 950, 
      "year": "2006",
      "country": "Franta",
      "description":
        "Strugurii pentru această Şampanie provin din plantaţii de vită de vie cu o vârsta medie de 70 de ani, iar vinul bază a fost fermentat în butoaie de stejar. A fost produs după metoda tradiţională, înainte de degorjare, vinul petrecând 52 de luni pe drojdii. A dezvoltat astfel o paletă aromatică ce aminteşte de fructele galbene confiate, de alunele prăjite şi de condimentele exotice, cu un fundal elegant, susţinut de senzaţiile conferite de lemnul de stejar. Prezintă un echilibru impecabil între texturi, arome şi senzaţii, cu arome ample şi complexe, plus un caracter mineral, ce oferă prospeţime şi intensitate vinului, dar şi o senzaţie salină, tonică în postgust.",
      "variety": "Champagne"
    },
    {id:7,
      "producator": "Bilecart",
      "name": "BILLECART-SALMON BRUT ",
      "wine": "champagne",
      "image":
        "./Vinuri/BILECART-SALMON BRUT.jpg",
      "price": 280, 
      "year": "2006",
      "country": "Franta",
      "description":
        "O Şampanie galben pai cu reflexii aurii-verzui, perlaj fin, cu spumă persistentă şi abundentă. Arome proaspete, florale, cu note de fructe şi pere coapte. Gustul este plin, consistent, cu prospeţime şi buchet bogat.",
      "variety": "Champagne"
    },
    {id:8,
      "producator": "Bilecart",
      "name": "BILLECART-SALMON ROSE ",
      "wine": "champagne",
      "image":
        "./Vinuri/BILECART-SALMON ROSE .jpg",
      "price": 435, 
      "year": "2006",
      "country": "Franta",
      "description":
        "Roze portocaliu deschis și strălucitor, cu tentă caldă aurie, perlaj delicat și spumă persistentă. Subtil, elegant și delicat, cu note de fructe roșii și citrice. Uşor şi elegant, urmat de un final proaspăt, cu savoare de zmeură.",
      "variety": "Champagne"
    },
    // Italia
    {id:9,
      "producator": "Antinori",
      "name": "CERVARO DELLA SALA",
      "wine": "alb",
      "image":
        "Vinuri/ANTINORI cervaro della sala.jpg",
      "price": 265, 
      "year": "2018",
      "country": "Italia",
      "description":
        "Cervaro della Sala a fost unul dintre primele vinuri italieneşti cu fermentație malolactică și maturare în baricuri, cu prima recoltă în 1985. În prezent, după o perioadă de 5 luni de maturare în baric, vinul obţinut din Chardonnay este asamblat cu cel din soiul Grechetto, care a fost produs fără influenţa lemnului. După o perioadă de învechire la sticlă, vinul este scos apoi în piaţă. Acest vin prezintă o culoare galben pai strălucitor, cu reflexii verzui. În nas se simt note discrete de pâine prăjită, completate de arome de citrice, fructe tropicale şi unt. Gustul este savuros, plin şi proaspăt, cu note de muşeţel, fructe albe şi tuşe minerale, susţinute de o aciditate plăcută şi un postgust lung.",
      "variety": "Chardonnay"
    },
    {id:10,
      "producator": "Antinori",
      "name": "ANTINORI CONT’UGO",
      "wine": "rosu",
      "image":
        "Vinuri/ANTINORI CONT’UGO.jpg",
      "price": 175, 
      "year": "2013",
      "country": "Italia",
      "description":
        "Vinul prezintă arome de prune și afine, alături de condimente dulci. Pe palat, este vibrant, lung și echilibrat. Armonia și plinătatea fructelor de pe final și postgustul fructat sunt trăsăturile sale caracteristice.",
      "variety": "Merlot"
    },
    {id:11,
      "producator": "Antinori",
      "name": "ANTINORI-SOLAIA",
      "wine": "rosu",
      "image":
        "Vinuri/antinori-solaia.jpg",
      "price": 2100, 
      "year": "2013",
      "country": "Italia",
      "description":
        "Un vin roșu rubiniu foarte intens, proaspăt și vibrant, cu nuanţe violet, care prezintă arome de fructe roșii coapte, însoțit de senzație balsamică de lichior și mentă. Se alătură aromele de vanilie şi fum, dobândite prin maturarea la baric. Atacul este elegant, apoi ies în evidenţă taninurile ferme și mătăsoase, cu un postgust lung şi complex, în care predomină ciocolată neagră, violete şi lavandă.",
      "variety": "Merlot"
    },
    {id:12,
      "producator": "Antinori",
      "name": "ANTINORI-TIGNANELLO",
      "wine": "rosu",
      "image":
        "Vinuri/antinori-Tignanello.jpg",
      "price": 485, 
      "year": "2013",
      "country": "Italia",
      "description":
        "Cabernet Franc, Cabernet Sauvignon, Sangiovese ,Tignanello a fost primul Sangiovese care a fost maturat in barriquri, primul vin roșu contemporan cupajat cu soiuri netradiționale (în special Cabernet) și unul dintre primele vinuri roșii din regiunea Chianti Classico care nu a folosit struguri albi. Cupajul este obţinut aşadar predominant din soiul Sangiovese şi un procent scăzut de Cabernet Sauvignon și Cabernet Franc. Maturerea vinului are loc în butoaie de stejar franţuzesc și unguresc, aflate la prima şi a doua utilizare, pentru o perioadă de 14-16 luni pentru pentru a-i desăvârşi evoluţia, urmând o perioadă suplimentară de 12 luni de învechire la sticlă înainte de a fi lansat pe piață. Un vin roşu rubiniu intens, ce prezintă arome deosebit de complexe. Note de fructe roșii bine coapte cum ar fi cireșele, conservate în băuturi spirtoase, vișinele, zmeura și prunele, completate de arome condimentate de cuişoare şi lemn dulce, note balsamice de mentă şi ciocolată completează buchetul său complex. Pe palat este bogat, corpolent și vibrant cu taninuri catifelate. Gustul său lung și fin este persistent, amintind de aromele percepute anterior.",
      "variety": "Cupaj"
    },
    {id:13,
      "producator": "Antinori",
      "name": "ANTINORI - CONTE DELLA VIPERA ",
      "wine": "alb",
      "image":
        "Vinuri/ANTINORI-CONTE-DELLA-VIPERA.jpg",
      "price": 115, 
      "year": "2019",
      "country": "Italia",
      "description":
        "Prospetimea si aroma specifică Suvignon-ului Blanc se îmbină perfect cu notele exotice ale Sémillon-ului. De o culoare galben pai cu note verzui, este un vin în care predomină aromele citrice, în special grapefruit şi fructe coapte, piersică şi ananas, completate de ierburi aromatice şi o mineralitate plăcută. Gustativ este echilibrat și persistent, susținut de o bună prospețime și aromă specifică.",
      "variety": "Cupaj"
    },
    {id:14,
      "producator": "Antinori",
      "name": "ANTINORI GUADO AL TASSO BOLGHERI SUPERIORE ",
      "wine": "rosu",
      "image":
        "Vinuri/ANTINORI GUADO AL TASSO bolgheri superiore.jpg",
      "price": 600, 
      "year": "2017",
      "country": "Italia",
      "description":
        "Prospetimea si aroma specifică Suvignon-ului Blanc se îmbină perfect cu notele exotice ale Sémillon-ului. De o culoare galben pai cu note verzui, este un vin în care predomină aromele citrice, în special grapefruit şi fructe coapte, piersică şi ananas, completate de ierburi aromatice şi o mineralitate plăcută. Gustativ este echilibrat și persistent, susținut de o bună prospețime și aromă specifică.",
      "variety": "Cupaj"
    },
    {id:15,
      "producator": "GAJA ",
      "name": "GAJA - CAMARCANDA",
      "wine": "rosu ",
      "image":
        "Vinuri/GAJA CAMARCADA 700LEI.jpg",
      "price": 700, 
      "year": "2007",
      "country": "Italia",
      "description":
        "Roşu rubiniu închis. Complex şi bine definit, bogat în arome de condiment. Un vin cu o structură solidă şi complexă, concentrat în arome, dar fin şi armonios pe palat.    ",
      "variety": "Sauvignon Blanc"
    },
    {id:16,
      "producator": "GAJA ",
      "name": "GAJA - CAMARCANDA PROMIS",
      "wine": "rosu ",
      "image":
        "Vinuri/GAJA CAMARCADA PROMIS 165LEI.jpg",
      "price": 165, 
      "year": "2014",
      "country": "Italia",
      "description":
        "Ca’Marcanda Promis – un cupaj intens de Merlot 55%, Syrah 35%, Sangiovese 10%. Aromele predominante sunt cele de fructe negre, condimente exotice, piele şi pământ. Fructele negre, concentrate pe palat, împreună cu taninurile delicate şi aciditatea ridicată oferă vinului echilibru şi o prospeţime plăcută. Recomandări gastronomice: barbeque, miel, vită.",
      "variety": "cupaj  "
    },
    {id:17,
      "producator": "GAJA ",
      "name": "GAJA - PIEVE SANTA RESTITUTA",
      "wine": "rosu ",
      "image":
        "Vinuri/GAJA PIEVE SANTA RESTITUTA  BRUNELLO DI MONTALCINO 365 LEI.jpg",
      "price": 365, 
      "year": "2014",
      "country": "Italia",
      "description":
        "Gaja Pieve Santa Restituta este un Brunello di Montalcino complex şi bogat, cu arome de fructe roşii de pădure şi cireşe sălbatice, completate de nuanţe discrete de ienupăr. Deşi corpolent, se remarcă prin structura elegantă, taninuri şi aciditate foarte bine integrate, cu final lung şi intens. Recomandări gastronomice: brânzeturi, charcuterie, miel, paste, risotto, sufleuri, trufe, vânat, vită.",
      "variety": "cupaj  "
    },
    {id:18,
      "producator": "Tenuta",
      "name": "TENUTA ARGENTIERA - BOLGHERI SUPERIORE",
      "wine": "rosu ",
      "image":
        "Vinuri/TENUTA ARGENTIERA BOLGHERI SUPERIORE 460LEI.jpg",
      "price": 460, 
      "year": "2016",
      "country": "Italia",
      "description":
        "Argentiera Bolgheri Superiore, un cupaj din cele mai bune parcele de Cabernet Sauvignon, Merlot şi Cabernet Franc ale producătorului. Un vin roşu corpolent, cu un gust catifelat şi foarte bine echilibrat. Maturarea îndelungată în barrique-uri de stejar franţuzesc, structura soiului Cabernet Sauvignon și terroir-ul unic de la Tenuta Argentiera, fac din acest vin unul reprezentativ pentru zona Bolgheri.",
      "variety": "cupaj  "
    },
    {id:19,
      "producator": "Tenuta",
      "name": "TENUTA BUON TEMPO BRUNELLO DI MONTALCINO",
      "wine": "rosu ",
      "image":
        "Vinuri/TENUTA BOUN TEMPO BRUNELLO DI MONTALCINO 214LEI.jpg",
      "price": 214, 
      "year": "2010",
      "country": "Italia",
      "description":
        "Brunello di Montalcino din recoltra anului 2010, un Sangiovese roșu-rubiniu închis, cu note de carne de vânat afumată, piele, fructe negre. Un vin elegant, proaspăt și fructat, cu arome de cireșe și mure uscate, mentă, ierburi aromate, șuncă afumată, pământ și condimente exotice; corp plin, taninuri puternice dar fine și o extraordinară concentrare; postgust picant, cu note de cireșe negre, scorțișoară, salvie și anason. Recomandări gastronomice: fripturi preparate cu vin, vânat, brânzeturi mediu maturate.",
      "variety": "cupaj  "
    },
    {id:20,
      "producator": "Tenuta",
      "name": "TENUTA `ALTA` ",
      "wine": "rosu ",
      "image":
        "Vinuri/TENUTA BOUN TEMPO BRUNELLO DI MONTALCINO 'ALTA 260LEI.jpg",
      "price": 260, 
      "year": "2010",
      "country": "Italia",
      "description":
        "Brunello di Montalcino intens şi aromat, cu un echilibru şi o complexitate uluitoare; arome splendide de fructe negre de pădure, lavandă şi condimente, coacăze roşii şi zmeură coapte, cimbru, cardamom, bergamotă şi tutun; sfârşit lung, în care taninurile se fac simţite în concentraţia ideală. Recomandări gastronomice: carne roşie, vânat, coaste, brânzeturi maturate.",
      "variety": "cupaj  "
    },
    {id:21,
      "producator": "Tenuta",
      "name": "TENUTA DI TRINORO LE CUPOLE",
      "wine": "rosu ",
      "image":
        "Vinuri/TENUTA DI TRINORO LE CUPOLE 180LEI.jpg",
      "price": 180, 
      "year": "2014",
      "country": "Italia",
      "description":
        " Roşu rubiniu strălucitor. Arome de fructe roşii coapte, cu note de condimente dulci. Corp plin, proaspăt, cu taninuri delicate şi note intens fructate. Final lung şi savuros. Recomandări gastronomice: barbeque, brânzeturi, miel, paste, risotto, vânat, vită.",
      "variety": "cupaj  "
    },
    {id:22,
      "producator": "Tenuta",
      "name": "TENUTA  DI TRINORO PALAZZI",
      "wine": "rosu ",
      "image":
        "Vinuri/TENUTA DI TRINORO PALAZZI 940LEI.jpg",
      "price": 940, 
      "year": "2015",
      "country": "Italia",
      "description":
        "Vinul prezintă arome de fructe roşii coapte, flori sălbatice, trufe albe şi condimente exotice. Gustativ este corpolent, devine intens pe parcurs, cu note de gem de zmeură şi flori ce persistă în timp pe un final lung susţinut de taninuri mătăsoase.",
      "variety": "Merlot"
    },
    // romania
    {id:23,
      "producator": "Davino",
      "name": "DOMAINE CEPTURA ROUGE MAGNUM   ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO DOMANIE CEPTURA ROUGE MAGNUM.jpg",
      "price": 295, 
      "year": "2015",
      "country": "Romania",
      "description":
        "Davino Domaine Ceptura Rouge, un cupaj valoros obţinut din Cabernet Sauvignon, Merlot şi Fetească Neagră, în format Magnum (1,5 litri). Este produs din cele mai valoroase parcele, cele trei soiuri care intră în cupaj sunt vinificate separat, iar vinul obţinut este intens și complex, cu fond de vișine negre și prune uscate, ușor picant, nuanțe de lemn de stejar și cafea. Gustul este complex și expresiv, amplu, puternic dar catifelat, cu un postgust remanent condimentat, ce pune în evidență taninurile fine și elaborate. ",
      "variety": "Cupaj"
    },
    
    {id:24,
      "producator": "Davino",
      "name": "PURPURA VALAHICA DAVINO FETEASCĂ NEAGRĂ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO PURPURA VALAHICA 2009.jpg",
      "price": 160, 
      "year": "2009 ",
      "country": "Romania",
      "description":
        "Davino Purpura Valahica, un vin roşu destinat cunoscătorilor, produs exclusiv din cele mai bune parcele de Fetească Neagră, în anul 2009.",
      "variety": "Feteasca Neagra"
    },
    {id:25,
      "producator": "Davino",
      "name": "DAVINO - FLAMBOYANT MAGNUM 1,5 L  ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO FLAMBOYANT MAGNUM 1,5 L.jpg",
      "price": 475, 
      "year": "2015 ",
      "country": "Romania",
      "description":
        "Davino Flamboyant, obţinut din cele mai bune parcele de Cabernet Sauvignon, Merlot şi Fetească Neagră ale cramei, este un vin roșu-rubiniu intens cu reflexe purpurii, persistent și intens, cu nuanțe de fructe negre, miez de nucă, piper verde, mentă și tabac. Complex și expresiv pe bolta palatină, amplu, puternic dar rotund. Evoluție pe o pantă lungă, cu un postgust remanent ușor condimentat, ce pune în evidență taninurile fine și elaborate. Asociere culinară: Carne de miel la grătar sau cuptor, carne de vită împănată, carne de vânat, brânzeturi maturate.",
      "variety": "Cupaj"
    },
    {id:26,
      "producator": "Davino",
      "name": "DAVINO - MONOGRAM FETEASCĂ NEAGRĂ ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO MONOGRAM FETEASCA NEAGRA.jpg",
      "price": 95, 
      "year": "2015 ",
      "country": "Romania",
      "description":
        " Monogram Fetească Neagră este un vin roşu rubiniu intens cu reflexe purpurii, în care predomină aromele condimentate de mentă şi prune uscate, intense şi persistente, completate cu nuanţe de lemn de stejar. Gustul este expresiv, suplu, bine structurat, rotund cu taninuri bine integrate. Asociere culinară: carne de raţă, cotlete de porc, paste pe bază de sos de tomate, carne de viţel, brânzeturi.",
      "variety": "Feteasca Neagra"
    },
    {id:27,
      "producator": "Davino",
      "name": "DAVINO - MONOGRAM FETEASCĂ ALBĂ ",
      "wine": "alb",
      "image":
        "Vinuri/DAVINO MONOGRAM FETEASCA ALBA.jpg",
      "price": 79, 
      "year": "2019",
      "country": "Romania",
      "description":
        "Monogram Fetească Albă este un vin bine structurat, amplu, cu arome complexe date de maturarea pe depozit fin de drojdii, dar și cu păstrarea aromelor tipice de soi. Nas fin, cu nuanţe de flori de tei şi note minerale pe un fond de alune uşor prăjite. În gust este crocant şi cremos, bine echilibrat şi expresiv, cu un postgust remanent uşor amărui. Poate fi consumat ca aperitiv sau alături de peşte, fructe de mare, preparate din carne de pui.",
      "variety": "Feteasca Alba"
    },
    {id:28,
      "producator": "Davino",
      "name": "DAVINO - IACOB ROSE  ",
      "wine": "rose",
      "image":
        "Vinuri/DAVINO -IACOB ROSE 2020.jpg",
      "price": 48, 
      "year": "2020",
      "country": "Romania",
      "description":
        "Iacob Rose, cupaj obţinut din Cabernet Sauvignon şi Merlot, în care predomină aromele de fructe roşii de pădure, vişine şi coacăze negre. Proaspăt, echilibrat, bine structurat, amplu, rotund şi persistent, este excelent ca aperitiv sau alături de peşte, fructe de mare, brânzeturi proaspete.",
      "variety": "Cupaj"
    },
    {id:29,
      "producator": "Davino",
      "name": "DAVINO - IACOB ROŞU   ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO-IACOB ROSU 2017.jpg",
      "price": 72, 
      "year": "2017",
      "country": "Romania",
      "description":
        "Iacob Roşu, cupaj obţinut din Cabernet Sauvignon şi Fetească Neagră, este un vin roșu-rubiniu intens cu reflexe purpurii, în care se identifică aromele caracteristice soiurilor, la care se adaugă note de fructe confiate, lemn de stejar și cafea. Gustul este amplu și ferm, echilibrat și armonios cu final persistent. Asociere culinară: paste, pizza, carne de miel, carne de vită împănată, brânzeturi.",
      "variety": "Cupaj"
    },
    {id:30,
      "producator": "Davino",
      "name": "DAVINO - IACOB ALB    ",
      "wine": "alb",
      "image":
        "Vinuri/DAVINO - IACOB ALB.jpg",
      "price": 66, 
      "year": "2020",
      "country": "Romania",
      "description":
        "Iacob Alb, cupaj obţinut din Sauvignon Blanc şi Fetească Albă, este limpede, cristalin, auriu cu nuanţe verzui; un vin în care se regăsesc cu uşurinţă aromele primare varietale tipice fiecarui soi în parte, completate de note fermentative elegante și elaborate. Proaspăt, expresiv, amplu, echilibrat și persistent, poate fi savurat ca aperitiv, sau alături de pește, fructe de mare, carne de pui.",
      "variety": "Cupaj"
    },
    {id:31,
      "producator": "Davino",
      "name": "DAVINO - FAURAR ALB    ",
      "wine": "alb",
      "image":
        "Vinuri/DAVINO-FAURAR ALB.jpg",
      "price": 42, 
      "year": "2020",
      "country": "Romania",
      "description":
        "Făurar alb, cupaj obţinut din Sauvignon Blanc, Fetească Albă şi Riesling, este un vin proaspăt şi expresiv, în care se regăsesc arome florale cu note ușor minerale, intens şi persistent. Poate fi consumat ca aperitiv sau alături de pește, fructe de mare, carne de pui.",
      "variety": "Cupaj"
    },
    {id:32,
      "producator": "Davino",
      "name": "DAVINO - FAURAR ROSU  ",
      "wine": "rosu",
      "image":
        "Vinuri/DAVINO-FAURAR ROSU 2017 42LEI.jpg",
      "price": 42, 
      "year": "2017",
      "country": "Romania",
      "description":
        "Făurar Roşu, cupaj obţinut din Cabernet Sauvignon, Merlot şi Fetească Neagră, este un vin roșu rubiniu intens cu reflexe purpurii. Nasul este caracteristic soiurilor din care este obţinut, intens și persistent, condimentat cu note de piper verde, fructe uscate și cafea. În gust este amplu, echilibrat și armonios structurat, final persistent, cu taninuri elaborate. Asociere culinară: carne de porc, vită sau miel, paste, pizza, brânzeturi.",
      "variety": "Cupaj"
    },
    {id:33,
     "producator": "Anima",
      "name": "ANIMA - 3 FETE NEGRE MAGNUM ",
      "wine": "rosu",
      "image":
        "Vinuri/ANIMA-3 FETE NEGRE MAGNUM 280LEI.jpg",
      "price": 280, 
      "year": "2014",
      "country": "Romania",
      "description":
        "Anima 3 Fete Negre Magnum, asamblaj de Fetească Neagră din trei ani diferiţi, seria 006 îmbină recoltele anilor 2014, 2015 şi 2016. Vinul este elegant, armonios şi surprinzător, cu arome intense de fructe negre bine coapte, ciocolată amăruie şi tuşe de vanilie provenite de la maturarea în baricuri de stejar.",
      "variety": "Cupaj"
    },
    {id:34,
     "producator": "Anima",
      "name": "ANIMA - GRAND RESERVE ",
      "wine": "rosu",
      "image":
        "Vinuri/ANIMA - GRAND RESERVE.jpg",
      "price": 150, 
      "year": "2016",
      "country": "Romania",
      "description":
        "Anima Grand Reserve, cupaj roșu sec obținut din soiurile Fetească Neagră, Cabernet Sauvignon, Syrah și Merlot, prin selecţia celor mai bune butoaie, creat sub semnătura oenologului Aurelia Vișinescu. Fiecare dintre cele patru soiuri îşi aduce nota “personală”, mai pregnantă sau mai subtilă, cu scopul de a obţine un vin armonios, elegant şi complex. Debutul este intens și vibrant, cu arome bogate de fructe negre și roșii, cireșe bine coapte, prune uscate și stafide, note subtile de lemn și condiment. Structură solidă și taninuri fine, cu postgust lung și persistent, în note delicate de vanilie, tabac și ciocolată neagră.",
      "variety": "Cupaj"
    },
    {id:35,
     "producator": "Anima",
      "name": "ANIMA - SAUVIGNON BLANC FUME    ",
      "wine": "alb",
      "image":
        "Vinuri/ANIMA-SAUVION BLACK FUME 77LEI.jpg",
      "price": 77, 
      "year": "2017",
      "country": "Romania",
      "description":
        "Anima Grand Reserve, cupaj roșu sec obținut din soiurile Fetească Neagră, Cabernet Sauvignon, Syrah și Merlot, prin selecţia celor mai bune butoaie, creat sub semnătura oenologului Aurelia Vișinescu. Fiecare dintre cele patru soiuri îşi aduce nota “personală”, mai pregnantă sau mai subtilă, cu scopul de a obţine un vin armonios, elegant şi complex. Debutul este intens și vibrant, cu arome bogate de fructe negre și roșii, cireșe bine coapte, prune uscate și stafide, note subtile de lemn și condiment. Structură solidă și taninuri fine, cu postgust lung și persistent, în note delicate de vanilie, tabac și ciocolată neagră.",
      "variety": "Sauvignon Blanc"
    },
    {id:36,
     "producator": "Anima",
      "name": "ANIMA -  CHARDONNAY   ",
      "wine": "alb",
      "image":
        "Vinuri/ANIMA- CHARDONNAY 70LEI.jpg",
      "price": 70, 
      "year": "2020",
      "country": "Romania",
      "description":
        "Anima Chardonnay 2020, vin alb sec produs de Aurelia Vișinescu, este intens, cremos, cu arome de fructe tropicale, pepene galben și pere coapte. Fermentat și maturat pe drojdie timp de 5 luni în barricuri din stejar franțuzesc; arome de fructe tropicale, ananas și babană, bine integrte cu notele lemnoase și vanilate. Corpolent și cremos, mineral, cu gust de nuci și brioșe, cu un bun potențial de învechire. Buchet atrăgător, postgust lung.",
      "variety": "Chardonnay"
    },
    {id:37,
     "producator": "Anima",
      "name": "ANIMA -   MERLOT   ",
      "wine": "ROSU",
      "image":
        "Vinuri/ANIMA-MERLOT 83LEI.jpg",
      "price": 83, 
      "year": "2020",
      "country": "Romania",
      "description":
        "Merlot-ul din gama Anima, produs sub semnătura oenologului Aurelia Vișinescu, este intens, moale și catifelat, bogat, cu miros de fructe negre bine coapte, echilibrat de aromele de vanilie provenite ca urmare a învechirii în butoaie din stejar românesc timp de 20 de luni. Pentru a păstra aromele delicate, intervenția tehnologică a fost redusă la minim, de aceea este normal ca vinul să prezinte ușoare depuneri.",
      "variety": "Merlot"
    },
    {id:38,
      "producator": "1000 De Chipuri",
      "name": "1000 DE CHIPURI - Cabernet Sauvignon & Cabernet Franc ",
      "wine": "rosu",
      "image":
        "Vinuri/1000 DE CHIPURI CABERNET SAUVIGNON & CABERNET FRANC 60LEI.jpg",
      "price": 60, 
      "year": "2017",
      "country": "Romania",
      "description":
        "1000 De Chipuri Cabernet Sauvignon și Cabernet Franc, vin roșu sec, obținut din struguri de Cabernet Sauvinon și Cabernet Franc, din recolta anului 2017. Maturat în butoaie de stejar 12 luni.    ",
      "variety": "Cupaj"
    },
    {id:39,
      "producator": "1000 De Chipuri",
      "name": "1000 DE CHIPURI - CUPAJ ALB",
      "wine": "alb",
      "image":
        "Vinuri/1000 DE CHIPURI-CUPAJ ALB 45LEI.jpg",
      "price": 45, 
      "year": "2018",
      "country": "Romania",
      "description":
        "1000 De Chipuri Cabernet Sauvignon și Cabernet Franc, vin roșu sec, obținut din struguri de Cabernet Sauvinon și Cabernet Franc, din recolta anului 2017. Maturat în butoaie de stejar 12 luni.    ",
      "variety": "Cupaj"
    },
    {id:40,
      "producator": "1000 De Chipuri",
      "name": "1000 DE CHIPURI - FETEASCA NEAGRA ",
      "wine": "rosu",
      "image":
        "Vinuri/1000 DE CHIPURI-FETEASCA NEAGRA 150LEI.jpg",
      "price": 150, 
      "year": "2017",
      "country": "Romania",
      "description": "1000 DE CHIPURI - FETEASCA NEAGRA",
      "variety": "Feteasca Neagra"
    },
    {id:41,
      "producator": "1000 De Chipuri",
      "name": "1000 DE CHIPURI- DISTINCTIS  CUPAJ ROŞU  ",
      "wine": "rosu",
      "image":
        "Vinuri/1000 DE CHIPURI-DISTINCTIS CUPAJ ROSU 125LEI. jpg.jpg",
      "price": 125, 
      "year": "2014",
      "country": "Romania",
      "description": "1000 DE CHIPURI - PINOT NOIR",
      "variety": "Cupaj"
    },
    {id:42,
      "producator": "1000 De Chipuri",
      "name": "1000 DE CHIPURI-  FN14 FETEASCĂ NEAGRĂ  ",
      "wine": "rosu",
      "image":
        "Vinuri/1000 DE CHIPURI FN14 - FETEASCA NEAGRA 250LEI.jpg",
      "price": 250, 
      "year": "2014",
      "country": "Romania",
      "description":
        "1000 Chipuri FN14, vin roșu sec, obținut din struguri de Fetească Neagră, din recolta anului 2014. Maturat în butoaie de stejar 24 luni și în sticlă 12 luni.",
      "variety": "Feteasca Neagra"
    },
    {id:43,
      "producator": "Bauer",
      "name": "Bauer Cabernet Franc ",
      "wine": "rosu",
      "image":
        "Vinuri/BAUER CABERNET FRANC 2019 97LEI.jpg",
      "price": 97, 
      "year": "2019",
      "country": "Romania",
      "description":
        "Bauer Cabernet Franc, vin roşu sec produs în ediţie limitată de 3800 sticle.",
      "variety": "Cabernet"
    },
    {id:44,
      "producator": "Bauer",
      "name": "BAUER - CABERNET SAUVIGNON   ",
      "wine": "rosu",
      "image":
        "Vinuri/BAUER CABERNET SAUVIGNON 2018 85LEI.jpg",
      "price": 85, 
      "year": "2018",
      "country": "Romania",
      "description":
        "Bauer Cabernet Sauvignon 2017, produs în ediţie limitată de 4000 de sticle, este un vin elegant şi expresiv, cu o personalitate proprie şi potenţial excelent de învechire. Se recomandă asocierea cu mâncare condimentată, mai intensă în gust: miel, vânat sau roast beef.",
      "variety": "Cabernet Sauvignon"
    },
    {id:45,
      "producator": "Bauer",
      "name": "BAUER - FETEASCA NEAGRA   ",
      "wine": "rosu ",
      "image":
        "Vinuri/BAUER FETEASCA NEAGRA 2018 107LEI.jpg",
      "price": 107, 
      "year": "2018",
      "country": "Romania",
      "description":
        "Bauer Cabernet Sauvignon 2017, produs în ediţie limitată de 4000 de sticle, este un vin elegant şi expresiv, cu o personalitate proprie şi potenţial excelent de învechire. Se recomandă asocierea cu mâncare condimentată, mai intensă în gust: miel, vânat sau roast beef.",
      "variety": "Feteasca Neagra"
    },
    {id:46,
      "producator": "Bauer",
      "name": "BAUER - MERLOT 3L   ",
      "wine": "rosu ",
      "image":
        "Vinuri/BAUER MERLOT 3 L 2013 580LEI.jpg",
      "price": 580, 
      "year": "2013",
      "country": "Romania",
      "description":
        "După desciorchinare, strugurii nu sunt zdrobiţi şi nu se adaugă drojdii selecţionate. Fermentaţia alcoolică are loc în cisterne mici de inox, fără temperatură controlată, “pigeage” fiind făcut manual până la 3 ori pe zi. Vinurile rămân până la 5 săptămâni pe boştină, înainte de presare şi tragere în butoate lemn de stejar de 225 litri. În butoaie se iniţiază fermentaţia malolactică, vinul rămânând apoi în butoi minim 12 luni până la îmbuteliere.",
      "variety": "Merlot"
    },
    {id:47,
      "producator": "Bauer",
      "name": "BAUER - BAUER SAUVIGNON BLANC 2021",
      "wine": "alb ",
      "image":
        "Vinuri/BAUER SAUBIGNON BLANC 2021 58LEI.jpg",
      "price": 58, 
      "year": "2021",
      "country": "Romania",
      "description":
        "După desciorchinare, strugurii nu sunt zdrobiţi şi nu se adaugă drojdii selecţionate. Fermentaţia alcoolică are loc în cisterne mici de inox, fără temperatură controlată, “pigeage” fiind făcut manual până la 3 ori pe zi. Vinurile rămân până la 5 săptămâni pe boştină, înainte de presare şi tragere în butoate lemn de stejar de 225 litri. În butoaie se iniţiază fermentaţia malolactică, vinul rămânând apoi în butoi minim 12 luni până la îmbuteliere.",
      "variety": "Sauvignon Blanc"
    }
  ];
window.addEventListener('load', function () {
    let user = fetchUserLogin();
    if (user !== undefined) {
        let products = user.products
        
        let productList = document.getElementById("product-list");
        let html = '';
        for(const product of products){
            html = '<div class="products">'+
                '<div class="prod">'+
                  '<img src="./'+product.image+'" alt="logo" width="50px" />'+
                '</div>'+
                '<div class="number">'+
                  '<input type="number" value="1" />'+
                '</div>'+
                '<div class="price">'+product.price+'</div>'+
              '</div>'

              productList.innerHTML(html);
        }
    }
  })