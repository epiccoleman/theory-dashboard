import { chords, Mode, ScaleDegree, secondaryDominants } from "./Theory"
import { Scale } from "@tonaljs/tonal";

describe("#chords", () => {
    // test("returns the chords of the c major scale", async () => {
    //     expect(chords("C", Mode.Major)).toEqual(["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5"]);
    // });
    test("returns the chords of the c major scale", async () => {
        let expectedChords = [
            new ScaleDegree("Cmaj7", "I"),
            new ScaleDegree("Dm7", "ii"),
            new ScaleDegree("Em7", "iii"),
            new ScaleDegree("Fmaj7", "IV"),
            new ScaleDegree("G7", "V"),
            new ScaleDegree("Am7", "vi"),
            new ScaleDegree("Bm7b5", "vii°"),
        ]

        expect(chords("C", Mode.Major)).toEqual(expectedChords);
    });

    test("returns the chords of the a minor scale", async () => {
        let expectedChords = [
            new ScaleDegree("Am7", "i"),
            new ScaleDegree("Bm7b5", "ii°"),
            new ScaleDegree("Cmaj7", "III"),
            new ScaleDegree("Dm7", "iv"),
            new ScaleDegree("Em7", "v"),
            new ScaleDegree("Fmaj7", "VI"),
            new ScaleDegree("G7", "VII"),
        ]

        expect(chords("A", Mode.Minor)).toEqual(expectedChords);
    });
});

describe("#secondary dominants", () => {
    test("returns the secondary dominants of the c major scale", async () => {
        expect(secondaryDominants("C", Mode.Major)).toEqual(["", "A7", "B7", "C7", "D7", "E7", ""]);
    });
    test("returns the secondary dominants of the a minor scale", async () => {
        expect(secondaryDominants("A", Mode.Minor)).toEqual(["E7", "", "", "A7", "B7", "C7", "D7" ]);
    });
});