'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';
import useDashboard from '../../../hooks/useDashboard';
import { useRouter } from 'next/navigation';

type SquareContent = {
    conId: number;
    conName: string;
    imgIrl: string;
    cotDeepLink: string;
    artist_name: string;
    is_billable: number;
    ptype: string;
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

const SquareShape = ({ data }: { data: SquareBlock }) => {
    const router = useRouter();
    const { setDetailData, setSeeAllData } = useDashboard();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data?.contents?.length > 0) {
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [data]);

    const handleDetail = (conId: number, bkName: string, conName: string, imgIrl: string) => {
        setDetailData({ conId, bkName, conName, imgIrl });
        router.push(`/dashboard/podcast?conId=${encodeURIComponent(conId)}`);
    };

    const handleSeeAll = (item: SquareContent[]) => {
        router.push(`/dashboard/seeall?heading=${encodeURIComponent(data.bkName)}`);
        setSeeAllData(item);
        localStorage.setItem('seeAllData', JSON.stringify(item));
    };

    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <h2 className="text-gray-900 text-xl font-semibold">{data.bkName}</h2>
                <div
                    style={{ color: "#6B0DFF" }}
                    onClick={() => handleSeeAll(data.contents)}
                    className="font-semibold cursor-pointer"
                >
                    See All
                </div>
            </div>

            {loading ? (
                <div 
                style={{
                    scrollbarWidth: 'none',        // Firefox
                    msOverflowStyle: 'none'        // IE 10+
                }} 
                className="flex gap-4 overflow-x-auto no-scrollbar"
                >
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="min-w-[150px] h-[150px] rounded-lg bg-gray-300 animate-pulse" />
                    ))}
                </div>
            ) : (
                <div 
                style={{
                    scrollbarWidth: 'none',        // Firefox
                    msOverflowStyle: 'none'        // IE 10+
                }}
                className="overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                    <div className="flex gap-4">
                        {data.contents.map((item) => (
                            <div
                                key={item.conId}
                                className="relative min-w-[150px] flex-shrink-0 cursor-pointer"
                                onClick={() =>
                                    handleDetail(item.conId, data.bkName, item.conName, item.imgIrl)
                                }
                            >
                                <Image
                                    src={item.imgIrl || "/images/fallback.png"}
                                    alt={item.conName}
                                    width={150}
                                    height={150}
                                    className="rounded-lg object-cover"
                                />
                                <div className="absolute top-2 right-2">
                                    <Image
                                        style={{ borderRadius: "20%" }}
                                        src="/images/myuze1.jpeg"
                                        alt="Badge"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SquareShape;
