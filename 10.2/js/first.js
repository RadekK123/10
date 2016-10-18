//js file

function Telefon (marka, cena, kolor) {
	var self = this;
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	var isCheap = false;
	if(cena < 2000) {
		isCheap = true;
		this.isCheap = isCheap;
	}
}

Telefon.prototype.getWarranyCost = function () {
	
	return this.cena * 0.1;
};


Telefon.prototype.printInfo = function() {
	
	var prise = this.isCheap ? 'Stosunkowo tani telefon' : 'Dość drogi telefon';
	console.log('Marka telefonu to '+ this.marka + ' ma kolor '+ this.kolor + ' a jego cena wynosi ' + this.cena + ' złotych.' + prise + '.' + 'Kupując teraz telefon, gwarancję na kolejne 2 lata otrzymasz za: ' + this.getWarranyCost() +' zł');
};

var iPhone6s = new Telefon('Apple',2000,'czarny');
var nokiaLumia = new Telefon('Nokia', 1800, 'srebrny');
var samsungs6 = new Telefon('Samsung', 2100, 'niebieski');

iPhone6s.printInfo();
nokiaLumia.printInfo();
samsungs6.printInfo();



/* Wrong solution
var promotion = 0.1;

function Telefon (marka, cena, kolor) {
	var self = this;
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	var isCheap = false;
	if(cena < 2000) {
		isCheap = true;
		this.isCheap = isCheap;
	}
}

Telefon.prototype.getWarranyCost = function () {
	
	this.sale = this.cena * promotion;
	return this.sale;
};


Telefon.prototype.printInfo = function() {
	this.getWarranyCost();
	var prise = this.isCheap ? 'Stosunkowo tani telefon' : 'Dość drogi telefon';
	console.log('Marka telefonu to '+ this.marka + ' ma kolor '+ this.kolor + ' a jego cena wynosi ' + this.cena + ' złotych.' + prise + '.' + '/ Kupując teraz telefon, gwarancję na kolejne 2 lata otrzymasz za: ' + this.sale +' zł');
};

var iPhone6s = new Telefon('Apple',2000,'czarny');
var nokiaLumia = new Telefon('Nokia', 1800, 'srebrny');
var samsungs6 = new Telefon('Samsung', 2100, 'niebieski');

iPhone6s.printInfo();
nokiaLumia.printInfo();
samsungs6.printInfo();

*/

/* version 2.0

var promotion = 0.1;

function Telefon (marka, cena, kolor) {
	var self = this;
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	var isCheap = false;
	if(cena < 2000) {
		isCheap = true;
		this.isCheap = isCheap;
	}
}

function getWarranyCost() {
	
	var sale = (( this.cena) * promotion );
	console.log( 'Kupując teraz telefon, gwarancję na kolejne 2 lata otrzymasz za: ' + sale + ' zł' );
	return sale;
}



Telefon.prototype.printInfo = function() {

	getWarranyCost.bind(Telefon(this.marka, this.cena, this.kolor));
	var prise = this.isCheap ? 'Stosunkowo tani telefon' : 'Dość drogi telefon';
	console.log('Marka telefonu to '+ this.marka + ' ma kolor '+ this.kolor + ' a jego cena wynosi ' + this.cena + ' złotych.' + prise + '.');
	getWarranyCost();
};

var iPhone6s = new Telefon('Apple',2000,'czarny');
var nokiaLumia = new Telefon('Nokia', 1800, 'srebrny');
var samsungs6 = new Telefon('Samsung', 2100, 'niebieski');

iPhone6s.printInfo();
nokiaLumia.printInfo();
samsungs6.printInfo();

*/



