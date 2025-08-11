import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const HomeContainer = styled.div`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px 0;
`;

export const ComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 0 20px;
  max-width: 1900px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    padding: 0 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 12px;
    padding: 0 10px;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #3b0404;
  padding: 40px;
  margin: auto;
`;

export const ErrorMessage = styled(LoadingMessage)`
  color: #ff0000;
`;