import React from "react";
import { toTitleCase } from "../utils/strings";

const MatchCard = ({ match }) => {
    const setA = match?.["setA"];
    const setB = match?.["setB"];
    const setC = match?.["setC"];
    return (
        <div className="border rounded-lg shadow-md w-[320px] m-4">
            <div className="flex flex-col divide-y justify-center">
                <div className="flex justify-between items-center">
                    <div className="flex items-center p-2 w-3/5">
                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : match?.winner?._id === match?.challenger?.["_id"]
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } w-12  p-[20px] mr-4`}
                        ></div>
                        <div>
                            <p>
                                {toTitleCase(match?.challenger?.firstname)}{" "}
                                {toTitleCase(match?.challenger?.lastname)}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mr-2">
                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setA.challenger > setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-1`}
                        >
                            {setA?.challenger}
                        </div>

                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setB.challenger > setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-1`}
                        >
                            {setB?.challenger}
                        </div>

                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setC.challenger > setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-1`}
                        >
                            {setC?.challenger}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center p-2 w-3/5">
                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : match?.winner?._id === match?.challenged?.["_id"]
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } w-12  p-[20px] mr-4`}
                        ></div>
                        <div>
                            <p>
                                {toTitleCase(match?.challenged?.firstname)}{" "}
                                {toTitleCase(match?.challenged?.lastname)}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mr-2">
                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setA.challenger < setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-[20px]`}
                        >
                            {setA?.challenged}
                        </div>

                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setB.challenger < setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-[20px]`}
                        >
                            {setB?.challenged}
                        </div>

                        <div
                            className={`${!match?.winner
                                ? "bg-orange-500"
                                : setC.challenger < setA.challenged
                                    ? "bg-lime-600"
                                    : "bg-gray-400"
                                } border px-[10px]`}
                        >
                            {setC?.challenged}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
