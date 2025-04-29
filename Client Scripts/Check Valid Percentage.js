// OnSubmit

function onSubmit() {
	//Type appropriate comment here, and begin script below
	if (g_scratchpad.isFormValid) {
		return true;
	}
	let actionName = g_form.getActionName();
	let nomm = new GlideAjax('get_pf_details');
	if (g_form.isNewRecord()) {
		nomm.addParam('sysparm_name', 'checkValidNominationEntry');
		nomm.addParam('sysparm_member_id', g_form.getValue('member_id').toString());
		nomm.addParam('sysparm_perc', g_form.getValue('nomination_percentage'));

		nomm.getXMLAnswer(answer => {
			if (answer == 'true') {
				g_scratchpad.isFormValid = true;
				g_form.submit(actionName);
			} else {
				g_form.addErrorMessage('Total Nomination Percentage exceeding 100. Kindly review and give correct Nomination percentage');
			}
		});
		return false;
	}
}
