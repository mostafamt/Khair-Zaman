import React from "react";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./thanking.module.scss";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const Thanking = () => {
  const location = useLocation();
  const { order, name, phone, address } = location.state;
  console.log("location.state= ", location);
  //   const { order, name, phone, address } = location.state;

  return (
    <Container maxWidth="sm">
      <div className={styles.thanking}>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          تم إرسال طلبك بنجاح
        </Alert>

        <OrderDetails order={order} />
        <p>الاسم: {name}</p>
        <p>رقم الهاتف: {phone}</p>
        <p>العنوان: {address}</p>
      </div>
    </Container>
  );
};

export default Thanking;
