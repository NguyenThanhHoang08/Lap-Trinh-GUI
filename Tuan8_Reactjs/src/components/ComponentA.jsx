import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import counterAtom from '../states/counterAtom'

export default function ComponentA() {
    var valueCounter = useRecoilValue(counterAtom);

  return (
    <div>
        <h1>Component A: {valueCounter}</h1>
    </div>
  )
}
