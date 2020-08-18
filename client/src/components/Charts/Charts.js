import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../../utils/poll-api";
import axios from "axios";
import Chart from "react-google-charts";

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
  }
}));

export default function ControlledAccordions(theme) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [options, setOptions] = useState({
    pollTitle: ""
  });

  useEffect(() => {
    loadOptions();
  }, []);

  function loadOptions() {
    API.getOptions()
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }
  function handleVote(event) {
    event.preventDefault();
    setOptions({
      ...options,
      [JSON.parse(event.target.name) + 1]: event.target.values
    });

    axios.put("/api/polls", options);
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} gutterBottom>
        Recent Poll Results
      </Typography>
      {options.length ? (
        options.map((values) => (
          <Accordion
            key={values.pollTitle}
            expanded={expanded === "showPoll"}
            onChange={handleChange("showPoll")}
            className={classes.open}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="pane13bh-content"
              id="pane13bh-header"
            >
              <h2 className={classes.heading}>{values.pollTitle}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <Chart
                chartType="PieChart"
                data={[
                  [values.pollTitle, "votes"],
                  [values.option1Title, values.option1Val],
                  [values.option2Title, values.option2Val],
                  [values.option3Title, values.option3Val],
                  [values.option4Title, values.option4Val]
                ]}
                options={{
                  backgroundColor: "#1D8B75"
                }}
                graph_id="PieChart"
                width={"100%"}
                height={"300px"}
                legend_toggle
              />
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <h1>
          NO POSTS YET.....<a href="/create">MAKE ONE!</a>
        </h1>
      )}
    </div>
  );
}
