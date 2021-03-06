import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";

class MyModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide({ msg: "Cross Icon Clicked!" })}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.company}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {this.props.data.map((item) => (
                <li key={item.id}>
                  Name: {item.name} | Address: {item.address}
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.props.onClick({ msg: "Modal Closed!" })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
