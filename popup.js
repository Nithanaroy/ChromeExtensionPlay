$(function() {

	chrome.storage.sync.get(['total', 'goal'], function(items) {
		$("#total").text(items.total);
		$("#goal").text(items.goal);
	});

	$("#addAmount").click(function() {
		chrome.storage.sync.get('total', function(items) {
			var new_total = 0;
			if (items.total) {
				new_total = parseInt(items.total);
			}

			var amt = parseInt($("#amount").val());
			if (amt) {
				new_total += amt;
			};

			// Save the new settings
			chrome.storage.sync.set({
				'total': new_total
			});

			// Update UI
			$("#total").text(new_total);
			$("#amount").val("");
		});
	});
});