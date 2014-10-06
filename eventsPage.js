// This is an events page and not a background page. We listen to certain events

chrome.storage.onChanged.addListener(function(changes) {
	// changes has both the newValue and oldValue
	chrome.browserAction.setBadgeText({
		'text': changes.total.newValue.toString()
	})
})