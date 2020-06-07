import { chords, Mode, ScaleDegree, secondaryDominants, Chords } from "./Theory"
import { Scale } from "@tonaljs/tonal";

describe("#chords", () => {
    test("returns the chords of the c major scale", async () => {
        let expectedSymbols = [ "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5" ];
        let expectedNumerals = [ "I", "ii", "iii", "IV", "V", "vi", "vii°"]
        let expectedChords = new Chords(expectedSymbols, expectedNumerals);

        expect(chords("C", Mode.Major)).toEqual(expectedChords);
    });

    test("returns the chords of the a minor scale", async () => {
        let expectedSymbols = [ "Am7", "Bm7b5", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7" ];
        let expectedNumerals = [ "i", "ii°", "III", "iv", "v", "VI", "VII"]
        let expectedChords = new Chords(expectedSymbols, expectedNumerals);

        expect(chords("A", Mode.Minor)).toEqual(expectedChords);
    });
});

describe("#secondary dominants", () => {
    test("returns the secondary dominants of the c major scale", async () => {
        let expectedSymbols = [ "", "A7", "B7", "C7", "D7", "E7", "" ];
        let expectedNumerals = [ "", "V7/ii", "V7/iii", "V7/IV", "V7/V", "V7/vi", ""]
        let expectedChords = new Chords(expectedSymbols, expectedNumerals);

        expect(secondaryDominants("C", Mode.Major)).toEqual(expectedChords);
    });

    test("returns the secondary dominants of the a minor scale", async () => {
        let expectedSymbols = [ "E7", "", "G7", "A7", "B7", "C7", "D7" ];
        let expectedNumerals = [ "V7/i", "", "V7/III", "V7/iv", "V7/v", "V7/VI", "V7/VII"]
        let expectedChords = new Chords(expectedSymbols, expectedNumerals);

        expect(secondaryDominants("A", Mode.Minor)).toEqual(expectedChords);
    });
});