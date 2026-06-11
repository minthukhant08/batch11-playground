'use client'
import Dddd, { data, Test } from "./test";
import Button from '@/components/button'
import { useState } from "react";
export default function Home() {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    alert('testing')
  }

  const handleHello = () => {
    alert("greeting...")
  }

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <>
      <div>Hello {data.name}</div>
      <Test />
      <Button text="show buttons" onClick={handleShow}/>
      {
        show && <>
          <Button onClick={handleHello} text="Hello" />
          <Button text="Click me" onClick={handleClick} />
        </>
      }
      <div></div>
      <Dddd />
    </>
  );
}



