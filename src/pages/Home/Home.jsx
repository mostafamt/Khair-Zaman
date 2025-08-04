import React from "react";
import Container from "@mui/material/Container";
import { data } from "../../server/data";
import { Button } from "@mui/material";

import styles from "./home.module.scss";
import OrderRow from "../../components/OrderRow/OrderRow";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <form>
        {data.map((item) => (
          <div key={item.id} className={styles.group}>
            <h3>{item.label}</h3>
            {item?.children?.map((item) => (
              <OrderRow key={item.id} item={item} />
            ))}
          </div>
        ))}
        <div className={styles.submit}>
          <Button variant="contained" type="submit">
            إطلب الآن
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Home;
