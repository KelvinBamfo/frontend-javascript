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
