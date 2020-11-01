import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';

class FirstGraph extends Component {
    
  render() {
    // get variables from our props
    let totalParticipants = this.props.participantsCauseData.specificTotalParticipants
    let totalPledged;
    if (this.props.participantsCauseData.specificTotalPledged.length === 0){
      totalPledged = 0
    }
    else{
      totalPledged = this.props.participantsCauseData.specificTotalPledged[0].total
    }
    let dataLabel = this.props.participantsCauseData.participantsCause
    console.log(totalParticipants)
    const data = {
      labels: ['# of participants', 'Amount pledged'],
      datasets: [
        {
          label: dataLabel,
          barThickness: 150,
          backgroundColor: '#800000',
          borderColor: '#000000',
          borderWidth: 3,
          data: [totalParticipants, totalPledged]
        }
      ]
    }
    return (
      <React.Fragment>
          <Container maxWidth='lg' style={{marginTop: 140}}>
        <Bar
          data={data}
          options={{
            title:{
              display:true,
              text: this.props.participantsCauseData.participantsCause + ' stats',
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

export default connect(mapStateToProps)(FirstGraph);