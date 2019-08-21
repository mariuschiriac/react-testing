import React from "react";
import useForm from "./useForm";
import { addCanzone } from "../../actions/index";
import { connect } from "react-redux";

const Form = ({ dispatch }) => {
  const { values, handleChange, handleSubmit } = useForm(login, {
    title: "",
    rating: ""
  });

  function login() {
    console.log("click funziona");
    dispatch(addCanzone(values.title));
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Titolo</label>
                <div className="control">
                  <input
                    className="input"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Valutazione</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="rating"
                    onChange={handleChange}
                    value={values.rating}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Aggiungi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Form);
