import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loader } from 'components';

import { Header, Footer } from './modules';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const HerosPage = lazy(() => import('./pages/HerosPage/HerosPage'));
const HerosDetailsPage = lazy(() =>
  import('./pages/HerosDetailsPage/HerosDetailsPage')
);
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

export const App = () => {
  //

  //
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/heros" element={<HerosPage />} />

          {/* </Route> */}
          <Route path="/heros/details/:_id" element={<HerosDetailsPage />} />
          <Route
            path="/heros/:page"
            // element={<HerosPage page={page} setPage={setPage} />}
          />
          {/* <Route element={<PublicRoute />}> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* </Route> */}
          {/* <Route element={<PublicRoute />}> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* </Route> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};
