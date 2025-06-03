import './CoreConcept.css'

// This uses destructuring on the props object to create variables for the function
export default function CoreConcept({image, title, description}) { 
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}