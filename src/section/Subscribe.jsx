import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" >
      <h3 className="font-palanquin leading-[68px] text-4xl font-bold" >Sign Up for 
        <span className="text-coral-red" > Update </span> 
        & Newsletter </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full  " >
        <input type="email"
        placeholder="Enter your email"
        className="input font-xl"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full" >
        <Button label="Sign Up" fullWidth />
        </div>
      </div>
      
    </section>
  )
}

export default Subscribe