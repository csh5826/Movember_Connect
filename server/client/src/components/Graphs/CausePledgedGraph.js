import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';

class CausePledgedGraph extends Component {
    
  render() {
    let causePledgedOne;
    let causePledgedTwo;
    let causePledgedThree;
    let causePledgedFour;
    let causePledgedFive;
    // get variables from our props
    if (this.props.participantsCauseData.weekOneInfo.length === 0 || this.props.participantsCauseData.weekTwoInfo.length === 0 || this.props.participantsCauseData.weekThreeInfo.length === 0 || this.props.participantsCauseData.weekFourInfo.length === 0 || this.props.participantsCauseData.weekFiveInfo.length === 0){
      causePledgedOne = null;
      causePledgedTwo = null;
      causePledgedThree = null;
      causePledgedFour = null;
      causePledgedFive = null;
    }
    else{
      causePledgedOne = this.props.participantsCauseData.weekOneInfo[0].totalPledgedOne
      causePledgedTwo = this.props.participantsCauseData.weekTwoInfo[0].totalPledgedTwo
      causePledgedThree = this.props.participantsCauseData.weekThreeInfo[0].totalPledgedThree
      causePledgedFour = this.props.participantsCauseData.weekFourInfo[0].totalPledgedFour
      causePledgedFive = this.props.participantsCauseData.weekFiveInfo[0].totalPledgedFive
    }
    let dataLabel = 'Amount pledged'
    const data = {
      labels: ['Nov 1-7', 'Nov 8-14', 'Nov 16-22', 'Nov 23-29', 'Nov 29-30'],
      datasets: [
        {
          label: dataLabel,
          barThickness: 150,
          // backgroundColor: '#800000',
          borderColor: '#800000',
          borderWidth: 3,
          data: [causePledgedOne, causePledgedOne + causePledgedTwo, causePledgedOne + causePledgedTwo + causePledgedThree, causePledgedOne + causePledgedTwo + causePledgedThree + causePledgedFour, causePledgedOne + causePledgedTwo + causePledgedThree + causePledgedFour + causePledgedFive]
        }
      ]
    }
    return (
      <React.Fragment>
          <Container maxWidth='md' style={{marginTop: 50}}>
        <Line
          data={data}
          options={{
            title:{
              display:true,
              text: this.props.participantsCauseData.participantsCause + ' pledged amount week over week',
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

export default connect(mapStateToProps)(CausePledgedGraph);