import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios, { isCancel } from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
`;

const Box = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(131, 129, 140, 0.2);
`;

const ProductInfoCell = styled.td`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(131, 129, 140, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 5px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0 0.5rem 0;
`;

const CartPage = () => {
  const { cartProducts, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
    if (window?.location.href.includes("cancel")) {
      setIsCancel(true);
      clearCart();
    }
  }, []);

  function increaseQuantity(id) {
    addToCart(id);
  }
  function decreaseQuantity(id) {
    removeFromCart(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      address,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  if (isCancel) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Your Order is Cancelled!</h1>
              <p>We are sad to let you go :(</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <ColumnsWrapper>
        <Box>
          {!cartProducts?.length && <div>Wow Such Empty</div>}
          {products?.length > 0 && (
            <Table>
              <thead>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price (in ₹)</th>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <ProductInfoCell>
                      <Title>{product.name}</Title>
                      <ProductImageBox>
                        <img src={product.images[0]} alt="productImage" />
                      </ProductImageBox>
                    </ProductInfoCell>
                    <td>
                      <Button
                        lg={1}
                        onClick={() => decreaseQuantity(product._id)}
                      >
                        -
                      </Button>
                      <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                      </QuantityLabel>
                      <Button
                        lg={1}
                        onClick={() => increaseQuantity(product._id)}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <b>
                        ₹
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </b>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>

                  <td>
                    <b>Total:</b>
                  </td>
                  <td>
                    <b>₹{total}</b>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </Box>

        {!!cartProducts?.length && (
          <Box>
            <h2>Order information</h2>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={(ev) => setName(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />

            <Input
              type="text"
              placeholder="City"
              value={city}
              name="city"
              onChange={(ev) => setCity(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              name="postalCode"
              onChange={(ev) => setPostalCode(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Street Address"
              value={address}
              name="streetAddress"
              onChange={(ev) => setAddress(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Country"
              value={country}
              name="country"
              onChange={(ev) => setCountry(ev.target.value)}
            />
            <Button lg={1} black={1} onClick={goToPayment}>
              Continue to payment
            </Button>
          </Box>
        )}
      </ColumnsWrapper>
    </>
  );
};

export default CartPage;
