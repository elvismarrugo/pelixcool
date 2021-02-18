import { ToastContainer } from 'react-toastify'
import '../scss/globals.scss'
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}


// mongodb+srv://admin:Cloudmngdb$0852@cluster0.q5f5a.mongodb.net/pelixcooldb?retryWrites=true&w=majority
// mongodb+srv://admin:Cloudmngdb$0852@pelixcluster.q5f5a.mongodb.net/pelixcooldb?retryWrites=true&w=majority