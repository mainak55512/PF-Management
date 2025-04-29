// OnLoad

function onLoad() {
	//Type appropriate comment here, and begin script below
	if (!g_form.isNewRecord()) {
		if (g_form.getValue('member_id')) {
			g_form.setReadOnly('member_id', true);
		}
		if (g_form.getValue('contribution_month')) {
			g_form.setReadOnly('contribution_month', true);
		}
		if (g_form.getValue('contribution_type')) {
			g_form.setReadOnly('contribution_type', true);
		}
		if (g_form.getValue('amount')) {
			g_form.setReadOnly('amount', true);
		}
	}
}
