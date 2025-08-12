import React from "react";
import { Container, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import styles from "./orderForm.module.scss";
import { useNavigate } from "react-router-dom";

const OrderForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
              {...register("name", { required: "الاسم مطلوب" })}
              error={!!errors.name} // ✅ conditionally set error
              helperText={errors.name?.message} // ✅ show error text
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="رقم الهاتف"
              variant="outlined"
              fullWidth
              {...register("phone", { required: "رقم الهاتف مطلوب" })}
              error={!!errors.phone} // ✅ conditionally set error
              helperText={errors.phone?.message} // ✅ show error text
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="العنوان"
              variant="outlined"
              fullWidth
              {...register("address", { required: "العنوان مطلوب" })}
              error={!!errors.address} // ✅ conditionally set error
              helperText={errors.address?.message} // ✅ show error text
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
