$(document).ready(function () {

	var cont = $('.container'),
		userNum,
		loseWindow = $('.lose-window'),
		winWindow = $('.win-window'),
		wrongNum = $('.user-number'),
		prevNum = $('.prev-number'),
		less = $('.less'),
		more = $('.more'),
		btn = $('input[type="submit"]'),
		numField = $('.field'),
		resBtn = $('.reset-btn'),
		counter = 1;

	var randomNum = Math.floor(Math.random() * 100);

	btn.click(function (event) {

		event.preventDefault();

		userNum = Number(numField.val());
		if (userNum === randomNum) {
			winWindow.addClass('active');

		}
		else if (counter === 5) {
			loseWindow.addClass('active');

		} else {
			if (userNum < randomNum) {
				more.css('display', 'block');
				less.css('display', 'none');
			} else {
				less.css('display', 'block');
				more.css('display', 'none');
			}
		}

		numField.val('') // Clear form field after click

		prevNum.text('Previous numbers: ');
		var text = wrongNum.text();
		wrongNum.text(text += userNum + ' ');

		counter++;
		numField.focus()

	});

	resBtn.click(function () {

		winWindow.removeClass('active');
		loseWindow.removeClass('active');
		randomNum = Math.floor(Math.random() * 100);
		wrongNum.text('');
		less.css('display', 'none');
		more.css('display', 'none');
		counter = 1;
		numField.focus()
	});


	numField.focus()

});
