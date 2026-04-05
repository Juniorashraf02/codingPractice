export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#f4f4f4", padding: "1rem" }}>
        <h2>Admin</h2>
        <nav>
          <ul>
            <li><a href="/admin/products">Products</a></li>
            <li><a href="/admin/orders">Orders</a></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}
