import React, { Component } from "react";
import { Container } from "reactstrap";
import { FormControl, FormHelperText, MenuItem, Select, TextField, Tooltip } from "@material-ui/core";
import Help from "@material-ui/icons/Help";

export default class PaymentData extends Component {
  renderMonthOptions() {
    const months = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
    return months.map(month => <MenuItem key={month} value={month}>{month}</MenuItem>)
  }

  renderYearOptions() {
    let years = []
    for ( let i = new Date().getFullYear(); i <= new Date().getFullYear() + 10; i++ ) {
      years.unshift(i)
    }
    return years.map(year => <MenuItem key={year} value={year}>{year}</MenuItem>)
  }

  render() {
    const { paymentData: { cardNumber, securityCode, month, year }, errors: { cardNumberError, securityCodeError, monthError, yearError } } = this.props
    return (
      <Container fluid className="px-0 mt-4">
        <p className="formTitle">Secure credit card payment</p>
        <div className="subscriptionPaymentFormFieldsContainer">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/assets/images/protectedPayment.png" alt="Protected payment"/>
              <p className="protectedPaymentMessage">128-BIT ENCRYPTION. YOU'RE SAFE</p>
            </div>
            <img src="/assets/images/paymentCardTypes.jpg" alt="Card Types"/>
          </div>
          <FormControl className="w-60" error={!!cardNumberError}>
            <TextField
              id="subscribePaymentCardNumber"
              className="inputField mr-2 mt-3 mb-1"
              label="Credit card number"
              value={cardNumber}
              onChange={this.props.handleChange('paymentData', 'cardNumber')}
              variant="outlined"
              error={!!cardNumberError}
            />
            <FormHelperText className="mt-0">{cardNumberError}</FormHelperText>
          </FormControl>
          <FormControl className="w-33" error={!!securityCodeError}>
            <TextField
              id="subscribePaymentSecurityCode"
              className="inputField ml-2 mt-3 mb-1"
              label="Security code"
              value={securityCode}
              onChange={this.props.handleChange('paymentData', 'securityCode')}
              variant="outlined"
              error={!!securityCodeError}
            />
            <FormHelperText className="mt-0 ml-2">{cardNumberError}</FormHelperText>
          </FormControl>
          <Tooltip title="The card security code is located on the back of credit cards and is typically a separate group of three digits to the right of the signature strip." placement="top-start">
            <Help className="ml-2"/>
          </Tooltip>
          <FormControl className="w-25" error={!!monthError}>
            <Select
              id="subscribePaymentMonth"
              className="selectField mr-2 mt-3 mb-1"
              value={month}
              onChange={this.props.handleChange('paymentData', 'month')}
              name="subscribePaymentMonth"
              error={!!monthError}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Month
              </MenuItem>
              {this.renderMonthOptions()}
            </Select>
            <FormHelperText className="mt-0">{monthError}</FormHelperText>
          </FormControl>
          <FormControl className="w-25" error={!!yearError}>
            <Select
              id="subscribePaymentYear"
              className="selectField ml-2 mt-3 mb-1"
              value={year}
              onChange={this.props.handleChange('paymentData', 'year')}
              name="subscribePaymentYear"
              error={!!yearError}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Year
              </MenuItem>
              {this.renderYearOptions()}
            </Select>
            <FormHelperText className="mt-0 ml-2">{yearError}</FormHelperText>
          </FormControl>
        </div>
      </Container>
    )
  }
}

