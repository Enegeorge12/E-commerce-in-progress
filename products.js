
const produse = [
  // Franta
  {
    producator: "Albert Bichot",
    name: "ALBERT BICHOT SAINT – AUBIN",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/10/DSC_0017-copy-300x453.jpg",
    price: "213 Lei",
    description:
      "Un vin deosebit de complex, intent şi cremos, cu o mineralitate delicată şi o bună aciditate.",
    year: "2013",
    country: "Franta",
    variety: "Chardonnay"
  },
  {
    producator: "Albert Bichot ",
    name: "ALBERT BICHOT SECRET DE FAMILLE",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/10/DSC_0042-copy-scaled.jpg",
    price: "123 Lei",
    year: "2017",
    country: "Franta",
    description:
      "Este un vin fermecător, care prezintă arome fructate predominante de coacăze negre și fructe de pădure roșii. Catifelat și mătăsos, acest vin are o structură moale, echilibrată pe palat, care se încheie cu un finisaj delicat, care amintește de fructe roșii.",
    variety: "Pinot Noir"
  },
  {
    producator: "DOM PERIGNON  ",
    name: "DOM PERIGNON- BRUT VINTAGE ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0028-2-scaled.jpg",
    price: "1.059,00 Lei",
    year: "2010",
    country: "Franta",
    description:
      "Dom Perignon este sinonim cu excelenţa şi celebritatea. Are un caracter luminos redat de o culoare galben pal cu reflexe aurii. Aromele se deschid într-un pastel de note florale şi fructe confiate, completate de note de panificaţie şi lemn dulce.",
    variety: "Champagne"
  },
  {
    producator: "DOM PERIGNON  ",
    name: "DOM PERIGNON - ROSE VINTAGE  ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2021/05/DSC_0009-copy-scaled.jpg",
    price: "1.660,00 Lei",
    year: "2006",
    country: "Franta",
    description:
      " Dom Perignon Rose este expresia echilibrului perfect între Chardonnay şi Pinot Noir. Este obţinută din struguri Pinot Noir şi Chardonnay din producţia aceluiaşi an, fiind ulterior maturată pe drojdii cel putin 7 ani, această maturare neafectând însă fineţea gustului. Dom Perignon Rose are un perlaj îndrăzneţ dar catifelat şi este caracterizată de note florale şi fructate precum note de petale de trandafir, flori de cireş, căpşuni, zmeură, fragi şi caise uscate. Temperatura recomandată de servire: 8-10°C.  ",
    variety: "Champagne"
  },
  {
    producator: "EGLY OURIET",
    name: "EGLY OURIET - GRAND CRU MILLESIME ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/08/DSC_0032-scaled.jpg",
    price: "750,00  Lei",
    year: "2006",
    country: "Franta",
    description:
      "Strugurii folosiţi pentru producerea acestei Şampanii au fost culeşi de pe parcele cu vii de peste 50 de ani vechime, din Grand Cru Ambonnay. Vinul a fost maturat în butoaie de stejar, fără fermentaţie malolactică. Înainte de degorjare, vinul a petrecut 96 de luni pe drojdii, în sticlă, dezvoltând astfel aome intense de condimente exotice, fructe confiate şi pişcot. Gustul său este proaspăt, suculent şi catifelat, cu senzaţii foarte intense şi complexe, o combinaţie de tonuri sangvinice, de frunze uscate şi senzaţii de sare marină şi praf de calcar. Un vin extrem de bine lucrat, energic şi mineral. ",
    variety: "Champagne"
  },
  {
    producator: "EGLY OURIET",
    name: "EGLY OURIET - BLANC DE NOIRS GRAND CRU ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/08/DSC_0030-scaled.jpg",
    price: "950,00  Lei",
    year: "2006",
    country: "Franta",
    description:
      "Strugurii pentru această Şampanie provin din plantaţii de vită de vie cu o vârsta medie de 70 de ani, iar vinul bază a fost fermentat în butoaie de stejar. A fost produs după metoda tradiţională, înainte de degorjare, vinul petrecând 52 de luni pe drojdii. A dezvoltat astfel o paletă aromatică ce aminteşte de fructele galbene confiate, de alunele prăjite şi de condimentele exotice, cu un fundal elegant, susţinut de senzaţiile conferite de lemnul de stejar. Prezintă un echilibru impecabil între texturi, arome şi senzaţii, cu arome ample şi complexe, plus un caracter mineral, ce oferă prospeţime şi intensitate vinului, dar şi o senzaţie salină, tonică în postgust.",
    variety: "Champagne"
  },
  {
    producator: "BILLECART",
    name: "BILLECART-SALMON BRUT ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0031-2-scaled.jpg",
    price: "280,00  Lei",
    year: "2006",
    country: "Franta",
    description:
      "O Şampanie galben pai cu reflexii aurii-verzui, perlaj fin, cu spumă persistentă şi abundentă. Arome proaspete, florale, cu note de fructe şi pere coapte. Gustul este plin, consistent, cu prospeţime şi buchet bogat.",
    variety: "Champagne"
  },
  {
    producator: "BILLECART",
    name: "BILLECART-SALMON ROSE ",
    wine: "Champagne",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0029-2-scaled.jpg",
    price: "435,00  Lei",
    year: "2006",
    country: "Franta",
    description:
      "Roze portocaliu deschis și strălucitor, cu tentă caldă aurie, perlaj delicat și spumă persistentă. Subtil, elegant și delicat, cu note de fructe roșii și citrice. Uşor şi elegant, urmat de un final proaspăt, cu savoare de zmeură.",
    variety: "Champagne"
  },
  // Italia
  {
    producator: "ANTINORI",
    name: "CERVARO DELLA SALA",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0007-scaled.jpg",
    price: "265 Lei",
    year: "2018",
    country: "Italia",
    description:
      "Cervaro della Sala a fost unul dintre primele vinuri italieneşti cu fermentație malolactică și maturare în baricuri, cu prima recoltă în 1985. În prezent, după o perioadă de 5 luni de maturare în baric, vinul obţinut din Chardonnay este asamblat cu cel din soiul Grechetto, care a fost produs fără influenţa lemnului. După o perioadă de învechire la sticlă, vinul este scos apoi în piaţă. Acest vin prezintă o culoare galben pai strălucitor, cu reflexii verzui. În nas se simt note discrete de pâine prăjită, completate de arome de citrice, fructe tropicale şi unt. Gustul este savuros, plin şi proaspăt, cu note de muşeţel, fructe albe şi tuşe minerale, susţinute de o aciditate plăcută şi un postgust lung.",
    variety: "Chardonnay, Grechetto"
  },
  {
    producator: "ANTINORI",
    name: "ANTINORI CONT’UGO",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/05/DSC_0059-scaled.jpg",
    price: "175 Lei",
    year: "2013",
    country: "Italia",
    description:
      "Vinul prezintă arome de prune și afine, alături de condimente dulci. Pe palat, este vibrant, lung și echilibrat. Armonia și plinătatea fructelor de pe final și postgustul fructat sunt trăsăturile sale caracteristice.",
    variety: "Merlot"
  },
  {
    producator: "ANTINORI",
    name: "ANTINORI-SOLAIA",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/05/DSC_0011-3-scaled.jpg",
    price: "2.100,00 Lei",
    year: "2013",
    country: "Italia",
    description:
      "Un vin roșu rubiniu foarte intens, proaspăt și vibrant, cu nuanţe violet, care prezintă arome de fructe roșii coapte, însoțit de senzație balsamică de lichior și mentă. Se alătură aromele de vanilie şi fum, dobândite prin maturarea la baric. Atacul este elegant, apoi ies în evidenţă taninurile ferme și mătăsoase, cu un postgust lung şi complex, în care predomină ciocolată neagră, violete şi lavandă.",
    variety: "Merlot"
  },
  {
    producator: "ANTINORI",
    name: "ANTINORI-TIGNANELLO",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0058-scaled.jpg",
    price: "485 Lei",
    year: "2013",
    country: "Italia",
    description:
      "Cabernet Franc, Cabernet Sauvignon, Sangiovese ,Tignanello a fost primul Sangiovese care a fost maturat in barriquri, primul vin roșu contemporan cupajat cu soiuri netradiționale (în special Cabernet) și unul dintre primele vinuri roșii din regiunea Chianti Classico care nu a folosit struguri albi. Cupajul este obţinut aşadar predominant din soiul Sangiovese şi un procent scăzut de Cabernet Sauvignon și Cabernet Franc. Maturerea vinului are loc în butoaie de stejar franţuzesc și unguresc, aflate la prima şi a doua utilizare, pentru o perioadă de 14-16 luni pentru pentru a-i desăvârşi evoluţia, urmând o perioadă suplimentară de 12 luni de învechire la sticlă înainte de a fi lansat pe piață. Un vin roşu rubiniu intens, ce prezintă arome deosebit de complexe. Note de fructe roșii bine coapte cum ar fi cireșele, conservate în băuturi spirtoase, vișinele, zmeura și prunele, completate de arome condimentate de cuişoare şi lemn dulce, note balsamice de mentă şi ciocolată completează buchetul său complex. Pe palat este bogat, corpolent și vibrant cu taninuri catifelate. Gustul său lung și fin este persistent, amintind de aromele percepute anterior.",
    variety: "Cupaj"
  },
  {
    producator: "ANTINORI",
    name: "ANTINORI - CONTE DELLA VIPERA ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/ANTINORI-CONTE-DELLA-VIPERA.jpg",
    price: "115 Lei",
    year: "2019",
    country: "Italia",
    description:
      "Prospetimea si aroma specifică Suvignon-ului Blanc se îmbină perfect cu notele exotice ale Sémillon-ului. De o culoare galben pai cu note verzui, este un vin în care predomină aromele citrice, în special grapefruit şi fructe coapte, piersică şi ananas, completate de ierburi aromatice şi o mineralitate plăcută. Gustativ este echilibrat și persistent, susținut de o bună prospețime și aromă specifică.",
    variety: "Cupaj"
  },
  {
    producator: "ANTINORI",
    name: "ANTINORI GUADO AL TASSO BOLGHERI SUPERIORE ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2021/03/DSC_0033-copy-scaled.jpg",
    price: "600 Lei",
    year: "2017",
    country: "Italia",
    description:
      "Prospetimea si aroma specifică Suvignon-ului Blanc se îmbină perfect cu notele exotice ale Sémillon-ului. De o culoare galben pai cu note verzui, este un vin în care predomină aromele citrice, în special grapefruit şi fructe coapte, piersică şi ananas, completate de ierburi aromatice şi o mineralitate plăcută. Gustativ este echilibrat și persistent, susținut de o bună prospețime și aromă specifică.",
    variety: "Cupaj"
  },
  {
    producator: "GAJA ",
    name: "GAJA - CAMARCANDA",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0006-scaled.jpg",
    price: "700 Lei",
    year: "2007",
    country: "Italia",
    description:
      "Roşu rubiniu închis. Complex şi bine definit, bogat în arome de condiment. Un vin cu o structură solidă şi complexă, concentrat în arome, dar fin şi armonios pe palat.    ",
    variety: "sauvignon blanc  "
  },
  {
    producator: "GAJA ",
    name: "GAJA - CAMARCANDA PROMIS",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0089-copy-scaled.jpg",
    price: "165 Lei",
    year: "2014",
    country: "Italia",
    description:
      "Ca’Marcanda Promis – un cupaj intens de Merlot 55%, Syrah 35%, Sangiovese 10%. Aromele predominante sunt cele de fructe negre, condimente exotice, piele şi pământ. Fructele negre, concentrate pe palat, împreună cu taninurile delicate şi aciditatea ridicată oferă vinului echilibru şi o prospeţime plăcută. Recomandări gastronomice: barbeque, miel, vită.",
    variety: "cupaj  "
  },
  {
    producator: "GAJA ",
    name: "GAJA - PIEVE SANTA RESTITUTA",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0083-copy-scaled.jpg",
    price: "365 Lei",
    year: "2014",
    country: "Italia",
    description:
      "Gaja Pieve Santa Restituta este un Brunello di Montalcino complex şi bogat, cu arome de fructe roşii de pădure şi cireşe sălbatice, completate de nuanţe discrete de ienupăr. Deşi corpolent, se remarcă prin structura elegantă, taninuri şi aciditate foarte bine integrate, cu final lung şi intens. Recomandări gastronomice: brânzeturi, charcuterie, miel, paste, risotto, sufleuri, trufe, vânat, vită.",
    variety: "cupaj  "
  },
  {
    producator: "TENUTA ",
    name: "TENUTA ARGENTIERA - BOLGHERI SUPERIORE",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0099-copy-scaled.jpg",
    price: "460 Lei",
    year: "2016",
    country: "Italia",
    description:
      "Argentiera Bolgheri Superiore, un cupaj din cele mai bune parcele de Cabernet Sauvignon, Merlot şi Cabernet Franc ale producătorului. Un vin roşu corpolent, cu un gust catifelat şi foarte bine echilibrat. Maturarea îndelungată în barrique-uri de stejar franţuzesc, structura soiului Cabernet Sauvignon și terroir-ul unic de la Tenuta Argentiera, fac din acest vin unul reprezentativ pentru zona Bolgheri.",
    variety: "cupaj  "
  },
  {
    producator: "TENUTA  ",
    name: "TENUTA BUON TEMPO BRUNELLO DI MONTALCINO",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/11/DSC_0095-copy-scaled.jpg",
    price: "214 Lei",
    year: "2010",
    country: "Italia",
    description:
      "Brunello di Montalcino din recoltra anului 2010, un Sangiovese roșu-rubiniu închis, cu note de carne de vânat afumată, piele, fructe negre. Un vin elegant, proaspăt și fructat, cu arome de cireșe și mure uscate, mentă, ierburi aromate, șuncă afumată, pământ și condimente exotice; corp plin, taninuri puternice dar fine și o extraordinară concentrare; postgust picant, cu note de cireșe negre, scorțișoară, salvie și anason. Recomandări gastronomice: fripturi preparate cu vin, vânat, brânzeturi mediu maturate.",
    variety: "cupaj  "
  },
  {
    producator: "TENUTA  ",
    name: "TENUTA `ALTA` ",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/11/DSC_0096-copy-scaled.jpg",
    price: "260 Lei",
    year: "2010",
    country: "Italia",
    description:
      "Brunello di Montalcino intens şi aromat, cu un echilibru şi o complexitate uluitoare; arome splendide de fructe negre de pădure, lavandă şi condimente, coacăze roşii şi zmeură coapte, cimbru, cardamom, bergamotă şi tutun; sfârşit lung, în care taninurile se fac simţite în concentraţia ideală. Recomandări gastronomice: carne roşie, vânat, coaste, brânzeturi maturate.",
    variety: "cupaj  "
  },
  {
    producator: "TENUTA  ",
    name: "TENUTA DI TRINORO LE CUPOLE",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/10/DSC_0037-copy-scaled.jpg",
    price: "180 Lei",
    year: "2014",
    country: "Italia",
    description:
      " Roşu rubiniu strălucitor. Arome de fructe roşii coapte, cu note de condimente dulci. Corp plin, proaspăt, cu taninuri delicate şi note intens fructate. Final lung şi savuros. Recomandări gastronomice: barbeque, brânzeturi, miel, paste, risotto, vânat, vită.",
    variety: "cupaj  "
  },
  {
    producator: "TENUTA  ",
    name: "TENUTA  DI TRINORO PALAZZI",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0023-scaled.jpg",
    price: "940 Lei",
    year: "2015",
    country: "Italia",
    description:
      "Vinul prezintă arome de fructe roşii coapte, flori sălbatice, trufe albe şi condimente exotice. Gustativ este corpolent, devine intens pe parcurs, cu note de gem de zmeură şi flori ce persistă în timp pe un final lung susţinut de taninuri mătăsoase.",
    variety: "merlot "
  },
  // romania
  {
    producator: "DAVINO",
    name: "DOMAINE CEPTURA ROUGE MAGNUM   ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/10/DSC_0060-copy-scaled.jpg",
    price: "295 Lei",
    year: "2015",
    country: "Romania",
    description:
      "Davino Domaine Ceptura Rouge, un cupaj valoros obţinut din Cabernet Sauvignon, Merlot şi Fetească Neagră, în format Magnum (1,5 litri). Este produs din cele mai valoroase parcele, cele trei soiuri care intră în cupaj sunt vinificate separat, iar vinul obţinut este intens și complex, cu fond de vișine negre și prune uscate, ușor picant, nuanțe de lemn de stejar și cafea. Gustul este complex și expresiv, amplu, puternic dar catifelat, cu un postgust remanent condimentat, ce pune în evidență taninurile fine și elaborate. ",
    variety: "Cupaj"
  },
  {
    producator: "DAVINO",
    name: "DOMAINE CEPTURA ROUGE MAGNUM   ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2021/03/DSC_0033-copy-scaled.jpg",
    price: "295 Lei",
    year: "2015",
    country: "Romania",
    description:
      "Davino Domaine Ceptura Rouge, un cupaj valoros obţinut din Cabernet Sauvignon, Merlot şi Fetească Neagră, în format Magnum (1,5 litri). Este produs din cele mai valoroase parcele, cele trei soiuri care intră în cupaj sunt vinificate separat, iar vinul obţinut este intens și complex, cu fond de vișine negre și prune uscate, ușor picant, nuanțe de lemn de stejar și cafea. Gustul este complex și expresiv, amplu, puternic dar catifelat, cu un postgust remanent condimentat, ce pune în evidență taninurile fine și elaborate. ",
    variety: "Cupaj"
  },
  {
    producator: "DAVINO",
    name: "PURPURA VALAHICA DAVINO FETEASCĂ NEAGRĂ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/06/DSC_0036-scaled.jpg",
    price: "160 Lei",
    year: "2009 ",
    country: "Romania",
    description:
      "Davino Purpura Valahica, un vin roşu destinat cunoscătorilor, produs exclusiv din cele mai bune parcele de Fetească Neagră, în anul 2009.",
    variety: "Feteasca Neagra"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - FLAMBOYANT MAGNUM 1,5 L  ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/04/DSC_0065-copy-scaled.jpg",
    price: "475 Lei",
    year: "2015 ",
    country: "Romania",
    description:
      "Davino Flamboyant, obţinut din cele mai bune parcele de Cabernet Sauvignon, Merlot şi Fetească Neagră ale cramei, este un vin roșu-rubiniu intens cu reflexe purpurii, persistent și intens, cu nuanțe de fructe negre, miez de nucă, piper verde, mentă și tabac. Complex și expresiv pe bolta palatină, amplu, puternic dar rotund. Evoluție pe o pantă lungă, cu un postgust remanent ușor condimentat, ce pune în evidență taninurile fine și elaborate. Asociere culinară: Carne de miel la grătar sau cuptor, carne de vită împănată, carne de vânat, brânzeturi maturate.",
    variety: "Cupaj"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - MONOGRAM FETEASCĂ NEAGRĂ ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0006-scaled.jpg",
    price: "95 Lei",
    year: "2015 ",
    country: "Romania",
    description:
      " Monogram Fetească Neagră este un vin roşu rubiniu intens cu reflexe purpurii, în care predomină aromele condimentate de mentă şi prune uscate, intense şi persistente, completate cu nuanţe de lemn de stejar. Gustul este expresiv, suplu, bine structurat, rotund cu taninuri bine integrate. Asociere culinară: carne de raţă, cotlete de porc, paste pe bază de sos de tomate, carne de viţel, brânzeturi.",
    variety: "Feteasca neagra "
  },
  {
    producator: "DAVINO",
    name: "DAVINO - MONOGRAM FETEASCĂ ALBĂ ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0003-copy-scaled.jpg",
    price: "79Lei",
    year: "2019",
    country: "Romania",
    description:
      "Monogram Fetească Albă este un vin bine structurat, amplu, cu arome complexe date de maturarea pe depozit fin de drojdii, dar și cu păstrarea aromelor tipice de soi. Nas fin, cu nuanţe de flori de tei şi note minerale pe un fond de alune uşor prăjite. În gust este crocant şi cremos, bine echilibrat şi expresiv, cu un postgust remanent uşor amărui. Poate fi consumat ca aperitiv sau alături de peşte, fructe de mare, preparate din carne de pui.",
    variety: "Feteasca alba "
  },
  {
    producator: "DAVINO",
    name: "DAVINO - IACOB ROSE  ",
    wine: "rose",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0029-scaled.jpg",
    price: "48 Lei",
    year: "2020",
    country: "Romania",
    description:
      "Iacob Rose, cupaj obţinut din Cabernet Sauvignon şi Merlot, în care predomină aromele de fructe roşii de pădure, vişine şi coacăze negre. Proaspăt, echilibrat, bine structurat, amplu, rotund şi persistent, este excelent ca aperitiv sau alături de peşte, fructe de mare, brânzeturi proaspete.",
    variety: "cupaj"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - IACOB ROŞU   ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0027-scaled.jpg",
    price: "72 Lei",
    year: "2017",
    country: "Romania",
    description:
      "Iacob Roşu, cupaj obţinut din Cabernet Sauvignon şi Fetească Neagră, este un vin roșu-rubiniu intens cu reflexe purpurii, în care se identifică aromele caracteristice soiurilor, la care se adaugă note de fructe confiate, lemn de stejar și cafea. Gustul este amplu și ferm, echilibrat și armonios cu final persistent. Asociere culinară: paste, pizza, carne de miel, carne de vită împănată, brânzeturi.",
    variety: "cupaj"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - IACOB ALB    ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0028-scaled.jpg",
    price: "66Lei",
    year: "2020",
    country: "Romania",
    description:
      "Iacob Alb, cupaj obţinut din Sauvignon Blanc şi Fetească Albă, este limpede, cristalin, auriu cu nuanţe verzui; un vin în care se regăsesc cu uşurinţă aromele primare varietale tipice fiecarui soi în parte, completate de note fermentative elegante și elaborate. Proaspăt, expresiv, amplu, echilibrat și persistent, poate fi savurat ca aperitiv, sau alături de pește, fructe de mare, carne de pui.",
    variety: "cupaj"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - FAURAR ALB    ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0026-scaled.jpg",
    price: "42 Lei",
    year: "2020",
    country: "Romania",
    description:
      "Făurar alb, cupaj obţinut din Sauvignon Blanc, Fetească Albă şi Riesling, este un vin proaspăt şi expresiv, în care se regăsesc arome florale cu note ușor minerale, intens şi persistent. Poate fi consumat ca aperitiv sau alături de pește, fructe de mare, carne de pui.",
    variety: "cupaj"
  },
  {
    producator: "DAVINO",
    name: "DAVINO - FAURAR ROSU  ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0025-scaled.jpg",
    price: "42 Lei",
    year: "2017",
    country: "Romania",
    description:
      "Făurar Roşu, cupaj obţinut din Cabernet Sauvignon, Merlot şi Fetească Neagră, este un vin roșu rubiniu intens cu reflexe purpurii. Nasul este caracteristic soiurilor din care este obţinut, intens și persistent, condimentat cu note de piper verde, fructe uscate și cafea. În gust este amplu, echilibrat și armonios structurat, final persistent, cu taninuri elaborate. Asociere culinară: carne de porc, vită sau miel, paste, pizza, brânzeturi.",
    variety: "cupaj"
  },
  {
    producator: "ANIMA",
    name: "ANIMA - 3 FETE NEGRE MAGNUM ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/09/DSC_0014-1-scaled.jpg",
    price: "280 Lei",
    year: "2014",
    country: "Romania",
    description:
      "Anima 3 Fete Negre Magnum, asamblaj de Fetească Neagră din trei ani diferiţi, seria 006 îmbină recoltele anilor 2014, 2015 şi 2016. Vinul este elegant, armonios şi surprinzător, cu arome intense de fructe negre bine coapte, ciocolată amăruie şi tuşe de vanilie provenite de la maturarea în baricuri de stejar.",
    variety: "cupaj"
  },
  {
    producator: "ANIMA",
    name: "ANIMA - GRAND RESERVE ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/04/DSC_0014-1-scaled.jpg",
    price: "150 Lei",
    year: "2016",
    country: "Romania",
    description:
      "Anima Grand Reserve, cupaj roșu sec obținut din soiurile Fetească Neagră, Cabernet Sauvignon, Syrah și Merlot, prin selecţia celor mai bune butoaie, creat sub semnătura oenologului Aurelia Vișinescu. Fiecare dintre cele patru soiuri îşi aduce nota “personală”, mai pregnantă sau mai subtilă, cu scopul de a obţine un vin armonios, elegant şi complex. Debutul este intens și vibrant, cu arome bogate de fructe negre și roșii, cireșe bine coapte, prune uscate și stafide, note subtile de lemn și condiment. Structură solidă și taninuri fine, cu postgust lung și persistent, în note delicate de vanilie, tabac și ciocolată neagră.",
    variety: "cupaj"
  },
  {
    producator: "ANIMA",
    name: "ANIMA - SAUVIGNON BLANC FUME    ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0020-scaled.jpg",
    price: "77 Lei",
    year: "2017",
    country: "Romania",
    description:
      "Anima Grand Reserve, cupaj roșu sec obținut din soiurile Fetească Neagră, Cabernet Sauvignon, Syrah și Merlot, prin selecţia celor mai bune butoaie, creat sub semnătura oenologului Aurelia Vișinescu. Fiecare dintre cele patru soiuri îşi aduce nota “personală”, mai pregnantă sau mai subtilă, cu scopul de a obţine un vin armonios, elegant şi complex. Debutul este intens și vibrant, cu arome bogate de fructe negre și roșii, cireșe bine coapte, prune uscate și stafide, note subtile de lemn și condiment. Structură solidă și taninuri fine, cu postgust lung și persistent, în note delicate de vanilie, tabac și ciocolată neagră.",
    variety: "Sauvignon Blanc"
  },
  {
    producator: "ANIMA",
    name: "ANIMA -  CHARDONNAY   ",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0020-scaled.jpg",
    price: "70 Lei",
    year: "2020",
    country: "Romania",
    description:
      "Anima Chardonnay 2020, vin alb sec produs de Aurelia Vișinescu, este intens, cremos, cu arome de fructe tropicale, pepene galben și pere coapte. Fermentat și maturat pe drojdie timp de 5 luni în barricuri din stejar franțuzesc; arome de fructe tropicale, ananas și babană, bine integrte cu notele lemnoase și vanilate. Corpolent și cremos, mineral, cu gust de nuci și brioșe, cu un bun potențial de învechire. Buchet atrăgător, postgust lung.",
    variety: "  chardonnay"
  },
  {
    producator: "ANIMA",
    name: "ANIMA -   MERLOT   ",
    wine: "ROSU",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0015-scaled.jpg",
    price: "83 Lei",
    year: "2020",
    country: "Romania",
    description:
      "Merlot-ul din gama Anima, produs sub semnătura oenologului Aurelia Vișinescu, este intens, moale și catifelat, bogat, cu miros de fructe negre bine coapte, echilibrat de aromele de vanilie provenite ca urmare a învechirii în butoaie din stejar românesc timp de 20 de luni. Pentru a păstra aromele delicate, intervenția tehnologică a fost redusă la minim, de aceea este normal ca vinul să prezinte ușoare depuneri.",
    variety: "merlot"
  },
  {
    producator: "1000 DE CHIPURI ",
    name: "1000 DE CHIPURI - Cabernet Sauvignon & Cabernet Franc ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0003-scaled.jpg",
    price: "60 Lei",
    year: "2017",
    country: "Romania",
    description:
      "1000 De Chipuri Cabernet Sauvignon și Cabernet Franc, vin roșu sec, obținut din struguri de Cabernet Sauvinon și Cabernet Franc, din recolta anului 2017. Maturat în butoaie de stejar 12 luni.    ",
    variety: "cupaj"
  },
  {
    producator: "1000 DE CHIPURI ",
    name: "1000 DE CHIPURI - CUPAJ ALB",
    wine: "alb",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/05/DSC_0004-scaled.jpg",
    price: "45 Lei",
    year: "2018",
    country: "Romania",
    description:
      "1000 De Chipuri Cabernet Sauvignon și Cabernet Franc, vin roșu sec, obținut din struguri de Cabernet Sauvinon și Cabernet Franc, din recolta anului 2017. Maturat în butoaie de stejar 12 luni.    ",
    variety: "cupaj"
  },
  {
    producator: "1000 DE CHIPURI ",
    name: "1000 DE CHIPURI - FETEASCA NEAGRA ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/04/DSC_0003-scaled.jpg",
    price: "150 Lei",
    year: "2017",
    country: "Romania",
    description: "1000 DE CHIPURI - FETEASCA NEAGRA",
    variety: "feteasca neagra"
  },
  {
    producator: "1000 DE CHIPURI ",
    name: "1000 DE CHIPURI- DISTINCTIS  CUPAJ ROŞU  ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0004-1-scaled.jpg",
    price: "125 Lei",
    year: "2014",
    country: "Romania",
    description: "1000 DE CHIPURI - PINOT NOIR",
    variety: "cupaj"
  },
  {
    producator: "1000 DE CHIPURI ",
    name: "1000 DE CHIPURI-  FN14 FETEASCĂ NEAGRĂ  ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2018/12/DSC_0022-scaled.jpg",
    price: "250 Lei",
    year: "2014",
    country: "Romania",
    description:
      "1000 Chipuri FN14, vin roșu sec, obținut din struguri de Fetească Neagră, din recolta anului 2014. Maturat în butoaie de stejar 24 luni și în sticlă 12 luni.",
    variety: "feteasca neagra "
  },
  {
    producator: "BAUER ",
    name: "BAUER -CABERNET FRANC  ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/06/DSC_0002-scaled.jpg",
    price: "97 Lei",
    year: "2019",
    country: "Romania",
    description:
      "Bauer Cabernet Franc, vin roşu sec produs în ediţie limitată de 3800 sticle.",
    variety: "cabernet "
  },
  {
    producator: "BAUER ",
    name: "BAUER - CABERNET SAUVIGNON   ",
    wine: "rosu",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0024-1-scaled.jpg",
    price: "85 Lei",
    year: "2018",
    country: "Romania",
    description:
      "Bauer Cabernet Sauvignon 2017, produs în ediţie limitată de 4000 de sticle, este un vin elegant şi expresiv, cu o personalitate proprie şi potenţial excelent de învechire. Se recomandă asocierea cu mâncare condimentată, mai intensă în gust: miel, vânat sau roast beef.",
    variety: "cabernet sauvignon"
  },
  {
    producator: "BAUER ",
    name: "BAUER - FETEASCA NEAGRA   ",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2020/05/DSC_0027-scaled.jpg",
    price: "107 Lei",
    year: "2018",
    country: "Romania",
    description:
      "Bauer Cabernet Sauvignon 2017, produs în ediţie limitată de 4000 de sticle, este un vin elegant şi expresiv, cu o personalitate proprie şi potenţial excelent de învechire. Se recomandă asocierea cu mâncare condimentată, mai intensă în gust: miel, vânat sau roast beef.",
    variety: "feteasca neagra "
  },
  {
    producator: "BAUER ",
    name: "BAUER - MERLOT 3L   ",
    wine: "rosu ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0023-5-scaled.jpg",
    price: "580 Lei",
    year: "2013",
    country: "Romania",
    description:
      "După desciorchinare, strugurii nu sunt zdrobiţi şi nu se adaugă drojdii selecţionate. Fermentaţia alcoolică are loc în cisterne mici de inox, fără temperatură controlată, “pigeage” fiind făcut manual până la 3 ori pe zi. Vinurile rămân până la 5 săptămâni pe boştină, înainte de presare şi tragere în butoate lemn de stejar de 225 litri. În butoaie se iniţiază fermentaţia malolactică, vinul rămânând apoi în butoi minim 12 luni până la îmbuteliere.",
    variety: "merlot "
  },
  {
    producator: "BAUER ",
    name: "BAUER - BAUER SAUVIGNON BLANC 2021",
    wine: "alb ",
    image:
      "https://ethicwine.ro/wp-content/uploads/2016/01/DSC_0030-1-scaled.jpg",
    price: "58 Lei",
    year: "2021",
    country: "Romania",
    description:
      "După desciorchinare, strugurii nu sunt zdrobiţi şi nu se adaugă drojdii selecţionate. Fermentaţia alcoolică are loc în cisterne mici de inox, fără temperatură controlată, “pigeage” fiind făcut manual până la 3 ori pe zi. Vinurile rămân până la 5 săptămâni pe boştină, înainte de presare şi tragere în butoate lemn de stejar de 225 litri. În butoaie se iniţiază fermentaţia malolactică, vinul rămânând apoi în butoi minim 12 luni până la îmbuteliere.",
    variety: "sauvignon blanc  "
  }
];
console.log(produse);

const vinuri = document.createElement("ul");
vinuri.classList.add("vinuri");

const mainProduse = document.querySelector("#product");
mainProduse.appendChild(vinuri);

for (let i of produse) {
  let elem = document.createElement("li");
  elem.classList.add("li-vinuri");
  elem.textContent = i.name;
  elem.style.listStyle = "none";
  vinuri.appendChild(elem);

  let imagine = document.createElement("img");
  imagine.src = i.image;
  imagine.setAttribute("width", "100%");
  imagine.setAttribute("margin", "10px");
  // imagine.style.boxShadow = "2px 2px 2px 2px gray";
  // imagine.style.borderRadius = "100%";
  elem.appendChild(imagine);

  let pret = document.createElement("button");
  pret.classList.add("price-button");
  pret.textContent = i.price;
  elem.appendChild(pret);

  
  let detailsButton = document.createElement("button");
  detailsButton.classList.add("details-button");
  detailsButton.textContent = "Detalii";
  elem.appendChild(detailsButton);
}
document.querySelector("body").addEventListener("blur", function (event) {
  event.preventDefault();
});
