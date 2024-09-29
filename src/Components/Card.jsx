import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"
function Card({reference}){
    return(
        <>
        <motion.div drag dragConstraints={reference} className="bg-zinc-900/80 rounded-3xl h-72 w-64 flex relative flex-col gap-3 overflow-hidden selection:text-yellow-600 font-Fredoka">
            <div className="p-7 flex flex-col gap-3">
            <div className="p-2 rounded-full bg-white w-8 h-8 flex items-center justify-center">
            < FaRegFileAlt />
            </div>
            <div>
                <p className="text-zinc-400 font-Fredoka font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio.</p>
            </div>
            </div>
            <div className="footer flex flex-col gap-2 h-24 w-full font-medium text-white absolute bottom-0 left-0">
                <div className="flex px-9 items-center justify-between">
                <p><span>.90mb</span></p>
                <div className="bg-zinc-950 cursor-pointer p-2 rounded-full flex items-center justify-center">
                <LuDownload />
                </div>
                </div>
            <div className="flex cursor-pointer items-center justify-center bg-green-500 hover:bg-green-600 duration-200 h-full">
                <p>Downloaded</p>
            </div>    
            </div>
        </motion.div>
        </>
    )
}

export default Card;