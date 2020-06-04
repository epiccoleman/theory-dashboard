import React, { FunctionComponent } from 'react'
import { chords, Mode } from '../lib/Theory'
import GenericChordRow from "./GenericChordRow"

type ChordsProps = {
    tonic: string,
    mode: Mode
}

const Chords: FunctionComponent<ChordsProps> = ({tonic, mode}) =>
    <GenericChordRow chords={chords(tonic, mode)} />

export default Chords;