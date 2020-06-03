import React from 'react'

import { Dropdown } from 'semantic-ui-react'

import { Mode } from "../lib/Theory"

const modeOptions = [
    {
        key: "Major",
        text: "Major",
        value: Mode.Major
    },
    {
        key: "Minor",
        text: "Minor",
        value: Mode.Minor
    },
]

const ModeDropdown = (props) =>  {
    return <Dropdown
        placeholder="Select a mode"
        fluid
        selection
        onChange={props.onChange}
        options={modeOptions}
        value={props.value}
    />
}

export default ModeDropdown;