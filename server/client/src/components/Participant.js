import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container'

const Participant = () => {
  return (
    <Fragment>
        <NavBar />
        <div style={{marginTop: 75, textAlign: 'center'}}>
          <h1>Clark's story and cause: Prostate Cancer</h1>
          <h2>Pledging $125</h2>
          <Container maxWidth='xs' style={{textAlign: 'left'}}>
          <p>Alias minus quia et. Est perspiciatis animi beatae. Ea porro qui cupiditate iste dolore porro rerum. Ut aperiam et facere. 
            Quos dicta perspiciatis et at expedita delectus enim. 
            Totam deserunt reiciendis provident ratione id optio harum cumque non.</p>
            </Container>
        </div>
    </Fragment>
  );
}

export default Participant;
