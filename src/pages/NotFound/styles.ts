import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding: 20px;
`;

export const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  color: ${theme.colors.primary};
  margin-bottom: 0;
  line-height: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 4rem;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.text};
  margin-top: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const NotFoundButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;