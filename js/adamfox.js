var colorTheme;

function activateDarkMode() {
	colorTheme = "dark";
	const rootElement = document.querySelector(':root')
	const darkTheme = {
		'--primary-color': '32, 34, 44',
		'--secondary-color': '240, 246, 250',
		'--tertiary-color': '16, 17, 20',
		'--skills-desktop': '7%',
		'--box-shadow': '0px 50px 100px #000',
		'--icon-mode': 'url("../img/ico-day.svg")'
	}
	for(k in darkTheme) {
	  rootElement.style.setProperty(k, darkTheme[k])
	}
  }
  
  function activateLightMode() {
	  colorTheme = "light";
	const rootElement = document.querySelector(':root')
	const lightTheme = {
		'--primary-color': '244, 246, 247',
		'--secondary-color': '57, 61, 79',
		'--tertiary-color': '249, 251, 252',
		'--skills-desktop': '7%',
		'--box-shadow': '0px 50px 100px rgba(57, 61, 79, .1)',
		'--icon-mode': 'url("../img/ico-night.svg")'
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

$("#btn-theme").click(function() {
	if (colorTheme == "dark") {
		activateLightMode();
	} else {
		activateDarkMode();
	}
});

$("header > div > svg").click(function() {
	$("html, body").animate({ scrollTop: "0px" });
});

$(window).scroll(function() {	
	if($("header").offset().top - $(window).scrollTop() <= 0) {
		$("header").addClass("on");
		$("header").removeClass("off");
	} 
	if($(window).scrollTop() <= 0) {
		if($("header").hasClass("on")) {
			$("header").removeClass("on");
			$("header").addClass("off");
		}
	}
});