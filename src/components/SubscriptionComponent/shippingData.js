import React, { Component } from "react";
import { Container } from "reactstrap";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

import AddressForm from './addressForm'

export default class ShippingData extends Component {
  render() {
    const { isSameBillingAddress, firstName, lastName, shippingAddress, billingAddress, mobile, errors: { firstNameError, lastNameError, shippingAddressErrors, billingAddressErrors } } = this.props
    return (
      <Container fluid className="px-0">
        <p className="formTitle">Shipping address</p>
        <FormControl className="w-50" error={!!firstNameError}>
          <TextField
            id="shippingFirstName"
            className="inputField mr-2 mt-3 mb-1"
            label="First Name"
            value={firstName}
            onChange={this.props.handleChange('firstName')}
            variant="outlined"
            error={!!firstNameError}
          />
          <FormHelperText className="mt-0">{firstNameError}</FormHelperText>
        </FormControl>
        <FormControl className="w-50" error={!!lastNameError}>
          <TextField
            id="shippingLastName"
            className="inputField ml-2 mt-3 mb-1"
            label="Last Name"
            value={lastName}
            onChange={this.props.handleChange('lastName')}
            variant="outlined"
            error={!!lastNameError}
          />
          <FormHelperText className="mt-0">{lastNameError}</FormHelperText>
        </FormControl>
        <AddressForm prefix="shipping" data={shippingAddress} handleChange={this.props.handleChange} errors={shippingAddressErrors}/>
        <FormControl className="w-50">
          <TextField
            id="shippingMobile"
            className="inputField mr-2 mt-3 mb-1"
            label="Mobile number (Optional)"
            value={mobile}
            onChange={this.props.handleChange('mobile')}
            variant="outlined"
          />
        </FormControl>
        <p className="d-inline">We may send you special discounts and offers</p>
        <div className="d-flex align-items-center mt-3">
          <Checkbox
            checked={isSameBillingAddress}
            onChange={this.props.handleCheckClick('isSameBillingAddress')}
            value="isSameBillingAddress"
            className="p-0 scentbirdCheckbox"
          />
          <p className="mb-0">Use this address as my billing address</p>
        </div>
        {!isSameBillingAddress &&
        <div className="mt-3">
          <p className="formTitle">Billing address</p>
          <AddressForm prefix="billing" data={billingAddress} handleChange={this.props.handleChange} errors={billingAddressErrors}/>
        </div>
        }
      </Container>
    )
  }
}

