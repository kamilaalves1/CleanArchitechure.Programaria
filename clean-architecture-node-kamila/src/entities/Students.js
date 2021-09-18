module.exports = class Student {
    constructor(firstName, lastName, email, enrollments) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.enrollments = enrollments;
    }
};
