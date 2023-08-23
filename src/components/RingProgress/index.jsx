import React from "react";
import { Progress, Space } from "antd";

const App = () => (
  <Progress
    percent={99.9}
    status="normal"
    style={{
      marginTop: 8,
      width: 280,
    }}
    strokeColor={{
      from: "#f2f2f2",
      to: "#108ee9",
    }}
  />
);
export default App;
