   

// Function to check if the theme is the same as in cookies
function getCookie(keks) {
	/* Same as in switch.svg - needs improvement */
	var keks = `; ${document.cookie}`.match(`;\\s*${keks}=([^;]+)`);
	return keks ? keks[1] : '';
}
// Set theme to light
themeStyle = 'light';

// Function to set the theme 
function setTheme() {
	// Variables necessary for the identification of the dark theme 
	var darkThemeId = 'dark-theme-css';
	var darkThemeFile = 'style/dark.css';

	// If the result of the GetCookie Function is dark change the theme to dark 
	if (getCookie('themeStyle') == 'dark' && themeStyle != 'dark') {
		// Set theme to dark
		themeStyle = 'dark';

		var style = document.createElement('link');
		style.setAttribute('rel', 'stylesheet');
		style.setAttribute('type', 'text/css');
		style.setAttribute('media', 'all');
		style.setAttribute('href', darkThemeFile);
		style.setAttribute('id', darkThemeId);
		document.head.appendChild(style);
	} else if (getCookie('themeStyle') != 'dark' && themeStyle == 'dark') {
		// If result of getCookie is not dark set theme to light
		themeStyle = 'light';

		document.getElementById(darkThemeId).remove();
	}
}
// Call the Function SetTheme with a interval of 100ms 
setInterval(setTheme, 100);
