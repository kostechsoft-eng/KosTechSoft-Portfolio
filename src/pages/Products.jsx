import { Link } from "react-router-dom";

function Products() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
          Product Catalogue
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Industrial Products
          <span className="text-white/40">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-white/45">
          Explore our range of industrial pumping and engineering
          solutions.
        </p>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
          >
            Back Home
          </Link>
        </div>

      </div>
    </main>
  );
}

export default Products;