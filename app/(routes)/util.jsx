'use client'

import { useEffect } from 'react';
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