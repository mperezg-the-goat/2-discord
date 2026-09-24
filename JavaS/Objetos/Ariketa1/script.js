let erabiltzaile1 = new Erabiltzaile("Markel","Perez","1234567A","2006-10-17","Bilbao");
let erabiltzaile2 = new Erabiltzaile("Miren", "Etxebarria", "87654321B", "1998-03-22", "Donostia");
let erabiltzaile3 = new Erabiltzaile("Jon", "Agirre", "11223344C", "2001-07-09", "Gasteiz");
let erabiltzaile4 = new Erabiltzaile("Ane", "Zubizarreta", "55667788D", "1995-12-01", "Iruñea");
let erabiltzaile5 = new Erabiltzaile("Iker", "Larrañaga", "99887766E", "2003-05-30", "Eibar");

console.log(erabiltzaile1.sortuLogin());
console.log(erabiltzaile1.getAdina());
console.log(erabiltzaile1.toString());

document.getElementById("erabiltzailea").innerHTML += erabiltzaile1.toHTML();
document.getElementById("erabiltzailea").innerHTML += erabiltzaile2.toHTML();
document.getElementById("erabiltzailea").innerHTML += erabiltzaile3.toHTML();
document.getElementById("erabiltzailea").innerHTML += erabiltzaile4.toHTML();
document.getElementById("erabiltzailea").innerHTML += erabiltzaile5.toHTML();
