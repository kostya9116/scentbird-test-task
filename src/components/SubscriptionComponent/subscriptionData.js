import React, { Component } from "react";
import { Container } from "reactstrap";
import ShippingData from './shippingData';
import PaymentData from './paymentData';
import { Button } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";

import { validateCardNumber } from '../../lib/helpers'

export default class SubscriptionData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSameBillingAddress: true,
      firstName: '',
      lastName: '',
      shippingAddress: {
        street: '',
        apt: '',
        zip: '',
        state: '',
        city: '',
        country: '',
      },
      billingAddress: {
        street: '',
        apt: '',
        zip: '',
        state: '',
        city: '',
        country: '',
      },
      mobile: '',
      paymentData: {
        cardNumber: '',
        securityCode: '',
        month: '',
        year: '',
      },
      errors: {
        firstNameError: '',
        lastNameError: '',
        shippingAddressErrors: {
          streetError: '',
          zipError: '',
          stateError: '',
          cityError: '',
          countryError: '',
        },
        billingAddressErrors: {
          streetError: '',
          zipError: '',
          stateError: '',
          cityError: '',
          countryError: '',
        },
        paymentDataErrors: {
          cardNumberError: '',
          securityCodeError: '',
          monthError: '',
          yearError: '',
        }
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckClick = this.handleCheckClick.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange = (name, typeName) => event => {
    let value = event.target.value
    if ( !!typeName ) {
      name = this.state[ name ]
      name[ typeName ] = value
      if ( typeName === 'state' ) {
        name.city = ''
      }
      value = name
    }
    this.setState({ [ name ]: value });
  };

  handleCheckClick = name => event => {
    this.setState({ [ name ]: event.target.checked });
  };

  shippingValidation() {
    const { firstName, lastName, shippingAddress, billingAddress, isSameBillingAddress } = this.state,
      { street: shippingStreet, zip: shippingZip, state: shippingState, city: shippingCity, country: shippingCountry } = shippingAddress,
      { street: billingStreet, zip: billingZip, state: billingState, city: billingCity, country: billingCountry } = billingAddress
    let isValid = true,
      errors = {
        firstNameError: '',
        lastNameError: '',
        shippingAddressErrors: { streetError: '', zipError: '', stateError: '', cityError: '', countryError: '', },
        billingAddressErrors: { streetError: '', zipError: '', stateError: '', cityError: '', countryError: '', }
      }

    if ( !firstName ) {
      errors.firstNameError = 'This field is required'
      isValid = false
    }

    if ( !lastName ) {
      errors.lastNameError = 'This field is required'
      isValid = false
    }

    if ( !shippingStreet ) {
      errors.shippingAddressErrors.streetError = 'This field is required'
      isValid = false
    }

    if ( !shippingZip ) {
      errors.shippingAddressErrors.zipError = 'This field is required'
      isValid = false
    } else if ( !/^\d{5}(-\d{4})?(?!-)$/.test(shippingZip) ) {
      errors.shippingAddressErrors.zipError = 'Please type valid zip code.'
      isValid = false
    }

    if ( !shippingState ) {
      errors.shippingAddressErrors.stateError = 'This field is required'
      isValid = false
    }

    if ( !shippingCity ) {
      errors.shippingAddressErrors.cityError = 'This field is required'
      isValid = false
    }

    if ( !shippingCountry ) {
      errors.shippingAddressErrors.countryError = 'This field is required'
      isValid = false
    }

    if ( !isSameBillingAddress ) {
      if ( !billingStreet ) {
        errors.billingAddressErrors.streetError = 'This field is required'
        isValid = false
      }

      if ( !billingZip ) {
        errors.billingAddressErrors.zipError = 'This field is required'
        isValid = false
      } else if ( !/^\d{5}(-\d{4})?(?!-)$/.test(billingZip) ) {
        errors.billingAddressErrors.zipError = 'Please type valid zip code.'
        isValid = false
      }

      if ( !billingState ) {
        errors.billingAddressErrors.stateError = 'This field is required'
        isValid = false
      }

      if ( !billingCity ) {
        errors.billingAddressErrors.cityError = 'This field is required'
        isValid = false
      }

      if ( !billingCountry ) {
        errors.billingAddressErrors.countryError = 'This field is required'
        isValid = false
      }
    }

    return { isValid, errors }
  }

  paymentDataValidation() {
    const { paymentData: { cardNumber, securityCode, month, year } } = this.state;
    let isValid = true,
      errors = {
        paymentDataErrors: { cardNumberError: '', securityCodeError: '', monthError: '', yearError: '' }
      }

    if ( !cardNumber ) {
      errors.paymentDataErrors.cardNumberError = 'This field is required'
      isValid = false
    }
    else if ( !validateCardNumber(cardNumber) ) {
      errors.paymentDataErrors.cardNumberError = 'Please type valid credit card number'
      isValid = false
    }

    if ( !securityCode ) {
      errors.paymentDataErrors.securityCodeError = 'This field is required'
      isValid = false
    }

    if ( !month ) {
      errors.paymentDataErrors.monthError = 'This field is required'
      isValid = false
    }

    if ( !year ) {
      errors.paymentDataErrors.yearError = 'This field is required'
      isValid = false
    }

    return { isValid, errors }
  }

  validate() {
    const { isValid: isShippingValid, errors: shippingErrors } = this.shippingValidation();
    const { isValid: isPaymentDataValid, errors: paymentDataErrors } = this.paymentDataValidation();

    let errors = { ...shippingErrors, ...paymentDataErrors },
      isValid = isShippingValid && isPaymentDataValid;

    this.setState({ errors });

    if ( isValid ) {
      let { firstName, lastName, shippingAddress, billingAddress, isSameBillingAddress, paymentData, mobile } = this.state;
      billingAddress = isSameBillingAddress ? shippingAddress : billingAddress;
      this.props.subscribeUser({ firstName, lastName, shippingAddress, billingAddress, paymentData, mobile });
    }
  }

  render() {
    const { firstName, lastName, shippingAddress, billingAddress, mobile, errors, isSameBillingAddress, paymentData } = this.state
    return (
      <Container fluid className="px-0">
        <ShippingData firstName={firstName}
                      lastName={lastName}
                      isSameBillingAddress={isSameBillingAddress}
                      shippingAddress={shippingAddress}
                      billingAddress={billingAddress}
                      mobile={mobile}
                      errors={errors}
                      handleChange={this.handleChange}
                      handleCheckClick={this.handleCheckClick}/>
        <PaymentData paymentData={paymentData} errors={errors.paymentDataErrors} handleChange={this.handleChange}/>
        <div className="d-flex justify-content-end">
          <Button onClick={this.validate} className="submitButton">BUY NOW <ArrowForward className="ml-4"/></Button>
        </div>
      </Container>
    )
  }
}

