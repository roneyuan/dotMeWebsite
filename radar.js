var config = {
	type: 'radar',
	data: {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running","ddd","ggg"],
		datasets: [{
			label: "My First dataset",
			fill:true,
			backgroundColor: "rgba(122,220,220,0.5)",
			pointBackgroundColor: "rgba(220,220,220,1)",
			data: [10,60,70,80,90,100,20,50,80]
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Radar Chart'
		},
		scale: {
		  reverse: false,
		  gridLines: {
			color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
		  },
		  ticks: {
			beginAtZero: true
		  }
		}
	}
};
