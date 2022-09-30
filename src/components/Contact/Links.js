import 'boxicons'

export default function Links({ name, icon, address, text }) {
    return(
        <div className="border-t border-black pb-6 pt-2 grid grid-cols-4 justify-evenly">
            <a
                href={ `${ name === 'Email' ? `mailto:${address}` : address }` }
                target="_blank"
                rel="noreferrer"
                className='p-4 bg-white rounded-full w-14 h-14 mt-4'>
                <box-icon type="logo" name={ icon } size="sm"></box-icon>
            </a>

            <div className='col-span-3 flex justify-center mt-4 flex-col text-left'>
                <h2 className="text-sm text-md truncate text-gray-600">{ name }</h2>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={ `${ name === 'Email' ? `mailto:${address}` : address }` }
                    className="text-md font-semibold truncate"
                >
                    { text }
                </a>
            </div>
        </div>
    )
}
