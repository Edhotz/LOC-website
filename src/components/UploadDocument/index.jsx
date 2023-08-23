import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useAuth } from "../../AuthProvider/useAuth";
const fileList = [];

const UploadDocument = () => {
  const user = useAuth();

  const url = `http://localhost:3333/document/upload/${user.id}`;

  return (
    <>
      <Upload action={url} listType="picture" defaultFileList={[...fileList]}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  );
};
export default UploadDocument;
