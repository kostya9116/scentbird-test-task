import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';

export default class SelectedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditChecked: false
    }
    this.handleCheckClick = this.handleCheckClick.bind(this)
  }

  handleCheckClick = name => event => {
    this.setState({ [ name ]: event.target.checked });
  };

  render() {
    const data = {
      name: 'perfumeProduct',
      monthlySubscription: 14.95,
      shipping: 0,
      tax: 2.35,
      discount: 5,
      credit: 50,
      total: 25
    }
    const { name, monthlySubscription, shipping, tax, discount, credit, total } = data
    const { creditChecked } = this.state
    return (
      <Container fluid className="selectedProductContainer">
        <img src={`/assets/images/products/${name}.jpg`} alt="product"/>
        <Col className="calculationsContainer">
          <Row>
            <p>Monthly subscription</p>
            <p>${monthlySubscription}</p>
          </Row>
          <Row>
            <p>Shopping</p>
            <p>{!!shipping ? '$' + shipping : 'FREE'}</p>
          </Row>
          <Row>
            <p>Tax</p>
            <p>${tax}</p>
          </Row>
          <Row>
            <p>Discount</p>
            <p className="text-pink">-${discount}</p>
          </Row>
          <Row>
            <p>Credit (Balance $100)</p>
            <div className="d-flex align-items-center">
              <p className="mb-0 mr-2">${credit}</p>
              <Checkbox
                checked={creditChecked}
                onChange={this.handleCheckClick('creditChecked')}
                value="creditChecked"
                className="p-0 scentbirdCheckbox"
              />
            </div>
          </Row>
        </Col>
        <Col className="calculationsTotalContainer">
          <p>TOTAL</p>
          <p>${total.toFixed(2)}</p>
        </Col>
        <Col className="px-0 my-4">
          <p className="couponCodeMessage">Have a <a href="/" className="text-pink">coupon code?</a></p>
        </Col>
      </Container>
    )
  }
}
