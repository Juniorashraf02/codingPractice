import { db } from "@/app/lib/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Order } from "@/types/order";

const ordersRef = collection(db, "orders");

// ✅ Add new order
export async function addOrder(order: Omit<Order, "id">) {
  return await addDoc(ordersRef, {
    ...order,
    orderDate: new Date().toISOString(), // auto-set when created
  });
}

// ✅ Update existing order
export async function updateOrder(id: string, order: Partial<Order>) {
  const orderRef = doc(db, "orders", id);
  await updateDoc(orderRef, order);
}

// ✅ Delete order
export async function deleteOrder(id: string) {
  const orderRef = doc(db, "orders", id);
  await deleteDoc(orderRef);
}
