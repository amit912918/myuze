'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import useDashboard from '../../hooks/useDashboard';

export default function SeeAllClient() {

    const router = useRouter();
    const { setDetailData } = useDashboard();

    const searchParams = useSearchParams();
    const heading = searchParams?.get('heading');

    const handleDetail = (conId: number, conName: string, imgIrl: string) => {
        setDetailData({ conId, bkName: "bkName", conName, imgIrl });
        router.push(`/dashboard/details?conId=${encodeURIComponent(conId)}`);
    };

    // useEffect(() => {
    //     console.log(JSON.parse(localStorage.getItem('seeAllData') || ""), "seeallData");
    // })

    return (
        <div>
            <div className="flex items-center gap-24 mb-6">
                <IoArrowBackOutline onClick={() => router.back()} className='cursor-pointer' size={24} />
                <h2 className="text-lg font-semibold">{heading}</h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {localStorage.getItem('seeAllData') && JSON.parse(localStorage.getItem('seeAllData') || "")?.map((item: any, idx: any) => (
                    <div key={idx} className="text-center">
                        <div onClick={() => handleDetail(item.conId || item.podcast_id, item.conName, item.imgIrl)} className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer">
                            <Image
                                src={item.imgIrl}
                                alt={item.conName}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-2 right-2">
                                <Image style={{ borderRadius: "20%" }} src="/images/myuze1.jpeg" alt="Badge" width={20} height={20} />
                            </div>
                        </div>
                        <p className="mt-2 text-xs font-medium">{item.conName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
