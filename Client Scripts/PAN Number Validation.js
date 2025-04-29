// OnChange

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	var pan_pattern = /^([A-Z]{5})([0-9]{4})[A-Z]$/;
	if (!pan_pattern.test(newValue.toUpperCase())) {
		g_form.clearValue('pan_number');
		g_form.showFieldMsg('pan_number', 'Invalid PAN', 'error', false);
	}
	//Type appropriate comment here, and begin script below

}
