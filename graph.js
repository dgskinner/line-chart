var refresh = function () {
	var numString = $("#numbers").val();
	$("#graph").html('<img id="line-chart" src="http://chart.apis.google.com/chart?cht=lc&amp;chs=900x300&amp;chd=t:' + numString + '&amp;" alt="Chart"/>');
};

$("button").on( "click", function (event) {
	event.preventDefault(); 
	refresh();
});