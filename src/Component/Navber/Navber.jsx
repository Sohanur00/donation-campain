import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div className="bg-cover  h-[300px] " style={{ backgroundImage: 'url(https://i.ibb.co/KG2JfJd/group-multiethnic-diverse-hands-raised.jpg)' }} >
            <nav>

                <ul className="flex justify-around mt-4">
                    <li>
                        <img src="https://i.ibb.co/f1Jw3cz/Logo.png" alt="" />
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>

                </ul>
            </nav>

            <div className="hero-content text-center text-neutral-content">

                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>

                    <div className="flex">
                        <input className="border p-4 text-black w-[400px] h-[50px] rounded-lg " type="text" name="" id="" placeholder="Search here...." />
                        <button className="btn bg-[#FF444A] text-white">Search</button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navber;