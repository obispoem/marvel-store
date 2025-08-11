import { styled } from "styled-components";

export const Content = styled.div`
  background-color: #3b0404ff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
  aspect-ratio: 2/3;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #fff;
  line-height: 1.3;
  flex-grow: 1;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #ffd000ff;
`;

export const Badge = styled.span<{ $isRare: boolean }>`
  display: inline-block;
  background-color: ${({ $isRare }) => ($isRare ? "#ffd000ff" : "#ffffffff")};
  color: ${({ $isRare }) => ($isRare ? "#000" : "#000000ff")};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;