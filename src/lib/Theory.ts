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