var refresh = function () {
	var numString = $("#numbers").val();
	var $img = $("<img />").attr("src", "http://chart.apis.google.com/chart?cht=lc&chs=900x300&chd=t:" + numString + "&");
	$img.load( function () {
        $("#graph").html($img);
    });
};

$("button").on( "click", function (event) {
	event.preventDefault();
	refresh();
});