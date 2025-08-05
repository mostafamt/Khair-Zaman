import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./orderRow.module.scss";

const OrderRow = (props) => {
  const { item, onChangeOrder } = props;

  const onClickCheckItem = () => {
    onChangeOrder(item.count, !item.checked);
  };

  const onClickPlusButton = () => {
    onChangeOrder(item.count + 1, item.checked);
  };

  const onClickMinusButton = () => {
    onChangeOrder(item.count - 1, item.checked);
  };

  return (
    <div className={styles.row}>
      <FormGroup className={styles.header}>
        <FormControlLabel
          control={
            <Checkbox checked={item.checked} onChange={onClickCheckItem} />
          }
          label={item.label}
          sx={{
            ".MuiFormControlLabel-label": {
              fontFamily: "Noto Kufi Arabic",
              fontWeight: 700,
              fontSize: "0.8rem",
            },
          }}
        />
      </FormGroup>

      <div className={styles.price}>{item.price} جنيه</div>

      <div className={styles.count}>
        {item.checked && (
          <div>
            <button type="button" onClick={onClickPlusButton}>
              +
            </button>
            <span>{item.count}</span>
            <button type="button" onClick={onClickMinusButton}>
              -
            </button>
          </div>
        )}
      </div>

      <div>
        {item.checked && item.count && <div>{item.count * item.price}</div>}
      </div>
    </div>
  );
};

export default OrderRow;
