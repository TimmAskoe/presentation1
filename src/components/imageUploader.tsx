import { Upload, message } from "antd";
import { GiHamburger } from "react-icons/gi";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  onChange(info: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file did not upload.`);
    }
  },
  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export function ImageUploader() {
  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <GiHamburger size={56} />
        </p>
        <p className="ant-upload-text">
          Click or drag a picture of your burger to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}
