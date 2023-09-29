/* eslint-disable react/prop-types */

import AllHomeCard from "../AllHomeCard/AllHomeCard";


const HomeCards = ({homeCard}) => {


    return (
        <div>
           <div className="grid grid-cols-4 mt-4 p-5 py-5 ">
            {
              homeCard?.map(homeCard => <AllHomeCard key={homeCard.id} homeCard={homeCard}></AllHomeCard> )
            }
           </div>
        </div>
    );
};

export default HomeCards;