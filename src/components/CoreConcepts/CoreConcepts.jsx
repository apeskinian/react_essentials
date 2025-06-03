import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from '../../data.js'

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {/* The below technique uses map to go through each item in CORE_CONCEPTS
                and create a CoreConcept component for each item, dynamically creating
                components based on the data available */}
                {CORE_CONCEPTS.map((conceptItem) => (
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
    );
}