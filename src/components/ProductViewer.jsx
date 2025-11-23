import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const ProductViewer = () => {
  const sectionRef = useRef(null);
  const timelineItems = [
    {
      text: <>In the summer of 1981 at  <span style={{color: '#EEAA00'}}>Cornell University</span>, a group of Latino students began discussing the need for a Latino fraternity on campus. At the time, Latinos had limited options: joining either traditionally white or traditionally black fraternities. These conversations evolved from informal discussions into a vision for something different: a fraternity focused on  <span style={{color: '#EEAA00'}}> Latino unity, culture, and academic excellence.</span></>,
      
      background: "/cornelltower.jpg",
    },
    {
      text: <>On September 15, 1981, <span style={{color: '#EEAA00'}}> La Unidad Latina</span> was officially registered with Cornell University as a club. From approximately 30 interested men, <span style={{color: '#EEAA00'}}> 13 </span>committed members emerged. On <span style={{color: '#EEAA00'}}> Friday, February 19, 1982</span>, an initiation ceremony was held at Henry Villareal's home, where the group formally took their oaths and became the Founding Fathers (Los Fundadores) of<span style={{color: '#EEAA00'}}> La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.</span>  February 19, 1982 is recognized as the official founding date of La Fraternidad.</>,
      background: "/ithaca-4904558_1920.jpg",
    },
    {
      text: (
        <>
          <h3 className="timeline-title"><span style={{color: '#EEAA00'}}> The Founding Fathers of La Unidad Latina are:</span></h3>
          <ol className="founders-list">
            <li>Hermano William Barba</li>
            <li>Hermano Dennis DeJesus</li>
            <li>Hermano Hernando Londoño</li>
            <li>Hermano Jesse Luis</li>
            <li>Hermano Samuel Ramos</li>
            <li>Hermano Tomas Rincon</li>
            <li>Hermano Edwin Rivera</li>
            <li>Hermano Mario Rivera</li>
            <li>Hermano Victor Rodriguez</li>
            <li>Hermano Victor Silva</li>
            <li>Hermano Jose Torres</li>
            <li>Hermano Henry Villareal (Faculty Advisor)</li>
            <li>Hermano Jim Ziebell (Cornell Administrator)</li>
          </ol>
          <p className="timeline-footer">*Honorary Founder: Hermano Angel Montañez</p>
        </>
      ),
      background: "/headergold.png",
    },
    {
      text: <>Today,  <span style={{color: '#EEAA00'}}> La Fraternidad </span>has expanded far beyond Cornell, with chapters across the United States fulfilling the founders' vision to spread Latino unity and culture throughout the nation. As the premier Latino Greek organization,<span style={{color: '#EEAA00'}}> LUL</span> continues to develop the next generation of Latino leaders through mentorship, networking, and community service. Our mission remains steadfast: to <span style={{color: '#EEAA00'}}> unite Latinos across America, celebrate our rich cultural heritage, and empower our communities through brotherhood, academic excellence, and lifelong service.</span> </>,
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
                    <div className="timeline-copy">{item.text}</div>
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