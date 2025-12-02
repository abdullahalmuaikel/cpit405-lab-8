const About = () => {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <p className="about-text">
        Link Shrinker is a simple URL shortening service that allows you to
        create custom shortened URLs for your long links. Built with React.js
        for the CPIT 405 Web Applications course.
      </p>
      <p className="about-text">
        <strong>Features:</strong>
      </p>
      <ul className="feature-list">
        <li>Shorten long URLs into concise links</li>
        <li>Create custom short codes for personalized URLs</li>
      </ul>
    </div>
  );
};

export default About;
