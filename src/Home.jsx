import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                    <div className="avatar">
                        <div className="w-60 lg:w-96 rounded-full ring ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/XkkDKPV/fahim.jpg" />
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/XkkDKPV/fahim.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold pb-2">Hello I'm</h2>
                        <h1 className="text-4xl md:text-5xl font-bold pb-2">Md. Amir-Al-Fahim</h1>
                        <p className="text-2xl font-medium">Full Stack Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;