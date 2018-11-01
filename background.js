chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {
		redirectUrl: chrome.extension.getURL("game.js")
	};
}, {
	urls: [
		"*://krunker.io/js/game.js",
	]
}, ["blocking"]);