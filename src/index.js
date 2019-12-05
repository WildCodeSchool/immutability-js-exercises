const student = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log('student before the mutation', student);

const studentWithSchool = student;
studentWithSchool.school = 'Wild Code School';

console.log('studentWithSchool', student);
console.log('student after the mutation', student);
console.log(
  'Are student and studentWithSchool the same ?',
  student === studentWithSchool
);
