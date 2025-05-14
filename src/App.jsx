import * as content from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/Examples/TabButton.jsx';


function App() {
  function handleSelect() {
    console.log('Selected')
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* Longer option */}
            <CoreConcept
              image={content.CORE_CONCEPTS[0].image}
              title={content.CORE_CONCEPTS[0].title}
              description={content.CORE_CONCEPTS[0].description}
            />
            {/* Using spread operator */}
            <CoreConcept {...content.CORE_CONCEPTS[1]}/>
            <CoreConcept {...content.CORE_CONCEPTS[2]}/>
            <CoreConcept {...content.CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
