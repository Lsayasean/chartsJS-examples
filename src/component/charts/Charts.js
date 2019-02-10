import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Bar, Line} from 'react-chartjs-2'

class Charts extends Component {
    constructor(props){
        super(props)

        this.state = {
            months: []
        }
    }

    componentDidMount(){
        this.setState({months: this.props.monthly})
    }

    render() {
        const {months} = this.state
        const graphData ={
            labels: months.map(item => item.month),
            dataSets: [
                {
                    data: months.map(val => val.count),
                    backgroundColor: ['#734397', '#DA1F26', '#F9E04F', '#223F8D', '#71BC45'],
                    hoverBackgroundColor: ['#734397', '#DA1F26', '#F9E04F', '#223F8D', '#71BC45'],
                    label: 'Test Chart'
                }
            ]
        } 
        return (
            <div>
                <h1>Welcome to chartJS work shop</h1>
                <div>
                    <Bar
                    data={graphData}
                    height={100}
                    width={50}
                    options={{
                        maintainAspectRatio: false
                      }}
                    />
                </div>
            </div>
        );
    }
}

function stateToProps(state){
    return {
        monthly: state.monthly
    }
}

export default connect(stateToProps)(Charts);