"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { addProduct } from "@/services/ProductService";


export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({ name, description, price: Number(price) });
    setName("");
    setDescription("");
    setPrice("");
    alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">Add</Button>
    </form>
  );
}
