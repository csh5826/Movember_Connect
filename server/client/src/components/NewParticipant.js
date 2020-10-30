import React, { Fragment } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { createParticipant } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';


// styles for new participant form
const styles = () =>({
  formGroup: {
      alignItems: 'center'
  },
  textField: {
    marginTop: 40,
    display: 'block',
    '& label.Mui-focused': {
      color: '#800000'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#800000',
      }
    }
  },
  select: {
    '&:after': {
      borderColor: '#800000'
    }   
  },
  button: {
    backgroundColor: '#800000',
    color: 'white',
    marginTop: 15
  }
})

// sendParticipant= () => {

// }
class NewParticipant extends React.Component {
  constructor (){
    super()
    this.state = {
      name : '',
      address : '',
      cause : '',
      pledge: null,
      story: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    console.log('state is', this.state)
  }


  handleSubmit() {
    let newParticipant = {
      name: this.state.name,
      address: this.state.address,
      cause: this.state.cause,
      pledge: this.state.pledge,
      story: this.state.story
    }
    if (this.state.name === '' || this.state.location === '' || this.state.cause === '' || this.state.pledge === '' || this.state.story === ''){
      alert('Please fill out all fields before submitting')
    }
    else {
      console.log('new participant data', newParticipant);
      this.props.createParticipant(newParticipant)
      let history = this.props.history;
      // set a timeout to ensure that the home page will have the new data submitted
      setTimeout(
        function(){
          history.push('/')
        },
      1000)  
    
    }
  }
  render() {
    const { classes } = this.props;
  return (
    <Fragment>
        <NavBar />
    <div style={{marginTop: 75, textAlign: 'center'}}>
        <h1>Tell us your story!</h1>
    </div>
      <Container maxWidth='xs'>
        <FormGroup className={classes.formGroup}>
            <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" className={classes.textField} onChange={e => this.setState({name: e.target.value})}/>
            <TextField id="outlined-basic" fullWidth label="Location" variant="outlined" className={classes.textField} onChange={e => this.setState({address: e.target.value})}/>
            <InputLabel id="demo-simple-select-label" fullWidth className={classes.textField}>Your Cause</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.cause}
          onChange={e => this.setState({cause: e.target.value})}
          fullWidth
          className={classes.textField, classes.select}
        >
          <MenuItem value={'Prostate Cancer'}>Prostate Cancer</MenuItem>
          <MenuItem value={'Testicular Cancer'}>Testicular Cancer</MenuItem>
          <MenuItem value={'Testicular Cancer'}>Men's mental health awareness</MenuItem>
        </Select>
            <TextField id="outlined-basic" fullWidth label="Pledge" variant="outlined" className={classes.textField} onChange={e => this.setState({pledge: e.target.value})}/>
            <TextField id="outlined-basic" multiline fullWidth label="Your Why" variant="outlined" className={classes.textField} onChange={e => this.setState({story: e.target.value})}/>
            <Button variant="contained" className={classes.button} onClick={this.handleSubmit}>Submit</Button>
        </FormGroup>
      </Container>
    </Fragment>
  );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ createParticipant }, dispatch);
}

export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(NewParticipant)));
