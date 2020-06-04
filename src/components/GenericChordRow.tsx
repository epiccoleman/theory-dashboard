import React, { FunctionComponent } from 'react';
import { Grid, Container } from "semantic-ui-react";

type GenericChordRowProps = {
    chordSymbols: readonly string[]
    chordRomanNumerals: readonly string[]
}

const GenericChordRow: FunctionComponent<GenericChordRowProps> = ({chordSymbols, chordRomanNumerals}) => {
    return (
        <Grid columns={1} divided>
            <Grid.Row textAlign='center' columns={7}>
            {chordRomanNumerals.map((chordRomanNumeral) => <Grid.Column key={chordRomanNumeral}>{chordRomanNumeral}</Grid.Column>)}
            </Grid.Row>
            <Grid.Row textAlign='center' columns={7}>
            {chordSymbols.map((chordSymbol) => <Grid.Column key={chordSymbol}>{chordSymbol}</Grid.Column>)}
            </Grid.Row>
        </Grid>
    )
}

export default GenericChordRow