const ValidationComponent = ({textLength}) => {
  const style = {
    color:"red"
  };
  let validateLength = (<p>Text is long enough.</p>);
  if(textLength < 5)
  {
    validateLength = (<p style={style}>Text is too short.</p>);
  }
 
  return(
    <div>
      {validateLength}
    </div>
  );
};

export default ValidationComponent;