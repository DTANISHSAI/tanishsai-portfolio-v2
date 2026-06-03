import "./EducationJourney.css";

function EducationJourney() {
    return (
        <section className="education-journey">

            <div className="journey-heading">
                <h2>
                    <br />
                    
                    <span>A portfolio</span>

                    <span className="line-2">
                                 built for every
                    </span>

                    <span className="line-3">
                                    step.
                    </span>
                </h2>
            </div>

            <div className="edu-card card-10">
                <span>CLASS 10</span>
                <h3>100%</h3>
                <p>Tirumala E.M High School</p>
            </div>

            <div className="edu-card card-inter">
                <span>INTERMEDIATE</span>
                <h3>98%</h3>
                <p>Tirumala Junior College</p>
            </div>

            <div className="edu-card card-btech">
                <span>B.TECH CSE</span>
                <h3>CGPA 9.0</h3>
                <p>Gayatri Vidya Parishad</p>
            </div>

        </section>
    );
}

export default EducationJourney;