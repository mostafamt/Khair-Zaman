import React from "react";
import { Container, TextField, Button, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./orderDetails.module.scss";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/thank-you", { state: order, name, phone, address });
  };

  return (
    <Container maxWidth="sm">
      <div className={styles["order-details"]}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                id="outlined-basic"
                label="الاسم"
                variant="outlined"
                name="name"
                fullWidth
                value={name}
                onChange={onChangeName}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="outlined-basic"
                label="رقم الهاتف"
                variant="outlined"
                name="phone"
                fullWidth
                value={phone}
                onChange={onChangePhone}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="outlined-basic"
                label="العنوان"
                variant="outlined"
                name="address"
                fullWidth
                value={address}
                onChange={onChangeAddress}
              />
            </Grid>
          </Grid>

          <div className={styles.submit}>
            <Button variant="contained" type="submit">
              إرسال الطلب
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default OrderDetails;
