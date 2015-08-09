function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + '' + lastName;
	$('h2').text('Hello' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt (userAge);

	if (userAge >= 18) {
		console.log('User is an adult')
	} else if (userAge >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('Go away child!');
	}
		//do something

	if (firstName.toLowerCase() === "General" &&  lastName!== "Assembly") {
		console.log('Hello, General ' + lastName + '!');

	}

	var faveColour = prompt('what is your favourite colour?').toLowerCase();
	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h2').css('background-color', faveColour);
	}	
}

 




// when the page has loaded

$(function() {

	$('img').on('click', askQuestions); 

	//Get all the sections
	var sections = $('h3').next();


	//hide all the sections
	sections.hide();

	//when the user clicks an h3
	$('h3').on('click', function() {

		//Remember the section the user wants to see
		var thisSection = $(this).next();

		//Hide all the sections except the one the user wants to see
		sections.not (thisSection).slideUp(1000);

		//Toggle the one the wants to see
		thisSection.slideToggle(1000);

	});

});