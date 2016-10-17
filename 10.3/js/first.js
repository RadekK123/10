//js file

function Button (text) {
	
	this.text = text;
}

Button.prototype = {
	create: function() {
		
		if(this.text == false) {
			alert('Nie podałeś nazwy buttona');
			this.text = 'Podaj naznę buttona';
		}

		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);

		this.$element.click(function () {
			alert(self.text);
		});

		$('body').append(this.$element);
	}
};

var btn1 = new Button('Hello');
var btn2 = new Button('Drugi :-p');
var btn3 = new Button('');

btn1.create();
btn2.create();
btn3.create();
