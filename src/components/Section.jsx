export default function Section({ title, children, ...props }) {
    return (
        // Using ...props enables you to forward extra props like id, className etc...
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}