import React, {Component} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParticipants } from '../actions'


class ParticipantStats extends Component {

    componentDidMount(){
        this.props.fetchParticipants()
        console.log('props are', this.props.participants)
    }
    render(){
        return (
        <div style={{marginTop: 75, textAlign: 'center'}}>
            <h1>{this.props.participants.totalParticipants} participating and $ pledged</h1>
        </div>
        )
        //{this.props.participants.totalPledged[0].total}
    }
}


function mapStateToProps(state) {
    return { participants: state.participants }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchParticipants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantStats);