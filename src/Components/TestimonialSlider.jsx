import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules'; 
import TestiImag1 from './images/testi-img1.png';
import TestiImag2 from './images/testi-img2.jpg';
import TestiImag3 from './images/testi-img3.jpg';
import TestiImag4 from './images/testi-img4.png';
import TestiImag5 from './images/testi-img5.jpg';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './TestimonialSlider.css';

const testimonials = [
  {
    avatar: TestiImag1,
    name: 'John Doe',
    role: 'Freelance Designer',
    text: 'Working with Xiomi was outstanding—they nailed every detail.',
  },
  {
    avatar: TestiImag2,
    name: 'Sarah Smith',
    role: 'Creative Director',
    text: 'Super clean and intuitive interface, highly recommended!',
  },
  {
    avatar: TestiImag3,
    name: 'Michael Brown',
    role: 'Software Engineer',
    text: 'The card animation gives it a premium feel and stands out.',
  },
  {
    avatar: TestiImag4,
    name: 'Emily Johnson',
    role: 'Marketing Specialist',
    text: 'A fantastic experience from start to finish, love the design!',
  },
  {
    avatar: TestiImag5,
    name: 'David Wilson',
    role: 'Product Manager',
    text: 'The testimonials slider is a great addition, very engaging.',
  }
];

export default function TestimonialSlider() {
  return (
    <div className="container py-5">
      <div className="mx-auto testimonial-cards" style={{ maxWidth: '90%' }}>
        <Swiper
          effect="cards"
          grabCursor
          loop={true}
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="testimonial-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="card shadow-sm p-5 text-center">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <p className="fst-italic mb-3">"{t.text}"</p>
                <h5 className="fw-bold mb-1">{t.name}</h5>
                <small className="text-muted">{t.role}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}