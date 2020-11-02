import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Line, defaults} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { fetchWeeklyData } from '../../actions';
import { bindActionCreators } from 'redux';

// set styles of charts
defaults.global.defaultFontFamily = 'geneva,arial,helvetica';
defaults.global.defaultFontColor = 'black';

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
      labels: ['Nov 1-7', 'Nov 8-14', 'Nov 16-22', 'Nov 23-29', 'Nov 29-30'],
      datasets: [
        {
          label: '# of participants',
          lineTension: 0.5,
          // backgroundColor: '#800000',
          borderColor: '#800000',
          borderWidth: 2,
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