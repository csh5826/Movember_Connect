import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
// import { fetchWeeklyData } from '../actions';
// import { bindActionCreators } from 'redux';

class WeeklyPledgedGraph extends Component {
    
//   componentDidMount(){
//     this.props.fetchWeeklyData()
//   }
  render() {
    let pledgedWeekOne;
    let pledgedWeekTwo;
    let pledgedWeekThree;
    let pledgedWeekFour;
    let pledgedWeekFive;
    // get variables from our props
    if (this.props.participantsWeeklyData.weekOneCount.length === 0 || this.props.participantsWeeklyData.weekTwoCount.length === 0 || this.props.participantsWeeklyData.weekThreeCount.length === 0 || this.props.participantsWeeklyData.weekFourCount.length === 0 || this.props.participantsWeeklyData.weekFiveCount.length === 0){
        pledgedWeekOne = 0
        pledgedWeekTwo = 0
        pledgedWeekThree = 0
        pledgedWeekFour = 0
        pledgedWeekFive = 0
    }
    else{
        pledgedWeekOne = this.props.participantsWeeklyData.weekOneCount[0].totalPledgedOne
        pledgedWeekTwo = this.props.participantsWeeklyData.weekTwoCount[0].totalPledgedTwo
        pledgedWeekThree = this.props.participantsWeeklyData.weekThreeCount[0].totalPledgedThree
        pledgedWeekFour = this.props.participantsWeeklyData.weekFourCount[0].totalPledgedFour
        pledgedWeekFive = this.props.participantsWeeklyData.weekFiveCount[0].totalPledgedFive
    }
    
    const data = {
      labels: ['Week One', 'Week Two', 'Week Three', 'Week Four', 'Week Five'],
      datasets: [
        {
          label: 'Participants added',
          lineTension: 0.5,
          // backgroundColor: '#800000',
          borderColor: '#800000',
          borderWidth: 3,
          data: [pledgedWeekOne, pledgedWeekOne + pledgedWeekTwo, pledgedWeekOne + pledgedWeekTwo +pledgedWeekThree, pledgedWeekOne + pledgedWeekTwo +pledgedWeekThree+ pledgedWeekFour, pledgedWeekOne + pledgedWeekTwo +pledgedWeekThree+ pledgedWeekFour+pledgedWeekFive]
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
              text: 'Pledged amount week over week',
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

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchWeeklyData }, dispatch);
// }
export default connect(mapStateToProps)(WeeklyPledgedGraph);