import { Button } from "@pulzeup/ui/components/ui/button";
import { Typography } from "@pulzeup/ui/components/ui/typography";
import ProductCard from "./components/product-card";

export default function Page() {
  return (
    <main className="container">
      <section>
        <Typography variant="h3">Featured Items</Typography>
        <div className="grid grid-cols-2 md:grid-flow-col md:w-fit gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
