import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POLL, UPDATE_POLL, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function PollsList() {
  const [state, dispatch] = useStoreContext();

  const removePoll = (id) => {
    API.deletePoll(id)
      .then(() => {
        dispatch({
          type: REMOVE_POLL,
          _id: id
        });
      })
      .catch((err) => console.log(err));
  };

  const getPolls = () => {
    dispatch({ type: LOADING });
    API.getPolls()
      .then((results) => {
        dispatch({
          type: UPDATE_POLLS,
          polls: results.data
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPolls();
  }, []);

  return (
    <div>
      <h1>All Polls</h1>
      <h3 className="mb-5 mt-5">Click on a poll to view</h3>
      {state.polls.length ? (
        <List>
          {state.polls.map((poll) => (
            <ListItem key={poll._id}>
              <Link to={"/poll/" + poll._id}>
                <strong>
                  {poll.title} by {poll.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removePoll(poll._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any polls yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}

export default PollsList;
