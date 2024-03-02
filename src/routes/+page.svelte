<script>
	import { onMount } from 'svelte';

	export let data;

	let map;
	let maxCommuteTime = 60; // or any other default value
	let filteredProperties;

	$: {
		filteredProperties = data.neighborhoods.flatMap((neighborhood) =>
			neighborhood.units.filter((unit) => {
				const timeMatch = unit.commute_obj.legs[0].duration.text.match(/(\d+)/);
				if (!timeMatch) return false; // Skip if no time found

				const time = parseInt(timeMatch[1], 10);
				console.log(time <= maxCommuteTime);
				return time <= maxCommuteTime; // Only include units within the commute time
			})
		);
	}

	function getBackgroundColor(commuteTime) {
		const timeMatch = commuteTime.match(/(\d+)/); // Extracts digits from the string
		if (!timeMatch) return 'gray'; // Return a default color if no time found

		const time = Math.min(parseInt(timeMatch[1], 10), 60); // Parse to integer and cap at 60 minutes for color calculation
		// We'll map time from 0 to 60 minutes to a change in hue from green to red in OKLCH space
		// Assuming green starts at 142 and red is around 0 (or 360), we will adjust accordingly:
		// Note: Adjust 'startHue' and 'endHue' based on exact colors you need
		const startHue = 142.23;
		const endHue = 0; // Looping towards red
		// Calculate current hue based on commute time. If more than 30 minutes, adjust for a spectrum towards red.
		let hue;
		if (time <= 30) {
			// Calculate a transition from green to yellow/orange (midway hue, adjust if needed)
			hue = startHue - (startHue / 30) * time; // Adjust if different midway point is preferred
		} else {
			// Calculate transition from yellow/orange to red
			// Here, assuming endHue is less than start of hue range for green to yellow
			let additionalHue = (time - 30) * (startHue / 30); // This simulates going 'backwards' in hue
			hue = 360 - additionalHue; // Looping back towards red as time increases
		}

		return `oklch(65.71% 0.1519  ${hue})`; // Adjust lightness and chroma as needed
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

	onMount(async () => {
		// Load the Google Maps and the marker library
		const { google } = window;
		const { AdvancedMarkerElement } = await google.maps.marker;

		// Initialize the map
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: { lat: 40.737, lng: -74.003 }, // Central location
			mapId: 'eda1e0b84e64956b'
		});

		console.log(data);

		filteredProperties.forEach((unit) => {
			// neighborhood.units.forEach((unit) => {
			if (unit.location && unit.commute_obj) {
				const position = { lat: unit.location.lat, lng: unit.location.lng };
				const commuteTime = unit.commute_obj.legs[0].duration.text; // Adjust based on actual structure

				// Create a div element for the marker content
				const content = document.createElement('div');
				content.textContent = unit.monthly_price_dollars.toString(); // Display the price
				content.classList.add('marker');
				content.style.backgroundColor = getBackgroundColor(commuteTime); // Set background color based on commute time

				// Create the advanced marker
				const marker = new AdvancedMarkerElement({
					position: position,
					map: map,
					content: content, // Use the content div as the marker
					title: unit.unit_name // Tooltip
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
			}
			// });
		});
	});
</script>

<div class="slider-container">
	<input
		type="range"
		min="0"
		max="60"
		value={maxCommuteTime}
		on:change={(e) => (maxCommuteTime = +e.target.value)}
	/>
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

	.custom-marker {
		background-color: white;
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		font-size: 14px;
	}

	.slider-container {
		position: absolute;
		top: 20px; /* Adjust based on your layout */
		left: 20px; /* Adjust based on your layout */
		z-index: 5; /* Ensure it appears above the map */
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}

	/* Add more styles if needed */
</style>
