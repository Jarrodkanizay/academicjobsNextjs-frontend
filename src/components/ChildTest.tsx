const ChildComponent = ({ updateCounter }: any) => {
  const handleIncrement = () => {
    updateCounter((prevCounter: any) => prevCounter + 1);
  };

  return (
    <div className="bg-sky-100">
      <h2>Child Component</h2>
      <button onClick={handleIncrement}>Increment Counter</button>
    </div>
  );
};

export default ChildComponent;
