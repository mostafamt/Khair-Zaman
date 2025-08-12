import React from "react";
import { Container, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import styles from "./orderForm.module.scss";
import { useNavigate } from "react-router-dom";

const OrderForm = (props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/thank-you", {
      state: {
        name: values.name,
        phone: values.phone,
        address: values.address,
        order: props.order,
      },
    });
  };

  return (
    <div className={styles["order-form"]}>
      <Typography variant="h6">تفاصيل الطلب</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="الاسم"
              variant="outlined"
              fullWidth
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="رقم الهاتف"
              variant="outlined"
              fullWidth
              {...register("phone", { required: true })}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="العنوان"
              variant="outlined"
              fullWidth
              {...register("address", { required: true })}
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
  );
};

export default OrderForm;
