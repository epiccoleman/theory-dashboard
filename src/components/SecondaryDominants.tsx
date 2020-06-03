import React, { FunctionComponent } from 'react'

import { Container } from 'semantic-ui-react';

import { secondaryDominants, Mode } from '../lib/Theory';

type SecondaryDominantsProps = {
    tonic: string,
    mode: Mode
}

const SecondaryDominants: FunctionComponent<SecondaryDominantsProps> = ({tonic, mode}) =>
    <Container>{secondaryDominants(tonic, mode).join(" ")}</Container>

export default SecondaryDominants;