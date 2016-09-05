		var html = document.documentElement;
		html.className = html.className.replace("no-js", "js");


		var link = document.querySelector(".btn-hotel-search");
		var popup = document.querySelector(".hotel-search-form");
		var close = document.querySelector(".hotel-search-form-show");

		var checkIn = popup.querySelector("[name=arrive-date]");
		var checkOut = popup.querySelector("[name=end-date]");

		function initialize() {
			var mapOptions = {
				zoom: 9,
				center: new
				google.maps.LatLng(34.873256, -111.756747)
			}
			var map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);

			var myLatLng = new google.maps.LatLng(34.873256, -111.756747);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);

		link.addEventListener("click", function (event) {
			event.preventDefault();
			popup.classList.toggle("hotel-search-form-show");
			checkIn.focus();

		});

		close.addEventListener("click", function (event) {
			event.preventDefault();
			popup.classList.toggle("hotel-search-form");
		});

		window.addEventListener("keydown", function (event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("hotel-search-form-show")) {
					popup.classList.remove("hotel-search-form-show");
				}
			}
		});

		function initialize() {
			var mapOptions = {
				zoom: 9,
				center: new
				google.maps.LatLng(34.873256, -111.756747)
			}
			var map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);

			var myLatLng = new google.maps.LatLng(34.873256, -111.756747);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);