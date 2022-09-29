import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <div className="vote-box">
        <h3>Vote For</h3>
        <h1>Strawberry</h1>
      </div>

      <div className="ad-control">
        <h4>What to Support</h4>
        <button className="active">Chocolate</button>
        <button className="active">Vanilla</button>
        <button className="passive">Strawberry</button>
      </div>

      <div className="ad-control">
        <h4>Color Theme</h4>
        <button className="passive">Light</button>
        <button className="active">Dark</button>
      </div>

      <div className="ad-control">
        <h4>Font Size</h4>
        <button className="active">Down</button>
        <span>44</span>
        <button className="active">Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
