var get_pf_details = Class.create();
get_pf_details.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	getPfMemberNumber: function() {
		let member_sys_id = this.getParameter('sysparm_member_id');
		let memberGr = new GlideRecord('x_692302_pf_manage_pf_member');
		memberGr.query('sys_id', member_sys_id);
		if (memberGr.next()) {
			let values = {};
			values.pf_number = memberGr.pf_number.toString();
			values.member_name = memberGr.member_name.toString();
			return JSON.stringify(values);
		}
	},
	checkValidNominationEntry: function() {
		let member_sys_id = this.getParameter('sysparm_member_id');
		let percentage = this.getParameter('sysparm_perc');
		let nominationGr = new GlideAggregate('x_692302_pf_manage_pf_nomination');
		nominationGr.addAggregate('SUM', 'nomination_percentage');
		nominationGr.setGroup(false);
		nominationGr.addQuery('active', true);
		nominationGr.addQuery('member_id', member_sys_id.toString());
		nominationGr.query();
		if (nominationGr.next()) {
			let totalTillNow = nominationGr.getAggregate('SUM', 'nomination_percentage');
			let totalPercentage = Number(totalTillNow) + Number(percentage);
			if (totalPercentage <= 100.0) {
				return 'true';
			}
			return 'false';
		}
	},
	type: 'get_pf_details'
});
