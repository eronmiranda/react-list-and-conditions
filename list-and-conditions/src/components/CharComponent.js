const CharComponent = ({letter, clickHandler}) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return(
    <div style={style} onClick={clickHandler}>
      {letter}
    </div>
  );
};

export default CharComponent;
