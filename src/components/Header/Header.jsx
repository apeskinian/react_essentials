import reactCoreConcepts from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = [
    "Essential", "Core", "Primary", "Central", "Elementary",
    "Foundational", "Underlying", "Principal", "Key", "Crucial",
    "Vital", "Important", "Indispensable", "Integral", "Critical",
    "Necessary", "Pivotal", "Cardinal", "Substantial", "Rudimentary"
  ];
  
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  export default function Header() {
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