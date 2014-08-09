// Main JS File


// Load remote page/example.html
$(function() {
	$("#remote-page").click(function() {
		$("#remote-content").load("pages/example.html", function() {
			alert('Loaded remote content via ajax!');
		});
	});
})