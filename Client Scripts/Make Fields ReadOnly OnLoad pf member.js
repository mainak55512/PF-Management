// OnLoad

function onLoad() {
	//Type appropriate comment here, and begin script below
	if (g_form.getValue('pf_number')) {
		g_form.setReadOnly('pf_number', true);
	}
	if (g_form.getValue('uan_number')) {
		g_form.setReadOnly('uan_number', true);
	}
	if (g_form.getValue('pan_number')) {
		g_form.setReadOnly('pan_number', true);
	}
}
