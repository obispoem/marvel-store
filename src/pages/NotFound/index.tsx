import { useNavigate } from 'react-router-dom';
import { 
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundButton
} from './styles';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Página não encontrada</NotFoundSubtitle>
        <NotFoundButton onClick={() => navigate('/')}>
          Voltar para a Loja  
        </NotFoundButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
}