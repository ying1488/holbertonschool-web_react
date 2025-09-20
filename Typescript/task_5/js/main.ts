interface MajorCredits {
    credits: number
}

interface MinorCredits {
    credits: number
}

type MajorCreditsType = MajorCredits & { __brand: "MajorCredits" }
type MinorCreditsType = MinorCredits & { __brand: "MinorCredits" }

function sumMajorCredits(subject1: MajorCreditsType, subject2: MajorCreditsType) {
    return subject1.credits + subject2.credits
}

function sumMinorCredits(subject1: MinorCreditsType, subject2: MinorCreditsType) {
    return subject1.credits + subject2.credits
}