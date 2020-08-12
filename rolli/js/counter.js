// 1. Найдем кнопки (элементы управления) (кнопки - и +)
let buttons = document.querySelectorAll('[data-action]');

// 2. Для каждой кнопки вешаем событие клик
buttons.forEach(function (item) {
	item.addEventListener('click', function () {
		// Находим div c счетчиком
		let counterWrapper = this.closest('.counter-wrapper');
		let counter = counterWrapper.querySelector('[data-counter]');

		// 3. Для кнопки + → Увеличиваем
		if (this.dataset.action === 'plus') {
			counter.innerText = ++counter.innerText;
		} else {
			// 4. Для кнопки - → Проверяем на > 1 и Уменьшаем
			if (parseInt(counter.innerText) > 1) {
				// действие, если условие выполняется
				counter.innerText = --counter.innerText; // Уменьшили счетчик на 1
			}
		}
	});
});


//