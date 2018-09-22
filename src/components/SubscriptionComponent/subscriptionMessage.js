import React from "react";
import { Container } from "reactstrap";

export default function SubscriptionMessage() {
  return (
    <Container fluid className="subscriptionInfoContainer">
      <img src='/assets/images/subscriptionInfoThumbnail.png' alt="info"/>
      <p> You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery. </p>
    </Container>
  )
}

