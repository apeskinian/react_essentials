export default function Tabs({ children, buttons, ButtonWrapper='menu' }) {
    // ButtonWrapper set default to 'menu' with = 'menu'
    return <>
        <ButtonWrapper>{buttons}</ButtonWrapper>
        {children}
    </>
}