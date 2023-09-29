/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllHomeCard = ({ homeCard }) => {


    const { id, image, category,  title} = homeCard || {}



    return (
<Link to={`/homeCard/${id}`}>

<div  className="p-5">
            <div className="card card-compact  bg-base-100 shadow-xl mb-10 ">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body bg-green-100 ">
                    <h2 className="text-sky-400 font-semibold">{category}</h2>
                   <h1 className="text-red-500 font-bold"> {title}</h1>
                   
                </div>
            </div>


        </div>

</Link>






    );
};

export default AllHomeCard;
