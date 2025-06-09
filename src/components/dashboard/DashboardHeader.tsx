'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';

// const slides = [
//     {
//         src: '/images/subImage1.png',
//         title: 'IKIGAI',
//         subtitle: 'The Japanese secret to a long life',
//     },
//     {
//         src: '/images/subImage1.png',
//         title: 'Atomic Habits',
//         subtitle: 'Tiny changes, big results',
//     },
//     {
//         src: '/images/subImage1.png',
//         title: 'Deep Work',
//         subtitle: 'Focus without distraction',
//     },
// ];

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

const HeaderSlider = ({ data }: { data: SpotlightBlock }) => {

    const router = useRouter();

    const handleDetail = (conId: number) => {
        router.push(`/dashboard/details?conId=${encodeURIComponent(conId)}`);
    };

    return (
        <div>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="rounded-xl"
            >
                {data.contents.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div style={{ height: "336px" }} className="relative">
                            <Image
                                src={slide.imgIrl}
                                alt={slide.conName}
                                fill
                                className="rounded-xl object-cover"
                            />
                            <div style={{ marginTop: "55%" }} className="absolute inset-0 flex items-center justify-center text-sm">
                                {/* <Button onClick={handleListen} size='small' className="bg-white">Listen Now</Button> */}
                                <button onClick={() => handleDetail(slide.conId)} style={{ borderRadius: "5px" }} className="bg-white text-black font-semibold px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer">
                                    Listen Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* You can adjust pagination styling if needed using Tailwind */}
        </div>
    );
}

export default HeaderSlider;