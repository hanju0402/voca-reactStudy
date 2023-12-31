import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const { day } = useParams();

    const words = useFetch(`http://localhost:3001/words?day=${day}`);


    return (
        <>
            <h2>Day{day}</h2>
            <table>
                <tbody>
                    {words.length === 0 ? <span>Loading...</span> : words.map((word) => (
                        <Word word={word} ket={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
