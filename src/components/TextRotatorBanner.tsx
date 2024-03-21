const TextRotatorBanner = () => {
  return (
    <div className="full-width md:h-[120px] h-[120px] gradient-aj">
      <section className="wrapper md:flex">
        <h2 className="sentence p-0 m-0 mt-3">
          <span className="mr-8">Find</span>{' '}
          <span className="md:hidden block">
            <br />
          </span>
          <div className="slidingVertical">
            <span>Opportunity</span>
            <span>Connections</span>
            <span>Happiness</span>
            <span>Opportunity</span>
            <span>Connections</span>
          </div>
        </h2>
      </section>
    </div>
  );
};

export default TextRotatorBanner;
