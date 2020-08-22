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
  // open: {
  //   background: theme.palette.primary.main
  // },
  // pending: {
  //   background: theme.palette.danger.main
  // },
  // closed: {
  //   background: theme.palette.secondary.light
  // }
}));

const PollItem = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [poll, setPoll] = useState(props.poll);
  const [selected, setSelected] = useState();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleRadioChange = (event) => {
    setSelected(event.target.name);
  };

  const classes = useStyles();
  function handleVote(event, data) {
    const votes = poll[selected]++;
    const newPoll = {
      ...poll,
      [event.target.name]: votes,
    };
    setPoll(newPoll);

    axios.put("/api/polls/" + poll._id, newPoll);
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

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} gutterBottom>
        Recent Polls
      </Typography>
      {options.length ? (
        options.map((poll, index) => (
          <PollItem poll={poll} index={index} key={poll.pollTitle} />
        ))
      ) : (
        <h1>
          NO POSTS YET.....<a href="/create">MAKE ONE!</a>
        </h1>
      )}
    </div>
  );
}
