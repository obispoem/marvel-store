import { HeaderContainer, Logo, Cart, CartIcon, CartCount } from "./styles";

interface HeaderProps {
  cartCount: number;
}

function Header({ cartCount }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo src="../logo.jpg" alt="Logo" onClick={() => console.log("Voltar Principal")} />
      <Cart onClick={() => console.log("Ir Carrinho")}>
        <CartIcon src="../cartIcon.png" alt="Cart" />
        <CartCount>{cartCount}</CartCount>
      </Cart>
    </HeaderContainer>
  );
}

export default Header;
