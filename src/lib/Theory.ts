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

export type Chords = readonly ScaleDegree[]

export function chords(tonic: string, mode: Mode): Chords {
    if (mode == Mode.Major){
        let chordSymbols = Key.majorKey(tonic).chords
        let romanNumerals = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
        let chords:  Chords = chordSymbols.map((symbol, index) => new ScaleDegree(symbol, romanNumerals[index]));

        return chords;
    }
    if (mode == Mode.Minor){
        let chordSymbols = Key.minorKey(tonic).natural.chords
        let romanNumerals = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
        let chords: ScaleDegree[] = chordSymbols.map((symbol, index) => new ScaleDegree(symbol, romanNumerals[index]));
        return chords;
    }
}

export function secondaryDominants(tonic: string, mode: Mode): readonly string[] {
    if (mode == Mode.Major){
        return Key.majorKey(tonic).secondaryDominants;
    }
    if (mode == Mode.Minor){
        let chords = Key.majorKey(Key.minorKey(tonic).relativeMajor).secondaryDominants
        return [ ...chords.slice(5, 7), ...chords.slice(0, 5)]
    }
}