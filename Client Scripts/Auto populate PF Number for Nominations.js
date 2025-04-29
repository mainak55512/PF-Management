// OnChange

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (/*isLoading || */newValue === '') {
		return;
	}
	let memGa = new GlideAjax('get_pf_details');
	memGa.addParam('sysparm_name', 'getPfMemberNumber');
	memGa.addParam('sysparm_member_id', g_form.getValue('member_id').toString());
	memGa.getXMLAnswer(answer => {
		let values = JSON.parse(answer);
		g_form.setValue('pf_account', values.pf_number);
		g_form.showFieldMsg('pf_account', 'Member Name: ' + values.member_name);
	})
	//Type appropriate comment here, and begin script below

}
