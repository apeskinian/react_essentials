// Using children means you can use opening and closing tags with content in between.
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}