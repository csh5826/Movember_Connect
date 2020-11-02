import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { fetchWeeklyData } from '../actions';
import { bindActionCreators } from 'redux';

class WeeklyParticipantsGraph extends Component {
    
  componentDidMount(){
    this.props.fetchWeeklyData()
  }
  render() {
    let participantsWeekOne;
    let participantsWeekTwo;
    let participantsWeekThree;
    let participantsWeekFour;
    let participantsWeekFive;
    // get variables from our props
    if (this.props.participantsWeeklyData.weekOneCount.length === 0 || this.props.participantsWeeklyData.weekTwoCount.length === 0 || this.props.participantsWeeklyData.weekThreeCount.length === 0 || this.props.participantsWeeklyData.weekFourCount.length === 0 || this.props.participantsWeeklyData.weekFiveCount.length === 0){
      participantsWeekOne = 0
      participantsWeekTwo = 0
      participantsWeekThree = 0
      participantsWeekFour = 0
      participantsWeekFive = 0
    }
    else{
      participantsWeekOne = this.props.participantsWeeklyData.weekOneCount[0].weekOne
      participantsWeekTwo = this.props.participantsWeeklyData.weekTwoCount[0].weekTwo
      participantsWeekThree = this.props.participantsWeeklyData.weekThreeCount[0].weekThree
      participantsWeekFour = this.props.participantsWeeklyData.weekFourCount[0].weekFour
      participantsWeekFive = this.props.participantsWeeklyData.weekFiveCount[0].weekFive
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
          data: [participantsWeekOne, participantsWeekOne + participantsWeekTwo, participantsWeekOne + participantsWeekTwo +participantsWeekThree, participantsWeekOne + participantsWeekTwo +participantsWeekThree+ participantsWeekFour, participantsWeekOne + participantsWeekTwo +participantsWeekThree+ participantsWeekFour+participantsWeekFive]
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
              text: 'Participants added week over week',
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
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyParticipantsGraph);