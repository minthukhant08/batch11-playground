import { useState } from "react";
import Button from "../button";
import { SquareStar, Coffee, CupSoda, GlassWater, type LucideIcon } from 'lucide-react'

type Tab = {
    text: string,
    icon: LucideIcon
}
const Tabs: Tab[] = [
    { text: "All", icon: SquareStar },
    { text: "Brew", icon: Coffee },
    { text: "Bakery", icon: CupSoda },
    { text: "Signature", icon: GlassWater },
]
export default function TabBar() {
    const [active, setActive] = useState("Bakery")

    return (
        <div
            className="flex bg-slate-200 p-1.5 rounded-2xl border border-slate-200 gap-1 overflow-x-auto whitespace-nowrap scrollbar-none"
        >
            {
                Tabs.map((t, i) => <Button
                    key={i}
                    icon={t.icon}
                    text={t.text}
                    className={active != t.text ? 'bg-slate-300' : ''}
                    onClick={() => setActive(t.text)}
                />)
            }
        </div>
    )
}