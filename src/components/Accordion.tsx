type Props = { children: any; question: string; anchor?: string };

const Accordion = ({ children, question, anchor }: Props) => {
  return (
    <section
      id={anchor}
      className="collapse collapse-arrow border border-t-0 border-x-0 rounded-none"
    >
      <input type="radio" name="my-accordion" />
      <div className="collapse-title text-xl font-medium p-0">
        <h3 className="text-gray-blue">{question}</h3>
      </div>
      <div className="collapse-content text-black">{children}</div>
    </section>
  );
};

export default Accordion;
