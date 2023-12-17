import React, { useEffect } from 'react';
import './util.css'
import { useRef } from 'react';

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) callback()
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick)
  }, [ref, callback])
}

export function Seperator() {
  return <>
    <div className='seperator' />
  </>
}
export function Space({ h, w }) {
  return <>
    <div style={{ height: h ?? "auto", width: w ?? "auto" }} />
  </>
}

export function Modal({ children, hideModalCallback }) {
  const ref = useRef(null)
  useClickOutside(ref, hideModalCallback)

  return <>
    <div className="modal">
      <div ref={ref} className="modal-content">
        {children}
      </div>
    </div>
  </>
}
export function Filler() {
  return <>
    <div style={{ flexGrow: "1" }} />
  </>
}

export function Dropdown({ children, hideDropdownCallback }) {
  const ref = useRef(null)
  useClickOutside(ref, hideDropdownCallback)

  return <>
    <div ref={ref} className="dropdown">
      {children}
    </div>
  </>
}