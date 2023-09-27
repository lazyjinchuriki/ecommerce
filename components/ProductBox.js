import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Box = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(131, 129, 140, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.5rem rgba(131, 129, 140, 0.5);
    transform: scale(1.02);
  }

  h3 {
    font-size: 1rem;
    margin: 20px 0 0 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    max-height: 150px;
    object-fit: cover;
  }
  b {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    padding: 10px;
    font-weight: 600;
  }
  div {
    display: grid;
    grid-template-columns: 0.2fr 1.8fr;
  }
`;

const ProductBox = ({ ...product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <Box>
        <img src={product?.images[0]} alt={product.name} />
        <h3>{product.name}</h3>
        <b>₹{product.price}</b>
        <div>
          <Button lg={1}>❤️</Button>
          <Button
            black={1}
            onClick={() => {
              addToCart(product._id);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Box>
    </>
  );
};

export default ProductBox;
