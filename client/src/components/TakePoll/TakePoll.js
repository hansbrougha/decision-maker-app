import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = (theme) => ({
  card: {
    maxWidth: 700,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
    fontSize: 24,
  },
  media: {
    minHeight: 450,
  },
});
function TakePoll() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card className={"card"}>
      <CardContent align="left">
        <FormControl component="fieldset">
          <FormLabel component="legend">{pollTitle}</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(TakePoll);
