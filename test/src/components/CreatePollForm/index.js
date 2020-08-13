import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POLL, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePollForm() {
  // const titleRef = useRef();
  // const bodyRef = useRef();
  // const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePoll({
      // title: titleRef.current.value,
      // body: bodyRef.current.value,
      // author: authorRef.current.value
    })
      .then((result) => {
        dispatch({
          type: ADD_POLL,
          poll: result.data
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  //CREATE POLL CONTAINER GOES HERE -- CREATE POLL CONTAINER GOES HERE------------->>>
  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a poll</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-5"
          required
          ref={bodyRef}
          placeholder="Body"
        />
        <input
          className="form-control mb-5"
          ref={authorRef}
          placeholder="Screen name"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Poll
        </button>
      </form>
    </div>
  );
}

export default CreatePollForm;
