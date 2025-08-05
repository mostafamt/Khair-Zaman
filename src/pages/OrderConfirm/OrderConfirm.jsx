import React from "react";
import { Container, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./orderConfirm.module.scss";

const OrderConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/order-details", { state: order });
  };

  return (
    <Container maxWidth="sm">
      <form className={styles["order-confirm"]} onSubmit={onSubmit}>
        {order?.map((category) => {
          return category?.children?.map((item) => {
            if (item.checked) {
              return (
                <div className={styles.row}>
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                  <span>{item.count * item.price}</span>
                </div>
              );
            } else {
              return <></>;
            }
          });
        })}
        <div className={styles.total}>
          <div className={styles.line}></div>
          <div className={styles.text}>الإجمالي: 50 جنيه</div>
        </div>

        <div className={styles.confirm}>
          <Button variant="contained" type="submit">
            تأكيد
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default OrderConfirm;
