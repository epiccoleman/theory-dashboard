import * as React from 'react'
import { useState } from 'react'
import TonicDropdown from './TonicDropdown'
import ModeDropdown from './ModeDropdown'
import Chords from './Chords'
import SecondaryDominants from './SecondaryDominants'
import { Mode } from "../lib/Theory"
import { Container, Segment, Menu } from "semantic-ui-react"

const App = () => {
    const [ tonic, setTonic ] = useState("C")
    const [ mode , setMode ] = useState(Mode.Major);

    return (
        <Container>
            <Segment>
                <Menu>
                    <Menu.Item>
                        Key Picker
                    </Menu.Item>
                    <Menu.Item>
                        Chords
                    </Menu.Item>
                    <Menu.Item>
                        Secondary Dominants
                    </Menu.Item>
                </Menu>
            </Segment>
            <Segment>
                <TonicDropdown value={tonic} onChange={(e, { value }) => setTonic(value)}/>
                <ModeDropdown value={mode} onChange={(e, { value }) => setMode(value)}/>
            </Segment>
            <Segment>
                <Chords tonic={tonic} mode={mode} />
            </Segment>
            <Segment>
                <SecondaryDominants tonic={tonic} mode={mode} />
            </Segment>
        </Container>
            // <pre>{JSON.stringify(keyData(tonic, mode), null, 2)}</pre>
    );
}

export default App;