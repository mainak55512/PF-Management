// OnSubmit

function onSubmit() {
	//Type appropriate comment here, and begin script below
	let member_id = g_form.getValue('number') || '';
	let uan = g_form.getValue('uan_number') || '';
	let pan = g_form.getValue('pan_number') || '';
	if (member_id && uan && pan) {
		let pf_acc = `PF/${member_id.substring(member_id.length - 5)}/${pan.substring(pan.length - 3)}/${uan.substring(uan.length - 4)}`;
		g_form.setValue('pf_number', pf_acc);
	}
}
