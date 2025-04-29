// OnSubmit

function onSubmit() {
	//Type appropriate comment here, and begin script below
	let currentDate = new Date();
	let currentDateStr = formatDate(currentDate, g_user_date_format);
	g_form.setValue('contribution_date', currentDateStr);
}
