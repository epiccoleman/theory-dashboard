import React, { FunctionComponent } from 'react'

import { Container } from 'semantic-ui-react';

import { secondaryDominants, Mode } from '../lib/Theory';
import GenericChordRow from './GenericChordRow';

type SecondaryDominantsProps = {
    tonic: string,
    mode: Mode
}

const SecondaryDominants: FunctionComponent<SecondaryDominantsProps> = ({tonic, mode}) =>
    <GenericChordRow chordSymbols={secondaryDominants(tonic, mode)} chordRomanNumerals={["", "V7/ii", "V7/iii", "V7/IV", "V7/V", "V7/vi", ""]}></GenericChordRow>

export default SecondaryDominants;