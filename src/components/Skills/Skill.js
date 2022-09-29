export default function Skill({ title, list }) {
    return(
        <div className="border-t border-black pb-2 md:pb-0 pt-5">
            <h2 className="text-xl md:text-md font-bold truncate text-gray-800">{ title }</h2>

            <ul className="pt-2 text-md">
                {
                    list.map((element) => {
                        return(
                            <li className="text-gray-600 truncate"
                                key = { element.id }
                            >
                                { element.languaje }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
