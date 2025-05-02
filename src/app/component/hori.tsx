import React from "react";
import Marquee from "./marquee";


export default function Hori() {
    return (
        <div className=" text-white">
            <div className="justify-center items-center space-x-4">
                <h1 className="text-xl md:text-2xl text-center my-7">
                    Trusted By
                </h1>
                <div className="">
                    <Marquee from="0" to="-100%" />
                </div>
                {/* <div className="mt-">
          <Marquee from="-100%" to="0"/>
        </div> */}
            </div>
        </div>
    );
}
