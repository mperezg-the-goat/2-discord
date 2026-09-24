const esaldia ="La selección femenina de España se ha proclamado campeona del Mundial después de derrotar a Inglaterra en la gran final de Sidney";

//1.Zenbat letra ditu esaldiak?
console.log(esaldia.length);

//2.Zer karakter du 25. posizioak?
console.log(esaldia.charAt(25));

//3.Zein posiziotan dago lehenengo d letra? Eta azken d letra? Nola lortuko zenuke bigarren d letra ateratzea?
console.log(esaldia.indexOf("d"));
console.log(esaldia.indexOf("d",22+1));
console.log(esaldia.lastIndexOf("d"));

//4.Zer posizioan dago "Mundial" hitza?
console.log(esaldia.indexOf("Mundial"));

//5.Nola dakizu esaldian "Portugal" hitza existitzen den?
console.log(esaldia.includes("Portugal"));

//6.Nola dakizu esaldia Sidney hitzarekin hasten edo amaitzen den?
console.log(esaldia.startsWith("Sindney"));
console.log(esaldia.endsWith("Sindney"));

//7.Gehitu "2023ko abustuaren 20an" esaldiari, eta gorde guztia aldagai batean.
let alterna = "El 20 de agosto de 2023 " + esaldia ;
console.log(alterna);

//8.Aurreko esalditik 26 eta 35 posizioen artean dauden letrak atera.
console.log(esaldia.substring(26,35));
//9.Aurreko esalditik 40. posiziotik aurrera dauden letrak atera.
console.log(esaldia.slice(40));
//11.Esaldia letra xehe bihuru. Eta gero letra larri.
console.log(esaldia.toUpperCase);
console.log(esaldia.toLowerCase);

//12.Esaldia array bihurtu, non posizio bakoitzak hitz bat duen, metodo bakarra erabiliz.
const objetua = esaldia.split(" ");

//13.Aurreko arraytik 0, 6 eta 11 posizioak atera.
console.log(objetua[0]);
console.log(objetua[6]);
console.log(objetua[11]);