import React, { FunctionComponent } from 'react'

import { Container } from 'semantic-ui-react';

import { secondaryDominants, Mode } from '../lib/Theory';
import GenericChordRow from './GenericChordRow';

type SecondaryDominantsProps = {
    tonic: string,
    mode: Mode
}

const SecondaryDominants: FunctionComponent<SecondaryDominantsProps> = ({tonic, mode}) => {
    let chords = secondaryDominants(tonic, mode)
    console.log(`rendering with secondary dominants: ${chords}`)
    return <GenericChordRow chords={chords} />
}
export default SecondaryDominants;