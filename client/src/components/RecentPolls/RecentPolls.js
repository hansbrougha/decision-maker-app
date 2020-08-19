import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../../utils/poll-api";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Chart from "react-google-charts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    flexBasis: "40%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  open: {
    background: theme.palette.primary.main,
  },
}));

const PollItem = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [poll, setPoll] = useState(props.poll);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [value, setValue] = React.useState("");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  //add POLL_id to api route
  function handleVote(event) {
    event.preventDefault();
    const newPoll = {
      ...poll,
      [event.target.name]: +poll[event.target.name] + 1,
    };
    setPoll(newPoll);

    axios.put("/api/polls/" + poll.pollId, newPoll);
  }
  return (
    <Accordion
      key={props.index}
      expanded={expanded === "showPoll"}
      onChange={handleChange("showPoll")}
      className={classes.open}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="pane13bh-content"
        id="pane13bh-header"
      >
        <h2 className={classes.heading}>{poll.pollTitle}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <FormControl component="fieldset">
            {/* HARDCODED. NEED TO FIX */}
            <FormLabel component="legend">{}</FormLabel>
            <RadioGroup
              onChange={handleRadioChange}
              aria-label={poll.pollTitle}
              name={poll.pollTitle}
              value={value}
            >
              <FormControlLabel
                value={poll.option1Title}
                key={poll.option1Title}
                control={<Radio />}
                label={poll.option1Title}
                name={"option1Val"}
              />
              <FormControlLabel
                value={poll.option2Title}
                key={poll.option2Title}
                control={<Radio />}
                label={poll.option2Title}
                name={"option2Val"}
              />
              <FormControlLabel
                value={poll.option3Title}
                key={poll.option3Title}
                control={<Radio />}
                label={poll.option3Title}
                name={"option3Val"}
              />
              <FormControlLabel
                value={poll.option4Title}
                key={poll.option4Title}
                control={<Radio />}
                label={poll.option4Title}
                name={"option4Val"}
              />
              <Button type="submit" variant="contained" onClick={handleVote}>
                Submit
              </Button>
            </RadioGroup>
          </FormControl>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default function ControlledAccordions(theme) {
  const classes = useStyles();

  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadOptions();
  }, []);

  function loadOptions() {
    API.getOptions()
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }

  console.log(options);
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} gutterBottom>
        Recent Polls
      </Typography>
      {options.length ? (
        options.map((poll, index) => <PollItem poll={poll} index={index} />)
      ) : (
        <h1>
          NO POSTS YET.....<a href="/create">MAKE ONE!</a>
        </h1>
      )}
    </div>
  );
}
