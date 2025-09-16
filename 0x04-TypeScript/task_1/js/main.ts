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

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("Ernest", "Arhin")); // E. Arhin

// Task 4: Writing a class

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass({ firstName: 'Kelvin', lastName: 'Bamfo' });
console.log(student1.workOnHomework()); // Currently working
console.log(student1.displayName());    // Kelvin
