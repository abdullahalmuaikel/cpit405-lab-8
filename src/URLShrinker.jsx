import { useState } from "react";

const URLShrinker = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    if (!longUrl) {
      setError("Please enter a URL");
      return;
    }

    try {
      new URL(longUrl);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    if (!shortCode) {
      setError("Please enter a short code");
      return;
    }

    setError("");

    const generatedShortUrl = `https://cpt405.co/${shortCode}`;
    setShortUrl(generatedShortUrl);
  };

  return (
    <div className="container">
      <h1 className="title">Link Shrinker</h1>

      <div className="form-group">
        <label className="label">Long URL:</label>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="https://react.dev/learn/reusing-logic-with-custom-hooks"
          className="input"
        />
      </div>

      <div className="form-group">
        <label className="label">Enter short code:</label>
        <input
          type="text"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
          placeholder="react101"
          className="input"
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button onClick={handleShorten} className="button">
        Shorten
      </button>

      {shortUrl && (
        <div className="result-container">
          <label className="label">Short URL</label>
          <div className="result-box">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {shortUrl}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default URLShrinker;
