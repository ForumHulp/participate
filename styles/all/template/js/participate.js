// This handles deelnemen.
;	phpbb.addAjaxCallback('participate', function(res) {
		if (res.success) {
			$('#participate_button').html(res.STATUS_TXT);
			$('#participate_button').attr('class', res.STATUS_CLASS + " button icon-button");
			$('#participate_button').attr('title', res.KNOP_TXT);
			$('#participate_bar').html(res.PARTICIPANTSBAR);
			
		}
	});
	
	$("a.simpledialog").simpleDialog({
		opacity: 0.1,
		width: '650px',
		closeLabel: '&times;'
	});