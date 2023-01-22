const seccionespagina = new fullpage ('#fullpage', {
    autoScrolling: true,
	easing: 'easeInOutCubic',
	scrollingSpeed: 500,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: true,

    navigation: true,
	menu: '#menu',
	anchors: ['Home', 'AboutMe', 'Contacto'],
	navigationTooltips: ['Home', 'AboutMe', 'Contacto'],
	showActiveTooltip: false,

    sectionsColor : ['#daefc8', '#daefc8', '#daefc8'],
	verticalCentered: true,

	controlArrows: true,
	slidesNavigation: false,
});