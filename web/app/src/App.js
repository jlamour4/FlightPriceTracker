import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import Home from './pages/Home';
import ThemeProvider from './theme'
import ScrollToTop from './components/scroll-to-top'
import { StyledChart } from './components/chart';
import Router from './routes';

function App() {

  useEffect(() => {
		auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
				// setName(user.displayName);
				// setImageSrc(user.photoURL);
      } else {
        console.log("USER IS SIGNED OUT");
      }
    })
  })

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop/>
        <StyledChart/>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
