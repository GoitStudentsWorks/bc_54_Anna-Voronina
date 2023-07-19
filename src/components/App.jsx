import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import SummaryPage from 'pages/SummaryPage/SummaryPage';
import HomePage from 'pages/HomePAge/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="statistic" element={<SummaryPage />} />
          {/* <Route path="currency" element={<CurrencyPage />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <div>React homework template</div>
      <GlobalStyle />
    </>
  );
};
