import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};
