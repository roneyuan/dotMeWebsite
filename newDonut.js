var newopts = {
graphTitle : "Sung-Yuan Chen",
graphTitleFontColor : "#F6F6E8",
graphTitleFontSize : 50, 
graphTitleFontFamily : "Copperplate",
footNote : "",
footNoteFontColor: "#fff",
footNoteFontSize: 10,
endDrawScaleFunction: drawShapes,

	inGraphDataShow : true, 
	inGraphDataAnglePosition : 2,
	inGraphDataRadiusPosition: 2,
	inGraphDataAlign : "center",
	inGraphDataVAlign : "middle",
	inGraphDataFontColor : "white",
	inGraphDataFontSize : 22,
	inGraphDataFontStyle: "bold",
	inGraphDataFontFamily: "Copperplate Gothic Light",
	inGraphDataTmpl : "<%=v1%>\n<%=v2%>",
	
	mouseDownLeft : fctMouseDownLeft,
	
mouseMove : fctMouseMove,	
	animation: false,
	// Resize???
	responsive : true,
	maintainAspectRatio : true
}

var pieData = {

datasets:[
    {
        title: "Skills",
        data: [30],
        fillColor: "#3D9970",
    },
    {
		title: "Projects",
		data: [30],
		fillColor: "#db3236",
    },
    {
		title: "Find Me",
		data: [30],
		fillColor: "#DAA520"
    },
    {
		title: "Intro",
        data: [30],
        fillColor: "#4885ed",
    }
],

// Option for display donut hole
shapesInChart : [
		{
			position : "INCHART",
			shape: "CIRCLE",
			radius:-80,
			fillColor: "#FFF8DC",
			strokeColor : "#FFF8DC",
			animate : false,
			x1:-0.5,
			y1:-1,
		},
		{
			position : "INCHART",
			shape: "TEXT",
			text : "About Me",
			textAlign : "center",
			textBaseline : "middle",
			fontColor : "#222",
			fontFamily: "Copperplate", 
			fontSize : 25,
			animate : false,
			x1:-0.5,
			y1:-1,
			//paddingY1 : 50
			//
			//x1: 200, 
			//y1 : 3,
			//paddingX1 : 0,
			//paddingY1 : -70
			//
		}	
]

}

var pieCtx = document.getElementById('donut').getContext('2d');
new Chart(pieCtx).Doughnut(pieData, newopts);
  
  
function fctMouseDownLeft(event,ctx,config,data,other)
{
	if(other.v1 == 'Intro') {
		scrollToAnchor('showRadar');
	} else if (other.v1 == 'Skills') {
		scrollToAnchor('showProgress');
	} else if (other.v1 == 'Projects') {
		scrollToAnchor('showBar');
	} else if (other.v1 == 'Find Me') {
		scrollToAnchor('showSocial');
	}
}

function fctMouseMove(event,ctx,config,data,other) {

try {
	if(other.v1 == 'Intro') {
		console.log(data.shapesInChart[1].text);
		//data.shapesInChart[1].text = "Intro";
		//pieData = data;
		//console.log(pieData.shapesInChart[1].text);
		//updateChart(ctx,pieData,config,false,false);
		//document.getElementById("donutCanvas").style.cssText = "cursor:pointer";
	} else if (other.v1 == 'Skills') {
		//document.getElementById("donutCanvas").style.cssText = "cursor:pointer";
		console.log("2");
	} else if (other.v1 == 'Projects') {
		//document.getElementById("donutCanvas").style.cssText = "cursor:pointer";
		console.log("3");
	} else if (other.v1 == 'Find Me') {
		//document.getElementById("donutCanvas").style.cssText = "cursor:pointer";
		console.log("4");
	} else {
		//document.getElementById("donutCanvas").style.cssText = "cursor:initial";
	}
}
catch(e) {
	//console.log(e);
}
}
