import { Typography } from "@pulzeup/ui/components/ui/typography";
import ProductCard from "./components/product-card";

export default function Page() {
  return (
    <main className="container">
      <section className="py-4">
        <Typography variant="h3">Featured Items</Typography>
        <div className="mt-4 grid grid-cols-2 md:grid-flow-col md:w-fit gap-x-4 gap-y-10">
          {Products.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

const Products = [
  {
    name: "Polo T shirt",
    price: 1500,
    thumbnail:
      "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650",
  },
  {
    name: "Incarnage T shirt",
    price: 2700,
    thumbnail:
      "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650",
    variants: [
      {
        image:
          "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650",
        text: "Space Black",
      },
      {
        image:
          "https://incarnage.com/cdn/shop/files/DSC03801_f4bba734-7f94-411c-9012-c4bfe9127d7c.jpg?v=1706780282&width=650",
        text: "Sky Blue",
      },
    ],
  },
];
