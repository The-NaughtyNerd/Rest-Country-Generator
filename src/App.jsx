import Header from './components/Header';
import Country from './pages/Country';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/:name" element={<Country />} />
          {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
