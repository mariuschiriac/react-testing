import React from 'react';
import { connect } from 'react-redux';
import { nextPasso, prevPasso } from '../../actions';

const Passo = ({ domanda, dispatch }) => {
  function handleClick(value, titolo) {
    console.log(value);
    dispatch(nextPasso(value, titolo));
  }

  return (
    <>
      <h1>{domanda.titolo}</h1>
      <ul>
        {domanda.opzioni.map((value, key) => {
          return (
            <>
              <li key={key} onClick={() => handleClick(value, domanda.titolo)}>
                {value}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

// const mapStateToProps = state => ({

// });

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
