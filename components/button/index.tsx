import { MouseEvent, MouseEventHandler, useState } from "react"
import { twMerge } from "tailwind-merge"
type ButtonPorp = {
  text: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ className, text, onClick }: ButtonPorp) {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = (e : MouseEvent<HTMLButtonElement>) => {
    setClicked(!clicked)
    onClick && onClick(e)
  }
  
  return (
    <button 
      onClick={handleClick}
      className={twMerge(`rounded ${ clicked ? 'text-green-600' : 'text-red-600' } color border-4 border-amber-100 bg-amber-500`, className)}>
      {text}
    </button>
  )
}