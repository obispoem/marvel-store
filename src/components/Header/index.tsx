import { HeaderContainer, Logo, Cart, CartIcon, CartCount } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Header() {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Logo src="../logo.jpg" alt="Logo" onClick={() => navigate("/")} />
      <Cart onClick={() => navigate("/cart")}>
        <CartIcon src="../cartIcon.png" alt="Cart" />
        <CartCount>{cartCount}</CartCount>
      </Cart>
    </HeaderContainer>
  );
}

export default Header;
