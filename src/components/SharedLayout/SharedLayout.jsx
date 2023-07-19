import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
