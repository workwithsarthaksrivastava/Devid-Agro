import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
// Since we have limited real photos, we will use Unsplash for these specific scenes to maintain ultra-high quality.
const SCENES = [
  {
    title: "Freshness Begins at the Source",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Farm"
  },
  {
    title: "Direct Farmer & Mandi Sourcing",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Procurement"
  },
  {
    title: "Every Product Carefully Inspected",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Quality Check"
  },
  {
    title: "Packed For Freshness",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Packaging"
  },
  {
    title: "Delivered Across Retail Networks",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Distribution"
  },
  {
    title: "Trusted By Businesses Across Bihar",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Client Delivery"
  }
];

function SceneComponent({ 
  scene, 
  idx, 
  totalScenes, 
  scrollYProgress 
}: { 
  key?: React.Key,
  scene: any, 
  idx: number, 
  totalScenes: number, 
  scrollYProgress: any 
}) {
  const start = idx / totalScenes;
  const end = (idx + 1) / totalScenes;
  
  const inputs1 = [
    Math.max(0, start), 
    Math.max(0.001, start + 0.02), 
    Math.max(0.002, end - 0.02), 
    Math.max(0.003, end)
  ];
  inputs1[1] = Math.max(inputs1[0] + 0.001, inputs1[1]);
  inputs1[2] = Math.max(inputs1[1] + 0.001, inputs1[2]);
  inputs1[3] = Math.max(inputs1[2] + 0.001, inputs1[3]);

  const opacity = useTransform(
    scrollYProgress,
    inputs1,
    [0, 1, 1, 0]
  );

  const inputs2 = [Math.max(0, start), Math.max(0.001, end)];
  inputs2[1] = Math.max(inputs2[0] + 0.001, inputs2[1]);

  const scale = useTransform(
    scrollYProgress,
    inputs2,
    [1.05, 1.15]
  );
  
  const yText = useTransform(
    scrollYProgress,
    inputs1,
    [50, 0, 0, 0]
  );

  const opacityText = useTransform(
    scrollYProgress,
    inputs1,
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ opacity, pointerEvents: "none" }}
    >
      <div className="absolute inset-0">
        <motion.img 
          src={scene.image} 
          alt={scene.title}
          className="w-full h-full object-cover"
          style={{ scale }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
         <motion.p 
           style={{ opacity: opacityText, y: yText }}
           className="text-primary-accent uppercase tracking-[0.2em] font-bold text-sm lg:text-base"
         >
           Scene {idx + 1} — {scene.subtitle}
         </motion.p>
         <motion.h2
           style={{ opacity: opacityText, y: yText }}
           className="text-4xl lg:text-7xl font-extrabold text-white max-w-4xl tracking-tight leading-tight"
         >
           {scene.title}
         </motion.h2>
      </div>
    </motion.div>
  );
}

export function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {SCENES.map((scene, idx) => (
          <SceneComponent 
            key={scene.title} 
            scene={scene} 
            idx={idx} 
            totalScenes={SCENES.length} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>
    </section>
  );
}
