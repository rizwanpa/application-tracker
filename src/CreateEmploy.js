import React, { Component } from "react";
import axios from 'axios';

class CreateEmploy extends Component {
  state = {
    name: '',
    salary: null,
    age: null,
  };
 createEmp = () =>{
    console.log(this.state);
    let emp = this.state;
    axios.post(`http://dummy.restapiexample.com/api/v1/create`, { emp })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
              console.log(e.target.value)
            this.setState({ name: e.target.value });
          }}
        />
        <label>Salary</label>
        <input
          type="number"
          value={this.state.salary}
          onChange={(e) => {
            this.setState({ salary: e.target.value });
          }}
        />
        <label >Age</label>
        <input
          type="number"
          value={this.state.age}
          onChange={(e) => {
            this.setState({ age: e.target.value });
          }}
        />
        <button onClick={this.createEmp}>Submit</button>
      </div>
    );
  }
}

export default CreateEmploy;
