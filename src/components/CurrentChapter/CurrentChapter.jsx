import "./CurrentChapter.css";

function CurrentChapter() {
    return (
        <section className="chapter">

            <div className="chapter-image">
                <img
                    src="/nous-workspace.png"
                    alt="NOUS Infosystems"
                />
            </div>

            <div className="chapter-content">

                <span className="chapter-label">
                    CURRENT CHAPTER
                </span>

                <h2 className="chapter-title">
                    NOUS Infosystems
                </h2>

                <p className="chapter-location">
                    Bangalore, India
                </p>

                <h3 className="chapter-description">
    At NOUS Infosystems, I gained exposure to
    the wealth management domain through
    Envestnet's ecosystem while working with
    enterprise development practices and
    industry-standard tools. My experience
    included API exploration using Swagger,
    automation testing with Playwright, and
    contributing to the development of the
    User Management System (UMS), providing
    hands-on exposure to real-world software
    engineering workflows.
</h3>

            </div>

        </section>
    );
}

export default CurrentChapter;