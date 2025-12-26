import { products } from "@/data/products";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Gifts</h1>
      <p className="text-gray-600">
        Explore our full collection of handpicked gifts for every celebration.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
