//widget component
//dynamic --- will change accroding to prop
const Widgets = ({ Icon, widget, setWidget }) => {
  const addWidget = () => {
    if (widget.length < 6) {
      const tempArray = [...widget, Icon];
      setWidget(tempArray);
    }
  };
  const removeWidget = () => {
    if (widget.length > 0) {
      const tempArray = [...widget];
      tempArray.pop();
      setWidget(tempArray);
    }
  };
  return (
    <div className="container">
      <Icon size={50} />
      <button onClick={addWidget} className="btns">
        +
      </button>
      <button onClick={removeWidget} className="btns">
        -
      </button>
      <div>
        {widget.map((Value, index) => (
          <Value key={index} size={50} />
        ))}
      </div>
    </div>
  );
};

export default Widgets;
