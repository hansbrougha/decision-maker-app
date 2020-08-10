import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

// Data should be pulled from our backend

const data = [

  { optionTitle: "Someone", optionVal: 6 },
  { optionTitle: "Joe", optionVal: 6 },
  { optionTitle: "Jacob", optionVal: 6 },
  { optionTitle: "Andrew", optionVal: 6 },
  { optionTitle: "Angel", optionVal: 6 },

];

export default class PollChart extends React.PureComponent {
    constructor(props) {
        super(props);


    this.state = {
      data,
    };
  }

    render() {
        const { data: chartData } = this.state;


    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries
            valueField="optionVal"
            argumentField="optionTitle"
            title="optionTitle"
          />
          <Title text="Poll Results" />
          <Legend />
          <Animation />
        </Chart>
      </Paper>
    );
  }

}
