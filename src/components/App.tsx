import * as React from 'react'
import { useState } from 'react'
import TonicDropdown from './TonicDropdown'
import ModeDropdown from './ModeDropdown'
import Chords from './Chords'
import SecondaryDominants from './SecondaryDominants'
import { Mode } from "../lib/Theory"

const App = () => {
    const [ tonic, setTonic ] = useState("C")
    const [ mode , setMode ] = useState(Mode.Major);

    return (
        <div>
            <TonicDropdown value={tonic} onChange={(e, { value }) => setTonic(value)}/>
            <ModeDropdown value={mode} onChange={(e, { value }) => setMode(value)}/>

            <Chords tonic={tonic} mode={mode} />
            {/* <SecondaryDominants tonic={tonic} mode={mode} /> */}
        </div>
            // <pre>{JSON.stringify(keyData(tonic, mode), null, 2)}</pre>
    );
}

export default App;