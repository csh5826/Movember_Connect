import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { fetchWeeklyData } from '../actions';
import { bindActionCreators } from 'redux';

class WeeklyGraph extends Component {
    
  componentDidMount(){
    this.props.fetchWeeklyData()
  }
  render() {
    let totalWeekOne;
    let totalWeekTwo;
    let totalWeekThree;
    let totalWeekFour;
    let totalWeekFive;
    // get variables from our props
    if (this.props.participantsWeeklyData.weekOneCount.length === 0 || this.props.participantsWeeklyData.weekTwoCount.length === 0 || this.props.participantsWeeklyData.weekThreeCount.length === 0 || this.props.participantsWeeklyData.weekFourCount.length === 0 || this.props.participantsWeeklyData.weekFiveCount.length === 0){
      totalWeekOne = 0
      totalWeekTwo = 0
      totalWeekThree = 0
      totalWeekFour = 0
      totalWeekFive = 0
    }
    else{
      totalWeekOne = this.props.participantsWeeklyData.weekOneCount[0].weekOne
      totalWeekTwo = this.props.participantsWeeklyData.weekTwoCount[0].weekTwo
      totalWeekThree = this.props.participantsWeeklyData.weekThreeCount[0].weekThree
      totalWeekFour = this.props.participantsWeeklyData.weekFourCount[0].weekFour
      totalWeekFive = this.props.participantsWeeklyData.weekFiveCount[0].weekFive
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
          data: [totalWeekOne, totalWeekTwo, totalWeekThree, totalWeekFour, totalWeekFive]
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
              text: 'Number of participants added each week of November',
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeeklyData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyGraph);