import React from "react";
import { Card } from "antd";
function Cards(props) {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={props.url}
          loading="lazy"
          style={{ width: "100%", height: "500px" }}
        />
      }
    >
      <Meta title="Tên sản phẩm " description="Giá tiền" />
    </Card>
  );
}

export default Cards;
