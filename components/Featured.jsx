import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLinks from "./ButtonLinks";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
`;
const Desc = styled.p`
  font-size: 1.3rem;
  color: #aaa;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  img {
    max-width: 100%;
  }
`;

const Columns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Featured = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <Bg>
        <Center>
          <Wrapper>
            <Columns>
              <Title>{product.name}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLinks
                  href={"/products/" + product._id}
                  lg={1}
                  border={1}
                >
                  Read More
                </ButtonLinks>
                <Button
                  lg={1}
                  background={1}
                  onClick={() => {
                    addToCart(product._id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </Columns>

            <div>
              <img src={product.images} alt="featured" />
            </div>
          </Wrapper>
        </Center>
      </Bg>
    </>
  );
};

export default Featured;
