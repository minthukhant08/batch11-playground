import React from "react"
import { twMerge } from "tailwind-merge"

type CardProp = {
    children: React.ReactNode
    className?: string
}
export default function Card({ className, children} : CardProp){
    return (
        <div className={twMerge("bg-white rounded-2xl border p-4 transition-all duration-300 border-slate-100 hover:border-amber-200 hover:shadow-md hover:shadow-amber-50/50", className)}>
            {
                children
            }
        </div>
    )
}