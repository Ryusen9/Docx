import { useRef } from 'react';
import Card from './Card.jsx';
function Foreground(){
    const ref = useRef(null);
    return(
        <>
        <div ref={ref} className="h-full z-[3] fixed top-0 left-0 w-full bg-transparent py-28 px-4">
            <Card reference = {ref} />
        </div>
        </>
    )
}
export default Foreground;