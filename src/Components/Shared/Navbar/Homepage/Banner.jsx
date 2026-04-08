import React from 'react';
import BannerImg from '../../../../assets/hero_img.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 max-w-7xl mx-auto  px-4">
  <div className="hero-content flex-col lg:flex-row w-full justify-between ">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your reading list</h1>
      <p className="py-6">
        
      </p>
      <button className="btn btn-success mt-4">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;