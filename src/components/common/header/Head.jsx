import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <a href="/">
            <h1>ACADEMIA</h1>
            <span style={{color:'white'}}>ONLINE EDUCATION & LEARNING</span>
            </a>
          </div>

          <div className='social'>
            <a href="https://www.facebook.com/profile.php?id=100092142507167" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/mufix_sumi/" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://twitter.com/mufeezullah3" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>           
            <a href="https://youtube.com/channel/UCinMgoFXDqcV5ieCGr-6atg" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
