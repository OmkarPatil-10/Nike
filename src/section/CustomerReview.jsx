import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-bold text-4xl text-center font-palanquin " >
        What Our 
        <span className="text-coral-red" > Customers </span> 
        Say &#x3f;
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experience with us.
      </p>

      <div className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" >
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
    )
}

export default CustomerReview