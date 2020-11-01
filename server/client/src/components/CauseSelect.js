import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCauseData } from '../actions';
import { withStyles } from "@material-ui/core/styles";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// styles for new participant form
const styles = () =>({
    button: {
      backgroundColor: '#800000',
      color: '#FFFFFF'
    },
    buttonGroup: {
        display: 'center',
        marginTop: 150,
        borderColor: '#800000'
    }
  })

class CauseSelect extends Component {
    constructor() {
        super()

        this.state = {
            cause: null
        }
        this.selectCause = this.selectCause.bind(this);
        console.log('state is', this.state)
    }
    // helper function for fetch cause data
    getCauseData() {
        this.props.fetchCauseData(this.state)
    }

    selectCause(event) {
        event.preventDefault();
        console.log(event.currentTarget.value)
        this.setState({ cause: event.currentTarget.value }, () => {
            // this.getCauseData()
            // this.setState({ cause: null })
        })
    }
    render() {
        console.log(this.state)
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container maxWidth='xs'>
                    <ButtonGroup className={classes.buttonGroup} size="large" color="primary" aria-label="large outlined primary button group">
                        <Button className={classes.button}  onClick={this.selectCause} value='Prostate cancer'>Prostate Cancer</Button>
                        <Button className={classes.button} onClick={this.selectCause} value='Testicular cancer'>Testicular Cancer</Button>
                        <Button className={classes.button} onClick={this.selectCause} value="Men's mental health awareness">Men's Mental Health Awareness</Button>
                    </ButtonGroup>
                </Container>
            </React.Fragment>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCauseData }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CauseSelect));