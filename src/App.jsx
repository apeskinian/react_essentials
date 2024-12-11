import reactCoreConcepts from "./assets/react-core-concepts.png";
import  { CORE_CONCEPTS } from './data.js';

const reactDescriptions = [
  "Essential", "Core", "Primary", "Central", "Elementary",
  "Foundational", "Underlying", "Principal", "Key", "Crucial",
  "Vital", "Important", "Indispensable", "Integral", "Critical",
  "Necessary", "Pivotal", "Cardinal", "Substantial", "Rudimentary"
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(19)]
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// the function parameter below uses destructuring to get the parameters
// from the sent props
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Longer option of sending props */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Shorter way to send props by using spread operator */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
