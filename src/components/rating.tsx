import { Input, Button, Select, Rate, Modal } from "antd";
import { useEffect, useState } from "react";
import { resturants } from "../defintions";
const { TextArea } = Input;
const { Option } = Select;

export function Rating() {
  const [resturant, setResturant] = useState("");
  const [tasteRating, setTasteRating] = useState(2.5);
  const [textureRating, setTextureRating] = useState(2.5);
  const [visualRating, setVisualRating] = useState(2.5);
  const [description, setDescription] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div>
        <Select
          size="large"
          style={{
            width: "100%",
            marginBottom: "16px",
          }}
          placeholder="Choose the resturant..."
          onChange={(e) => setResturant(e)}
        >
          {resturants.map((resturant) => {
            return <Option value={resturant.name}> {resturant.name} </Option>;
          })}
        </Select>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              marginBottom: "8px",
            }}
          >
            Rate your experience in each category!
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            Taste:{" "}
            <Rate
              allowHalf
              value={tasteRating}
              onChange={(e) => setTasteRating(e)}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            Texture:{" "}
            <Rate
              allowHalf
              value={textureRating}
              onChange={(e) => setTextureRating(e)}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            Visual:{" "}
            <Rate
              allowHalf
              value={visualRating}
              onChange={(e) => setVisualRating(e)}
            />
          </div>
        </div>
        <TextArea
          style={{
            marginBottom: "24px",
            marginTop: "16px",
          }}
          placeholder="This is for any additional comments..."
          showCount
          maxLength={100}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Submit
        </Button>
      </div>
      <Modal
        title="Review"
        visible={isModalVisible}
        onOk={() => {
          setTasteRating(2.5);
          setTextureRating(2.5);
          setVisualRating(2.5);
          setResturant("");
          setDescription("");
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <div>Resturant:{resturant}</div>
        <div>Taste:{tasteRating}</div>
        <div>Texture:{textureRating}</div>
        <div>Visual:{visualRating}</div>
        <div>Description: {description}</div>
      </Modal>
    </div>
  );
}
