export default function Preview({id, name, description, thumbnail}) {
    return(
        <div className={`flex ${ parseInt(id) === 2 ? 'items-center' : '' } mb-5 md:mb-0`}>
            <div className={ 'w-full border-black border-t' }>
                <a href='#'>
                    <h3 className="capitalize text-xl md:text-md font-bold mt-5 text-gray-800">{ name }</h3>
                </a>
                <p className='text-gray-500 text-normal pb-5 mt-1'>{ description }</p>
                <a href='#'>
                    <img className='shadow-lg object-cover max-w-full' src={ thumbnail } alt={ name }></img>
                </a>
            </div>
        </div>
    )
}