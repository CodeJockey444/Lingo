import React from "react";

const Core = ({ data, audio, val }) => {
  console.log(data);
  return (
    <React.Fragment>
      <div className="container mx-auto d-block p-3  text-white mt-5 core">
        <p className="m-3 p">{`Meaning : ${data.data[0].meanings[0].definitions[0].definition}`}</p>
      </div>

      <div className="container mx-auto d-block p-3  text-white mt-5 core">
        <p className="m-3 p">{`Example : ${data.data[0].meanings[0].definitions[0].example}`}</p>
      </div>
      <div className="container mx-auto d-block p-3  text-white mt-5 core">
        <p className="m-3 p">{`Part of Speech: ${data.data[0].meanings[0].partOfSpeech}`}</p>
      </div>
      <div className="container mx-auto d-block p-3  text-white mt-5 core">
        <p className="m-3 p text-center">Learn to pronounce:</p>
        <hr />

        <p className="m-3 p">{`Pronunciation :${data.data[0].phonetics[0].text}`}</p>
      
        <button
          className="btn pbg text-white mx-auto d-block btn-lg"
          onClick={() => {
            audio(val);
          }}
        >
          Listen
        </button>
      </div>
    </React.Fragment>
  );
};

export default Core;
