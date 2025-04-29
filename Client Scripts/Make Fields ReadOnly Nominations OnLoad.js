// OnLoad

function onLoad() {
	//Type appropriate comment here, and begin script below
	if (g_form.getValue('member_id')) {
		g_form.setReadOnly('member_id', true);
	}
	if (g_form.getValue('nominee_name')) {
		g_form.setReadOnly('nominee_name', true);
	}
}
