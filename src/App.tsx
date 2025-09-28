import { RouterProvider } from 'react-router-dom';
import { GlobalCss } from './styles/globalStyles';
import router from './routes';

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
