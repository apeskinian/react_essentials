// Using children means you can use opening and closing tags with content in between.
export default function TabButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}