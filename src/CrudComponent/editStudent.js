
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

export default class editStudent extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editStudentModal}
          toggle={this.props.toggleEditStudentModal}
        >
          <ModalHeader toggle={this.props.toggleEditStudentModal}>
            Update Student
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.editStudentData.name}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value">Last Name</Label>
              <Input
                id="value"
                name="value"
                value={this.props.editStudentData.value}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateStudent}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditStudentModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
