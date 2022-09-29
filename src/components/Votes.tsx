import "./Votes.css";

const Votes = () => {
  return (
    <div className="Votes">
      <h1>Vote Here</h1>
      <div className="ad-control">
        <button className="active">Chocolate</button>
        <button className="active">Vanilla</button>
        <button className="active">Strawberry</button>
      </div>
      <div className="vote-results">
        <div className="result">
          <p>Chocolate: 2(33.3%)</p>
          <p
            className="result-bar"
            style={{ backgroundColor: "brown", width: "33%" }}
          ></p>
        </div>
        <div className="result">
          <p>Vanilla: 2(50%)</p>
          <p
            className="result-bar"
            style={{ backgroundColor: "pink", width: "50%" }}
          ></p>
        </div>
        <div className="result">
          <p>Strawberry: 2(16.7%)</p>
          <p
            className="result-bar"
            style={{ backgroundColor: "red", width: "16%" }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Votes;
