import React from "react";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

import styles from "./thanking.module.scss";

const Thanking = () => {
  const location = useLocation();
  const { order, name, phone, address } = location.state;
  console.log("location.state= ", location);
  //   const { order, name, phone, address } = location.state;

  return (
    <Container maxWidth="sm">
      <div className={styles.thanking}>
        <p>تم إرسال الطلب</p>
        <p>الاسم: {name}</p>
        <p>رقم الهاتف: {phone}</p>
        <p>العنوان: {address}</p>

        <div>
          {order.map((category) => {
            return category?.children?.map((item) => {
              if (item.checked) {
                return (
                  <div className={styles.row}>
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                    <span>{item.price * item.count}</span>
                  </div>
                );
              } else {
                return <></>;
              }
            });
          })}
        </div>
      </div>
    </Container>
  );
};

export default Thanking;
