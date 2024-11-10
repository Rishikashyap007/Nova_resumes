// import '/styles/globals.css'

// // In your component or _app.js
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// _app.js in Next.js
import "/styles/globals.css"; // Your global styles
import "slick-carousel/slick/slick.css"; // Slick Carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel theme styles

// Import react-hot-toast's Toaster
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Render the Toaster component at the bottom of your app */}
      <Toaster />
    </>
  );
}
