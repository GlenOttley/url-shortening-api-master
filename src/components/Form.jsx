import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [url, setUrl] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shortenMessage, setShortenMessage] = useState('Shorten It!');
  const [errorMessage, setErrorMessage] = useState('')


  const handleChange = ({ target }) => {
    setUrl(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setShortenMessage('Working on it...');
    setErrorMessage("");
    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        "Authorization": "Bearer a9945a727c0681941424324e5ff8bf0cfc605ef7",
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        "long_url": url,
        "group_guid": "Bl6kgGkKIF2",  
        "domain": "bit.ly"
      })
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((result) => {
      setResults([...results, result]);
    })
    .catch((error) => {
      setErrorMessage("Invalid URL");
    });
    setLoading(false);
    setShortenMessage('Shorten It!');
    setUrl('');
  };

  const copyLink = ({ target }) => {
    const link = target.parentNode.childNodes[0].innerHTML;
    navigator.clipboard.writeText(link);
    const copyButtons = document.querySelectorAll(".result__button");
    copyButtons.forEach((copyButton) => {
      copyButton.innerHTML = "Copy";
      copyButton.style.background = "hsl(180, 66%, 49%)";
    });
    target.style.background = "hsl(257, 27%, 26%)";
    target.innerHTML = "Copied!";
  }

  return (
    <div className="container form__container">
      <form 
      className="form"
      onSubmit={handleSubmit}
      >
        <div className="form__group">
          <input 
          className="form__input"
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Shorten a link here..." 
          style={{
            outline: errorMessage ? "2px solid hsl(0, 87%, 67%)" : null
          }}
          />
          {errorMessage && 
          <p className="form__error">{errorMessage}</p>
          }
        </div>
        
        <button 
        className={
          loading ? "btn--loading btn btn--square form__button"
          : "btn btn--square form__button"}
        type="submit"
        >
        {shortenMessage}
        </button>
      </form>

      {results.map((result, index) => 
      <div 
      className="result"
      key={index}
      >
        <div className="result__top">
          <p className="result__long">{result.long_url}</p>
        </div>
        
        <hr className="result__divider"></hr>
        
        <div className="result__bottom">
          <p className="result__short">{result.id}</p>
          <button
          className="result__button btn btn--square"
          type="submit"
          onClick={copyLink}
          >
            Copy
          </button>
        </div>
        
      </div>
      )}
    </div>
  )
}

export default Form
