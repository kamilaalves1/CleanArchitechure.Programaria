const Student = require('../../entities/Student');

module.exports = (StudentRepository, CrmServices) => {

    async function Execute(firstName, lastName, email) {
        const student = await StudentRepository.getByEmail(email);

        // Valida se campops principais estão sendo prenchidos
        if (!firstName || !lastName || !email) {
            throw new Error('validation failed');
        }

        // Se o estudante já existe por emal
        if (student) {
            throw new Error('email already exist in the system');
        }

        // criar o novo estudante
        let newStudent = new Student(firstName, lastName, email);

        //Persiste na base dados
        newStudent = await StudentRepository.add(newStudent);

        return 'student added successfully';
    }
    return {
        Execute
    };
};
