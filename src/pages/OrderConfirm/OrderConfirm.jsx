import React from "react";
import { Container, Button, Grid, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

import { totalOfItems } from "../../server/menu";
import OrderForm from "../../components/OrderForm/OrderForm";

import styles from "./orderConfirm.module.scss";

const OrderConfirm = () => {
  const location = useLocation();
  const order = location.state;

  return (
    <Container maxWidth="sm">
      <div className={styles["order-confirm"]}>
        {order?.map((category) => {
          return category?.children?.map((item) => {
            if (item.checked) {
              return (
                <div key={item.id} className={styles.row}>
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                  <span>{item.count * item.price}</span>
                </div>
              );
            } else {
              return <div key={item.id}></div>;
            }
          });
        })}
        <div className={styles.total}>
          <div className={styles.line}></div>
          <div className={styles.text}>
            الإجمالي: {totalOfItems(order)} جنيه
          </div>
        </div>
      </div>

      <OrderForm order={order} />
    </Container>
  );
};

export default OrderConfirm;
