import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const LazySection = ({
  children,
  fallback,
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "200px",
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return (
    <div ref={ref}>
      <Suspense fallback={fallback}>{inView ? children : fallback}</Suspense>
    </div>
  );
};

export default LazySection;
