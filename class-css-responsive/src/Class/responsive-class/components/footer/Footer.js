import React from "react";
import './Footer.css'

const Footer = () => {
    return (
    <footer>
        <img className="avatar-img" src="https://img.freepik.com/fotos-premium/mulher-feliz_68067-548.jpg" alt="img-avatar"></img>
        <p> Olá! Sou Tayane Cristina, uma desenvolvedora frontend apaixonada por criar experiências web incríveis. Vamos trabalhar juntos!</p>

        <ul>
            <li><img src="https://img.icons8.com/?size=50&id=32309&format=png" alt="img-instagram"></img></li>
            <li><img src="https://img.icons8.com/?size=50&id=16733&format=png" alt="img-whatsapp"></img></li>
            <li><img src="https://img.icons8.com/?size=50&id=12599&format=png" alt="img-github"></img></li>
            <li><img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="img-linkedin"></img></li>
            
        </ul>
    </footer>
    )
}
export default Footer;