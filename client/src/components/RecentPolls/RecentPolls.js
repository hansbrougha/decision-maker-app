import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PollChart from "../PollChart/PollChart";
import Box from "@material-ui/core/Box";
// import TakePoll from "../TakePoll/TakePoll";
import PollModal from "../PollModal/PollModal";
import ChartModal from "../ChartModal/ChartModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    flexBasis: "40%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  open: {
    background: theme.palette.primary.main
  },
  pending: {
    background: theme.palette.danger.main
  },
  closed: {
    background: theme.palette.secondary.light
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} gutterBottom>
        Recent Polls
      </Typography>
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
          <Typography className={classes.heading}>State: Open</Typography>
          <Typography className={classes.heading}>GET Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PollModal />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "showResults"}
        onChange={handleChange("showResults")}
        className={classes.closed}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>State: Closed</Typography>
          <Typography className={classes.heading}>GET Result</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PollModal />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "showStatus"}
        onChange={handleChange("showStatus")}
        className={classes.pending}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>State: Pending</Typography>
          <Typography className={classes.heading}>GET Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Decision Title or Question
            <br />
            Decision Graph with Key
            <br />
            Your vote
            <br />
            <br />
            GRAPH OR CHART. GRAPH OR CHART. GRAPH OR CHART. GRAPH OR CHART.
            GRAPH OR CHART. GRAPH OR CHART. GRAPH OR CHART. GRAPH OR CHART.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
