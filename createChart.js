var radar = {
	type: 'radar',
	data: {
		labels: ["Backend", "Frontend", "Fullstack", "Data Analytics", "UI/UX"],
		datasets: [{
			label: '',
			fill:true,
			backgroundColor: "rgba(122,220,220,0.5)",
			pointBackgroundColor: "rgba(220,220,220,1)",
			data: [30,20,40,50,10]
		}]
	},
	options: {
		responsive: true,
		legend: {
			display:false,
			position: 'top',
		},
		title: {
			display: true,
			text: 'What am I good at?',
			fontSize:36,
			fontColor: 'black'
		},
		scale: {
		  reverse: false,
		  pointLabels:{
		  	fontSize:20
		  },
		  
		  gridLines: {
			color: [ 'yellow', 'green', 'blue', 'indigo', 'violet']
		  },
		  ticks: {
		  	display:false,
			beginAtZero: true,
			maxTicksLimit:6
		  }
		}
	}
};


var pie = {
	type: 'pie',
	data: {
		datasets: [{
			data: [40,20,30,5,5],
			backgroundColor: [
				"#178600",
				"#f34b7d",				
				"#f1e05a",
				"#4F5D95",
				"#3572A5"								
			],
		}],
		labels: [
			"C#/.NET",
			"PostgreSQL",	
			"Javascript",
			"PHP/MySQL",
			"Python"					
		]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Time spend in work',
			fontSize:36
		},
		legend: {
			position: 'top',
			labels: {
				fontSize:30,
				boxWidth: 55
			}
		},
		tooltips: {
			enabled: true
		}				
	}
};


var bar = {
	type: 'bar',
	data: {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [{
			label: 'Revenue',
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

var donut = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [20, 20, 20, 20, 20],
			backgroundColor: [
				"#178600",
				"#f34b7d",				
				"#f1e05a",
				"#7F5676",
				"#3b5998"		
			],
			label: 'Section 1'
		}],
		labels: [
			"Intro",
			"Skills",
			"Portfolio",
			"Projects",
			"Social"
			
		]
	},
	options: {
		responsive: true,
		legend: {
			display:false,
			position: 'top',
			labels: {
				boxWidth:60,
				fontSize:36,
				fontColor:'#c9d0d4'						
			},
			onClick: function(evt,legendItem){
					//console.log(legendItem);
					//scrollToAnchor(legendItem["text"]);
			},
		},
		title: {
			display: true,
			text: 'About Me',
			fontSize: 50,
			fontColor:'white',
			padding:25
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};

var timeline =  function() {
	  //google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Career' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Merrimack College', new Date(2008, 7), new Date(2013, 4) ],
          [ 'Stevens Institute of Technology', new Date(2013, 7),  new Date(2015, 4) ],
          [ 'Tiburon Lockers',  new Date(2015, 6), new Date(Date.now())]]);
	
        chart.draw(dataTable);
      }
};

var pieChart = function() {
      //google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Language', 'Percentage Use'],
          ['C#/.NET',     40],
          ['PostgreSQL',      20],
          ['Javascript',  30],
          ['PHP/MySQL', 5],
          ['Python',    5]
        ]);

        var options = {
          backgroundColor: '#f0eceb',
          title: 'Skills used in work time',
          titleTextStyle: {
          	fontSize: 30
          },
          pieSliceText: 'label',
          is3D: true,
          slices: {
            0: { color: '#178600' },
            1: { color: '#f34b7d' },
            2: { color: '#f1e05a' },
            3: { color: '#621A56' },
            4: { color: '#3572A5' }
          },
          legend: {
          	textStyle: {
          		fontSize: 20
          	}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}

/* Google Chart
var donut2 = function () {

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
          ['menu', 'please select'],
          ['Intro',     20],
          ['Skills',      20],
          ['Portfolio',  20],
          ['Projects', 20],
          ['Social',    20]
	]);

  var options = {
          title: '',
          pieHole: 0.35,
          pieSliceText: 'label',
          legend:'none',
          width: '300%',
        	height: '300%',
          chartArea: {
            left: "0%",
            top: "0%",
            height: "250%",
            width: "250%"
        	},
          colors:[
						"#178600",
						"#f34b7d",				
						"#f1e05a",
						"#7F5676",
						"#3b5998"	
          ]
  };
  
	//drawChart(data, options)
	var chart = new google.visualization.PieChart(document.getElementById('donut'));
        
	function selectHandler() {
		var selectedItem = chart.getSelection()[0];
		if (selectedItem) {
			var topping = data.getValue(selectedItem.row, 0);
			alert('The user selected ' + topping);
		}
	};
  
	google.visualization.events.addListener(chart, 'select', selectHandler);
	chart.draw(data, options);
}
}
*/

window.onload = function() {
	//window.myPie = new Chart(document.getElementById("pie"), pie); Use good pie chart instead
	window.myRadar = new Chart(document.getElementById("radar"), radar);
	//window.myRadar = new Chart(document.getElementById("bar"), bar);
	//window.myDoughnut = new Chart(document.getElementById("donut"), donut);
	
	// Get the element and data onclick slice
	document.getElementById("donut").onclick = function(evt){
		// Get the element
		var activePoints = window.myDoughnut.getElementsAtEvent(evt);
		// Use try catch clause to avoid _index undefined error
		try {
			// We can only determine the slice value by the index...maybe I can find a better in the future?
			if (activePoints[0]['_index'] == 0) {
				//console.log(activePoints[0]['_index']+": Open");
				// Go Page
				//window.location.href = "http://www.google.com";
				scrollToAnchor('showRadar');
			} else if ( activePoints[0]['_index'] == 1) {
				scrollToAnchor('showProgress');
			} else if ( activePoints[0]['_index'] == 2) {
				scrollToAnchor('showBar');
			} else if ( activePoints[0]['_index'] == 3) {
				//scrollToAnchor('showProgress');
			} else if ( activePoints[0]['_index'] == 4) {
				scrollToAnchor('showSocial');
			}
		} catch(e) {
			console.log("_index error caught and ignore "+e)
		}
	};	
	  // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart', 'timeline']});

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      //google.charts.setOnLoadCallback(timeline().drawChart());

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      //var drawPie = pieChart();
      //google.charts.setOnLoadCallback(drawPie());
      pieChart();
      timeline();
      //donut2();
      
      
};

//window.addEventListener("resize", timeline());	