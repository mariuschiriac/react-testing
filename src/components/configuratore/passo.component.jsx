import React from 'react';
import { connect } from 'react-redux';
import { nextPasso } from '../../actions';
import { bindActionCreators } from 'redux';

const Passo = props => {
  console.log(props);

  function handleClick() {
    console.log('click');
    nextPasso(nextPasso);
  }

  return (
    <>
      {props.opzioni.map((value, key) => {
        return (
          <li key={key} onClick={handleClick}>
            {value}
          </li>
        );
      })}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextPasso }, dispatch);
}

export default connect(mapDispatchToProps)(Passo);
