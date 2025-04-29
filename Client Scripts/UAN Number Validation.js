// OnChange

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	var uan_pattern = /^\d{12}$/;
	if (!uan_pattern.test(newValue)) {
		g_form.clearValue('uan_number');
		g_form.showFieldMsg('uan_number', 'Invalid UAN', 'error', false);
	}
	//Type appropriate comment here, and begin script below

}
