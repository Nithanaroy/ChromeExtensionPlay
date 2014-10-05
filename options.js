$(function() {

	chrome.storage.sync.get('goal', function(items) {
		if (items.goal) {
			$("#goal").val(items.goal);
		}
	});

	$("#save").click(function() {
		chrome.storage.sync.get('total', function(items) {

			var goal = $("#goal").val();

			if (goal) {
				chrome.storage.sync.set({
					'goal': goal
				}, function() {
					close(); // closes the tab
				});
			};
		});
	});


	$("#reset").click(function() {
		chrome.storage.sync.set({
			'total': 0
		}, function() {
			close(); // closes the tab
		});
	});
});