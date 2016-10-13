//js file

function Button (text) {
	this.text = text;
}

Button.prototype = {
	create: function() {
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

btn1.create();
btn2.create();
