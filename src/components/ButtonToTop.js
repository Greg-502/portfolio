import "boxicons"

export default function ButtonToTop(props) {

    return(
        <>
            <button 
                className="fixed bottom-3 shadow-lg 
                    md:bottom-10 right-2 bg-purple-500 hover:bg-purple-600 
                    rounded-full w-12 h-12 opacity-50 hover:opacity-100
                    transition duration-300 ease-in-out"
                onClick={ () => props.action() }
            >
                <box-icon name='up-arrow-alt' size='lg' color='#fff'></box-icon>
            </button>
        </>
    )
}