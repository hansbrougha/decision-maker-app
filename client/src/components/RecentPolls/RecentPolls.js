import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PollModal from "../PollModal/PollModal";
import API from "../../utils/poll-api";

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
  pending: {
    background: theme.palette.danger.main,
  },
  closed: {
    background: theme.palette.secondary.light,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [options, setOptions] = useState({
    pollTitle: "",
  });

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
        options.map((options) => (
          <Accordion
            expanded={expanded === "showPoll"}
            onChange={handleChange("showPoll")}
            className={classes.open}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="pane13bh-content"
              id="pane13bh-header"
            >
              <Typography className={classes.heading}>
                {options.pollTitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PollModal />
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <h1>NO POSTS YET</h1>
      )}
    </div>
  );
}
