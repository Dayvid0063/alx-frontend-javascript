interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// An object of type Directors
const director1: Directors = {
    firstName: 'Ruben',
    lastName: 'Amorim',
    location: 'Manchester',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);
