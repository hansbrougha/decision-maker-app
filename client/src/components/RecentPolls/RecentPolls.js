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
  pending: {
    background: theme.palette.danger.main,
  },
  closed: {
    background: theme.palette.secondary.light,
  },
}));

export default function ControlledAccordions(theme) {
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
  function handleVote(event) {
    event.preventDefault();
    setOptions({
      ...options,
      [JSON.parse(event.target.name) + 1]: event.target.values,
    });

    axios.put("/api/polls", options);
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} gutterBottom>
        Recent Polls
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
                  [values.option4Title, values.option4Val],
                ]}
                options={{
                  backgroundColor: "#1D8B75",
                }}
                graph_id="PieChart"
                width={"100%"}
                height={"300px"}
                legend_toggle
              />
              <form>
                <FormControl component="fieldset">
                  {/* HARDCODED. NEED TO FIX */}
                  <FormLabel component="legend">{}</FormLabel>
                  <RadioGroup
                    onChange={handleChange}
                    aria-label={values.pollTitle}
                    name={values.pollTitle}
                    value={values.pollTitle}
                  >
                    <FormControlLabel
                      value={values.option1Title}
                      key={values.option1Title}
                      control={<Radio />}
                      label={values.option1Title}
                      name={JSON.stringify(values.option1Val)}
                    />
                    <FormControlLabel
                      value={values.option2Title}
                      key={values.option2Title}
                      control={<Radio />}
                      label={values.option2Title}
                      name={JSON.stringify(values.option2Val)}
                    />
                    <FormControlLabel
                      value={values.option3Title}
                      key={values.option3Title}
                      control={<Radio />}
                      label={values.option3Title}
                      name={JSON.stringify(values.option3Val)}
                    />
                    <FormControlLabel
                      value={values.option4Title}
                      key={values.option4Title}
                      control={<Radio />}
                      label={values.option4Title}
                      name={JSON.stringify(values.option4Val)}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleVote}
                    >
                      Submit
                    </Button>
                  </RadioGroup>
                </FormControl>
              </form>
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
