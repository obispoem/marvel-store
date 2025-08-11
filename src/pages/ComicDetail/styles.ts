import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const Image = styled.img`
  width: 100vw;
  max-width: 340px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 340px;
    max-width: 340px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  width: 100%;
  padding: 12px 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #3b0404;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 18px;
  color: #444;
`;

export const PriceBadgeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
`;

export const Price = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

export const Badge = styled.span<{ $rare: boolean }>`
  display: inline-block;
  margin-left: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
  background: ${({ $rare }) => ($rare ? "#ffd000" : "#ccc")};
  color: ${({ $rare }) => ($rare ? "#3b0404" : "#444")};
  vertical-align: middle;
`;

export const BuyButton = styled.button`
  background: #3b0404;
  color: #ffd000;
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #5c0707;
  }
`;
