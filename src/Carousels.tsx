import React from "react";
import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const carouselDetails = [
  {
    id: 1,
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/0*MYd28f8vpLiE34ij.jpeg",
  },
  {
    id: 2,
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/0*MYd28f8vpLiE34ij.jpeg",
  },
  {
    id: 3,
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/0*MYd28f8vpLiE34ij.jpeg",
  },
];

export const Carousels: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel autoplay arrows afterChange={onChange}>
        {carouselDetails.map((i) => (
          <div>
            <div style={contentStyle}>
              <Image
                key={i.id}
                style={{ objectFit: "cover" }}
                preview={false}
                height={"400px"}
                width={"100%"}
                src={i.imageUrl}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
