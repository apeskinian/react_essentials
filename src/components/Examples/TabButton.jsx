// Using children means you can use opening and closing tags with content in between.
export default function TabButton({children}) {
    function handleClick() {
        console.log('Hello World');
    }
    
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}