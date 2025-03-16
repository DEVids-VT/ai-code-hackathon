import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  accent?: 'blue' | 'orange' | 'purple' | 'green' | 'gray' | 'white';
  align?: 'left' | 'center';
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  children,
  accent = 'white',
  align = 'left',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const getBgColor = () => {
    switch (accent) {
      case 'blue':
        return 'bg-guide-blue/5';
      case 'orange':
        return 'bg-guide-orange/5';
      case 'purple':
        return 'bg-guide-purple/5';
      case 'green':
        return 'bg-guide-green/5';
      case 'gray':
        return 'bg-guide-gray';
      default:
        return 'bg-white';
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`guide-section ${getBgColor()}`}>
      <div className="guide-container">
        <div
          className={`section-header ${
            align === 'center' ? 'items-center text-center' : ''
          }`}>
          <h2 ref={titleRef} className="section-title reveal-animation">
            {title}
          </h2>
          {description && (
            <p
              ref={descriptionRef}
              className="section-description reveal-animation">
              {description}
            </p>
          )}
        </div>
        <div ref={contentRef} className="reveal-animation">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
