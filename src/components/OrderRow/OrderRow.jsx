import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./orderRow.module.scss";

const OrderRow = (props) => {
  const { item } = props;

  const [checked, setChecked] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const onClickPlusButton = () => setCount((prevState) => prevState + 1);

  const onClickMinusButton = () =>
    setCount((prevState) => (prevState > 0 ? prevState - 1 : prevState));

  return (
    <div className={styles.row}>
      <FormGroup className={styles.header}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked((prevState) => !prevState)}
            />
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
        {checked && (
          <div>
            <button type="button" onClick={onClickPlusButton}>
              +
            </button>
            <span>{count}</span>
            <button type="button" onClick={onClickMinusButton}>
              -
            </button>
          </div>
        )}
      </div>

      <div>
        {
            checked && count && <div>{count * item.price}</div>
        }
      </div>
    </div>
  );
};

export default OrderRow;
