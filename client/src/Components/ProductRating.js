import { FaStar } from "react-icons/fa";

const ProductRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="gold" />);
      } else {
        stars.push(<FaStar key={i} color="gray" />);
      }
    }

    return stars;
  };
  return <div className="rating">{renderStars()}</div>;
};

export default ProductRating;