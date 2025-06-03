// Using children means you can use opening and closing tags with content in between.
export default function TabButton({ children, isSelected, ...props }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    );
}