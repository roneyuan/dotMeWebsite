var config = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [20, 20, 20, 20, 20],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
			label: 'Section 1'
		}],
		labels: [
			"Open",
			"Revenue",
			"Summary",
			"User",
			"FAQ"
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
			labels: {
				boxWidth:60,
				fontSize:30,
			}
		},
		title: {
			display: true,
			text: 'Menu',
			fontSize: 50,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};


window.onload = function() {
	window.myDoughnut = new Chart(document.getElementById("donut"), config);
	document.getElementById("donut").onclick = function(evt){
		var activePoints = window.myDoughnut.getElementsAtEvent(evt);
		try {
			if (activePoints[0]['_index'] == 0) {
				console.log(activePoints[0]['_index']+": Open");
				// Go to page...
			} else if ( activePoints[0]['_index'] == 1) {
				console.log(activePoints[0]['_index']+": Revenue");
			} else if ( activePoints[0]['_index'] == 2) {
				console.log(activePoints[0]['_index']+": Summary");
			} else if ( activePoints[0]['_index'] == 3) {
				console.log(activePoints[0]['_index']+": User");
			} else if ( activePoints[0]['_index'] == 4) {
				console.log(activePoints[0]['_index']+": FAQ");
			}
		} catch(e) {
			console.log("_index error caught and ignore")
		}
	};		
};


