export enum Mode {
    Major = "major",
    Minor = "minor"
}

export type Chord {

}

export type ScaleChords;

export class KeyInfo {
    tonic: string
    mode: Mode
    diatonicChords: ScaleChords
    secondaryDominants: ScaleChords
    parallelModes: {}
}