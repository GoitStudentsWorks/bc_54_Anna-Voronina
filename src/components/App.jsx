import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { fetchCurrentUserThunk } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import Transactions from './Transactions/Transactions';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <ProtectedRoute
                  component={<DashboardPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="home"
              element={
                <ProtectedRoute component={<HomePage />} redirectTo="/login" />
              }
            />
            <Route
              path="statistic"
              element={
                <ProtectedRoute
                  component={<SummaryPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="login"
              element={<PublicRoute component={<LoginPage />} restricted />}
            />
            <Route
              path="register"
              element={<PublicRoute component={<RegisterPage />} restricted />}
            />
          </Route>
        </Routes>
      )}

      <GlobalStyle />
    </>
  );
};
