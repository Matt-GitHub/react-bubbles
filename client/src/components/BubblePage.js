import React, { useState, useEffect } from "react";
import { Auth } from "./utils/auth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    Auth()
      .get("/api/colors")
      .then(res => {
        console.log("bubblepage response", res);
        setColorList(res.data);
      })
      .catch(err => {
        console.log("bublepage error", err);
      });
  }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
