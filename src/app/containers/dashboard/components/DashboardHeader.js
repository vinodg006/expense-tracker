import React from "react";
import styled from "@emotion/styled";
import walletImg from "../../../../common/images/wallet-icon.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Wrapper = styled.div`
  background-color: #fff;
  height: 64px;
  width: 100%;
`;

const WalletIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const ElementStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class DashboardHeader extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    const { modal } = this.state;
    return (
      <Wrapper>
        <Wrapper className="row">
          <ElementStyle className="col-sm">
            {" "}
            <button
              type="button"
              className="btn btn-success"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                this.setState({ modal: true });
              }}
            >
              Add Transaction
            </button>
            <Modal isOpen={modal} backdrop={true}>
              <ModalBody>
                Add Transaction
                <hr />
                Vidnol
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  Save
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ElementStyle>
          <ElementStyle className="col-sm">
            <WalletIcon src={walletImg} />
          </ElementStyle>
          <ElementStyle className="col-sm">
            <button
              type="button"
              className="btn btn-success"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i className="fa fa-search" style={{ margin: "0 15px 0 0" }} />{" "}
              Search Transaction
            </button>
          </ElementStyle>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default DashboardHeader;
