var config = {
	type: 'pie',
	data: {
		datasets: [{
			data: [80,10,10,10,20],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
		}],
		labels: [
			"Red",
			"Green",
			"Yellow",
			"Grey",
			"Dark Grey"
		]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Size Usage'
		}		
	}
};