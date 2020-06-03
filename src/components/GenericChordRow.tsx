import React, { FunctionComponent } from 'react';
import { Container } from "semantic-ui-react";

type GenericChordRowProps = {
    chordSymbols: readonly string[]
    chordRomanNumerals: readonly string[]
}

const GenericChordRow: FunctionComponent<GenericChordRowProps> = ({chordSymbols, chordRomanNumerals}) => {
    return (
        <Container>
            {chordSymbols.join(" ")}
        </Container>
    )
}

export default GenericChordRow