import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { performanceImages, performanceImgPositions } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 1024;

    // Text animation - fade in and move up
    gsap.from('.content p', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.content',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Desktop only: Image timeline with scrubbed scroll
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });

      // Apply all image animations at time 0, skipping p5
      performanceImgPositions.forEach((position) => {
        if (position.id === 'p5') return; // Skip p5

        const xPos = position.left !== undefined ? `${position.left}%` : `${-position.right}%`;
        const yPos = `${-position.bottom}%`;

        tl.to(`.${position.id}`, {
          x: xPos,
          y: yPos,
          ease: 'power2.inOut',
        }, 0); // All animations at time 0
      });
    }

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: sectionRef });

  return (
    <section id="performance" ref={sectionRef}>
      <h2>
        Be part of something great. Something ELITE.
      </h2>
      <div className="wrapper">
        {performanceImages.map(({id, src}) => (
          <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          La Unidad Latina, Lambda Upsilon Lambda Fraternity, Incorporated primarily seeks to take a leadership role in
          meeting the needs of the Latino community through
          {' '} <span className="text-white"> academic achievement, cultural awareness, community service and promotion of the Latino culture and people.</span>
          {' '}
        </p>
      </div>
    </section>
  )
}

export default Performance
