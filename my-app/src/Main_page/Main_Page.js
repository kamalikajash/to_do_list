import React from 'react'
import style from '../Main_page/Main_Page.module.css'
import main_photo from '../static/main_photo.png'

function Main_Page() {
  return (
    <>
    <header className={style.header}>
        <button className={style.button}>Login</button>
        <button className={style.button}>Signup</button>
      </header>
    <div className={style.mainPage}>
       
        <div className={style.imageContainer}>
            <img src={main_photo} alt='Main' className={style.mainImage}/>
        </div>
        <div className={style.textContainer}>
        <h1 className={style.heading}>My To-Do List App</h1>
        <p className={style.paragraph}>Stay organized and manage your tasks efficiently with our simple and intuitive to-do list application.</p>
      </div>
    </div>
    </>
  )
}

export default Main_Page
