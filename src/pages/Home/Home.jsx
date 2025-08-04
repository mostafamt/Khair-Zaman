import React from "react";
import Container from "@mui/material/Container";
import { data } from "../../server/data";

const Home = () => {
  return (
    <Container maxWidth="sm">
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.label}</h3>
          {item?.children?.map((item) => (
            <div key={item.key}>
              <h6>{item.label}</h6>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Home;
