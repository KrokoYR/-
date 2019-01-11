'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// userDiaolag constants:
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setip-submit');
var setupOnEscClose = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		if (userNameInput === document.activeElement) {
			userNameInput.blur();
		}
		else {
			setupClosePopup();
		}
	}
};
var setupOpenPopup = function () {
	setup.classList.remove('hidden');
	document.addEventListener('keydown', setupOnEscClose);
};
var setupClosePopup = function () {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', setupOnEscClose);
};

setupOpen.addEventListener('click', function () {
	setupOpenPopup();
});

setupOpen.addEventListener('keydown', function(evt){
	if (evt.keyCode === ENTER_KEYCODE) {
		setupOpenPopup();
	}
});

setupClose.addEventListener('click', function(){
	setupClosePopup();
});

setupClose.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		setupClosePopup();
	}
});


// Валидация форм
userNameInput.addEventListener('invalid', function(evt){
	if (userNameInput.validity.tooshort) {
		userNameInput.setCustomValidity('Имя должно состоять минимум из 2 символов');
	} else if (userNameInput.validity.toolong) {
		userNameInput.setCustomValidity('Имя не должно превышать 25 символов');
	} else if (userNameInput.validity.valueMissing) {
		userNameInput.setCustomValidity('Обязательное поле');
	}
});

userNameInput.addEventListener('input', function(evt){
	var target = evt.target;
	if (target.value.length < 2) {
		target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
	} else {
		target.setCustomValidity('');
	}
});

//wizards parameters
var wizardNames = ['Dumbldor', 'Volandemort', 'Dr. Strange', 'Harry Potter'];
var wizardSurnames = ['de Maria', 'Veron', 'Mirabella', 'Valc', 'Onopko', 'Topolnits', 'Niongo', 'Irving'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 42, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var similarListElements = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Создание массива похожих(рандомных) магов
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

// Отрисовка схожих(рандомных) магов
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

// Кастомизация собственного мага
wizardCoat.addEventListener('click', function () {
	wizardCoat.style.fill = coatColor[Math.floor(Math.random() * coatColor.length)];
});
wizardEyes.addEventListener('click', function() {
	wizardEyes.style.fill = eyesColor[Math.floor(Math.random() * eyesColor.length)];
});
fireball.addEventListener('click', function () {
	fireball.style.background = fireballColor[Math.floor(Math.random() * fireballColor.length)];
});

