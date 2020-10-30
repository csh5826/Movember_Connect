import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParticipants } from '../actions'


class ParticipantStats extends Component {

    // componentDidMount(){
    //     this.props.fetchParticipants()
    //     // console.log('props are', this.props.participants)
    // }
    render(){
        if (this.props.participantsData.totalPledged.length === 0){
            return (
                <div style={{marginTop: 75, textAlign: 'center'}}>
                    Loading...
                </div>
            )
        }
        else {
            return (
                <div style={{marginTop: 75, textAlign: 'center'}}>
                    <h1>{this.props.participantsData.totalParticipants} participating and ${this.props.participantsData.totalPledged[0].total} pledged</h1>
                </div>
                )
        }
       
        // doesnt like looking for the 0 index for whatever reason
        //{this.props.participantsData.totalPledged[0].total}
    }
}


function mapStateToProps(state) {
    return { participantsData: state.participantsData }; 
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchParticipants }, dispatch);
// }

export default connect(mapStateToProps)(ParticipantStats);