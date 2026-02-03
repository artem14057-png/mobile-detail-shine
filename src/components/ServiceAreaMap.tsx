import { useLanguage } from "@/contexts/LanguageContext";

const ServiceAreaMap = () => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
      <h3 className="text-2xl font-bold mb-6">{t.contact.mapTitle}</h3>
      
      {/* SVG Map of Latvia with Riga zones */}
      <div className="relative aspect-[4/3] w-full">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background - subtle grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            
            {/* Gradients for zones */}
            <radialGradient id="greenZone" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(142, 76%, 36%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(142, 76%, 36%)" stopOpacity="0.4" />
            </radialGradient>
            
            <radialGradient id="yellowZone" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(48, 96%, 53%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(48, 96%, 53%)" stopOpacity="0.2" />
            </radialGradient>

            {/* Glow effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid background */}
          <rect width="400" height="300" fill="url(#grid)" />
          
          {/* Simplified Latvia outline */}
          <path
            d="M 50 80 
               C 70 60, 120 50, 180 55
               C 220 55, 260 60, 300 70
               C 330 80, 360 90, 370 110
               C 375 130, 370 150, 360 170
               C 350 190, 340 200, 320 210
               C 290 225, 250 230, 200 235
               C 150 238, 100 235, 70 220
               C 50 210, 40 190, 35 160
               C 30 130, 35 100, 50 80 Z"
            fill="hsl(var(--secondary))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* Gulf of Riga (water) */}
          <path
            d="M 50 80 
               C 70 90, 100 95, 130 100
               C 150 105, 170 115, 180 130
               C 170 120, 140 115, 110 110
               C 80 105, 50 95, 50 80 Z"
            fill="hsl(210, 50%, 30%)"
            opacity="0.3"
          />

          {/* 30km Yellow Zone (larger circle) */}
          <circle
            cx="200"
            cy="140"
            r="75"
            fill="url(#yellowZone)"
            stroke="hsl(48, 96%, 53%)"
            strokeWidth="2"
            strokeDasharray="8 4"
            filter="url(#glow)"
          />
          
          {/* Riga Green Zone (inner circle) */}
          <circle
            cx="200"
            cy="140"
            r="40"
            fill="url(#greenZone)"
            stroke="hsl(142, 76%, 36%)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          
          {/* Riga center point */}
          <circle
            cx="200"
            cy="140"
            r="6"
            fill="hsl(142, 76%, 36%)"
            stroke="hsl(0, 0%, 100%)"
            strokeWidth="2"
          />
          
          {/* City label - RIGA */}
          <text
            x="200"
            y="155"
            textAnchor="middle"
            className="fill-foreground font-bold text-sm"
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            RĪGA
          </text>
          
          {/* Nearby cities/towns for reference */}
          <g className="fill-muted-foreground" style={{ fontSize: '10px' }}>
            <circle cx="145" cy="110" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
            <text x="145" y="100" textAnchor="middle">Jūrmala</text>
            
            <circle cx="260" cy="120" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
            <text x="260" y="110" textAnchor="middle">Sigulda</text>
            
            <circle cx="170" cy="180" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
            <text x="170" y="195" textAnchor="middle">Jelgava</text>
            
            <circle cx="240" cy="175" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
            <text x="240" y="190" textAnchor="middle">Ogre</text>
          </g>

          {/* Distance markers */}
          <g className="fill-muted-foreground" style={{ fontSize: '9px' }}>
            <text x="200" y="95" textAnchor="middle" opacity="0.7">~30 km</text>
          </g>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[hsl(142,76%,36%)] shadow-[0_0_10px_hsl(142,76%,36%,0.5)]" />
          <span className="text-sm">
            <span className="font-semibold text-[hsl(142,76%,36%)]">{t.contact.greenZone}</span>
            <span className="text-muted-foreground"> — {t.contact.greenZoneDesc}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[hsl(48,96%,53%)] shadow-[0_0_10px_hsl(48,96%,53%,0.5)]" />
          <span className="text-sm">
            <span className="font-semibold text-[hsl(48,96%,53%)]">{t.contact.yellowZone}</span>
            <span className="text-muted-foreground"> — {t.contact.yellowZoneDesc}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
