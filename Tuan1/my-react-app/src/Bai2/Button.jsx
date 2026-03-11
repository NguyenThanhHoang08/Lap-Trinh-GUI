function Button(prop) {
    return (
        <>
            <button class={prop.type}>{prop.type}</button>
        </>
    );
}

export default Button