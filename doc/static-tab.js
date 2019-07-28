$('div.tab').map(function (idx, el) {
	var $el = $(el);
	var $button = $el.find('button');
	$button.click(function () {
		$button.removeClass('active');
		$(this).addClass('active');
	});
	
	var $svg = $el.find('.tab-content svg');
	var $pre = $el.find('.tab-content pre');
	if ($svg.length > 0 && $pre.length > 0) {
		$pre.text($svg.html());
	}
});