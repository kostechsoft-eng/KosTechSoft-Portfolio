import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
          Product Details
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Industrial Product
          <span className="text-white/40">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-white/45">
          Product information and technical details will be presented
          here.
        </p>

        <p className="mt-4 text-sm text-white/25">
          Product ID: {productId}
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Back to Products
        </Link>

      </div>
    </main>
  );
}

export default ProductDetails;