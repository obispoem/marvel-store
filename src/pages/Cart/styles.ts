import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;

export const Empty = styled.div`
  text-align: center;
  color: #888;
  margin: 40px 0;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  align-items: center;
  img {
    width: 70px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  input[type="number"] {
    width: 60px;
    margin-left: 8px;
  }
`;

export const Badge = styled.span<{ $rare: boolean }>`
  display: inline-block;
  margin-left: 8px;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: bold;
  background: ${({ $rare }) => ($rare ? "#ffd000" : "#ccc")};
  color: ${({ $rare }) => ($rare ? "#3b0404" : "#444")};
  width: fit-content;
`;

export const CouponRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 18px 0 10px 0;
  input {
    flex: 1;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    padding: 6px 16px;
    border: none;
    background: #3b0404;
    color: #ffd000;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  span {
    margin-left: 8px;
    color: #3b0404;
    font-size: 0.95rem;
  }
`;

export const ErrorMsg = styled.span`
  color: #ff0000;
  margin-left: 8px;
  font-size: 0.95rem;
`;

export const Summary = styled.div`
  margin-top: 18px;
  border-top: 1px solid #eee;
  padding-top: 12px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 1.05rem;
  }
  strong {
    font-size: 1.15rem;
  }
`;