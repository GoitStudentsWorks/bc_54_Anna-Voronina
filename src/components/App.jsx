import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePAge/HomePage'));
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="statistic" element={<SummaryPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
