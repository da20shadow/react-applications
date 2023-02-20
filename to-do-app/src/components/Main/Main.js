function Main(props) {

    return (
        <>
            <h1 className={'text-center'}>{props.title}</h1>
            <main>
                {props.children}
            </main>

        </>
    )
}

export default Main;