import * as React from 'react'
import { Key } from '@tonaljs/tonal';

type SecondaryDominantsProps = {
    tonic: string,
    mode: string
}

const SecondaryDominants = ({tonic, mode}: SecondaryDominantsProps) => <div> {dominants(tonic, mode).join(" ")} </div>

const dominants = (tonic: string, mode: string): Array<String> => {
    return keyData(tonic, "Major").secondaryDominants.slice(1,6);
}

const keyData = (tonic: string, mode: string): object => {
    return (mode == "Major" ? Key.majorKey(tonic) : Key.minorKey(tonic).natural);
}

export default SecondaryDominants; 