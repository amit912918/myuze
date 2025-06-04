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

const SquareShape = ({ data }: { data: SquareBlock }) => {
    const router = useRouter();
    const { setDetailData } = useDashboard();

    const handleDetail = (bkName: string, conName: string, imgIrl: string) => {
        setDetailData({ bkName, conName, imgIrl });
        router.push('/dashboard/details');
    };

    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <h2 className="text-lg font-semibold">{data.bkName}</h2>
                <a href="#" className="text-purple-600 text-sm font-medium">See All</a>
            </div>

            <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
                <div className="flex gap-4">
                    {data.contents.map((item) => (
                        <div key={item.conId} className="min-w-[160px] flex-shrink-0" onClick={() => handleDetail(data.bkName, item.conName, item.imgIrl)}>
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
