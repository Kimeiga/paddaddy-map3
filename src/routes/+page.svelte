<script>
	import { onMount } from 'svelte';

	export let data;

	$: console.log(data);

	let map;
	let maxCommuteTime = 60;
	let markers = [];

	function getBackgroundColor(commuteTime) {
		const timeMatch = commuteTime.match(/(\d+)/);
		if (!timeMatch) return 'gray';

		const time = Math.min(parseInt(timeMatch[1], 10), 60);
		const startHue = 142.23;
		const endHue = 0;
		let hue;

		if (time <= 30) {
			hue = startHue - (startHue / 30) * time;
		} else {
			let additionalHue = (time - 30) * (startHue / 30);
			hue = 360 - additionalHue;
		}

		return `oklch(65.71% 0.1519  ${hue})`;
	}

	function toggleHighlight(markerView) {
		if (markerView.content.classList.contains('highlight')) {
			markerView.content.classList.remove('highlight');
			markerView.zIndex = null;
		} else {
			markerView.content.classList.add('highlight');
			markerView.zIndex = 1;
		}
	}

	function createMarkers() {
		markers.forEach((marker) => marker.setMap(null));
		markers = [];

		data.neighborhoods.forEach((neighborhood) => {
			neighborhood.units.forEach((unit) => {
				if (unit.location && unit.commute_obj) {
					const timeMatch = unit.commute_obj.legs[0].duration.text.match(/(\d+)/);
					if (!timeMatch) return;

					const time = parseInt(timeMatch[1], 10);
					if (time > maxCommuteTime) return;

					const position = { lat: unit.location.lat, lng: unit.location.lng };
					const commuteTime = unit.commute_obj.legs[0].duration.text;

					const content = document.createElement('div');
					content.textContent = unit.monthly_price_dollars.toString();
					content.classList.add('marker');
					content.style.backgroundColor = getBackgroundColor(commuteTime);

					const marker = new google.maps.marker.AdvancedMarkerElement({
						position: position,
						map: map,
						content: content,
						title: unit.unit_name
					});

					marker.addListener('click', () => {
						toggleHighlight(marker);
					});

					marker.addListener('mouseenter', () => {
						content.classList.add('on-focus');
					});

					marker.addListener('mouseleave', () => {
						content.classList.remove('on-focus');
					});

					markers.push(marker);
				}
			});
		});
	}

	onMount(async () => {
		const { google } = window;
		const { AdvancedMarkerElement } = await google.maps.marker;

		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: { lat: 40.737, lng: -74.003 },
			mapId: 'eda1e0b84e64956b'
		});

		createMarkers();
		maxCommuteTime = maxCommuteTime;
	});
</script>

<div class="slider-container">
	<input type="range" min="0" max="60" bind:value={maxCommuteTime} on:change={createMarkers} />
	<p>{maxCommuteTime} minutes</p>
</div>

<div id="map"></div>

<svelte:head>
	<script
		async
		defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJKapYkEXB-jHM5htvhdCbuYG40haS0Cc&libraries=marker&loading=async"
	>
	</script>
</svelte:head>

<style>
	body {
		margin: 0;
	}

	#map {
		height: 100vh;
		width: 100%;
	}

	.marker {
		background-color: white;
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		font-size: 14px;
	}

	.highlight {
		background-color: yellow;
	}

	.on-focus {
		font-weight: bold;
	}

	.slider-container {
		position: absolute;
		top: 20px;
		left: 20px;
		z-index: 5;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}
</style>
