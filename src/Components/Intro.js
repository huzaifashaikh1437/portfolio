import React from 'react'
import developer from '../photos/developer.svg';
import './intro.css'
function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro__name">
                <h1>I'm <span>Muhammad Huzaifa</span></h1>
                <h3>A passionate Web developer.Who loves to create new things and to solve problems</h3>
            </div>
            <div className="intro__social">
                <ul className="list-unstyled d-flex justify-content-around">
                    <li><a href="https://github.com/huzaifashaikh1437" target="_blank"><i class="fa fa-github-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/huzaifa-shaikh-248196203/" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.facebook.com/muhammadhuzaifa11" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="https://www.instagram.com/_huzai7a_/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="intro__developer">
                <img src={developer} alt=""/>
            </div>
        </div>
    )
}

export default Intro
