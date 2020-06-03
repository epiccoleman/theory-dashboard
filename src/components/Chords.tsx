import React from 'react'
import { chords, Mode } from '../lib/Theory'
import GenericChordRow from "./GenericChordRow"

type ChordsProps = {
    tonic: string,
    mode: Mode
}

const Chords = ({tonic, mode}: ChordsProps) =>
    <GenericChordRow chordSymbols={chords(tonic, mode)} chordRomanNumerals={["poo"]} />

export default Chords;