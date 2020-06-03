import { chords, Mode } from "./Theory"

describe("#chords", () => {
    test("returns the chords of the c major scale", async () => {
        expect(chords("C", Mode.Major)).toEqual(["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5"]);
    });
    test("returns the chords of the a minor scale", async () => {
        expect(chords("A", Mode.Minor)).toEqual(["Am7", "Bm7b5", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7" ]);
    });
  });