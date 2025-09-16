// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Ernest',
  lastName: 'Arhin',
  fullTimeEmployee: false,
  location: 'Assin Fosu',
  contract: false,
};

console.log(teacher3);

// Task 2: Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'Ernest',
  lastName: 'Arhin',
  location: 'Assin Fosu',
  fullTimeEmployee: true,
  numberOfReports: 15,
};

console.log(director1);

// Task 3: printTeacher function and interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Named function with destructuring and exact return format
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher("Ernest", "Arhin")); // J. Doe

