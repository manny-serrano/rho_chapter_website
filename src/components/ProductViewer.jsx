import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const ProductViewer = () => {
  const sectionRef = useRef(null);
  const timelineItems = [
    {
      text: "In the summer of 1981 at Cornell University, a group of Latino students began discussing the need for a Latino fraternity on campus. At the time, Latinos had limited options—joining either traditionally white or traditionally black fraternities. These conversations evolved from informal discussions into a vision for something different: a fraternity focused on Latino unity, culture, and academic excellence",
      
      background: "/cornelltower.jpg",
    },
    {
      text: "On September 15, 1981, La Unidad Latina was officially registered with Cornell University as a club, with plans to transition into a full fraternity. The core group gradually expanded, and from approximately 30 interested men, 13 committed members emerged to form the foundation of what would become Lambda Upsilon Lambda Fraternity.",
      background: "/ithaca-4904558_1920.jpg",
    },
    {
      text: "The 13 Founding Fathers who established La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc. are: 1. Hermano William Barba, 2. Hermano Dennis DeJesus, 3. Hermano Hernando Londoño, 4. Hermano Jesse Luis, 5. Hermano Samuel Ramos, 6. Hermano Tomas Rincon, 7. Hermano Edwin Rivera, 8. Hermano Mario Rivera, 9. Hermano Victor Rodriguez, 10. Hermano Victor Silva, 11. Hermano Jose Torres, 12. Hermano Henry Villareal (Faculty Advisor), 13. Hermano Jim Ziebell (Cornell Administrator). Honorary Founder: Hermano Angel Montañez.",
      background: "/headergold.png",
    },
    {
      text: "The Mission & Purpose LUL was born from the need to address the limited Latino presence at Cornell and the lack of a focal point for Latino culture. Existing Latino student organizations didn't provide enough unity, and divisions existed among Latino students. The fraternity was created to offer a place for cultural expression, brotherhood, and unity—a home where students could find their cultural roots and build lifelong commitments to Latino empowerment and leadership within their communities.",
      background: "/foundinghermanos.png",
    },
  ];

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(
        sectionRef.current?.querySelectorAll(".horizontal-scroll-container") ?? []
      );

      horizontalSections.forEach((sec) => {
        const pinWrap = sec.querySelector(".pin-wrap");
        const animationWrap = pinWrap?.querySelector(".animation-wrap-right");

        if (!pinWrap || !animationWrap) return;

        const computeDistance = () => {
          const pinWidth = pinWrap.offsetWidth || window.innerWidth;
          return animationWrap.scrollWidth - pinWidth;
        };

        gsap.to(
          animationWrap,
          {
            x: () => {
              const distance = computeDistance();
              return distance > 0 ? -distance : 0;
            },
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top top",
              end: () => "+=" + Math.max(computeDistance(), 0),
              pin: pinWrap,
              invalidateOnRefresh: true,
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="product-viewer" ref={sectionRef}>

        <h2 className="text-[#EEAA00]"> Explore Our History</h2>
        

        <div className="horizontal-scroll-container">
          <div className="pin-wrap">
            <div className="animation-wrap-right">
              {timelineItems.map((item, index) => {
                const backgroundStyles = item.background
                  ? {
                      backgroundImage: `linear-gradient(135deg, rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.25)), url(${item.background})`,
                    }
                  : undefined;

                return (
                  <div
                    key={`timeline-item-${index}`}
                    className={`item${item.icon ? " item-with-icon" : ""}${item.background ? " item-with-background" : ""}`}
                    style={backgroundStyles}
                  >
                    <p>{item.text}</p>
                    {item.icon && (
                      <img
                        src={item.icon.src}
                        alt={item.icon.alt}
                        className="timeline-icon"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-10">

        <a 
            href="https://www.launidadlatina.org/" className="relative inline-block text-[#EEAA00]  transition-colors duration-300 hover:text-[#FFD369] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFD369] after:transition-all after:duration-300 hover:after:w-full"
            >
        Learn more about 1982. 
        </a>

        </div>
       
       
             
        
    </section>
   
  )
}

export default ProductViewer; 