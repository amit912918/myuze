'use client'

import React, { useEffect, useState } from "react";
import { handleHome } from "../../api/home";
import { showError } from "../../../utils/toastService";
import SquareShape from "../../../components/dashboard/home/SquareShape";
import HeaderSlider from "../../../components/dashboard/DashboardHeader";

type SpotlightContent = {
    conId: number;
    conName: string;
    imgIrl: string;
    cotDeepLink: string;
    spotlight_type: string;
    btn_tag: string;
};

type SquareContent = {
    conId: number;
    conName: string;
    imgIrl: string;
    cotDeepLink: string;
    artist_name: string;
    is_billable: number;
    ptype: string;
};

type SpotlightBlock = {
    bkId: number;
    bkName: string;
    bkType: string;
    shapeType: 'spotlight';
    zoom: number;
    itype: number;
    contents: SpotlightContent[];
};

type SquareBlock = {
    bkId: number;
    bkName: string;
    bkType: string;
    shapeType: 'square';
    zoom: number;
    itype: number;
    contents: SquareContent[];
};

type Block = SpotlightBlock | SquareBlock;

type HomeData = {
    [key: string]: Block[];
};


const Page = () => {

    const [homeData, setHomeData] = useState();

    const getHomeData = async () => {
        try {
            const res = await handleHome();
            console.log(res.response.home, "result");
            setHomeData(res.response.home)
            // router.push('/auth/verification');
        } catch (error) {
            console.log("Error in login api", error);
            showError("Home data fetch failed");
        }
    }

    useEffect(() => {
        getHomeData();
    }, [])

    const renderBlocks = () => {
        if (!homeData) return null;

        return Object.keys(homeData).map((key) => {
            const blockArray = (homeData as HomeData)[key];
            if (!Array.isArray(blockArray) || blockArray.length === 0) return null;

            const shapeType = blockArray[0].shapeType;

            if (shapeType === "square") {
                return <SquareShape key={key} data={blockArray[0]} />;
            }

            if (shapeType === "spotlight") {
                // return <SpotLight key={key} data={blockArray[0]} />;
                return <HeaderSlider key={key} data={blockArray[0]} />;
            }

            return null;
        });
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg mb-12">
            {renderBlocks()}
        </div>
    )
}

export default Page