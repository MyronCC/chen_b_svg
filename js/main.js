(()=>{
	// Map
	let map = document.querySelector("#pin");

		function logThisPin() {
			console.log(this.id);
		}

		map.addEventListener("click", logThisPin);

	
	// Highway
	let highway = document.querySelector("#highway");

			function logThisHighway() {
				console.log(this.id);
			}

			highway.addEventListener("click", logThisHighway);

	// Airport
	let airport = document.querySelector("#plane");

			function logThisPlane() {
				console.log(this.id);
			}

			airport.addEventListener("click", logThisPlane);

	// Ferry		
	let ferry = document.querySelector("#ferry");

			function logThisFerry() {
				console.log(this.id);
			}

			ferry.addEventListener("click", logThisFerry);

	// High Speed Railway
	let hsrailway = document.querySelector("#HSRailway");

			function logThisHSRailway() {
				console.log(this.id);
			}

			hsrailway.addEventListener("click", logThisHSRailway);

	// Train
	let train = document.querySelector("#train");

			function logThisTrain() {
				console.log(this.id);
			}

			train.addEventListener("click", logThisTrain);

	// Subway
	let subway = document.querySelector("#subwayTrain");

			function logThisSubway() {
				console.log(this.id);
			}

			subway.addEventListener("click", logThisSubway);

	// Tram
	let tram = document.querySelector("#tram");

			function logThisTram() {
				console.log(this.id);
			}

			tram.addEventListener("click", logThisTram);


	// Bus
	let bus = document.querySelector("#bus");

			function logThisBus() {
				console.log(this.id);
			}

			bus.addEventListener("click", logThisBus);


	// Taxi
	let taxi = document.querySelector("#taxi");

			function logThisTaxi() {
				console.log(this.id);
			}

			taxi.addEventListener("click", logThisTaxi);
})();