import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import Badge from 'react-bootstrap/Badge';

const CartIcon = ({ cartItemsCount }) => {
  return (
    <div className="cart-icon-container">
      <Link to='/cartpage'>
        <IoIosCart size={30} />
        {cartItemsCount > 0 && (
          <Badge pill className="cart-badge">
            {cartItemsCount}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
