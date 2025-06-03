import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {
  return (
    // The empty tag complies with the one returned element for JavaScript and
    // negates the need to wrap it all in a <div></div>
    <>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;