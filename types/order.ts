export interface Order {
  id: string;
  customerName: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: "pending" | "shipped" | "delivered";
  orderDate: string;     // ISO date string
  shippedDate?: string;  // optional
}
