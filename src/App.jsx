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

  // Initially set tabContent
  let tabContent =  <p>Please select a topic.</p>;

  // Conditionally set tabContent when selectedTopic has been set from clicking a tabButton
  if (selectedTopic) {
    tabContent =
      <div id='tab-content'>
        <h3>{content.EXAMPLES[selectedTopic].title}</h3>
        <p>{content.EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{content.EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* The below technique uses map to go through each item in CORE_CONCEPTS
            and create a CoreConcept component for each item, dynamically creating
            components based on the data available */}
            {content.CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
            {/* Longer option */}
            {/* <CoreConcept */}
              {/* image={content.CORE_CONCEPTS[0].image} */}
              {/* title={content.CORE_CONCEPTS[0].title} */}
              {/* description={content.CORE_CONCEPTS[0].description} */}
            {/* /> */}
            {/* Using spread operator */}
            {/* <CoreConcept {...content.CORE_CONCEPTS[1]}/> */}
            {/* <CoreConcept {...content.CORE_CONCEPTS[2]}/> */}
            {/* <CoreConcept {...content.CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* When buttons are clicked they send 'components' etc to the handleSelect function */}
            {/* isSelected also compares to truthy or falsy and sets class in TabButton.jsx as a prop */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
