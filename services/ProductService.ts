import { db } from "@/app/lib/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Product } from "@/types/product";

const productsRef = collection(db, "products");

export async function addProduct(product: Omit<Product, "id">) {
  return await addDoc(productsRef, product);
}

export async function updateProduct(id: string, product: Partial<Product>) {
  const productRef = doc(db, "products", id);
  return await updateDoc(productRef, product);
}

export async function deleteProduct(id: string) {
  const productRef = doc(db, "products", id);
  return await deleteDoc(productRef);
}
