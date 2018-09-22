import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import SelectedProduct from './selectedProduct';
import SubscriptionMessage from './subscriptionMessage';
import SubscriptionData from './subscriptionData';
import SignUp from '../../containers/SignUpContainer';

import './index.css';

export default class SubscriptionComponent extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="contentContainer mt-3 d-flex px-0 flex-wrap flex-xl-row flex-lg-row flex-column">
        <Col xl={{ size: 4, offset: 0 }} lg={{ size: 4, offset: 0 }} md={{ size: 4, offset: 4 }} sm={{ size: 6, offset: 3 }} xs={{ size: 8, offset: 2 }} className="px-0">
          <SelectedProduct/>
          <SubscriptionMessage/>
        </Col>
        <Col xl={{ size: 8, offset: 0 }} lg={{ size: 8, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} xs={{ size: 12, offset: 1 }} className="px-5">
          <Row className="subscriptionFormRow subscriptionFormsTitleContainer">
            <h1>MONTH-TO-MONTH SUBSCRIPTION</h1>
            <p>Billed monthly. Renews automatically, cancel any time. Free shipping.</p>
          </Row>
          {!user &&
          <Row className="subscriptionFormRow">
            <SignUp/>
          </Row>
          }
          <Row className="subscriptionFormRow">
            <SubscriptionData subscribeUser={this.props.actions.subscribeUser}/>
          </Row>
        </Col>
      </div>
    )
  }
}
