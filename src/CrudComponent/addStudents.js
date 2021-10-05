import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

export default class addStudents extends Component {
  render() {
    return (
      
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewStudentModal}
        >
          Add New
        </Button>
        <Modal
          isOpen={this.props.newStudentModal}
          toggle={this.props.toggleNewStudentModal}
        >
          <ModalHeader toggle={this.props.toggleNewStudentModal}>
        Add New
          </ModalHeader>
          <ModalBody>
            <FormGroup>
   
              <Label for="name"> Name</Label>
              {/* <select  name="name"  className="form-control"   id="name" value={this.props.newStudentData.name} 
               onChange={this.props.onChangeAddStudentHandler}>
              <option value="A">Apple</option>
           <option value="B">Banana</option>
            <option value="C">Cranberry</option>
              </select> */}
              <Input
                id="name"
                name="name"
                value={this.props.newStudentData.name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value">Value</Label>
              <Input
                id="value"
                name="value"
                value={this.props.newStudentData.value}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addStudent()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewStudentModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
