// Using children means you can use opening and closing tags with content in between.
export default function TabButton({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}