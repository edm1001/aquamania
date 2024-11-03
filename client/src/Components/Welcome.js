import React from "react";
import Row from "react-bootstrap/row";
import Carousel from "react-bootstrap/carousel";
import WaterCategory from "./Category/WaterCategory";
import { Link } from "react-router-dom";

const Welcome = () => {
  const coasterSlide = [
    {
      title: "Freshwater",
      description: "Explore the variety of freshwater fish",
      img: "https://images.pexels.com/photos/17801533/pexels-photo-17801533/free-photo-of-close-up-of-a-texas-cichlid-fish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/freshpage",
    },
    {
      title: "Saltwater",
      description: "Dive into stunning saltwater fish!",
      img: "https://images.pexels.com/photos/1112007/pexels-photo-1112007.jpeg?auto=compress&cs=tinysrgb&w=1200",
      link: "/saltpage",
    },
    {
      title: "Care",
      description: "Care tips for a successful aquarium",
      img: "https://images.pexels.com/photos/26744114/pexels-photo-26744114/free-photo-of-hands-of-a-person-in-water-surrounded-by-fish.jpeg?auto=compress&cs=tinysrgb&w=1200",
      link: "/carepage",
    },
    {
      title: "Products",
      description: "Find the best products for your aquarium",
      img: "https://images.pexels.com/photos/8527495/pexels-photo-8527495.jpeg?auto=compress&cs=tinysrgb&w=1200",
      link: "/products",
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
                  backgroundPosition:"center",
                  height: "360px",
                  width: "auto",
                }}
              >
                <Link to={slide.link} className="text-decoration-none welcome-link">
                  <div
                    className="text-light p-3"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <h2 className="mb-2">{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                </Link>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </>
  );
};
export default Welcome;
