import React, { FunctionComponent } from 'react';
import { Chords } from "../lib/Theory";
import { Grid } from "semantic-ui-react";

type GenericChordRowProps = {
    chords: Chords
}

const GenericChordRow: FunctionComponent<GenericChordRowProps> = ({chords}) => {
    return (
        <Grid columns={1} divided>
            <Grid.Row textAlign='center' columns={7}>
            {chords.chords.map((degree, index) => <Grid.Column key={`${degree.romanNumeral}-${index}`}>{degree.romanNumeral}</Grid.Column>)}
            </Grid.Row>
            <Grid.Row textAlign='center' columns={7}>
            {chords.chords.map((degree, index) => <Grid.Column key={`${degree.chord}-${index}`}>{degree.chord}</Grid.Column>)}
            </Grid.Row>
        </Grid>
    )
}

export default GenericChordRow