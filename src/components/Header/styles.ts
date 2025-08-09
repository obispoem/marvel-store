import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #3b0404ff;
  padding: 10px 8px;
  border-bottom: 2px solid #ffd000ff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 12px 32px;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 150px;
  cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #ffd000ff;
  margin: 0 8px;
  flex: 1;

  @media (min-width: 768px) {
    font-size: 24px;
    margin: 0 16px;
  }
`;

export const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  right: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50px;
    right: 16px;
    cursor: pointer;
  }
`;

export const CartIcon = styled.img`
  height: 24px;
  width: 24px;

  @media (min-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -12px;
  right: -2px;
  font-size: 10px;
  color: #ffd000ff;
  background: #3b0404ff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    top: -14px;
    right: -2px;
    font-size: 12px;
    width: 25px;
    height: 25px;
  }
`;
