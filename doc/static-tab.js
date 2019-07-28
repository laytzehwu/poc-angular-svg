$('div.tab').map(function (idx, el) {
	var $el = $(el);
	var $button = $el.find('button');
	$button.click(function () {
		$button.removeClass('active');
		$(this).addClass('active');
	});
});