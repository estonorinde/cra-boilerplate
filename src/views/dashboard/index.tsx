import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import compose from 'lodash/fp/compose';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { increment, decrement, resetCount, testSaga } from 'src/redux/example';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

interface ActionsProps {
  increment: () => void;
  decrement: () => void;
  resetCount: () => void;
  testSaga: () => void;
}

interface StatePros {
  example: number;
}

const Dashboard: React.FC<ActionsProps & StatePros> = ({
  increment,
  decrement,
  resetCount,
  testSaga,
  example,
}: ActionsProps & StatePros) => (
  <>
    <Title>Dashboard {example}</Title>
    <Button variant="success" onClick={increment}>
      Increment
    </Button>
    <Button variant="warning" onClick={decrement}>
      Decrement
    </Button>
    <Button variant="danger" onClick={resetCount}>
      Reset Count
    </Button>
    <Button variant="danger" onClick={testSaga}>
      Reset From Sagas
    </Button>
    <Link to="/login">
      <Button>Link to Login</Button>
    </Link>
  </>
);

export const mapDispatchToProps = (dispatch: Dispatch): ActionsProps => ({
  increment: (): void => {
    dispatch(increment());
  },
  decrement: (): void => {
    dispatch(decrement());
  },
  resetCount: (): void => {
    dispatch(resetCount());
  },
  testSaga: (): void => {
    dispatch(testSaga());
  },
});

export const mapStateToProps = (state: StatePros): StatePros => ({
  example: state.example,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard);
