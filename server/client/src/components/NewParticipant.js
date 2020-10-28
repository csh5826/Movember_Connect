import React, { Fragment } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from "@material-ui/core/styles";

// styles for new participant form
const useStyles = makeStyles({
  formGroup: {
      alignItems: 'center',
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
  }
})

const NewParticipant = () => {
  const classes = useStyles();

  const [cause, setCause] = React.useState('')
  const handleChange = (event) => {
    setCause(event.target.value)
  }
  return (
    <Fragment>
        <NavBar />
    <div style={{marginTop: 75, textAlign: 'center'}}>
        <h1>Tell us your story!</h1>
    </div>
      <Container maxWidth='xs'>
        <FormGroup className={classes.formGroup}>
            <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" color="#8000000" className={classes.textField}/>
            <TextField id="outlined-basic" fullWidth label="Location" variant="outlined" className={classes.textField}/>
            <InputLabel id="demo-simple-select-label" fullWidth className={classes.textField}>Your Cause</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cause}
          onChange={handleChange}
          fullWidth
          className={classes.textField, classes.select}
        >
          <MenuItem value={'Prostate Cancer'}>Prostate Cancer</MenuItem>
          <MenuItem value={'Testicular Cancer'}>Testicular Cancer</MenuItem>
          <MenuItem value={'Testicular Cancer'}>Men's mental health awareness</MenuItem>
        </Select>
            <TextField id="outlined-basic" fullWidth label="Pledge" variant="outlined" className={classes.textField}/>
            <TextField id="outlined-basic" fullWidth label="Your Why" variant="outlined" className={classes.textField}/>
        </FormGroup>
      </Container>
    </Fragment>
  );
}

export default NewParticipant;
