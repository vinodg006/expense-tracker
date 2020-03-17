import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import walletImg from "../../../../common/images/wallet-icon.png";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import {
  selectWalletBalance,
  selectExpenseCategory,
  selectIncomeCategory,
  selectCurrency
} from "../../../selectors/dashboardSelector";

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
    modal: false,
    dateValue: new Date().toISOString(),
    formattedDateValue: null,
    isCategoryOpen: false,
    category: "Select Category",
    subCategory: "Select Subcategory",
    isSubCategoryOpen: false,
    transValue: 0,
    transNote: ""
  };

  toggleAddTransactioModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleCategoryDropDown = () => {
    this.setState({ isCategoryOpen: !this.state.isCategoryOpen });
  };

  toggleSubCategoryDropDown = () => {
    this.setState({ isSubCategoryOpen: !this.state.isSubCategoryOpen });
  };

  handleDateChange = (value, formattedValue) => {
    this.setState({
      dateValue: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedDateValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  };

  renderSubCategory = () => {
    const { expenseArr, incomeArr } = this.props;
    const { category } = this.state;
    let retval;
    if (category === "Expense") {
      retval = expenseArr.map(val => (
        <DropdownItem
          onClick={() =>
            this.setState({
              subCategory: val
            })
          }
        >
          {val}
        </DropdownItem>
      ));
    } else if (category === "Income") {
      retval = incomeArr.map(val => (
        <DropdownItem
          onClick={() =>
            this.setState({
              subCategory: val
            })
          }
        >
          {val}
        </DropdownItem>
      ));
    }
    return retval;
  };

  renderAddTransactioModal = () => {
    const {
      modal,
      isCategoryOpen,
      isSubCategoryOpen,
      category,
      subCategory,
      transValue,
      transNote
    } = this.state;
    console.log(this.state);
    return (
      <Modal isOpen={modal} backdrop={true}>
        <ModalBody>
          <b>Add Transaction</b>
          <hr />
          <FormGroup>
            <Label>Select Date</Label>
            <DatePicker
              id="example-datepicker"
              value={this.state.dateValue}
              onChange={(v, f) => this.handleDateChange(v, f)}
            />
            <br />
            <Row>
              <Col>
                <Dropdown
                  isOpen={isCategoryOpen}
                  toggle={this.toggleCategoryDropDown}
                >
                  <DropdownToggle caret color="success">
                    {category}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() =>
                        this.setState({
                          category: "Expense",
                          subCategory: "Select Subcategory"
                        })
                      }
                    >
                      Expense
                    </DropdownItem>
                    <DropdownItem
                      onClick={() =>
                        this.setState({
                          category: "Income",
                          subCategory: "Select Subcategory"
                        })
                      }
                    >
                      Income
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown
                  isOpen={isSubCategoryOpen}
                  toggle={this.toggleSubCategoryDropDown}
                >
                  <DropdownToggle caret color="success">
                    {subCategory}
                  </DropdownToggle>
                  <DropdownMenu>{this.renderSubCategory()}</DropdownMenu>
                </Dropdown>
              </Col>
            </Row>

            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                placeholder="Amount"
                min={0}
                type="number"
                step="1"
                onChange={e => this.setState({ transValue: e.target.value })}
                value={transValue}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">Add Note</InputGroupAddon>
              <Input
                placeholder="Optional"
                min={0}
                type="text"
                onChange={e => this.setState({ transNote: e.target.value })}
                value={transNote}
              />
            </InputGroup>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleAddTransactioModal}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={this.toggleAddTransactioModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  render() {
    const { currency, balance } = this.props;
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
            {this.renderAddTransactioModal()}
          </ElementStyle>
          <ElementStyle className="col-sm">
            <WalletIcon src={walletImg} />
            <span style={{ margin: "10px 0 0 13px", fontWeight: "bold" }}>
              {currency} {balance}
            </span>
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

const mapStateToProps = globalState => {
  return {
    balance: selectWalletBalance(globalState),
    incomeArr: selectIncomeCategory(globalState),
    expenseArr: selectExpenseCategory(globalState),
    currency: selectCurrency(globalState)
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
