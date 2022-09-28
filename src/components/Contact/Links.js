import 'boxicons'

function Links({ name, icon, address, text }) {
    return(
        <div className="border-t border-black pb-6 pt-2 grid grid-cols-4 justify-evenly">
            <a href={ address } className='p-3.5 bg-white rounded-full w-16 h-16 mt-4'>
                <box-icon type="logo" name={ icon } size="md"></box-icon>
            </a>
            <div className='col-span-3 flex justify-center mt-4 flex-col text-left'>
                <h2 className="text-sm text-md truncate text-gray-600">{ name }</h2>
                <a href={ address } className="text-md font-semibold truncate">{ text }</a>
            </div>
        </div>
    )
}

export default Links