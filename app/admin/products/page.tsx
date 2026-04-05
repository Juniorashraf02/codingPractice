"use client";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "@/types/product";
import { deleteProduct } from "@/services/ProductService";
import { Button } from "@mui/material";
import EditProductModal from "@/components/EditProductModal";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Define handleDelete here
  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    await fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row as Product)}
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h1>Admin Products</h1>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
        pageSizeOptions={[5, 10, 20]}
      />
      <EditProductModal
        open={open}
        onClose={() => setOpen(false)}
        product={selectedProduct}
        onUpdated={fetchProducts}
      />
    </div>
  );
}
