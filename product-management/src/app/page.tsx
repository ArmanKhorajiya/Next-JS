import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    stock: 24,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Accessories",
    price: 3999,
    stock: 12,
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Electronics",
    price: 899,
    stock: 0,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 1999,
    stock: 18,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">ProductManager</h1>

        <div className="flex items-center gap-5">
          <Link href="/login" className="text-gray-600 hover:text-blue-700">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="mt-2 text-gray-500">
              Manage and monitor your products.
            </p>
          </div>

          <Link
            href="/products"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Manage Products
          </Link>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          <StatCard title="Total Products" value="4" />
          <StatCard title="Available Stock" value="54" />
          <StatCard title="Out of Stock" value="1" />
        </div>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold">Recent Products</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-sm text-gray-500">
                  <th className="p-3">Product</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b last:border-0">
                    <td className="p-3 font-medium">{product.name}</td>
                    <td className="p-3 text-gray-600">{product.category}</td>
                    <td className="p-3">₹{product.price}</td>
                    <td className="p-3">{product.stock}</td>
                    <td className="p-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          product.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}
