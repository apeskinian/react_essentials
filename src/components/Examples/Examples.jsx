import { useState } from 'react';

import { EXAMPLES } from '../../data.js';
import TabButton from './TabButton.jsx'

export default function Examples () {
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
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>
    }

    return (
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
    )
}