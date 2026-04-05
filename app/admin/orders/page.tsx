"use client";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Order } from "@/types/order";
import { Product } from "@/types/product";
import ConfirmDialog from "@/components/ConfirmDialog";
import { Snackbar, Alert } from "@mui/material";


import { Button } from "@mui/material";
import EditOrderModal from "@/components/EditOrderModal";
import { deleteOrder } from "@/services/orderService";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [updateSnackbarOpen, setUpdateSnackbarOpen] = useState(false);
const [addSnackbarOpen, setAddSnackbarOpen] = useState(false);


  const fetchOrders = async () => { /* same as before */ };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (deleteId) {
      await deleteOrder(deleteId);
      await fetchOrders();
      setSnackbarOpen(true); // ✅ show success toast
    }
    setConfirmOpen(false);
    setDeleteId(null);
  };

  const handleEdit = (order: Order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleOrderUpdated = async () => {
    await fetchOrders();
    setUpdateSnackbarOpen(true); // ✅ show update toast
  };




  const columns: GridColDef[] = [
    { field: "customerName", headerName: "Customer", width: 200 },
    { field: "productName", headerName: "Product", width: 200 },
    { field: "quantity", headerName: "Qty", width: 100 },
    { field: "totalPrice", headerName: "Total", width: 120 },
    { field: "status", headerName: "Status", width: 150 },
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
            onClick={() => handleEdit(params.row as Order)} // ✅ now defined
            style={{ marginRight: "0.5rem" }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDeleteClick(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];







  return (
    <div style={{ height: 600, width: "100%" }}>
      <h1>Admin Orders</h1>
      <DataGrid
        rows={orders}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
          sorting: { sortModel: [{ field: "orderDate", sort: "desc" }] },
        }}
        pageSizeOptions={[5, 10, 20]}
      />

      {/* Edit modal */}
      <EditOrderModal
        open={open}
        onClose={() => setOpen(false)}
        order={selectedOrder}
        onUpdated={handleOrderUpdated}
      />

      {/* Confirm delete dialog */}
      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Delete"
        message="Are you sure you want to delete this order?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmOpen(false)}
      />

      {/* Success snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Order deleted successfully!
        </Alert>
      </Snackbar>
      {/* Delete snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Order deleted successfully!
        </Alert>
      </Snackbar>

      {/* Update snackbar */}
      <Snackbar
        open={updateSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setUpdateSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setUpdateSnackbarOpen(false)} severity="info" sx={{ width: "100%" }}>
          Order updated successfully!
        </Alert>
      </Snackbar>
    </div>
  )
};
