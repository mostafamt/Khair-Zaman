import React from "react";
import Container from "@mui/material/Container";
import { changeOrder, menu, sumOfItems } from "../../server/menu";
import { Button } from "@mui/material";
import OrderRow from "../../components/OrderRow/OrderRow";

import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [order, setOrder] = React.useState(menu);
  const navigate = useNavigate();

  const onChangeOrder = (categoryId, itemId, count, checked) => {
    setOrder((prevState) =>
      changeOrder(prevState, categoryId, itemId, count, checked)
    );
  };

  const sum = sumOfItems(order);

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/order-confirmation", { state: order });
  };

  return (
    <Container maxWidth="sm">
      <form className={styles.form} onSubmit={onSubmit}>
        {order.map((category) => (
          <div key={category.id} className={styles.group}>
            <h3>{category.label}</h3>
            {category?.children?.map((item) => (
              <OrderRow
                key={item.id}
                item={item}
                onChangeOrder={(count, checked) =>
                  onChangeOrder(category.id, item.id, count, checked)
                }
              />
            ))}
          </div>
        ))}
        <div className={styles.submit}>
          <Button variant="contained" type="submit" disabled={sum === 0}>
            إطلب الآن
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Home;
