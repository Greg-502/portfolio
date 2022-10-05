export default function Errors({ message }) {
    return(
        <>
            <h3 className="font-bold md:font-normal text-md md:text-lg text-gray-800">{ message }</h3>
        </>
    )
}