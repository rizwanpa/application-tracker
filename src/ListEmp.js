import React, { Component } from "react";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

class ListEmp extends Component {
  state = {
    empDetails: [],
  };

  componentDidMount() {
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        const persons = res.data;
        console.log("call--", persons);
        this.setState({ empDetails: persons.data });
      })
      .catch((err) => {
        //this.setState({empDetails: []})
      });
  }
  edit(id) {
    //this.props.edt(poll.id);
    this.props.history.push(`/create-emp/${id}`);
  }
  render() {
    let { empDetails = [] } = this.state;
    console.log("render--", empDetails);
    return (
      <div>
        <div>
          {empDetails.map((person) => {
            return (
              <div key={`${person.id}-${person.age}`}>
                <label>Name:</label>
                <span>{person.employee_name}</span>
                <label>Salary:</label>
                <span>{person.employee_salary}</span>
                <label>Age:</label>
                <span>{person.employee_age}</span>
                <span>
                  <Button
                    onClick={() => this.edit(person.id)}
                    shape="circle"
                    icon={<EditOutlined />}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListEmp;
