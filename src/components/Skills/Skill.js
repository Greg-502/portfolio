export default function Skill({ title, list }) {
    return(
        <div className="border-t border-black pb-4 pt-1">
            <h2 className="text-lg md:text-xl font-semibold truncate">{ title }</h2>

            <ul className="pt-2 text-md md:text-lg">
                {
                    list.map((element) => {
                        return(
                            <li className="text-gray-700 truncate">
                                { element }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
