import { chords, Mode, secondaryDominants } from "./Theory"

describe("#chords", () => {
    test("returns the chords of the c major scale", async () => {
        expect(chords("C", Mode.Major)).toEqual(["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5"]);
    });
    test("returns the chords of the a minor scale", async () => {
        expect(chords("A", Mode.Minor)).toEqual(["Am7", "Bm7b5", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7" ]);
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