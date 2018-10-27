jQuery(document).ready(function($) {
	// $('.nav').find('.menu').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

	var navigation = responsiveNav("#nav", {
		insert: "before"
	});


	// Pages - Demo only (Remove this)
	var ul = $('<ul></ul>',{class: 'pages',}),
		link1 = $('<li><a href="index.html">Home</a></li>'),
		link2 = $('<li><a href="page.html">Page</a></li>'),
		link3 = $('<li><a href="obstacles.html">Obstacles</a></li>'),
		link4 = $('<li><a href="faq.html">FAQ</a></li>'),
		link5 = $('<li><a href="contact.html">Contact</a></li>');
	ul.append(link1,link2,link3,link4,link5);
	ul.prependTo('body');

});