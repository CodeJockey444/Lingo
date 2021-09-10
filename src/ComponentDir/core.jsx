import React from "react";

const Core = ({ data }) => {
  console.log(data);
  return (
    <React.Fragment>
      <div className="container mx-auto d-block p-3 pbg text-white mt-5 core">
        <p className="m-3 p">{`Meaning : ${data.data[0].meanings[0].definitions[0].definition}`}</p>
      </div>

      <div className="container mx-auto d-block p-3 pbg text-white mt-5 core">
        <p className="m-3 p">{`Example : ${data.data[0].meanings[0].definitions[0].example}`}</p>
      </div>
      <div className="container mx-auto d-block p-3 pbg text-white mt-5 core">
        <p className="m-3 p">{`Part of Speech: ${data.data[0].meanings[0].partOfSpeech}`}</p>
      </div>
      <div className="container mx-auto d-block p-3 pbg text-white mt-5 core">
        <p className="m-3 p">Learn to pronounce:</p>
        <p className="m-3 p">{data.data[0].phonetics[0].text}</p>
        <audio controls>
          <source src={data.data[0].phonetics[0].audio} />
        </audio>
      </div>
    </React.Fragment>
  );
};

export default Core;
