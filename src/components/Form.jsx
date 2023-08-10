import { React, useEffect, useState } from 'react';

export default function Form() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  const [allMemes, setAllMemes] = useState([]);

  //call api and save data to allMemes state

  useEffect(() => {
    async function getMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme({
      ...meme,
      randomImage: url,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme({
      ...meme,
      [name]: value,
    });
  };

  return (
    <main>
      <div className="form">
        <input
          className="form__input"
          type="text"
          name="topText"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="form__button">
          {meme.randomImage === '' ? 'Generate a meme' : 'Generate another meme'}
        </button>
      </div>
      <div className="meme">
        {meme.randomImage !== '' && (
          <img
            className="meme__img"
            src={meme.randomImage}
            alt="meme"
          />
        )}
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
