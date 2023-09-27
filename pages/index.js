import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProduct }) {
  console.log(newProduct);
  return (
    <>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts product={newProduct} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "64dbb9899153185a64fd44b9";
  await mongooseConnect();

  const featuredProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
