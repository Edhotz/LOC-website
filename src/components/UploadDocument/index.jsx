import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useAuth } from "../../AuthProvider/useAuth";
import { API } from "../../services/api";
import { getUserLocalStorage } from "../../AuthProvider/util";

const fileList = [];

const UploadDocument = ({ proceedingId }) => {
  const user = getUserLocalStorage();

  console.log(user);

  const handleFetch = async () => {
    try {
      const { data } = await API.get(`/clients`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const url = `https://solid-api-loc.onrender.com/document/upload/${proceedingId}`;

  return (
    <>
      <Upload action={url} listType="picture" defaultFileList={[...fileList]}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  );
};
export default UploadDocument;
