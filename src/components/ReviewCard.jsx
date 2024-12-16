import { star } from "../assets/icons"

const ReviewCard = ( {imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white-100 p-6 rounded-xl shadow-3xl" >
      <img src={imgURL} alt="customer" 
            width={120} height={120}
            className="rounded-full object-cover" />
      <p className="mt-6 max-w-sm info-text text-center" >{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5" >
        <img
          src={star} alt="stars"
          className="w-[24px] h-[24px] object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray" >({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl leading-normal font-palanquin font-bold" >{customerName}</h3>

    </div>
  )
}

export default ReviewCard