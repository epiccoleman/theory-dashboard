import React, { FunctionComponent } from 'react';
import { Chords } from "../lib/Theory";
import { Grid, ScaleDegree, Container } from "semantic-ui-react";

type GenericChordRowProps = {
    chords: Chords
}

const GenericChordRow: FunctionComponent<GenericChordRowProps> = ({chords}) => {
    return (
        <Grid columns={1} divided>
            <Grid.Row textAlign='center' columns={7}>
            {chords.map((degree) => <Grid.Column key={degree.romanNumeral}>{degree.romanNumeral}</Grid.Column>)}
            </Grid.Row>
            <Grid.Row textAlign='center' columns={7}>
            {chords.map((degree) => <Grid.Column key={degree.chord}>{degree.chord}</Grid.Column>)}
            </Grid.Row>
        </Grid>
    )
}

export default GenericChordRow