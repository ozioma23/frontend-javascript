// MajorCredits interface with brand
interface MajorCredits {
  credits: number;
  _majorBrand: void; 
}

// MinorCredits interface with brand
interface MinorCredits {
  credits: number;
  _minorBrand: void;
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: undefined };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: undefined };
}
