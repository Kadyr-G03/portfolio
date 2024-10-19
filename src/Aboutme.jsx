import './Aboutme.css'

function Aboutme() {
    return(
        <section className="about_me">
            <div className="photo_me"></div>
            <span className='about_txt'>
                <div className='center'>
                    <p className='large_txt'>About Me</p>
                    <br />
                    <br />
                    <p className='norm_txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                        elit, sed do eiusmod tempor incididunt ut labore et<br />
                        dolore magna aliqua. Ut enim ad minim veniam,<br />
                        quis nostrud exercitation ullamco laboris nisi ut<br />
                        aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate <br />
                    velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, <br />
                    sunt in culpa qui officia deserunt mollit anim id est <br />
                    laborum.
                    </p>
                    <a href="#" className='link'>
                        <img src="./public/facebook.png" className='icon' alt="" />
                    </a>
                    <a href="#" className='link'>
                        <img src="./public/whatsapp.png" className='icon' alt="" />
                    </a>
                    <a href="#" className='link'>
                        <img src="./public/instagram.png" className='icon' alt="" />
                    </a>
                </div>
            </span>
        </section>
    );
}

export default Aboutme;
