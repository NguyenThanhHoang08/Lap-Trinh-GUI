import React, { useEffect } from 'react'
import './Theme_UI.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import themeAtom from '../states/themeAtom';

export default function UI() {
  var themeState = useRecoilValue(themeAtom);
  var [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => {
    const temp = localStorage.getItem('theme')
    if (temp)
      setTheme(temp);
  }, [])

  return (
    <div className={themeState}>
        <h3>Home</h3>
        <p>Paragraph</p>
        <h3>Contact</h3>
    </div>
  )
}
