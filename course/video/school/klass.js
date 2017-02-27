var stu = require('./student');
var tea = require('./teacher');

exports.add = function(teacher, students) {
	stu.add(teacher);

	students.forEach(function(student, number) {
		stu.add(student);
	});
};
