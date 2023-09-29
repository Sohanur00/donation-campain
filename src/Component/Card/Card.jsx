import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const [selectCard , setSelectCard] = useState();
    // const [isTrue ,setsTrue] = useState(false)

    const {id} = useParams()
    console.log(id);
    
    const homeCard = useLoaderData();
    console.log(homeCard);

    useEffect (()=>{
        // console.log('iam clicked')
        // console.log("id card")
    
    const findCard = homeCard?.find(homeCard => homeCard.id ==id)
    
    // console.log( findCard)
    
    setSelectCard(findCard);
    
    },[id,homeCard]);
    console.log(selectCard)
const [image] = homeCard || {}

    return (
        <div className="mt-20">

<div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      startups
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Lyft launching cross-platform service this week
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
      show all
      
      </button>
    </a>
  </div>
</div>

            
        </div>
    );
};

export default Card;