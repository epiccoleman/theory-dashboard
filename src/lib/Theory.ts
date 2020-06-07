import { Key, Scale } from "@tonaljs/tonal";

export enum Mode {
    Major = "major",
    Minor = "minor"
}

export class ScaleDegree {
    chord: string
    romanNumeral: string
    constructor(chord: string, romanNumeral: string){
        this.chord = chord;
        this.romanNumeral = romanNumeral;
    }
}

export class Chords {
    chords: readonly ScaleDegree[]
    constructor(chordSymbols: readonly string[], romanNumerals: readonly string[]){
        this.chords = chordSymbols.map((symbol, index) => new ScaleDegree(symbol, romanNumerals[index]));
    }
}

export function chords(tonic: string, mode: Mode): Chords {
    if (mode == Mode.Major){
        let chordSymbols = Key.majorKey(tonic).chords
        let romanNumerals = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
        let chords = new Chords(chordSymbols, romanNumerals);

        return chords;
    }
    if (mode == Mode.Minor){
        let chordSymbols = Key.minorKey(tonic).natural.chords
        let romanNumerals = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
        let chords = new Chords(chordSymbols, romanNumerals);
        return chords;
    }
}

export function secondaryDominants(tonic: string, mode: Mode): Chords {
    if (mode == Mode.Major){
        let chordSymbols = Key.majorKey(tonic).secondaryDominants;
        let romanNumerals = ["", "V7/ii", "V7/iii", "V7/IV", "V7/V", "V7/vi", ""];
        return new Chords(chordSymbols, romanNumerals);
    }
    if (mode == Mode.Minor){
        let chords = Key.majorKey(Key.minorKey(tonic).relativeMajor).secondaryDominants
        let dominantOfRelativeMajor = Key.majorKey(Key.minorKey(tonic).relativeMajor).chords[4];
        let chordSymbols = [ ...chords.slice(5, 7), ...chords.slice(0, 5)]
        chordSymbols[2] = dominantOfRelativeMajor;
        let romanNumerals = ["V7/i", "", "V7/III", "V7/iv", "V7/v", "V7/VI", "V7/VII"];
        return new Chords(chordSymbols, romanNumerals);
    }
}