'use strict';
import {console_color,console_red,console_orange,console_yellow,console_green,
	console_blue,console_purple,console_magenta,console_cyan} from './logColor.js';

// -------------------------------------------------------------------------------
//*                               --- WRTN ---
// -------------------------------------------------------------------------------
//	['.9','.8','.7','.6','.5','.4','.3','.2','.1']
		['e6','cc','b3','99','80','66','4d','33','1a']

	const texts = document.querySelectorAll('.text');
	texts.forEach(text => {
		text.innerHTML = text.textContent.replace(/\S/g, 
			`<span class="char">$&</span>`); //*>
	});

	const columns = document.querySelectorAll('.column');
		columns.forEach((column, index) => {
			if(index === 0 
				|| index === 1) {
				column.style.flex = 1;
			}
			if(index === 4 
				|| index === 5) {
				column.style.flex = 2;
			}
			if(index === 8) {
				column.style.flex = .5;
			}
		});

	let weightValue = 20;
	let fontWeight = 100;
	let result = 0;

	const target = document.querySelector('.target');
	window.addEventListener('wheel', (e) => {
		let val = Math.sign(e.deltaY)/10;
		result += val;
		columns.forEach((column, index) => {
			if(index === 0 || index === 1) {
				result = Math.max(.5, result); 
				result = Math.min(result, 2);
				column.style.flex = .5 + parseFloat(result.toFixed(1));
			}
			if(index === 4 || index === 5) {
				result = Math.max(0, result); 
				result = Math.min(result, 2);
				column.style.flex = 2.5 - parseFloat(result.toFixed(1)); 
			}
			if(index === 5) {
				if(result.toFixed(1) > 1.7) {
					target.classList.add('active');
				} else { target.classList.remove('active')}
			}
			if(index === 8) {
				result = Math.max(.5, result); 
				result = Math.min(result, 2);
				column.style.flex = parseFloat(result.toFixed(1));
			}
		});
		console.log(result.toFixed(1)); //* log
		texts.forEach((text, index) => {
			if(e.deltaY > 0) {
				fontWeight += weightValue;
				fontWeight = Math.min(fontWeight, 900);
				const chars = text.querySelectorAll('.char');
				chars.forEach((char, index) => {
					char.style.transitionDuration = index * .2 + 's';
					char.style.fontWeight = fontWeight;
					rotateColorWithResult(char);
					// rotateColorWithFontWeight(char);
				});
			} else {
				fontWeight -= weightValue;
				fontWeight = Math.max(100, fontWeight);
				const chars = text.querySelectorAll('.char');
				chars.forEach((char, index) => {
					char.style.transitionDuration = (chars.length - index) * .2 + 's';
					char.style.fontWeight = fontWeight;
					char.style.color = '#000'; 
				});
			}
			//* column3 text reverse duration
			if(index === texts.length-1) { 
				if(e.deltaY < 0) {
					const chars = text.querySelectorAll('.char');
					chars.forEach((char, index) => {
						char.style.transitionDuration = index * .2 + 's';
					});
				}
			}
		});
	});

	function rotateColorWithResult(char) {
		if(result.toFixed(1) > 0.6 && result.toFixed(1) < 1.5) { 
			char.style.color = '#00eeffb3';
		} else { char.style.color = '#000'}
	}

	// function rotateColorWithFontWeight(char) {
	// 	if(fontWeight > 300 && fontWeight < 800) {
	// 		char.style.color = '#00eeffb3';
	// 	} else { char.style.color = '#000'}
	// }



// -------------------------------------------------------------------------------
//* ---------------------------------------

	const lenis = new Lenis();
	function raf(time) {
		lenis.raf(time/3);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	// // lenis.stop();
	// // lenis.start();

//* ---------------------------------------
// -------------------------------------------------------------------------------


















