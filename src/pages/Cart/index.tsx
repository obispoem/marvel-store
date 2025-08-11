import { useContext, useState } from "react";
import { CartContainer, Empty, CartList, CartItem, Badge, CouponRow, ErrorMsg, Summary } from "./styles";
import { CartContext } from "../../contexts/CartContext";

type CouponType = "comum" | "raro";
interface Coupon {
  code: string;
  discount: number;
  type: CouponType;
}

const COUPONS: Coupon[] = [
  { code: "DESCONTO20", discount: 0.2, type: "comum" },
  { code: "RARO15", discount: 0.15, type: "raro" },
];

export default function Cart() {
  const { items, addToCart, removeFromCart } = useContext(CartContext);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState("");

  function handleQuantityChange(id: number, quantity: number) {
    const item = items.find((i) => i.id === id);
    if (item && quantity > 0) {
      addToCart({ ...item, quantity });
    }
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1), 0
  );

  const discount = appliedCoupon
    ? items.reduce((sum, item) => {
        if (
          (appliedCoupon.type === "raro" && item.isRare) ||
          (appliedCoupon.type === "comum" && !item.isRare)
        ) {
          return sum + item.price * (item.quantity || 1) * appliedCoupon.discount;
        }
        return sum;
      }, 0)
    : 0;

  const total = subtotal - discount;

  if (total < 0) {
    setCouponError("O total não pode ser negativo.");
    return null;
  }
  
  function handleApplyCoupon() {
    const found = COUPONS.find(
      (c) => c.code.toLowerCase() === couponInput.trim().toLowerCase()
    );
    if (!found) {
      setCouponError("Cupom inválido.");
      setAppliedCoupon(null);
      return;
    }
    setAppliedCoupon(found);
    setCouponError("");
  }

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {items.length === 0 ? (
        <Empty>Carrinho vazio.</Empty>
      ) : (
        <>
          <CartList>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <Badge $rare={item.isRare}>{item.isRare ? "⭐ Raro" : "Comum"}</Badge>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <label>
                    Quantidade:{" "}
                    <input
                      type="number"
                      min={1}
                      value={item.quantity || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    />
                  </label>
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </CartItem>
            ))}
          </CartList>
          <CouponRow>
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              disabled={!!appliedCoupon}
            />
            <button onClick={handleApplyCoupon} disabled={!!appliedCoupon}>
              Aplicar
            </button>
            {appliedCoupon && (
              <span>
                Cupom <b>{appliedCoupon.code}</b> aplicado!
              </span>
            )}
            {couponError && <ErrorMsg>{couponError}</ErrorMsg>}
          </CouponRow>
          <Summary>
            <div>
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Desconto:</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
            <div>
              <strong>Total:</strong>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>
          </Summary>
        </>
      )}
    </CartContainer>
  );
}

