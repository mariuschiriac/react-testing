import React from 'react';
import { connect } from 'react-redux';
import { nextPasso } from '../../actions';

const Passo = ({ opzioni, dispatch }) => {
  function handleClick() {
    dispatch(nextPasso());
  }

  return (
    <ul>
      {opzioni.map((value, key) => {
        return (
          <li key={key} onClick={handleClick}>
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default connect()(Passo);

// class PassoClass extends React.Component {
//   componentDidUpdate() {
//     console.log(this.props.opzioni);
//   }

//   render() {
//     return (
//       <>
//         {this.props.opzioni.map((value, key) => {
//           return (
//             <li key={key} onClick={() => this.props.nextPasso()}>
//               {value}
//             </li>
//           );
//         })}
//       </>
//     );
//   }
// }

// const mapDispatchToProps = { nextPasso };

// export default connect(
//   null,
//   mapDispatchToProps
// )(PassoClass);
