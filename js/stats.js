'use strict';

var getMaxElement = function(arr) {
	var max = arr[0]
	for(var i = 0; i < arr.length; i++){
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
};

window.renderStatistics = function(ctx, names, times) {
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.moveTo(100, 10+15);
	ctx.lineTo(100, 10+270-15);
	ctx.quadraticCurveTo(100, 10+270, 100+15, 10+270);
	ctx.lineTo(100+420-15, 10+270);
	ctx.quadraticCurveTo(100+420, 10+270, 100+420, 10+270-15);
	ctx.lineTo(100+420, 10+15);
	ctx.quadraticCurveTo(100+420, 10, 100+420-15,10);
	ctx.lineTo(100+15, 10);
	ctx.quadraticCurveTo(100, 10, 100, 10+15);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	console.log(times);

	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура! Я победил!', 250, 30);
	ctx.fillText('Список результатов:', 230, 45);

	var max = getMaxElement(times);

	var histogramHeight = 150;
	var step = histogramHeight / (max - 0);

	var barWidth = 50;
	var indent = 40;
	var initialX = 150;
	var initialY = 250;
	for (var i = 0; i < times.length; i++){
		var random = Math.random();
		if (names[i] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		}
		else{
			ctx.fillStyle = 'rgba(0, 0, 255, '+ Math.random().toFixed(2) +')'
		}

			ctx.fillRect(initialX + barWidth * i + indent * i, initialY, barWidth, -(times[i] * step));
			ctx.fillText(names[i], initialX + barWidth * i + indent * i, initialY + 20/*font size + margin*/);
	};



// 	function roundedRect(ctx,x,y,width,height,radius){
//   ctx.beginPath();
//   ctx.moveTo(x,y+radius);
//   ctx.lineTo(x,y+height-radius);
//   ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
//   ctx.lineTo(x+width-radius,y+height);
//   ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
//   ctx.lineTo(x+width,y+radius);
//   ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
//   ctx.lineTo(x+radius,y);
//   ctx.quadraticCurveTo(x,y,x,y+radius);
//   ctx.stroke();
//   ctx.fill();
// }
};
