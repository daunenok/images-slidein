var images = document.querySelectorAll("img");

window.addEventListener("scroll", debounce(handleScroll));

function handleScroll(event) {
	images.forEach(function(image) {
		var windowB = window.scrollY + window.innerHeight;
		var windowT = window.scrollY;

		var imgB = image.offsetTop + image.height;
		var imgC = image.offsetTop + image.height / 2;

		if (windowB > imgC && windowT < imgB) {
			image.classList.add("active");
		} else {
			image.classList.remove("active");
		}
	});
}

function debounce(func, wait = 50, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};