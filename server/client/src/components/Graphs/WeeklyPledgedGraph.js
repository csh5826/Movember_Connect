import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Bar, defaults} from 'react-chartjs-2';
import { connect } from 'react-redux';

// set styles of charts
defaults.global.defaultFontFamily = 'geneva,arial,helvetica';
defaults.global.defaultFontColor = 'black';

class WeeklyPledgedGraph extends Component {
    
  render() {
    let pledgedWeekOne;
    let pledgedWeekTwo;
    let pledgedWeekThree;
    let pledgedWeekFour;
    let pledgedWeekFive;
    // get variables from our props
    if (this.props.participantsWeeklyData.weekOneCount.length === 0 || this.props.participantsWeeklyData.weekTwoCount.length === 0 || this.props.participantsWeeklyData.weekThreeCount.length === 0 || this.props.participantsWeeklyData.weekFourCount.length === 0 || this.props.participantsWeeklyData.weekFiveCount.length === 0){
        pledgedWeekOne = null;
        pledgedWeekTwo = null;
        pledgedWeekThree = null;
        pledgedWeekFour = null;
        pledgedWeekFive = null;
    }
    else{
        pledgedWeekOne = this.props.participantsWeeklyData.weekOneCount[0].totalPledgedOne
        pledgedWeekTwo = this.props.participantsWeeklyData.weekTwoCount[0].totalPledgedTwo
        pledgedWeekThree = this.props.participantsWeeklyData.weekThreeCount[0].totalPledgedThree
        pledgedWeekFour = this.props.participantsWeeklyData.weekFourCount[0].totalPledgedFour
        pledgedWeekFive = this.props.participantsWeeklyData.weekFiveCount[0].totalPledgedFive
    }
    
    const data = {
      labels: ['Nov 1-7', 'Nov 8-14', 'Nov 15-21', 'Nov 22-28', 'Nov 29-30'],
      datasets: [
        {
          label: 'Amount pledged in $',
          lineTension: 0.5,
          // backgroundColor: '#800000',
          borderColor: '#2F4F4F',
          borderWidth: 2,
          data: [pledgedWeekOne,pledgedWeekTwo,pledgedWeekThree,pledgedWeekFour, pledgedWeekFive]
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
              text: 'Pledged amount per week',
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
  return { participantsWeeklyData: state.participantsWeeklyData }; 
}

export default connect(mapStateToProps)(WeeklyPledgedGraph);