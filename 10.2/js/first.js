//js file

function Telefon (marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	var isCheap = false;
	if(cena < 2000) {
		isCheap = true;
		this.isCheap = isCheap;
	}
}

Telefon.prototype.printInfo = function() {
	var prise = this.isCheap ? 'Stosunkowo tani telefon' : 'Dość drogi telefon';
	console.log('Marka telefonu to '+ this.marka + ' ma kolor '+ this.kolor + ' a jego cena wynosi ' + this.cena + ' złotych.' + prise + '.');
};

var iPhone6s = new Telefon('Apple',2000,'czarny');
var nokiaLumia = new Telefon('Nokia', 1800, 'srebrny');
var samsungs6 = new Telefon('Samsung', 2100, 'niebieski');

iPhone6s.printInfo();
nokiaLumia.printInfo();
samsungs6.printInfo();

