import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const tonicOptions = [
    {
        key: "F",
        text: "F",
        value: "F"
    },
    {
        key: "C",
        text: "C",
        value: "C"
    },
    {
        key: "G",
        text: "G",
        value: "G"
    },
    {
        key: "D",
        text: "D",
        value: "D"
    },
    {
        key: "A",
        text: "A",
        value: "A"
    },
    {
        key: "E",
        text: "E",
        value: "E"
    },
    {
        key: "B",
        text: "B",
        value: "B"
    },
    {
        key: "Gb",
        text: "Gb",
        value: "Gb"
    },
    {
        key: "Db",
        text: "Db",
        value: "Db"
    },
    {
        key: "Ab",
        text: "Ab",
        value: "Ab"
    },
    {
        key: "Eb",
        text: "Eb",
        value: "Eb"
    },
    {
        key: "Bb",
        text: "Bb",
        value: "Bb"
    }
]

const TonicDropdown = (props) =>  {
    return <Dropdown
        placeholder="Select a tonic note"
        fluid
        selection
        onChange={props.onChange}
        options={tonicOptions}
        value={props.value}
    />
}

export default TonicDropdown;