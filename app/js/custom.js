const minValue = 10;
const maxValue = 100;

const randomInteger = (min, max) => {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

(function ($, window, document) {

	const imitationProggress = () => {

		$('.js_jquery-control').click(function (e) {
			e.preventDefault();

			const $this = $(this);
			const wrapper = $this.closest('#js_jquery');
			const progressLine = wrapper.find('.progress-bar-line');

			console.log($this);
			progressLine.css({
				'transition': '0s',
				'width': '0'
			});

			setTimeout(function () {
				const result = randomInteger(minValue, maxValue) + "%";

				progressLine.html(result)

				progressLine.css({
					'transition': '0.5s',
					'width': result
				});

				progressLine.prop('Counter', 0).animate({
					Counter: progressLine.text()
				}, {
						duration: 500,
						easing: 'swing',
						step: function (now) {
							progressLine.text(Math.ceil(now) + "%");
						}
					});
			}, 260);

		})
	}

	$(() => {
		imitationProggress();
	});

}(window.jQuery, window, document));


function seconVariant() {
	let a = document.getElementById("js_native-control");

	console.log(a);
	a.addEventListener("click", function(e) {
		e.preventDefault();

		const progressLine = document.querySelectorAll("#js_native-progress .progress-bar-line")[0];
		const progressLineStyle = progressLine.style;
		const result = randomInteger(minValue, maxValue);
		let count = 0;

		var timer = setInterval(frame, 10);

		function frame() {

			if(count === result) {
				clearInterval(timer);
			}

			else{
				count++;
				let result = count + "%";

				progressLineStyle.transition = "0s";
				progressLineStyle.width = result;
				progressLine.innerHTML = result;
			}
		}
	});
}

seconVariant();