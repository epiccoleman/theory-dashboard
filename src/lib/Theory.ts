import { Key } from "@tonaljs/tonal";

export enum Mode {
    Major = "major",
    Minor = "minor"
}

export function chords(tonic: string, mode: Mode): readonly string[] {
    if (mode == Mode.Major){
        return Key.majorKey(tonic).chords;
    }
    if (mode == Mode.Minor){
        return Key.minorKey(tonic).natural.chords;
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