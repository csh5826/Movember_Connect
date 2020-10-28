import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Bar} from 'react-chartjs-2';


const state = {
  labels: ['Prostate cancer', 'Men\'s mental health awareness', 'Testicular cancer'],
  datasets: [
    {
      label: 'Participants',
      backgroundColor: '#800000',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

class FirstGraph extends Component {
    
  render() {
    return (
      <React.Fragment>
          <Container maxWidth='lg' style={{marginTop: 140}}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'# of Participants per cause',
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

export default FirstGraph;