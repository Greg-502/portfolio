import 'boxicons'

function Social({ name, icon, address, text }) {
    return(
        <div className="border-t border-black pb-6 pt-1 grid grid-cols-4 justify-evenly">
            <a href={ address } className='p-3.5 bg-white rounded-full w-16 h-16 mt-4'>
                <box-icon type="logo" name={ icon } size="md"></box-icon>
            </a>
            <div className='col-span-3 flex justify-center flex-col text-left'>
                <h2 className="text-sm font-ligth truncate text-gray-700">{ name }</h2>
                <a href={ address } className="text-lg md:text-md font-semibold truncate">{ text }</a>
            </div>
        </div>
    )
}

export default Social