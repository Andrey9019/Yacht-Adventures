import CommentsCarousel from "./CommentsCarousel";

const Comments = () => {
  return (
    <section className="flex mx-auto mb-4">
      <div className="container custom-container">
        <div className="mb-10">
          <p className="text-2xl mb-6">
            <span className="text-[--prime-phrase] italic">
              Yacht Adventures
            </span>{" "}
            take pride in providing the best possible service and experience to
            our customers
          </p>
          <p className="text-sm">
            Our customers have enjoyed unforgettable moments on our yachts.
            Don't just take our word for it - read on to find out what they have
            to say about their journey with us.
          </p>
        </div>
        <CommentsCarousel />
      </div>
    </section>
  );
};

export default Comments;
