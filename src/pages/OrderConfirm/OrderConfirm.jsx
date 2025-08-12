import React from "react";
import { Container, Button, Grid, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const OrderConfirm = () => {
  const location = useLocation();
  const order = location.state;

  return (
    <Container maxWidth="sm">
      <OrderDetails order={order} />
      <OrderForm order={order} />
    </Container>
  );
};

export default OrderConfirm;
