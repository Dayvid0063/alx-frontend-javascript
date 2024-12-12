// Interfaces for credit types
interface MajorCredits {
    credits: number;
    brand: 'major';
}

interface MinorCredits {
    credits: number;
    brand: 'minor';
}

// Sum Major Credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major'
    };
}

// Sum Minor Credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor'
    };
}

// Usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'major' };
const majorResult = sumMajorCredits(majorSubject1, majorSubject2);

const minorSubject1: MinorCredits = { credits: 2, brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'minor' };
const minorResult = sumMinorCredits(minorSubject1, minorSubject2);

console.log(majorResult);
console.log(minorResult);
