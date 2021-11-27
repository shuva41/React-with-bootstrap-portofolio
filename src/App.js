import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Particles
        prarms={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shpae: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
