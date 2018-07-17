// window height detection
$(document).ready(function(){
    var hDetect = $(window).height();;
    if (hDetect >= 700) {
        $('.header').css('height',$(window).height()); }
});

//calendar

var x = 0;

function createCalendar(n) {

	var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

	var currentDate = new Date();

	var calMonth = new Date();
		calMonth.setMonth(currentDate.getMonth() + n);
		calMonth.setDate(1);

	var firstWeek = calMonth.getDay();
		if (firstWeek == 0) {
			firstWeek = 7;
		}

	var weekTail = firstWeek - 1;

	var calCell = new Date();
		calCell.setMonth(currentDate.getMonth() + n);
		calCell.setDate(1);

	var cell = document.createElement('div');
	elem = document.getElementById('js-trigger');
	elem.innerHTML = month[calMonth.getMonth()] + ' ' + calCell.getFullYear();

	while (weekTail != 0) {
		cell.className = "cell__empty";
		cell.innerHTML = '';
		document.getElementsByClassName('js-calendar')[0].appendChild(cell.cloneNode(true));
		weekTail = weekTail - 1;
	}

	while (calCell.getMonth() <= calMonth.getMonth()) {

		if (calCell.getMonth() == calMonth.getMonth()) {
			
			if (calCell < currentDate) {
				cell.className = "cell__disabled"; } else {
					cell.className = "cell"; };
			
			cell.innerHTML = calCell.getDate(); };

		if (calCell.getMonth() > calMonth.getMonth() || calCell.getYear() > calMonth.getYear()) {
			break; };

		if ((calCell.getDay() == 0) || (calCell.getDay() == 6)) {
			cell.className += " holiday";
		};

		document.getElementsByClassName('js-calendar')[0].appendChild(cell.cloneNode(true));
		
		calCell.setDate(calCell.getDate() + 1);
	};
};

createCalendar(x);

function go(b) {
	document.getElementsByClassName('js-calendar')[0].innerHTML='';
	createCalendar(x + b);
	x = x + b; }