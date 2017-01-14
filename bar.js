var config = {
	type: 'bar',
	data: {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: "rgba(20,220,220,0.5)",
			data: [10000,200000,300000,40000,500000,600000]
		}]		
	},
	option: {
		elements: {
			rectangle: {
				borderWidth: 2,
				borderColor: 'rgb(120, 255, 0)',
				borderSkipped: 'bottom'
			}
		},
		responsive: true,
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Revenue'
		}
	}
	
};
window.onload = function() {
	window.myBar = new Chart(document.getElementById("bar"), config);
};