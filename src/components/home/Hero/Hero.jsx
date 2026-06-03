import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h1 className="hero-title">
                    Build.
                    <br />
                    Learn.
                    <br />
                    Repeat.
                </h1>

                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="hero-description">
                    Full Stack Developer & AI/ML Enthusiast creating
                    scalable web applications, intelligent systems,
                    and enterprise solutions.
                </p>

                <br />
                <br />

            </div>

            {/* CARD STARTS HERE */}

            <div className="hero-card">

                <img
                    src="/public/image.png"
                    alt="NOUS Infosystems"
                    className="card-image"
                />

                <div className="card-content">

                    <h3 className="card-title">
                        NOUS Infosystems
                    </h3>
        
                    <div className="location">
                        <span className="status-dot"></span>
                            Bangalore Office
                    </div>

                    <p className="card-role">
                        Internship Programme
                    </p> 

                    <p className="card-description">
                        Understanding wealth management,
                        learning industry-standard tools,
                        and developing enterprise
                        applications such as UMS.
                    </p>

                </div>

            </div>

            {/* CARD ENDS HERE */}

        </section>
    );
}

export default Hero;