// After - Insert

(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	let amountGr = new GlideRecord('x_692302_pf_manage_pf_contributions');
	amountGr.addEncodedQuery(`member_id=${current.member_id.toString()}`);
	amountGr.query();
	let totalAmount = 0;
	while (amountGr.next()) {
		gs.info("Amount: " + amountGr.contribution_type);

		if (amountGr.contribution_type == 'contribution') {
			totalAmount += Number(amountGr.amount);
		}
		if (amountGr.contribution_type == 'withdrawal') {
			totalAmount -= Number(amountGr.amount);
		}
	}
	current.total_contribution = totalAmount;
	current.update();

})(current, previous);
