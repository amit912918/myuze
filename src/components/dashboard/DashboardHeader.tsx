'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from 'primereact/button';

const slides = [
    {
        src: '/images/subImage1.png',
        title: 'IKIGAI',
        subtitle: 'The Japanese secret to a long life',
    },
    {
        src: '/images/subImage1.png',
        title: 'Atomic Habits',
        subtitle: 'Tiny changes, big results',
    },
    {
        src: '/images/subImage1.png',
        title: 'Deep Work',
        subtitle: 'Focus without distraction',
    },
];

export default function HeaderSlider() {
    return (
        <div className="w-full max-w-sm mx-auto">
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="rounded-xl"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-64">
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                fill
                                className="rounded-xl object-cover"
                            />
                            <div className="absolute bottom-4 left-4 py-2 rounded-lg">
                                <Button className="bg-white">Listen Now</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* You can adjust pagination styling if needed using Tailwind */}
        </div>
    );
}
