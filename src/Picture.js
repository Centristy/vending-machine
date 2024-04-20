import react from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "./Picture.css"

function Picture({url}) {
  return (

    <>
    <img className="picture" src={url}></img>
    <Link className='link' to="/">x</Link>
    </>

  );
}

export default Picture;
