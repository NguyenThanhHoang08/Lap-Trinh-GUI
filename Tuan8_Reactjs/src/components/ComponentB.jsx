import React from 'react'
import { useRecoilState } from 'recoil'
import counterAtom from '../states/counterAtom'

export default function ComponentB() {
    var [counter, setCounter] = useRecoilState(counterAtom);

    const handleChange = (e) => {
        if (e.target.value == "inc")
            setCounter(counter + 1);
        else if (e.target.value == "dcr")
            setCounter(counter - 1);
    }

  return (
    <>
    <div>
        <h2>ComponentB</h2>
    </div>
    <div>
        <button onClick={handleChange} value="inc">Increase</button>
        <button onClick={handleChange} value="dcr">Decrease</button>
    </div>
    </>
  )
}
