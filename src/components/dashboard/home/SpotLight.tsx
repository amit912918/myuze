import Image from 'next/image';
import React, { useEffect } from 'react';
import { Play, MoreHorizontal, Download, List } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SpotlightContent {
    conId: number;
    conName: string;
    imgIrl: string;
    cotDeepLink: string;
    spotlight_type: string;
    btn_tag: string;
}

interface SpotlightBlock {
    bkId: number;
    bkName: string;
    bkType: string;
    shapeType: 'spotlight';
    zoom: number;
    itype: number;
    contents: SpotlightContent[];
}

const SpotLight = ({ data }: { data: SpotlightBlock }) => {
    const router = useRouter();

    const handlePlay = () => {
        router.push('/dashboard/prodcast');
    };

    useEffect(() => {
        console.log(data, 'data');
    }, [data]);

    return (
        <div>
            <div className="flex justify-between items-center my-4">
                <h2 className="text-lg font-semibold">{data.bkName}</h2>
                <a href="#" className="text-purple-600 text-sm font-medium">See All</a>
            </div>

            <div className="flex gap-4 items-center bg-white rounded-xl shadow p-4">
                <Image
                    src={data.contents[0]?.imgIrl || '/images/playListImage.png'}
                    alt={data.contents[0]?.conName || 'Spotlight'}
                    width={200}
                    height={200}
                    className="w-40 h-40 rounded-lg object-cover"
                />

                <div className="flex flex-col flex-1">
                    <h3 className="text-lg text-black font-semibold leading-tight">{data.contents[0]?.conName}</h3>
                    <p className="text-sm text-gray-500">Apple Talk &nbsp; | &nbsp; 52:27 mins</p>

                    <div className="flex items-center mt-3 gap-2">
                        <button onClick={handlePlay} className="bg-pink-600 text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2 cursor-pointer">
                            <Play size={16} /> Play
                        </button>
                        <button><List size={20} className="text-gray-600" /></button>
                        <button><Download size={20} className="text-gray-600" /></button>
                        <button><MoreHorizontal size={20} className="text-gray-600" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotLight;
