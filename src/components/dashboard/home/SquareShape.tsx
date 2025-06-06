import Image from 'next/image'
import React from 'react'
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

interface ContentProps {
    conId: number;
    conName: string;
    imgIrl: string;
    cotDeepLink: string;
    spotlight_type: string;
    btn_tag: string;
}

const SquareShape = ({ data }: { data: SquareBlock }) => {
    const router = useRouter();
    const { setDetailData, setSeeAllData } = useDashboard();

    const handleDetail = (conId: number, bkName: string, conName: string, imgIrl: string) => {
        setDetailData({ conId, bkName, conName, imgIrl });
        router.push('/dashboard/details');
    };

    const handleSeeAll = (item: SquareContent[]) => {
        router.push(`/dashboard/seeall?heading=${encodeURIComponent(data.bkName)}`);

        setSeeAllData(item)
    }

    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <h2 className="text-lg font-semibold">{data.bkName}</h2>
                <div onClick={() => handleSeeAll(data.contents)} className="text-purple-600 text-sm font-medium cursor-pointer">See All</div>
            </div>

            <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
                <div className="flex gap-4">
                    {data.contents.map((item) => (
                        <div key={item.conId} className="min-w-[160px] flex-shrink-0 cursor-pointer" onClick={() => handleDetail(item.conId, data.bkName, item.conName, item.imgIrl)}>
                            <Image
                                src={item.imgIrl || "/images/fallback.png"}
                                alt={item.conName}
                                width={160}
                                height={160}
                                className="w-40 h-40 rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SquareShape;
