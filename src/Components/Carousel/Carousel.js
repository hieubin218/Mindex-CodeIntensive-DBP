import React, { Component } from 'react';
import "./Carousel.css";

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide mw-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/MoneyHeist.jpg" className="img-slide" alt="MoneyHeist" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>MONEY HEIST</h1>
                            <p>Dressed in red jumpsuits with a mask of the Spanish painter Salvador Dalí, 
                            the group of robbers take 67 hostages as part of their plan to print and escape with €2.4 billion 
                            through a self-built escape tunnel. The Professor heads the heist from an external location.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/GreenKnight.jpg" className="img-slide" alt="GreenKnight" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>THE GREEN KNIGHT</h1>
                            <p>An epic fantasy adventure based on the timeless Arthurian legend, 
                            "The Green Knight" tells the story of Sir Gawain (Dev Patel), 
                            King Arthur's reckless and headstrong nephew, who embarks on a daring quest to confront the eponymous Green Knight, 
                            a gigantic emerald-skinned stranger and tester of men.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/DontBreath2.png" className="img-slide" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>DON'T BREATHE 2</h1>
                            <p>The Blind Man has been hiding out for several years in an isolated cabin and 
                               has taken in and raised a young girl orphaned from a devastating house fire. 
                               Their quiet life together is shattered when a group of criminals kidnap the girl, 
                               forcing the Blind Man to leave his safe haven to save her.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;