import { useState } from 'react';

import { EXAMPLES } from '../../data.js';
import Section from '../Section.jsx';
import TabButton from './TabButton.jsx'
import Tabs from '../Tabs.jsx';

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
        <Section id='examples' title='Examples'>
            {/* the buttons prop below is a bit like adding another children prop where you can input jsx as a prop
            as long as it's wrapped in one element. */}
            <Tabs
                // Set the wrapper for the buttons dynamically as a prop.
                // Normal html elements are defined with a string.
                // Custom ones are defined with {}
                // Make sure to use uppercase for the prop
                // ButtonWrapper='menu' - no need if default is set.
                buttons={
                <>
                    {/* When buttons are clicked they send 'components' etc to the handleSelect function */}
                    {/* isSelected also compares to truthy or falsy and sets class in TabButton.jsx as a prop */}
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}