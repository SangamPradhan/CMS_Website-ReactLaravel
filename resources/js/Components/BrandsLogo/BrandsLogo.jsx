import React from "react";
import Brand1 from '../../../assets/brands/1.svg';
import Brand2 from '../../../assets/brands/2.svg';
import Brand3 from '../../../assets/brands/3.svg';
import Brand4 from '../../../assets/brands/4.svg';
import Brand5 from '../../../assets/brands/5.svg';

const BrandsLogo = () => {
    return (
        <>
            <div className="container mb-12 mt-12 sm:mt-0">
                <br /><h1 className="text-primary text-center font-semibold text-3xl sm:text-2x1 ">Powering next-gen companies</h1> <br />
                <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
                    <img src={Brand1} alt="" />
                    <img src={Brand2} alt="" />
                    <img src={Brand3} alt="" />
                    <img src={Brand4} alt="" />
                    <img src={Brand5} alt="" />
                </div>
            </div>
        </>
    );
};

export default BrandsLogo;
