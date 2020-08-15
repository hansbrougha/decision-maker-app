// import React, { useState, useEffect } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import API from "../../utils/poll-api";

// const styles = (theme) => ({
//   card: {
//     maxWidth: 700,
//     margin: "auto",
//     marginTop: theme.spacing(5),
//   },
//   title: {
//     padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
//       2
//     )}px`,
//     color: theme.palette.text.secondary,
//     fontSize: 24,
//   },
//   media: {
//     minHeight: 450,
//   },
// });
// function TakePoll() {
//   // const state = ;
//   const [options, setOptions] = useState({
//     pollTitle: "",
//     option1Title: "",
//     option2Title: "",
//     option3Title: "",
//     option4Title: "",
//   });

//   useEffect(() => {
//     loadOptions();
//   }, []);

//   function loadOptions() {
//     API.getOptions()
//       .then((res) => setOptions(res.data))
//       .catch((err) => console.log(err));
//   }
//   console.log(options);

//   // const handleChange = (event) => {
//   //   setValue(event.target.value);
//   // };
//   const handleSubmit = (event) => {
//     console.log("submitted");
//     axios.put("/api/polls").then((res) => console.log(res.data));

//     //   PUT METHOD to increment pollVal by 1
//   };

//   return (
//     <div>
//       {options.length ? (
//         options.map((options) => (
//           <Card className={"card"}>
//             <CardContent align="left">
//               <form onSubmit={handleSubmit}>
//                 <FormControl component="fieldset">
//                   {/* HARDCODED. NEED TO FIX */}
//                   <FormLabel component="legend">{}</FormLabel>
//                   <RadioGroup
//                     aria-label={options.pollTitle}
//                     name={options.pollTitle}
//                     value={options.pollTitle}
//                   >
//                     <h1>{options.pollTitle}</h1>
//                     <FormControlLabel
//                       value={options.option1Title}
//                       control={<Radio />}
//                       label={options.option1Title}
//                     />
//                     <FormControlLabel
//                       value={options.option2Title}
//                       control={<Radio />}
//                       label={options.option2Title}
//                     />
//                     <FormControlLabel
//                       value={options.option3Title}
//                       control={<Radio />}
//                       label={options.option3Title}
//                     />
//                     <FormControlLabel
//                       value={options.option4Title}
//                       control={<Radio />}
//                       label={options.option4Title}
//                     />
//                     <Button type="submit" variant="contained" color="primary">
//                       Submit
//                     </Button>
//                   </RadioGroup>
//                 </FormControl>
//               </form>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <h1>TOTALLY NOT AN ERROR.....</h1>
//       )}
//     </div>
//   );
// }

// export default withStyles(styles)(TakePoll);
