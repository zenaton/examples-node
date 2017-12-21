var Zenaton = require('zenaton')
var Workflow = Zenaton.Workflow
var Wait = Zenaton.Wait
var SendActivateEmail1 = require('./SendActivateEmail1')
var SendActivateEmail2 = require('./SendActivateEmail2')
var LogActivateUser = require('./LogActivateUser')

module.exports = Workflow('ActivationWorkflow', function() {
		var event;
		var tmp;

		[tmp, event] = parallel(
			new SendActivateEmail1(this.email),
			new Wait('UserActivatedEvent').seconds(5)
		).execute();

		if (event) {
			return new LogActivateUser(1).execute();
		}

		[tmp, event] = parallel(
			new SendActivateEmail2(this.email),
			new Wait('UserActivatedEvent').seconds(5)
		).execute();

		if (event) {
			return new LogActivateUser(2).execute();
		}

		new LogActivateUser(3).execute();
	}, {
		getId() {
			return this.email;
		}
	}
);
