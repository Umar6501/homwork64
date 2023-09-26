import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./Table.css";

export class Hero extends Component {
  render() {
    return (
      <Table striped hover className="table">
        <thead className="tt">
          <tr className="ff">
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Group</th>
            <th>Does work?</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    );
  }
}

export default Hero;
