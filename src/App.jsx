import { useState } from 'react';

import * as content from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/Examples/TabButton.jsx';


function App() {
  // useState('initial data')
  const [ selectedTopic, setSelectedTopic ] = useState();

  // This function takes the 'components' etc from the tab button and uses it to call
  // useState which then replaces the content dynamically.
  function handleSelect(selectedButton) {
    // Calls the useState setSelectedTopic function which causes App function to reload.
    setSelectedTopic(selectedButton);
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
            {/* When buttons are clicked they send 'components' etc to the handleSelect function */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Conditionally rendering either "Please select a topic" or the appropriate
          info from button based on the presence of selectedTopic */}
          {!selectedTopic ? <p>Please select a topic.</p> : (
            <div id='tab-content'>
              <h3>{content.EXAMPLES[selectedTopic].title}</h3>
              <p>{content.EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{content.EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
