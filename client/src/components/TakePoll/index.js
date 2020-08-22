import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
const User = [
  {
    name: "John Doe",
    email: "john.doe@test.com",
    hashedPassword: "test",
    salt: "test",
    polls: [
      {
        pollId: "testId1",
        pollTitle: "Does This Work?",
        pollOptions: [
          { optionTitle: "YEA", optionVal: 1 },
          { optionTitle: "NAH", optionVal: 23 }
        ]
      },
      {
        pollId: "testId2",
        pollTitle: "What should I eat for dinner?",
        pollOptions: [
          { optionTitle: "Chipotle", optionVal: 39 },
          { optionTitle: "Salad", optionVal: 10 },
          { optionTitle: "Doritos and Mnt Dew", optionVal: 3 },
          { optionTitle: "All the above", optionVal: 73 }
        ]
      }
    ]
  },
  {
    name: "Jane Doe",
    email: "Jane.doe@test.com",
    hashedPassword: "janetest",
    salt: "janetest",
    polls: [
      {
        pollId: "testId3",
        pollTitle: "Should I sleep?",
        pollOptions: [
          { optionTitle: "YEA", optionVal: 4 },
          { optionTitle: "NAH", optionVal: 17 }
        ]
      },
      {
        pollId: "testId4",
        pollTitle: "What is your favorite color?",
        pollOptions: [
          { optionTitle: "Yellow", optionVal: 3 },
          { optionTitle: "Blue", optionVal: 19 },
          { optionTitle: "Purple", optionVal: 5 },
          { optionTitle: "Red", optionVal: 7 }
        ]
      }
    ]
  }
];
const styles = (theme) => ({
  card: {
    maxWidth: 700,
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
    fontSize: 24
  },
  media: {
    minHeight: 450
  }
});
function TakePoll() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log("submitted");
    //   PUT METHOD to increment pollVal by 1
  };

  return (
    <Card className={"card"}>
      <CardContent align="left">
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            {/* HARDCODED. NEED TO FIX */}
            <FormLabel component="legend">
              {User[1].polls[1].pollTitle}
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value={User[1].polls[1].pollOptions[0].optionTitle}
                control={<Radio />}
                label={User[1].polls[1].pollOptions[0].optionTitle}
              />
              <FormControlLabel
                value={User[1].polls[1].pollOptions[1].optionTitle}
                control={<Radio />}
                label={User[1].polls[1].pollOptions[1].optionTitle}
              />
              <FormControlLabel
                value={User[1].polls[1].pollOptions[2].optionTitle}
                control={<Radio />}
                label={User[1].polls[1].pollOptions[2].optionTitle}
              />
              <FormControlLabel
                value={User[1].polls[1].pollOptions[3].optionTitle}
                control={<Radio />}
                label={User[1].polls[1].pollOptions[3].optionTitle}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </RadioGroup>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(TakePoll);
