import React from "react";
import { totalOfItems } from "../../server/menu";

import styles from "./orderDetails.module.scss";

const OrderDetails = (props) => {
  const { order } = props;
  return (
    <div className={styles["order-details"]}>
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
        <div className={styles.text}>الإجمالي: {totalOfItems(order)} جنيه</div>
      </div>
    </div>
  );
};

export default OrderDetails;
