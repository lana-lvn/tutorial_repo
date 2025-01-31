import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Todos from '../pages/Todos';
import Layout from './Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from '../redux/auhtOperations';
import { selecIsRefreshing } from '../redux/selectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selecIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="todos"
          element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
