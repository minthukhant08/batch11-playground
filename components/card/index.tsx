import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CardProp = {
    children: ReactNode,
    className?: string
}

export default function Card({ children, className} : CardProp){
    return (
        <div className={twMerge(" cursor-pointer rounded-sm m-2 bg-amber-500 p-2 text-black flex flex-col gap-3 border-2 border-amber-300",className )}>
            { children}
        </div>
        
    )
}

