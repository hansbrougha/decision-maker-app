import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../../utils/poll-api";
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
/////

const ChartItem = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [poll, setPoll] = useState(props.poll);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

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
        <Chart
          className="chart"
          width={"100%"}
          height={"250px"}
          chartType="PieChart"
          loader={
            <h2>
              <em>Loading results!</em>
            </h2>
          }
          data={[
            [poll.pollTitle, "Total votes"],
            [poll.option1Title, poll.option1Val],
            [poll.option2Title, poll.option2Val],
            [poll.option3Title, poll.option3Val],
            [poll.option4Title, poll.option4Val],
          ]}
          options={{
            titleTextStyle: { color: "#FFF" },
            legendTextStyle: { color: "#FFF", fontSize: 20 },
            backgroundColor: "",
            is3D: true,
          }}
        />
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
        options.map((poll, index) => (
          <ChartItem poll={poll} index={index} key={poll.pollTitle} />
        ))
      ) : (
        <h1>
          NO POSTS YET.....<a href="/create">MAKE ONE!</a>
        </h1>
      )}
    </div>
  );
}
