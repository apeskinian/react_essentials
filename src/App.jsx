import * as content from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/Examples/TabButton.jsx';

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
