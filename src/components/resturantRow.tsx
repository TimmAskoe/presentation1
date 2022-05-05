import { InfoCircleTwoTone } from "@ant-design/icons";
import { Button, Popover, Rate } from "antd";
import { attachTypeApi } from "antd/lib/message";

interface ResturantRowProps {
  name: string;
  distance: string;
  rating: string;
  address: string;
  openingHours: string;
  tasteRating: string;
  textureRating: string;
  visualRating: string;
}
export function ResturantRow(props: ResturantRowProps) {
  function createContentForPopover() {
    return (
      <div>
        <div
          style={{
            marginBottom: "16px",
          }}
        >
          <div>Opening hours:</div>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Monday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Tuesday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Wednesday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Thursday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Friday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Saturday:</div>
              {props.openingHours}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "8px",
              }}
            >
              <div>Sunday:</div>
              {props.openingHours}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>Address:</div>
            <div style={{ marginLeft: "8px" }}>{props.address}</div>
          </div>
        </div>
      </div>
    );
  }

  function createContentForRatingHover() {
    return (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginLeft: "8px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            Taste:
          </div>
          <Popover content={props.tasteRating}>
            <div>
              <Rate
                value={Math.round(parseFloat(props.tasteRating) * 2) / 2}
                allowHalf
                disabled
              />
            </div>
          </Popover>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginLeft: "8px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            Texture:
          </div>
          <Popover content={props.textureRating}>
            <div>
              <Rate
                value={Math.round(parseFloat(props.textureRating) * 2) / 2}
                allowHalf
                disabled
              />
            </div>
          </Popover>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginLeft: "8px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            Visual:
          </div>
          <Popover content={props.visualRating}>
            <div>
              <Rate
                value={Math.round(parseFloat(props.visualRating) * 2) / 2}
                allowHalf
                disabled
              />
            </div>
          </Popover>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        marginBottom: "24px",
      }}
    >
      <div>{props.name}</div>
      <div>{props.distance}</div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ marginRight: "8px" }}>{props.rating}</div>
        <Popover content={createContentForRatingHover()}>
          <InfoCircleTwoTone style={{ alignSelf: "center" }} />
        </Popover>
      </div>
      <div
        style={{
          alignSelf: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Popover content={createContentForPopover()}>
            <InfoCircleTwoTone />
          </Popover>
        </div>
      </div>
    </div>
  );
}
