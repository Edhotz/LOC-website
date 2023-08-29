import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { API } from "../../services/api";

const App = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    try {
      const response = await API.get("/document");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const weight = 10;

  const compute = data.length * (100 / weight);

  console.log(compute);

  return (
    <Progress
      percent={compute}
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
};
export default App;
