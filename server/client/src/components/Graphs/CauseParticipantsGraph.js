import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';

class CauseParticipantsGraph extends Component {
    
  render() {
    let causeParticipantsOne;
    let causeParticipantsTwo;
    let causeParticipantsThree;
    let causeParticipantsFour;
    let causeParticipantsFive;
    // get variables from our props
    if (this.props.participantsCauseData.weekOneInfo.length === 0 || this.props.participantsCauseData.weekTwoInfo.length === 0 || this.props.participantsCauseData.weekThreeInfo.length === 0 || this.props.participantsCauseData.weekFourInfo.length === 0 || this.props.participantsCauseData.weekFiveInfo.length === 0){
      causeParticipantsOne = null;
      causeParticipantsTwo = null;
      causeParticipantsThree = null;
      causeParticipantsFour = null;
      causeParticipantsFive = null;
    }
    else{
      causeParticipantsOne = this.props.participantsCauseData.weekOneInfo[0].totalCountOne
      causeParticipantsTwo = this.props.participantsCauseData.weekTwoInfo[0].totalCountTwo
      causeParticipantsThree = this.props.participantsCauseData.weekThreeInfo[0].totalCountThree
      causeParticipantsFour = this.props.participantsCauseData.weekFourInfo[0].totalCountFour
      causeParticipantsFive = this.props.participantsCauseData.weekFiveInfo[0].totalCountFive
    }
    let dataLabel = '# of participants'
    const data = {
      labels: ['Nov 1-7', 'Nov 8-14', 'Nov 16-22', 'Nov 23-29', 'Nov 29-30'],
      datasets: [
        {
          label: dataLabel,
          barThickness: 150,
          // backgroundColor: '#800000',
          borderColor: '#800000',
          borderWidth: 3,
          data: [causeParticipantsOne, causeParticipantsOne + causeParticipantsTwo, causeParticipantsOne + causeParticipantsTwo + causeParticipantsThree, causeParticipantsOne + causeParticipantsTwo + causeParticipantsThree + causeParticipantsFour, causeParticipantsOne + causeParticipantsTwo + causeParticipantsThree + causeParticipantsFour + causeParticipantsFive]
        }
      ]
    }
    return (
      <React.Fragment>
          <Container maxWidth='lg' style={{marginTop: 140}}>
        <Line
          data={data}
          options={{
            title:{
              display:true,
              text: this.props.participantsCauseData.participantsCause + ' participants week over week',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </Container>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { participantsCauseData: state.participantsCauseData }; 
}

export default connect(mapStateToProps)(CauseParticipantsGraph);