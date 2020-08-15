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
              <h2 className={classes.heading}>{options.pollTitle}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={""}>
                <FormControl component="fieldset">
                  {/* HARDCODED. NEED TO FIX */}
                  <FormLabel component="legend">{}</FormLabel>
                  <RadioGroup
                    aria-label={options.pollTitle}
                    name={options.pollTitle}
                    value={options.pollTitle}
                  >
                    {/* <h1>{options.pollTitle}</h1> */}
                    <FormControlLabel
                      value={options.option1Title}
                      control={<Radio />}
                      label={options.option1Title}
                    />
                    <FormControlLabel
                      value={options.option2Title}
                      control={<Radio />}
                      label={options.option2Title}
                    />
                    <FormControlLabel
                      value={options.option3Title}
                      control={<Radio />}
                      label={options.option3Title}
                    />
                    <FormControlLabel
                      value={options.option4Title}
                      control={<Radio />}
                      label={options.option4Title}
                    />
                    <Button type="submit" variant="contained" color="#999">
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
