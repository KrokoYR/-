'use strict';

var wizardNames = ['Dumbldor', 'Volandemort', 'Dr. Strange', 'Harry Potter'];
var wizardSurnames = ['de Maria', 'Veron', 'Mirabella', 'Valc', 'Onopko', 'Topolnits', 'Niongo', 'Irving'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 42, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');



var similarListElements = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var name;

var wizards = [
	{
		name:  wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' +wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
		coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
		eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)]
	},
	{
		name:  wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' +wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
		coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
		eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)]
	},
	{
		name:  wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' +wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
		coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
		eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)]
	},
	{
		name:  wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' +wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
		coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
		eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)]
	}
];

var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

	return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
}
similarListElements.appendChild(fragment);


document.querySelector('.setup-similar').classList.remove('hidden');