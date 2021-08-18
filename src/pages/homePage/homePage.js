const HomePage = () => {

  const handleClick = () => {
    console.log("hit here")
  }

  return (
    <div>
      <a
        onClick={() => handleClick()}
      >search</a>
    </div>
  );
}

export default HomePage