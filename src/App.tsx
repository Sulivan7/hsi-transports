import { RouterProvider } from 'react-router-dom';
import { GlobalCss } from './styles/globalStyles';
import router from './routes';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const HSI_PHONE = '5522981315390';
  return (
    <>
      <GlobalCss />
      <RouterProvider router={router} />
      <WhatsAppButton
        phoneNumber={HSI_PHONE}
        message="Olá! Quero solicitar uma cotação de transporte executivo."
      />
    </>
  );
}

export default App;
