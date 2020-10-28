import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'

// styles this content
const useStyles = makeStyles({
    stats: {
        text: 'center',
        background: 'red'
    }
})


const ParticipantsPledged = () => {
    const classes = useStyles()
    return (
    <div style={{marginTop: 75, textAlign: 'center'}}>
        <h1>402 participating and $10,241 pledged</h1>
    </div>
    )
}

export default ParticipantsPledged;