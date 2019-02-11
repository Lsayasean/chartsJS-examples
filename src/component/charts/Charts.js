import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import { january } from "./../../dux/reducer";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      months: [],
      jan: 0,
      feb: 0,
      mar: 0
    };
  }

  componentDidMount() {
    this.setState({ months: this.props.monthly });
  }

  updateMonths = () => {
    const num = parseInt(this.state.jan);
    this.props.january(num);
    this.setState({ months: this.props.monthly });
  };
  render() {
    const { months } = this.state;

    console.log(this.props.monthly);

    const graphData = {
      labels: months.map(item => item.month),
      datasets: [
        {
          data: months.map(ele => ele.count),
          backgroundColor: [
            "#734397",
            "#DA1F26",
            "#F9E04F",
            "#223F8D",
            "#71BC45"
          ],
          hoverBackgroundColor: [
            "#734397",
            "#DA1F26",
            "#F9E04F",
            "#223F8D",
            "#71BC45"
          ],
          label: "Test Chart"
        }
      ]
    };
    return (
      <div>
        <h1>Welcome to chartJS work shop</h1>
        <div>
          <Bar
            data={graphData}
            height={400}
            width={10}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <div>
          <h1>Manipulate the data</h1>
          <div>
            <label>Jan: </label>
            <input
              type="number"
              min="0"
              value={this.state.jan}
              onChange={e =>
                this.setState({
                  jan: e.target.value
                })
              }
            />
            <button onClick={() => this.updateMonths()}>
              Update for January
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    monthly: state.monthly
  };
}

export default connect(
  stateToProps,
  { january }
)(Charts);
