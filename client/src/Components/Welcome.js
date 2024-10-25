import React from "react";
import Row from "react-bootstrap/row";
import Carousel from "react-bootstrap/carousel";
import WaterCategory from "./Category/WaterCategory";

const Welcome = () => {
  const coasterSlide = [
    {
      title: "Freshwater",
      description: "Find the best tropical fish!",
      img: "https://images.pexels.com/photos/17801533/pexels-photo-17801533/free-photo-of-close-up-of-a-texas-cichlid-fish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Saltwater",
      description: "Find the best marine fish!",
      img: "https://images.pexels.com/photos/1112007/pexels-photo-1112007.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Care",
      description: "Care tips for a successful aquarium",
      img: "https://images.pexels.com/photos/26744114/pexels-photo-26744114/free-photo-of-hands-of-a-person-in-water-surrounded-by-fish.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Products",
      description: "Find the best products for your aquarium",
      img: "https://images.unsplash.com/photo-1665853463786-6a2e2a540446?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <WaterCategory />
      <Row className="">
        <Carousel>
          {coasterSlide.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="carousel-slide d-flex justify-content-center align-items-end text-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "450px",
                  width: "100%"
                }}
              >
                <div
                  className="text-light p-1"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <h2 className="mb-2">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </>
  );
};
export default Welcome;
