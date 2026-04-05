"use client";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import { updateProduct } from "@/services/ProductService";
import { Product } from "@/types/product";

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  onUpdated: () => void;
}

export default function EditProductModal({ open, onClose, product, onUpdated }: EditProductModalProps) {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price?.toString() || "");

  const handleSave = async () => {
    if (!product) return;
    await updateProduct(product.id, { name, description, price: Number(price) });
    onUpdated();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
