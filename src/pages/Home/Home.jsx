import React from "react";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { data } from "../../server/data";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <Container maxWidth="sm">
      {data.map((item) => (
        <div key={item.id} className={styles.group}>
          <h3>{item.label}</h3>
          {item?.children?.map((item) => (
            <FormGroup key={item.id}>
              <FormControlLabel
                control={<Checkbox />}
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
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Home;
