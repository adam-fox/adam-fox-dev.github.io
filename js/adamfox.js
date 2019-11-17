$("#btn-theme").click(function() {
	let root = document.documentElement;
	root.style.setProperty('--primary-color', '240, 246, 250');
	root.style.setProperty('--secondary-color', '32, 34, 44');
	root.style.setProperty('--tertiary-color', '16, 17, 20');
});

function activateDarkMode() {
	const rootElement = document.querySelector(':root')
	const darkTheme = {
		'--primary-color': '32, 34, 44',
		'--secondary-color': '240, 246, 250',
		'--tertiary-color': '16, 17, 20',
		'--skills-desktop': '7%',
		'--box-shadow': '0px 50px 100px #000'
	}
	for(k in darkTheme) {
	  rootElement.style.setProperty(k, darkTheme[k])
	}
  }
  
  function activateLightMode() {
	const rootElement = document.querySelector(':root')
	const lightTheme = {
		'--primary-color': '255, 255, 255',
		'--secondary-color': '32, 34, 44',
		'--tertiary-color': '16, 17, 20',
		'--skills-desktop': '7%',
		'--box-shadow': '0px 50px 100px rgba(0, 0, 0, .5'
	}
	for(k in lightTheme) {
	  rootElement.style.setProperty(k, lightTheme[k])
	}
  }
  /**
   * Sets a color scheme for the website.
   * If browser supports "prefers-color-scheme" it will respect the setting for light or dark mode
   * otherwise it will set a dark theme during night time
   */
  function setColorScheme() {
	const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
	const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
	const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
	const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;
  
	window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
	window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())
  
	if(isDarkMode) activateDarkMode()
	if(isLightMode) activateLightMode()
	if(isNotSpecified || hasNoSupport) {
	  console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
	  now = new Date();
	  hour = now.getHours();
	  if (hour < 4 || hour >= 16) {
		activateDarkMode();
	  }
	}
  }

$( document ).ready(function() {
    setColorScheme();
});