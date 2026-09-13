import React, { useState, useEffect, useRef, useCallback } from "react";
const S = { stroke: "#2d2318", strokeWidth: 2.5, strokeLinejoin: "round" };
const W = { fill: "#f7f1e4" };

const ART = {
  fireplace: (
    <>
      <rect x="-5" y="0" width="82" height="12" rx="3" fill="#ece4d6" {...S} />
      <rect x="0" y="12" width="72" height="68" fill="#d9d0c0" {...S} />
      <rect x="14" y="30" width="44" height="50" fill="#3a3330" {...S} />
      <polygon points="36,76 27,80 31,63 36,70 42,62 45,80" fill="#f2701d" />
      <polygon points="36,78 31,80 34,70 36,74 39,69 41,80" fill="#f2b705" />
    </>
  ),
  piano: (
    <>
      <rect x="-3" y="0" width="90" height="9" rx="2" fill="#5c3b23" {...S} />
      <rect x="0" y="9" width="84" height="45" fill="#4a2f1c" {...S} />
      <rect x="10" y="16" width="64" height="16" fill="#6b4a2f" {...S} />
      <rect x="8" y="36" width="68" height="12" fill="#f7f1e4" {...S} />
      <rect x="16" y="36" width="5" height="7" fill="#2d2318" />
      <rect x="27" y="36" width="5" height="7" fill="#2d2318" />
      <rect x="45" y="36" width="5" height="7" fill="#2d2318" />
      <rect x="56" y="36" width="5" height="7" fill="#2d2318" />
      <rect x="67" y="36" width="5" height="7" fill="#2d2318" />
    </>
  ),
  armchair: (
    <>
      <rect x="6" y="0" width="36" height="32" rx="10" fill="#8e3a3a" {...S} />
      <rect x="0" y="26" width="48" height="14" rx="5" fill="#a34444" {...S} />
      <rect x="0" y="16" width="10" height="22" rx="5" fill="#8e3a3a" {...S} />
      <rect x="38" y="16" width="10" height="22" rx="5" fill="#8e3a3a" {...S} />
      <rect x="6" y="40" width="6" height="6" fill="#4a2f1c" />
      <rect x="36" y="40" width="6" height="6" fill="#4a2f1c" />
    </>
  ),
  mirror: (
    <>
      <ellipse cx="18" cy="22" rx="18" ry="24" fill="#f2b705" {...S} />
      <ellipse cx="18" cy="22" rx="12" ry="18" fill="#cfe8f2" {...S} />
      <path d="M10 30 L22 12" stroke="#fff" strokeWidth="3" fill="none" />
    </>
  ),
  chandelier: (
    <>
      <line x1="20" y1="0" x2="20" y2="12" {...S} />
      <ellipse cx="20" cy="20" rx="20" ry="7" fill="#f2b705" {...S} />
      <rect x="2" y="12" width="5" height="10" fill="#f7f1e4" {...S} />
      <rect x="17" y="9" width="5" height="12" fill="#f7f1e4" {...S} />
      <rect x="33" y="12" width="5" height="10" fill="#f7f1e4" {...S} />
      <circle cx="4" cy="10" r="2.5" fill="#f2701d" />
      <circle cx="19" cy="7" r="2.5" fill="#f2701d" />
      <circle cx="35" cy="10" r="2.5" fill="#f2701d" />
    </>
  ),
  table: (
    <>
      <rect x="0" y="0" width="94" height="10" rx="3" fill="#7a4b26" {...S} />
      <rect x="8" y="10" width="8" height="30" fill="#6b4a2f" {...S} />
      <rect x="78" y="10" width="8" height="30" fill="#6b4a2f" {...S} />
      <rect x="40" y="-6" width="14" height="8" fill="#c9d9e8" {...S} />
    </>
  ),
  painting: (
    <>
      <rect x="0" y="0" width="38" height="30" fill="#f2b705" {...S} />
      <rect x="5" y="5" width="28" height="20" fill="#9fc4d8" />
      <circle cx="19" cy="14" r="5" fill="#e8d2a9" />
      <rect x="12" y="19" width="14" height="6" fill="#5d4229" />
    </>
  ),
  dresser: (
    <>
      <rect x="0" y="0" width="58" height="42" fill="#6b4a2f" {...S} />
      <rect x="0" y="42" width="58" height="34" fill="#5d4229" {...S} />
      <circle cx="14" cy="10" r="6" fill="#e8e2d4" {...S} />
      <circle cx="30" cy="10" r="6" fill="#e8e2d4" {...S} />
      <circle cx="46" cy="10" r="6" fill="#e8e2d4" {...S} />
      <rect x="8" y="24" width="42" height="4" fill="#8a6741" />
      <rect x="6" y="52" width="20" height="16" fill="#7a5735" {...S} />
      <rect x="32" y="52" width="20" height="16" fill="#7a5735" {...S} />
    </>
  ),
  clock: (
    <>
      <rect x="0" y="0" width="30" height="92" fill="#6b4a2f" {...S} />
      <rect x="-4" y="-6" width="38" height="10" rx="3" fill="#7a5735" {...S} />
      <circle cx="15" cy="18" r="10" fill="#f5eddc" {...S} />
      <line x1="15" y1="18" x2="15" y2="12" {...S} />
      <line x1="15" y1="18" x2="20" y2="20" {...S} />
      <rect x="8" y="36" width="14" height="42" fill="#3a3330" {...S} />
      <circle cx="15" cy="66" r="5" fill="#f2b705" />
    </>
  ),
  stove: (
    <>
      <rect x="0" y="0" width="64" height="54" fill="#3a3330" {...S} />
      <rect x="8" y="-8" width="10" height="10" fill="#55606b" {...S} />
      <circle cx="22" cy="30" r="13" fill="#5a524c" {...S} />
      <circle cx="22" cy="30" r="5" fill="#f2701d" />
      <rect x="42" y="18" width="16" height="24" fill="#5a524c" {...S} />
      <rect x="0" y="0" width="64" height="8" fill="#55606b" {...S} />
    </>
  ),
  sink: (
    <>
      <rect x="0" y="6" width="48" height="28" rx="3" fill="#e8e2d4" {...S} />
      <path d="M14 6 L14 -8 L26 -8" fill="none" {...S} />
      <circle cx="26" cy="-8" r="3" fill="#c0b9a8" {...S} />
      <rect x="6" y="34" width="6" height="10" fill="#9a927f" />
      <rect x="36" y="34" width="6" height="10" fill="#9a927f" />
    </>
  ),
  bed: (
    <>
      <rect x="0" y="0" width="14" height="52" fill="#5d4229" {...S} />
      <rect x="82" y="18" width="12" height="34" fill="#5d4229" {...S} />
      <rect x="12" y="26" width="72" height="18" rx="3" fill="#c7d7e2" {...S} />
      <rect x="12" y="18" width="72" height="10" rx="4" fill="#f7f1e4" {...S} />
      <rect x="14" y="16" width="22" height="12" rx="5" fill="#fff" {...S} />
      <rect x="-4" y="-6" width="22" height="10" rx="3" fill="#6b4a2f" {...S} />
    </>
  ),
  wardrobe: (
    <>
      <rect x="0" y="0" width="50" height="82" fill="#6b4a2f" {...S} />
      <rect x="-4" y="-7" width="58" height="9" rx="3" fill="#7a5735" {...S} />
      <rect x="5" y="8" width="18" height="66" fill="#7a5735" {...S} />
      <rect x="27" y="8" width="18" height="66" fill="#7a5735" {...S} />
      <circle cx="24" cy="42" r="2.5" fill="#f2b705" />
    </>
  ),
  washstand: (
    <>
      <rect x="0" y="10" width="44" height="8" fill="#7a4b26" {...S} />
      <rect x="4" y="18" width="6" height="26" fill="#6b4a2f" {...S} />
      <rect x="34" y="18" width="6" height="26" fill="#6b4a2f" {...S} />
      <ellipse cx="16" cy="8" rx="13" ry="6" fill="#e8e2d4" {...S} />
      <path d="M32 10 L32 -6 L40 -6 L40 10" fill="#e8e2d4" {...S} />
    </>
  ),
  lamp: (
    <>
      <polygon points="4,0 26,0 30,16 0,16" fill="#e8b96b" {...S} />
      <rect x="13" y="16" width="4" height="48" fill="#5d4229" {...S} />
      <ellipse cx="15" cy="66" rx="14" ry="5" fill="#6b4a2f" {...S} />
    </>
  ),
  cot: (
    <>
      <rect x="0" y="0" width="6" height="44" fill="#e8e2d4" {...S} />
      <rect x="48" y="0" width="6" height="44" fill="#e8e2d4" {...S} />
      <rect x="6" y="2" width="42" height="5" fill="#e8e2d4" {...S} />
      <rect x="12" y="7" width="4" height="24" fill="#e8e2d4" />
      <rect x="25" y="7" width="4" height="24" fill="#e8e2d4" />
      <rect x="38" y="7" width="4" height="24" fill="#e8e2d4" />
      <rect x="6" y="28" width="42" height="14" rx="3" fill="#f2a3c0" {...S} />
    </>
  ),
  rockingHorse: (
    <>
      <path d="M2 44 Q28 28 54 44" fill="none" stroke="#7a4b26" strokeWidth="6" strokeLinecap="round" />
      <rect x="14" y="18" width="30" height="14" rx="5" fill="#e8e2d4" {...S} />
      <path d="M40 20 L52 8 L54 16 L46 24 Z" fill="#e8e2d4" {...S} />
      <rect x="18" y="30" width="5" height="12" fill="#e8e2d4" {...S} />
      <rect x="34" y="30" width="5" height="12" fill="#e8e2d4" {...S} />
      <path d="M12 20 L6 12 L14 14 Z" fill="#c0563c" />
      <circle cx="48" cy="13" r="1.8" fill="#2d2318" />
    </>
  ),
  dollsHouse: (
    <>
      <rect x="4" y="14" width="42" height="32" fill="#e8d2a9" {...S} />
      <polygon points="0,14 25,0 50,14" fill="#c0563c" {...S} />
      <rect x="10" y="22" width="12" height="10" fill="#8fd3ef" {...S} />
      <rect x="28" y="22" width="12" height="10" fill="#8fd3ef" {...S} />
      <rect x="18" y="34" width="14" height="12" fill="#7a4b26" {...S} />
    </>
  ),
  rug: (
    <>
      <ellipse cx="48" cy="8" rx="48" ry="9" fill="#a34444" {...S} />
      <ellipse cx="48" cy="8" rx="32" ry="5" fill="#c2645f" />
    </>
  ),
  bath: (
    <>
      <path d="M0 4 Q0 -6 12 -6 L72 -6 Q84 -6 82 8 L78 30 Q76 36 68 36 L14 36 Q6 36 4 30 Z" fill="#e08a4a" {...S} />
      <path d="M8 2 L76 2" stroke="#f2b705" strokeWidth="3" fill="none" />
      <rect x="12" y="36" width="7" height="8" fill="#9a927f" {...S} />
      <rect x="64" y="36" width="7" height="8" fill="#9a927f" {...S} />
    </>
  ),
  toilet: (
    <>
      <rect x="2" y="0" width="28" height="20" fill="#e8e2d4" {...S} />
      <line x1="16" y1="20" x2="16" y2="30" {...S} />
      <circle cx="16" cy="32" r="3" fill="#f2b705" />
      <rect x="6" y="34" width="20" height="10" fill="#e8e2d4" {...S} />
      <ellipse cx="16" cy="46" rx="14" ry="8" fill="#f7f1e4" {...S} />
      <rect x="10" y="50" width="12" height="6" fill="#e8e2d4" {...S} />
    </>
  ),
  towelRail: (
    <>
      <rect x="0" y="0" width="5" height="34" fill="#9a927f" {...S} />
      <rect x="33" y="0" width="5" height="34" fill="#9a927f" {...S} />
      <rect x="0" y="4" width="38" height="4" fill="#9a927f" {...S} />
      <rect x="8" y="8" width="12" height="24" fill="#cfe8f2" {...S} />
      <rect x="22" y="8" width="10" height="20" fill="#f2a3c0" {...S} />
    </>
  ),
  sashWindow: (
    <>
      <rect x="-4" y="-4" width="52" height="64" fill="#e8e2d4" {...S} />
      <rect x="0" y="0" width="44" height="56" fill="#cfe8f2" {...S} />
      <line x1="22" y1="0" x2="22" y2="56" {...S} />
      <line x1="0" y1="28" x2="44" y2="28" {...S} />
      <line x1="0" y1="14" x2="44" y2="14" stroke="#2d2318" strokeWidth="1.5" />
      <line x1="0" y1="42" x2="44" y2="42" stroke="#2d2318" strokeWidth="1.5" />
    </>
  ),
  tree: (
    <>
      <rect x="26" y="44" width="14" height="34" fill="#6b4a2f" {...S} />
      <circle cx="33" cy="30" r="30" fill="#3f8f3a" {...S} />
      <circle cx="16" cy="42" r="16" fill="#4ba043" {...S} />
      <circle cx="50" cy="42" r="16" fill="#4ba043" {...S} />
    </>
  ),
  shed: (
    <>
      <rect x="0" y="16" width="60" height="44" fill="#7a5735" {...S} />
      <polygon points="-6,16 30,-2 66,16" fill="#5d4229" {...S} />
      <rect x="8" y="26" width="16" height="14" fill="#8fd3ef" {...S} />
      <rect x="34" y="26" width="18" height="34" fill="#6b4a2f" {...S} />
      <circle cx="48" cy="44" r="2.5" fill="#f2b705" />
    </>
  ),
  greenhouse: (
    <>
      <rect x="0" y="14" width="58" height="42" fill="#cfe8f2" fillOpacity="0.75" {...S} />
      <polygon points="-4,14 29,-4 62,14" fill="#dff4fc" fillOpacity="0.8" {...S} />
      <line x1="19" y1="14" x2="19" y2="56" {...S} />
      <line x1="39" y1="14" x2="39" y2="56" {...S} />
      <line x1="0" y1="34" x2="58" y2="34" {...S} />
    </>
  ),
  bench: (
    <>
      <rect x="0" y="0" width="62" height="7" fill="#7a5735" {...S} />
      <rect x="0" y="10" width="62" height="7" fill="#7a5735" {...S} />
      <rect x="0" y="20" width="62" height="7" fill="#8a6741" {...S} />
      <rect x="4" y="27" width="7" height="14" fill="#5d4229" {...S} />
      <rect x="51" y="27" width="7" height="14" fill="#5d4229" {...S} />
    </>
  ),
  flowerBed: (
    <>
      <ellipse cx="40" cy="26" rx="40" ry="12" fill="#6b4a2f" {...S} />
      <circle cx="16" cy="16" r="6" fill="#e03b3b" {...S} />
      <circle cx="34" cy="10" r="6" fill="#f2b705" {...S} />
      <circle cx="54" cy="14" r="6" fill="#8e44d0" {...S} />
      <circle cx="68" cy="20" r="5" fill="#f2701d" {...S} />
      <line x1="16" y1="22" x2="16" y2="28" stroke="#3f8f3a" strokeWidth="3" />
      <line x1="34" y1="16" x2="34" y2="28" stroke="#3f8f3a" strokeWidth="3" />
      <line x1="54" y1="20" x2="54" y2="28" stroke="#3f8f3a" strokeWidth="3" />
    </>
  ),
  birdBath: (
    <>
      <ellipse cx="22" cy="6" rx="22" ry="8" fill="#c0b9a8" {...S} />
      <ellipse cx="22" cy="4" rx="15" ry="5" fill="#8fd3ef" />
      <rect x="16" y="12" width="12" height="26" fill="#c0b9a8" {...S} />
      <ellipse cx="22" cy="40" rx="18" ry="6" fill="#c0b9a8" {...S} />
    </>
  ),
  washingLine: (
    <>
      <rect x="0" y="0" width="5" height="52" fill="#7a5735" {...S} />
      <rect x="75" y="0" width="5" height="52" fill="#7a5735" {...S} />
      <path d="M2 4 Q40 16 78 4" fill="none" {...S} />
      <rect x="14" y="9" width="14" height="18" fill="#cfe8f2" {...S} />
      <rect x="34" y="12" width="12" height="16" fill="#f2a3c0" {...S} />
      <rect x="52" y="10" width="14" height="20" fill="#f7f1e4" {...S} />
    </>
  ),
};

const BRICK = "#a04a3a";
const BRICK2 = "#8e4133";
const SLATE = "#55606b";

ART.wallUp = (
  <>
    <rect x="70" y="66" width="180" height="66" fill={BRICK} {...S} />
    <line x1="70" y1="84" x2="250" y2="84" stroke="#8e4133" strokeWidth="2" />
    <line x1="70" y1="102" x2="250" y2="102" stroke="#8e4133" strokeWidth="2" />
    <line x1="70" y1="120" x2="250" y2="120" stroke="#8e4133" strokeWidth="2" />
  </>
);
ART.wallLow = (
  <>
    <rect x="70" y="132" width="180" height="54" fill={BRICK2} {...S} />
    <line x1="70" y1="150" x2="250" y2="150" stroke="#a04a3a" strokeWidth="2" />
    <line x1="70" y1="168" x2="250" y2="168" stroke="#a04a3a" strokeWidth="2" />
  </>
);
ART.chimneyL = (
  <>
    <rect x="82" y="16" width="28" height="54" fill={BRICK2} {...S} />
    <rect x="78" y="10" width="36" height="8" fill="#8e4133" {...S} />
    <rect x="84" y="0" width="10" height="12" fill="#c96a3a" {...S} />
    <rect x="98" y="0" width="10" height="12" fill="#c96a3a" {...S} />
  </>
);
ART.chimneyR = (
  <>
    <rect x="210" y="16" width="28" height="54" fill={BRICK2} {...S} />
    <rect x="206" y="10" width="36" height="8" fill="#8e4133" {...S} />
    <rect x="212" y="0" width="10" height="12" fill="#c96a3a" {...S} />
    <rect x="226" y="0" width="10" height="12" fill="#c96a3a" {...S} />
  </>
);
ART.roofL = (
  <>
    <polygon points="50,70 160,24 160,70" fill={SLATE} {...S} />
    <line x1="74" y1="60" x2="160" y2="60" stroke="#46505a" strokeWidth="2" />
    <line x1="98" y1="50" x2="160" y2="50" stroke="#46505a" strokeWidth="2" />
  </>
);
ART.roofR = (
  <>
    <polygon points="160,24 270,70 160,70" fill="#46505a" {...S} />
    <line x1="160" y1="60" x2="246" y2="60" stroke="#55606b" strokeWidth="2" />
    <line x1="160" y1="50" x2="222" y2="50" stroke="#55606b" strokeWidth="2" />
  </>
);
ART.winUL = (
  <>
    <rect x="88" y="74" width="52" height="54" fill="#efe7d8" {...S} />
    <rect x="92" y="78" width="44" height="46" fill="#cfe8f2" {...S} />
    <line x1="114" y1="78" x2="114" y2="124" {...S} />
    <line x1="92" y1="101" x2="136" y2="101" {...S} />
  </>
);
ART.winUR = (
  <>
    <rect x="180" y="74" width="52" height="54" fill="#efe7d8" {...S} />
    <rect x="184" y="78" width="44" height="46" fill="#cfe8f2" {...S} />
    <line x1="206" y1="78" x2="206" y2="124" {...S} />
    <line x1="184" y1="101" x2="228" y2="101" {...S} />
  </>
);
ART.bay = (
  <>
    <polygon points="80,144 94,134 138,134 150,144 150,186 80,186" fill="#efe7d8" {...S} />
    <polygon points="86,148 96,140 114,140 114,178 86,178" fill="#cfe8f2" {...S} />
    <polygon points="118,140 136,140 144,148 144,178 118,178" fill="#b9dcea" {...S} />
    <line x1="100" y1="140" x2="100" y2="178" stroke="#2d2318" strokeWidth="1.5" />
    <line x1="130" y1="140" x2="130" y2="178" stroke="#2d2318" strokeWidth="1.5" />
  </>
);
ART.frontDoor = (
  <>
    <path d="M158 186 L158 148 Q158 132 177 132 Q196 132 196 148 L196 186 Z" fill="#3f6b4a" {...S} />
    <path d="M160 150 Q160 136 177 136 Q194 136 194 150 Z" fill="#ffe9a8" {...S} />
    <rect x="164" y="156" width="11" height="12" fill="#355c3f" {...S} />
    <rect x="179" y="156" width="11" height="12" fill="#355c3f" {...S} />
    <rect x="164" y="172" width="11" height="12" fill="#355c3f" {...S} />
    <rect x="179" y="172" width="11" height="12" fill="#355c3f" {...S} />
    <circle cx="191" cy="166" r="2.6" fill="#f2b705" />
  </>
);
ART.railings = (
  <>
    <rect x="36" y="180" width="116" height="6" fill="#3a3a3a" {...S} />
    <rect x="202" y="180" width="82" height="6" fill="#3a3a3a" {...S} />
    <rect x="36" y="164" width="116" height="4" fill="#3a3a3a" />
    <rect x="202" y="164" width="82" height="4" fill="#3a3a3a" />
    <g fill="#3a3a3a">
      <rect x="40" y="160" width="4" height="22" />
      <rect x="58" y="160" width="4" height="22" />
      <rect x="76" y="160" width="4" height="22" />
      <rect x="94" y="160" width="4" height="22" />
      <rect x="112" y="160" width="4" height="22" />
      <rect x="130" y="160" width="4" height="22" />
      <rect x="146" y="160" width="4" height="22" />
      <rect x="204" y="160" width="4" height="22" />
      <rect x="222" y="160" width="4" height="22" />
      <rect x="240" y="160" width="4" height="22" />
      <rect x="258" y="160" width="4" height="22" />
      <rect x="276" y="160" width="4" height="22" />
    </g>
  </>
);

const FONT = '"Trebuchet MS", "Lucida Grande", Verdana, sans-serif';

const CSS = `
.wrap, .wrap * { box-sizing: border-box; }
@keyframes smashOut {
  0%   { transform: translate(0,0) rotate(0deg) scale(1); opacity: 1; }
  35%  { transform: translate(0,-10px) rotate(-8deg) scale(1.08); opacity: 1; }
  100% { transform: translate(26px,64px) rotate(46deg) scale(.3); opacity: 0; }
}
.gone { animation: smashOut .5s ease-in forwards; }
@keyframes houseShake {
  0%,100% { transform: translateX(0); }
  20% { transform: translateX(-5px) rotate(-.6deg); }
  45% { transform: translateX(5px) rotate(.6deg); }
  70% { transform: translateX(-3px); }
}
.shake { animation: houseShake .42s ease-out; }
@keyframes popOut { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(.1) rotate(25deg); opacity: 0; } }
.popping { animation: popOut .23s ease-in forwards; }
@keyframes nudge { 0%,100% { transform: translate(0,0); } 50% { transform: translate(0,-4px); } }
.nudge { animation: nudge .22s ease-in-out 2; }
@keyframes doorSwing { from { transform: scaleX(1); } to { transform: scaleX(.12) translateX(6px); } }
.dooropen { transform-origin: left center !important; animation: doorSwing .55s ease-in forwards; }
@keyframes zoomIn { from { transform: scale(1); opacity: 1; } to { transform: scale(7); opacity: 0; } }
.zoomin { animation: zoomIn 1.25s ease-in .6s forwards; transform-origin: 55% 78%; }
@keyframes countPop { from { transform: scale(.4); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } to { transform: scale(1); opacity: 1; } }
.countpop { animation: countPop .4s ease-out; }
@keyframes starPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.09); } }
.starbtn {
  margin-top: 14px; width: 78px; height: 78px; border-radius: 999px;
  background: #2d2318; border: 4px solid #f2b705; display: inline-flex;
  align-items: center; justify-content: center; animation: starPulse 1.5s ease-in-out infinite;
}
.cell {
  background: none; border: 0; padding: 0; cursor: pointer;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
  border-radius: 10px; min-width: 0; min-height: 0;
  transition: transform .12s ease-out, box-shadow .12s;
}
.cell:focus-visible { outline: 3px solid #fff8e1; outline-offset: 2px; }
.root { height: 100vh; height: 100svh; overflow: hidden; }
.shell { height: 100%; display: flex; flex-direction: column; }
.stack { position: relative; flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 6px; }
.headrow { flex: 0 0 auto; }
.scenebox { flex: 1 1 auto; min-height: 76px; max-height: 34svh; display: flex; }
.meterrow { flex: 0 0 auto; }
.boardwrap { flex: 0 0 auto; display: flex; justify-content: center; min-height: 0; }
.board {
  display: grid; grid-template-columns: repeat(9, 1fr); grid-template-rows: repeat(9, 1fr);
  gap: 4px; padding: 6px; width: 100%; aspect-ratio: 1 / 1; max-height: 54svh;
}
.pad { padding: 12px; }
.btn { font-family: inherit; cursor: pointer; touch-action: manipulation; }
@media (max-width: 430px) {
  .pad { padding: 7px; }
  .board { gap: 3px; padding: 4px; }
  .title { font-size: 16px; }
  .status { font-size: 12.5px; }
}
@media (max-height: 820px) { .hint { display: none; } }
@media (max-height: 680px) { .scenebox { max-height: 30svh; } .board { max-height: 50svh; } }

@keyframes fixGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.fixbar { transform: scaleX(0); animation-name: fixGrow; animation-timing-function: linear; animation-delay: 1.5s; animation-fill-mode: forwards; }
@keyframes burst {
  0% { transform: translate(0,0) scale(1); opacity: 1; }
  45% { transform: translate(var(--tx), var(--ty)) scale(.35); opacity: 0; }
  100% { transform: translate(var(--tx), var(--ty)) scale(.35); opacity: 0; }
}
.spark { position: absolute; width: 9px; height: 9px; border-radius: 999px; animation: burst 2.6s ease-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .gone, .shake, .popping, .nudge, .countpop, .starbtn { animation-duration: .01s; }
}
`;

ART.hallStand = (
  <>
    <rect x="0" y="0" width="52" height="6" fill="#5d4229" {...S} />
    <rect x="4" y="6" width="6" height="70" fill="#6b4a2f" {...S} />
    <rect x="42" y="6" width="6" height="70" fill="#6b4a2f" {...S} />
    <rect x="0" y="48" width="52" height="6" fill="#6b4a2f" {...S} />
    <circle cx="12" cy="12" r="3" fill="#f2b705" />
    <circle cx="40" cy="12" r="3" fill="#f2b705" />
    <path d="M14 14 L14 44 L30 44 L30 14 Z" fill="#3f5d7a" {...S} />
    <rect x="10" y="54" width="32" height="22" fill="#cfe8f2" {...S} />
  </>
);
ART.umbrellaStand = (
  <>
    <rect x="0" y="14" width="26" height="34" rx="4" fill="#3a6b6b" {...S} />
    <rect x="6" y="0" width="4" height="16" fill="#2d2318" />
    <rect x="15" y="2" width="4" height="14" fill="#7a2f2f" />
    <circle cx="8" cy="-2" r="3" fill="#2d2318" />
    <circle cx="17" cy="0" r="3" fill="#7a2f2f" />
  </>
);
ART.trunk = (
  <>
    <rect x="0" y="8" width="66" height="34" rx="3" fill="#6b4a2f" {...S} />
    <path d="M0 12 Q33 -6 66 12 Z" fill="#7a5735" {...S} />
    <rect x="0" y="20" width="66" height="5" fill="#c0b9a8" />
    <rect x="26" y="18" width="14" height="12" rx="2" fill="#f2b705" {...S} />
    <rect x="4" y="42" width="8" height="6" fill="#5d4229" />
    <rect x="54" y="42" width="8" height="6" fill="#5d4229" />
  </>
);
ART.crate = (
  <>
    <rect x="0" y="0" width="46" height="40" fill="#b58a55" {...S} />
    <line x1="0" y1="12" x2="46" y2="12" {...S} />
    <line x1="0" y1="28" x2="46" y2="28" {...S} />
    <line x1="0" y1="0" x2="46" y2="40" stroke="#2d2318" strokeWidth="1.5" />
  </>
);
ART.fixerBody = (
  <>
    <rect x="-2" y="-6" width="26" height="6" rx="3" fill="#3a3330" {...S} />
    <rect x="2" y="-11" width="18" height="7" rx="3" fill="#4a443e" {...S} />
    <circle cx="11" cy="4" r="7" fill="#e8c49a" {...S} />
    <rect x="4" y="11" width="14" height="16" rx="3" fill="#6b4a2f" {...S} />
    <rect x="5" y="27" width="5" height="11" fill="#3f4a5a" {...S} />
    <rect x="12" y="27" width="5" height="11" fill="#3f4a5a" {...S} />
    <rect x="17" y="13" width="4" height="12" rx="2" fill="#e8c49a" {...S} />
    <rect x="19" y="22" width="10" height="4" fill="#7a5735" {...S} />
    <rect x="27" y="18" width="5" height="8" fill="#9a927f" {...S} />
  </>
);

const COLS = 9;
const ROWS = 9;
const FY = 172;
// The 320x210 drawing is centred in the scene box, so a box of a different
// shape leaves bare bars down the sides or along the top and bottom. Painting
// the background bands this far past the viewBox fills those bars. Anything
// that spills over is clipped at the edge of the svg.
const BLEED = 600;
const BX = -BLEED;
const BW = 320 + BLEED * 2;
const FIX_WALK = 1500;
const fixWorkMs = (i) => Math.max(2800, 4000 - i * 150);
const fixEvery = (i) => Math.max(8, 12 - i);
const hardness = (i) => (LEVELS[i].kind === "room" ? 1 + 0.06 * i : 1);
const costOf = (i, p) => Math.round(p.cost * hardness(i));

const KINDS = [
  { key: "red", fill: "#e03b3b", edge: "#9e1f1f", shape: "circle" },
  { key: "blue", fill: "#2f7de1", edge: "#1a4a90", shape: "square" },
  { key: "green", fill: "#34a853", edge: "#1d6b33", shape: "triangle" },
  { key: "yellow", fill: "#f2b705", edge: "#a87c00", shape: "diamond" },
  { key: "purple", fill: "#8e44d0", edge: "#552a85", shape: "star" },
  { key: "orange", fill: "#f2701d", edge: "#a84500", shape: "hexagon" },
];

const RC = [90, 100, 110, 120, 130];

const LEVELS = [
  {
    id: "hall", kind: "room", title: "The Hall", time: 150,
    wall: "#d9cdb8", low: "#c4b295", dado: "#6b4a2f", floor: "#8b5e3c",
    props: [
      { id: "h_1", name: "the painting", cost: RC[0], art: "painting", x: 140, y: 36 },
      { id: "h_2", name: "the umbrella stand", cost: RC[1], art: "umbrellaStand", x: 96, y: 124 },
      { id: "h_3", name: "the rug", cost: RC[2], art: "rug", x: 104, y: 152 },
      { id: "h_4", name: "the hall stand", cost: RC[3], art: "hallStand", x: 24, y: 96 },
      { id: "h_5", name: "the grandfather clock", cost: RC[4], art: "clock", x: 244, y: 80 },
    ],
  },
  {
    id: "drawing", kind: "room", title: "The Drawing Room", time: 150,
    wall: "#cbd8c4", low: "#b0c2a8", dado: "#7a5735", floor: "#8b5e3c",
    props: [
      { id: "a1", name: "the fireplace", cost: RC[0], art: "fireplace", x: 18, y: 92 },
      { id: "a2", name: "the armchair", cost: RC[1], art: "armchair", x: 120, y: 126 },
      { id: "a3", name: "the mirror", cost: RC[2], art: "mirror", x: 44, y: 34 },
      { id: "a4", name: "the piano", cost: RC[3], art: "piano", x: 196, y: 118 },
      { id: "a5", name: "the chandelier", cost: RC[4], art: "chandelier", x: 150, y: 0 },
    ],
  },
  {
    id: "dining", kind: "room", title: "The Dining Room", time: 150,
    wall: "#d8c9b4", low: "#c2ad92", dado: "#6b4a2f", floor: "#7a4b26",
    props: [
      { id: "b1", name: "the painting", cost: RC[0], art: "painting", x: 118, y: 34 },
      { id: "b2", name: "the grandfather clock", cost: RC[1], art: "clock", x: 28, y: 80 },
      { id: "b3", name: "the dining table", cost: RC[2], art: "table", x: 100, y: 132 },
      { id: "b4", name: "the sideboard", cost: RC[3], art: "dresser", x: 236, y: 96 },
      { id: "b5", name: "the chandelier", cost: RC[4], art: "chandelier", x: 128, y: 0 },
    ],
  },
  {
    id: "kitchen", kind: "room", title: "The Kitchen", time: 150,
    wall: "#dbd9c8", low: "#b9c3c9", dado: "#5d4229", floor: "#9a927f",
    props: [
      { id: "c1", name: "the window", cost: RC[0], art: "sashWindow", x: 96, y: 26 },
      { id: "c2", name: "the sink", cost: RC[1], art: "sink", x: 86, y: 128 },
      { id: "c3", name: "the kitchen table", cost: RC[2], art: "table", x: 146, y: 132 },
      { id: "c4", name: "the range", cost: RC[3], art: "stove", x: 12, y: 118 },
      { id: "c5", name: "the dresser", cost: RC[4], art: "dresser", x: 246, y: 96 },
    ],
  },
  {
    id: "bedroom", kind: "room", title: "The Bedroom", time: 150,
    wall: "#d5c7dd", low: "#bfaecb", dado: "#6b4a2f", floor: "#8b5e3c",
    props: [
      { id: "d1", name: "the mirror", cost: RC[0], art: "mirror", x: 186, y: 40 },
      { id: "d2", name: "the washstand", cost: RC[1], art: "washstand", x: 128, y: 128 },
      { id: "d3", name: "the standard lamp", cost: RC[2], art: "lamp", x: 200, y: 106 },
      { id: "d4", name: "the bed", cost: RC[3], art: "bed", x: 20, y: 120 },
      { id: "d5", name: "the wardrobe", cost: RC[4], art: "wardrobe", x: 238, y: 90 },
    ],
  },
  {
    id: "nursery", kind: "room", title: "The Nursery", time: 150,
    wall: "#e6d3c0", low: "#d2b9a2", dado: "#7a5735", floor: "#a9784a",
    props: [
      { id: "e1", name: "the rug", cost: RC[0], art: "rug", x: 108, y: 152 },
      { id: "e2", name: "the painting", cost: RC[1], art: "painting", x: 238, y: 40 },
      { id: "e3", name: "the cot", cost: RC[2], art: "cot", x: 16, y: 128 },
      { id: "e4", name: "the dolls' house", cost: RC[3], art: "dollsHouse", x: 176, y: 126 },
      { id: "e5", name: "the rocking horse", cost: RC[4], art: "rockingHorse", x: 96, y: 124 },
    ],
  },
  {
    id: "bathroom", kind: "room", title: "The Bathroom", time: 150,
    wall: "#c3dbe2", low: "#a8c7d1", dado: "#5d4229", floor: "#b9b3a4",
    props: [
      { id: "f1", name: "the mirror", cost: RC[0], art: "mirror", x: 192, y: 36 },
      { id: "f2", name: "the towel rail", cost: RC[1], art: "towelRail", x: 250, y: 138 },
      { id: "f3", name: "the washstand", cost: RC[2], art: "washstand", x: 184, y: 128 },
      { id: "f4", name: "the lavatory", cost: RC[3], art: "toilet", x: 130, y: 116 },
      { id: "f5", name: "the bath", cost: RC[4], art: "bath", x: 20, y: 136 },
    ],
  },
  {
    id: "attic", kind: "room", title: "The Attic", time: 150,
    wall: "#b9ae9c", low: "#a2977f", dado: "#5d4229", floor: "#7a5735",
    props: [
      { id: "i1", name: "the old painting", cost: RC[0], art: "painting", x: 250, y: 58 },
      { id: "i2", name: "the packing crate", cost: RC[1], art: "crate", x: 104, y: 132 },
      { id: "i3", name: "the old lamp", cost: RC[2], art: "lamp", x: 216, y: 106 },
      { id: "i4", name: "the rocking horse", cost: RC[3], art: "rockingHorse", x: 162, y: 124 },
      { id: "i5", name: "the trunk", cost: RC[4], art: "trunk", x: 20, y: 124 },
    ],
  },
  {
    id: "outside", kind: "house", title: "Outside the House", time: 150,
    props: [
      { id: "o1", name: "the left chimney", cost: 45, art: "chimneyL" },
      { id: "o2", name: "the right chimney", cost: 45, art: "chimneyR" },
      { id: "o3", name: "the left roof", cost: 50, art: "roofL" },
      { id: "o4", name: "the right roof", cost: 55, art: "roofR" },
      { id: "o5", name: "the top left window", cost: 55, art: "winUL" },
      { id: "o6", name: "the top right window", cost: 60, art: "winUR" },
      { id: "o7", name: "the bay window", cost: 60, art: "bay" },
      { id: "o8", name: "the front door", cost: 65, art: "frontDoor" },
      { id: "o9", name: "the railings", cost: 70, art: "railings" },
      { id: "o10", name: "the upstairs wall", cost: 70, art: "wallUp" },
      { id: "o11", name: "the downstairs wall", cost: 75, art: "wallLow" },
    ],
  },
  {
    id: "garden", kind: "garden", title: "The Garden", time: 150,
    props: [
      { id: "g1", name: "the flower bed", cost: 75, art: "flowerBed", x: 6, y: 158 },
      { id: "g2", name: "the bird bath", cost: 80, art: "birdBath", x: 196, y: 146 },
      { id: "g3", name: "the bench", cost: 85, art: "bench", x: 110, y: 144 },
      { id: "g4", name: "the washing line", cost: 85, art: "washingLine", x: 236, y: 124 },
      { id: "g5", name: "the greenhouse", cost: 90, art: "greenhouse", x: 84, y: 116 },
      { id: "g6", name: "the shed", cost: 90, art: "shed", x: 172, y: 116 },
      { id: "g7", name: "the tree", cost: 95, art: "tree", x: 4, y: 90 },
    ],
  },
];

let actx = null;
let muted = false;
const setMutedFlag = (v) => {
  muted = v;
};
const AC = () => {
  try {
    if (!actx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      actx = new C();
    }
    if (actx.state === "suspended") actx.resume();
    return actx;
  } catch (e) {
    return null;
  }
};
function tone(f1, f2, dur, type, vol) {
  const c = AC();
  if (!c || muted) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f1, c.currentTime);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, c.currentTime + dur);
  g.gain.setValueAtTime(vol, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start();
  o.stop(c.currentTime + dur);
}
function crash(dur, vol) {
  const c = AC();
  if (!c || muted) return;
  const n = Math.floor(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.setValueAtTime(3000, c.currentTime);
  f.frequency.exponentialRampToValueAtTime(350, c.currentTime + dur);
  const g = c.createGain();
  g.gain.value = vol;
  src.connect(f);
  f.connect(g);
  g.connect(c.destination);
  src.start();
}
const sfx = {
  match: (chain) => tone(340 * Math.pow(1.16, Math.min(chain, 6)), null, 0.09, "square", 0.05),
  bad: () => tone(170, 110, 0.12, "sawtooth", 0.05),
  smash: () => {
    crash(0.5, 0.3);
    tone(170, 55, 0.3, "triangle", 0.14);
  },
  knock: () => {
    tone(300, null, 0.06, "square", 0.05);
    setTimeout(() => tone(300, null, 0.06, "square", 0.05), 130);
  },
  scare: () => tone(760, 180, 0.28, "square", 0.08),
  rebuild: () => tone(200, 540, 0.4, "triangle", 0.1),
  clear: () => {
    [0, 130, 260].forEach((d, i) => setTimeout(() => tone([440, 554, 660][i], null, 0.18, "triangle", 0.09), d));
  },
  beep: () => tone(520, null, 0.13, "square", 0.07),
  go: () => tone(820, null, 0.26, "square", 0.08),
  timeup: () => tone(320, 80, 0.7, "sawtooth", 0.1),
  fanfare: () => {
    [[523, 0, 0.18], [659, 150, 0.18], [784, 300, 0.18], [1047, 450, 0.7]].forEach(([f, d, len]) =>
      setTimeout(() => tone(f, null, len, "triangle", 0.12), d)
    );
    [750, 1250, 1800, 2350].forEach((d) =>
      setTimeout(() => {
        crash(0.38, 0.2);
        tone(950, 280, 0.32, "sine", 0.07);
      }, d)
    );
  },
};

let idSeed = 1;
const newBlock = () => ({ id: idSeed++, k: Math.floor(Math.random() * KINDS.length) });

function findRuns(grid) {
  const runs = [];
  for (let r = 0; r < ROWS; r++) {
    let start = 0;
    for (let c = 1; c <= COLS; c++) {
      if (!(c < COLS && grid[r][c].k === grid[r][start].k)) {
        if (c - start >= 3) runs.push(Array.from({ length: c - start }, (_, i) => ({ r, c: start + i })));
        start = c;
      }
    }
  }
  for (let c = 0; c < COLS; c++) {
    let start = 0;
    for (let r = 1; r <= ROWS; r++) {
      if (!(r < ROWS && grid[r][c].k === grid[start][c].k)) {
        if (r - start >= 3) runs.push(Array.from({ length: r - start }, (_, i) => ({ r: start + i, c })));
        start = r;
      }
    }
  }
  return runs;
}

const runValue = (len) => (len >= 5 ? 100 : len === 4 ? 60 : 30);

function swapped(grid, a, b) {
  const g = grid.map((row) => row.slice());
  const t = g[a.r][a.c];
  g[a.r][a.c] = g[b.r][b.c];
  g[b.r][b.c] = t;
  return g;
}

function hasMove(grid) {
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS && findRuns(swapped(grid, { r, c }, { r, c: c + 1 })).length) return true;
      if (r + 1 < ROWS && findRuns(swapped(grid, { r, c }, { r: r + 1, c })).length) return true;
    }
  return false;
}

function makeGrid() {
  for (let attempt = 0; attempt < 60; attempt++) {
    const g = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++) {
        const banned = new Set();
        if (c >= 2 && g[r][c - 1].k === g[r][c - 2].k) banned.add(g[r][c - 1].k);
        if (r >= 2 && g[r - 1][c].k === g[r - 2][c].k) banned.add(g[r - 1][c].k);
        const pool = KINDS.map((_, i) => i).filter((i) => !banned.has(i));
        g[r][c] = { id: idSeed++, k: pool[Math.floor(Math.random() * pool.length)] };
      }
    if (hasMove(g)) return g;
  }
  return Array.from({ length: ROWS }, () => Array.from({ length: COLS }, newBlock));
}

function collapse(grid, cleared) {
  const g = grid.map((row) => row.slice());
  cleared.forEach(({ r, c }) => {
    g[r][c] = null;
  });
  for (let c = 0; c < COLS; c++) {
    const keep = [];
    for (let r = ROWS - 1; r >= 0; r--) if (g[r][c]) keep.push(g[r][c]);
    for (let r = ROWS - 1; r >= 0; r--) g[r][c] = keep[ROWS - 1 - r] || newBlock();
  }
  return g;
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const clockText = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function Pip({ from, to, value, onArrive }) {
  const [pos, setPos] = useState(from);
  useEffect(() => {
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setPos(to));
    });
    const t = setTimeout(onArrive, 640);
    return () => {
      cancelAnimationFrame(r1);
      if (r2) cancelAnimationFrame(r2);
      clearTimeout(t);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%,-50%)",
        transition: "left .62s linear, top .62s cubic-bezier(.55,0,.85,.4)",
        background: "#fff8e1",
        color: "#7a4b00",
        border: "3px solid #f2b705",
        borderRadius: 999,
        padding: "1px 8px",
        fontWeight: 700,
        fontSize: 14,
        pointerEvents: "none",
        boxShadow: "0 3px 0 rgba(0,0,0,0.18)",
        zIndex: 40,
      }}
    >
      {value}
    </div>
  );
}

function ShapeFill({ kind }) {
  const k = KINDS[kind];
  const w = "rgba(255,255,255,0.9)";
  return (
    <svg viewBox="0 0 40 40" width="100%" height="100%" style={{ display: "block" }}>
      <rect x="1.5" y="1.5" width="37" height="37" rx="9" fill={k.fill} stroke={k.edge} strokeWidth="3" />
      <rect x="4" y="4" width="32" height="11" rx="5.5" fill="rgba(255,255,255,0.22)" />
      {k.shape === "circle" && <circle cx="20" cy="21" r="7" fill={w} />}
      {k.shape === "square" && <rect x="13" y="14" width="14" height="14" rx="2" fill={w} />}
      {k.shape === "triangle" && <polygon points="20,12 29,28 11,28" fill={w} />}
      {k.shape === "diamond" && <polygon points="20,11 29,20 20,29 11,20" fill={w} />}
      {k.shape === "star" && <polygon points="20,10 23,18 31,18 25,23 27,31 20,26 13,31 15,23 9,18 17,18" fill={w} />}
      {k.shape === "hexagon" && <polygon points="20,11 28,15.5 28,24.5 20,29 12,24.5 12,15.5" fill={w} />}
    </svg>
  );
}

function Smashable({ id, x = 0, y = 0, art, smashed, reg, extraClass }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g
        ref={(el) => el && reg(id, el)}
        className={`${smashed ? "gone" : ""} ${extraClass || ""}`}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {ART[art]}
      </g>
    </g>
  );
}

function Fixer({ x, y, work, onDone, onTap }) {
  const [px, setPx] = useState(x < 160 ? -50 : 372);
  useEffect(() => {
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setPx(x - 11));
    });
    const t = setTimeout(onDone, FIX_WALK + work);
    return () => {
      cancelAnimationFrame(r1);
      if (r2) cancelAnimationFrame(r2);
      clearTimeout(t);
    };
  }, []);
  return (
    <g style={{ transform: `translate(${px}px, ${y - 38}px)`, transition: `transform ${FIX_WALK}ms linear` }}>
      <rect x="-5" y="-26" width="34" height="9" rx="4" fill="#fff8e1" stroke="#2d2318" strokeWidth="2" />
      <rect
        className="fixbar"
        x="-3"
        y="-24"
        width="30"
        height="5"
        rx="2"
        fill="#e03b3b"
        style={{ transformBox: "fill-box", transformOrigin: "left center", animationDuration: `${work}ms` }}
      />
      {ART.fixerBody}
      <rect
        x="-14"
        y="-28"
        width="52"
        height="72"
        fill="#fff"
        fillOpacity="0"
        style={{ cursor: "pointer", pointerEvents: "all" }}
        onPointerDown={onTap}
      />
    </g>
  );
}

function Fireworks() {
  const bursts = [
    { x: 18, y: 24, hue: "#f2b705", d: 0 },
    { x: 76, y: 18, hue: "#e03b3b", d: 0.5 },
    { x: 47, y: 10, hue: "#8fd3ef", d: 1 },
    { x: 26, y: 62, hue: "#8e44d0", d: 1.5 },
    { x: 80, y: 56, hue: "#34a853", d: 2 },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 14, pointerEvents: "none", zIndex: 0 }}>
      {bursts.map((b, i) => (
        <div key={i} style={{ position: "absolute", left: `${b.x}%`, top: `${b.y}%` }}>
          {Array.from({ length: 12 }).map((_, j) => {
            const a = (Math.PI * 2 * j) / 12;
            return (
              <span
                key={j}
                className="spark"
                style={{
                  background: b.hue,
                  "--tx": `${Math.round(Math.cos(a) * 58)}px`,
                  "--ty": `${Math.round(Math.sin(a) * 58)}px`,
                  animationDelay: `${b.d}s`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Scene({ level, smashed, reg, doorOpening, fixer, onFixDone, onFixTap, fit }) {
  const items = level.props.map((p) => (
    <Smashable
      key={p.id}
      id={p.id}
      x={p.x}
      y={p.y}
      art={p.art}
      smashed={smashed.includes(p.id)}
      reg={reg}
      extraClass={doorOpening && p.art === "frontDoor" ? "dooropen" : ""}
    />
  ));
  const man = fixer ? (
    <Fixer key={fixer.key} x={fixer.x} y={fixer.y} work={fixer.work} onDone={onFixDone} onTap={onFixTap} />
  ) : null;
  const box = fit
    ? { display: "block", width: "100%", height: "100%" }
    : { display: "block", width: "100%", height: "auto", maxHeight: "32vh" };

  if (level.kind === "room") {
    return (
      <svg viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" style={box}>
        <rect x={BX} y={-BLEED} width={BW} height={118 + BLEED} fill={level.wall} />
        <rect x={BX} y="118" width={BW} height="6" fill={level.dado} />
        <rect x={BX} y="124" width={BW} height="42" fill={level.low} />
        <rect x={BX} y="164" width={BW} height="8" fill="#efe7d8" />
        <rect x={BX} y={FY} width={BW} height={210 - FY + BLEED} fill={level.floor} />
        <line x1={BX} y1={FY + 12} x2={BX + BW} y2={FY + 12} stroke="rgba(0,0,0,.15)" strokeWidth="2" />
        <line x1={BX} y1={FY + 26} x2={BX + BW} y2={FY + 26} stroke="rgba(0,0,0,.15)" strokeWidth="2" />
        {items}
        {man}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" style={box}>
      <rect x={BX} y={-BLEED} width={BW} height={186 + BLEED} fill="#a8d8ee" />
      <circle cx="276" cy="32" r="17" fill="#ffe9a8" />
      <rect x={BX} y="186" width={BW} height={210 - 186 + BLEED} fill="#6cb33f" />
      <rect x={BX} y="186" width={BW} height="5" fill="#579430" />
      {items}
      {man}
    </svg>
  );
}

export default function VictorianSmash() {
  const [screen, setScreen] = useState("start");
  const [lv, setLv] = useState(0);
  const [grid, setGrid] = useState(makeGrid);
  const [sel, setSel] = useState(null);
  const [busy, setBusy] = useState(false);
  const [clearing, setClearing] = useState([]);
  const [wobble, setWobble] = useState(null);
  const [pips, setPips] = useState([]);
  const [shaking, setShaking] = useState(false);
  const [count, setCount] = useState(3);
  const [timeLeft, setTimeLeft] = useState(LEVELS[0].time);
  const [score, setScore] = useState(0);
  const [prog, setProg] = useState({ meter: 0, smashed: [] });
  const [fixer, setFixer] = useState(null);
  const [quiet, setQuiet] = useState(false);

  const wrapRef = useRef(null);
  const cellRefs = useRef(new Map());
  const partRefs = useRef(new Map());
  const sceneRef = useRef(null);
  const pipSeed = useRef(1);
  const fixSeed = useRef(1);
  const progRef = useRef({ meter: 0, smashed: [] });

  const level = LEVELS[lv];
  const current = level.props.find((p) => !prog.smashed.includes(p.id));
  const playing = screen === "play";
  const done = prog.smashed.length === level.props.length;

  const reg = useCallback((id, el) => partRefs.current.set(id, el), []);

  const startLevel = (i) => {
    setLv(i);
    progRef.current = { meter: 0, smashed: [] };
    setProg(progRef.current);
    setGrid(makeGrid());
    setSel(null);
    setPips([]);
    setClearing([]);
    setWobble(null);
    setFixer(null);
    setBusy(false);
    setTimeLeft(LEVELS[i].time);
    setCount(3);
    setScreen("countdown");
  };

  useEffect(() => {
    if (screen !== "enter") return;
    const t = setTimeout(() => startLevel(0), 1900);
    return () => clearTimeout(t);
  }, [screen]);

  useEffect(() => {
    if (screen !== "countdown") return;
    if (count === 0) {
      sfx.go();
      setScreen("play");
      return;
    }
    sfx.beep();
    const t = setTimeout(() => setCount((c) => c - 1), 750);
    return () => clearTimeout(t);
  }, [screen, count]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTimeLeft((v) => Math.max(0, v - 1)), 1000);
    return () => clearInterval(t);
  }, [playing]);

  useEffect(() => {
    if (playing && timeLeft === 0) {
      sfx.timeup();
      setFixer(null);
      setScreen("timeup");
    }
  }, [playing, timeLeft]);

  useEffect(() => {
    if (!playing || !done) return;
    setFixer(null);
    if (lv === LEVELS.length - 1) {
      setScreen("win");
    } else {
      sfx.clear();
      setScreen("cleared");
    }
  }, [done, playing, lv]);

  useEffect(() => {
    if (screen === "win") sfx.fanfare();
  }, [screen]);

  useEffect(() => {
    if (!prog.smashed.length) return;
    setShaking(true);
    const t = setTimeout(() => setShaking(false), 460);
    return () => clearTimeout(t);
  }, [prog.smashed.length]);

  useEffect(() => {
    if (!playing || fixer || done) return;
    const elapsed = level.time - timeLeft;
    if (elapsed < 10 || elapsed % fixEvery(lv) !== 0) return;
    const back = prog.smashed;
    if (!back.length) return;
    const id = back[Math.floor(Math.random() * back.length)];
    const p = level.props.find((q) => q.id === id);
    const el = partRefs.current.get(id);
    let x = 160;
    try {
      const b = el.getBBox();
      x = (p.x || 0) + b.x + b.width / 2;
    } catch (e) {}
    x = Math.max(24, Math.min(296, x));
    sfx.knock();
    setFixer({ key: fixSeed.current++, id, x, y: level.kind === "room" ? FY : 186, work: fixWorkMs(lv) });
  }, [timeLeft, playing, fixer, done, level, lv, prog.smashed]);

  const fixDone = () => {
    if (!fixer) return;
    const s = progRef.current;
    progRef.current = { meter: s.meter, smashed: s.smashed.filter((x) => x !== fixer.id) };
    setProg(progRef.current);
    setFixer(null);
    sfx.rebuild();
  };

  const fixTap = () => {
    setFixer(null);
    sfx.scare();
  };

  const point = (rect) => {
    const w = wrapRef.current.getBoundingClientRect();
    return { x: rect.left - w.left + rect.width / 2, y: rect.top - w.top + rect.height / 2 };
  };

  const firePip = useCallback(
    (cells, value) => {
      if (!wrapRef.current) return;
      const pts = cells
        .map(({ r, c }) => cellRefs.current.get(`${r}-${c}`))
        .filter(Boolean)
        .map((el) => point(el.getBoundingClientRect()));
      if (!pts.length) return;
      const from = {
        x: pts.reduce((a, p) => a + p.x, 0) / pts.length,
        y: pts.reduce((a, p) => a + p.y, 0) / pts.length,
      };
      const target = partRefs.current.get(current?.id) || sceneRef.current;
      if (!target) return;
      setPips((p) => [...p, { id: pipSeed.current++, from, to: point(target.getBoundingClientRect()), value }]);
    },
    [current]
  );

  const arrive = (pipId, value) => {
    setPips((p) => p.filter((x) => x.id !== pipId));
    const list = LEVELS[lv].props;
    const smashed = [...progRef.current.smashed];
    let meter = progRef.current.meter + value;
    let gained = value;
    let hits = 0;
    for (;;) {
      const t = list.find((p) => !smashed.includes(p.id));
      const tCost = t ? costOf(lv, t) : 0;
      if (!t || meter < tCost) break;
      meter -= tCost;
      smashed.push(t.id);
      const bonus = Math.round(tCost / 4);
      gained += bonus;
      meter += bonus;
      hits += 1;
    }
    if (hits) sfx.smash();
    progRef.current = { meter, smashed };
    setProg(progRef.current);
    setScore((s) => s + gained);
  };

  const resolve = useCallback(
    async (start) => {
      let g = start;
      let chain = 1;
      for (;;) {
        const runs = findRuns(g);
        if (!runs.length) break;
        sfx.match(chain);
        const cells = new Map();
        runs.forEach((run) => {
          firePip(run, runValue(run.length) * chain);
          run.forEach((cell) => cells.set(`${cell.r}-${cell.c}`, cell));
        });
        const list = [...cells.values()];
        setClearing(list);
        await sleep(230);
        g = collapse(g, list);
        setClearing([]);
        setGrid(g);
        await sleep(190);
        chain += 1;
      }
      if (!hasMove(g)) {
        await sleep(300);
        setGrid(makeGrid());
      }
      setBusy(false);
    },
    [firePip]
  );

  const tap = async (r, c) => {
    if (busy || !playing) return;
    if (!sel) return setSel({ r, c });
    if (sel.r === r && sel.c === c) return setSel(null);
    if (Math.abs(sel.r - r) + Math.abs(sel.c - c) !== 1) return setSel({ r, c });
    const a = sel;
    const b = { r, c };
    setSel(null);
    setBusy(true);
    const next = swapped(grid, a, b);
    if (!findRuns(next).length) {
      sfx.bad();
      setWobble([a, b]);
      setGrid(next);
      await sleep(220);
      setGrid(grid);
      setWobble(null);
      setBusy(false);
      return;
    }
    setGrid(next);
    await sleep(160);
    resolve(next);
  };

  const toggleSound = () => {
    const v = !quiet;
    setQuiet(v);
    setMutedFlag(v);
    if (!v) sfx.beep();
  };

  const curCost = current ? costOf(lv, current) : 0;
  const pct = current ? Math.min(100, Math.round((prog.meter / curCost) * 100)) : 100;
  const low = timeLeft <= 30;

  const btn = {
    fontFamily: "inherit",
    cursor: "pointer",
    touchAction: "manipulation",
    background: "#f2b705",
    color: "#2d2318",
    border: "3px solid #2d2318",
    borderRadius: 12,
    padding: "10px 18px",
    fontSize: 16,
    fontWeight: 700,
  };
  const mini = { ...btn, background: "#fff8e1", padding: "4px 9px", fontSize: 13, borderWidth: 2, borderRadius: 9 };
  const ghost = { ...btn, background: "none", color: "#fff8e1", border: "2px solid rgba(255,248,225,.55)", fontSize: 14, padding: "7px 14px" };

  const overlay = (children) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(45,35,24,0.9)",
        color: "#fff8e1",
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        padding: 20,
        textAlign: "center",
        zIndex: 60,
      }}
    >
      {children}
    </div>
  );

  if (screen === "start" || screen === "enter") {
    const entering = screen === "enter";
    return (
      <div className="root" style={{ fontFamily: FONT, background: "#f7f3e8", color: "#2d2318", overflowY: "auto" }}>
        <style>{CSS}</style>
        <div className="wrap pad" style={{ maxWidth: 460, margin: "0 auto", textAlign: "center", width: "100%" }}>
          <h1 style={{ fontSize: 30, margin: "6px 0 2px", letterSpacing: "-0.02em" }}>Victorian Smash!</h1>
          <p style={{ margin: "0 0 12px", fontSize: 15 }}>Eight rooms, then the house, then the garden.</p>
          <div
            className={entering ? "zoomin" : ""}
            style={{ borderRadius: 14, overflow: "hidden", border: "3px solid #2d2318", background: "#a8d8ee" }}
          >
            <Scene level={LEVELS[8]} smashed={[]} reg={() => {}} doorOpening={entering} fixer={null} />
          </div>
          {!entering && (
            <>
              <button
                className="btn starbtn"
                onClick={() => {
                  AC();
                  setScore(0);
                  setScreen("enter");
                }}
                aria-label="Start the game"
              >
                <svg viewBox="0 0 40 40" width="44" height="44">
                  <polygon
                    points="20,3 25,15 38,15 27,23 31,36 20,28 9,36 13,23 2,15 15,15"
                    fill="#f2b705"
                    stroke="#2d2318"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p style={{ fontSize: 14, margin: "12px 0 0", lineHeight: 1.5 }}>
                Watch out for the workmen. If one gets busy putting something back, tap him and he'll run off.
              </p>
              <button className="btn" style={{ ...mini, marginTop: 10 }} onClick={toggleSound}>
                {quiet ? "Sound off" : "Sound on"}
              </button>
            </>
          )}
          {entering && <p style={{ fontSize: 16, marginTop: 18 }}>The door swings open...</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="root" style={{ fontFamily: FONT, background: "#f7f3e8", color: "#2d2318" }}>
      <style>{CSS}</style>
      <div className="wrap pad shell" style={{ maxWidth: 460, margin: "0 auto", width: "100%" }}>
        <div ref={wrapRef} className="stack">
          <div className="headrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h2 className="title" style={{ fontSize: 19, margin: 0 }}>
              {level.title}
            </h2>
            <div className="status" style={{ fontSize: 15, display: "flex", alignItems: "center", gap: 7 }}>
              <span>
                <strong>{score}</strong> pts
              </span>
              <span
                style={{
                  background: low ? "#e03b3b" : "#fff8e1",
                  color: low ? "#fff8e1" : "#2d2318",
                  border: "2px solid #2d2318",
                  borderRadius: 9,
                  padding: "2px 8px",
                  fontWeight: 700,
                  minWidth: 50,
                  textAlign: "center",
                }}
              >
                {clockText(timeLeft)}
              </span>
              <button className="btn" style={mini} onClick={toggleSound} aria-label="Turn the sound on or off">
                {quiet ? "🔇" : "🔊"}
              </button>
              <button className="btn" style={mini} onClick={() => setScreen("start")}>
                Quit
              </button>
            </div>
          </div>

          <div
            ref={sceneRef}
            className={`scenebox ${shaking ? "shake" : ""}`}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "3px solid #2d2318",
              background: level.kind === "room" ? level.wall : "#a8d8ee",
            }}
          >
            <Scene level={level} smashed={prog.smashed} reg={reg} fixer={fixer} onFixDone={fixDone} onFixTap={fixTap} fit />
          </div>

          <div className="meterrow">
            <div className="status" style={{ fontSize: 15, marginBottom: 4 }}>
              {current ? (
                <>
                  Smashing {current.name} &nbsp;
                  <span style={{ opacity: 0.7 }}>
                    {Math.min(prog.meter, curCost)} / {curCost}
                  </span>
                </>
              ) : (
                <strong>All clear.</strong>
              )}
            </div>
            <div style={{ height: 14, background: "#e2d7bf", border: "3px solid #2d2318", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: "#f2b705", transition: "width .3s ease-out" }} />
            </div>
          </div>

          <div className="boardwrap">
          <div className="board" style={{ background: "#5d4229", border: "3px solid #2d2318", borderRadius: 14, opacity: playing ? 1 : 0.55 }}>
            {grid.map((row, r) =>
              row.map((cell, c) => {
                const key = `${r}-${c}`;
                const isSel = sel && sel.r === r && sel.c === c;
                const isClearing = clearing.some((x) => x.r === r && x.c === c);
                const isWobble = wobble && wobble.some((x) => x.r === r && x.c === c);
                return (
                  <button
                    key={cell.id}
                    className="cell"
                    ref={(el) => {
                      if (el) cellRefs.current.set(key, el);
                    }}
                    onClick={() => tap(r, c)}
                    aria-label={`${KINDS[cell.k].key} block, row ${r + 1}, column ${c + 1}`}
                    style={{ transform: isSel ? "scale(1.14)" : "scale(1)", boxShadow: isSel ? "0 0 0 3px #fff8e1" : "none", zIndex: isSel ? 5 : 1 }}
                  >
                    <div className={isClearing ? "popping" : isWobble ? "nudge" : ""} style={{ width: "100%", height: "100%" }}>
                      <ShapeFill kind={cell.k} />
                    </div>
                  </button>
                );
              })
            )}
          </div>
          </div>

          <p className="hint status" style={{ fontSize: 14, lineHeight: 1.45, margin: 0 }}>
            Swap two blocks that touch. Three or more of a colour fly at the room. Tap a workman to chase him off
            before he puts something back.
          </p>

          {pips.map((p) => (
            <Pip key={p.id} from={p.from} to={p.to} value={p.value} onArrive={() => arrive(p.id, p.value)} />
          ))}

          {screen === "countdown" &&
            overlay(
              <div key={count} className="countpop" style={{ fontSize: 70, fontWeight: 700 }}>
                {count}
              </div>
            )}

          {screen === "cleared" &&
            overlay(
              <>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{level.title} is empty</div>
                <div style={{ fontSize: 16 }}>{score} points so far</div>
                <button style={btn} onClick={() => startLevel(lv + 1)}>
                  On to {LEVELS[lv + 1].title}
                </button>
              </>
            )}

          {screen === "timeup" &&
            overlay(
              <>
                <div style={{ fontSize: 24, fontWeight: 700 }}>Out of time</div>
                <div style={{ fontSize: 16 }}>{level.title} needs another go.</div>
                <button style={btn} onClick={() => startLevel(lv)}>
                  Try this room again
                </button>
                <button style={ghost} onClick={() => setScreen("start")}>
                  Back to the start
                </button>
              </>
            )}

          {screen === "win" &&
            overlay(
              <>
                <Fireworks />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 27, fontWeight: 700 }}>Nothing left standing</div>
                  <div style={{ fontSize: 17 }}>House and garden, all gone. {score} points.</div>
                  <button
                    style={btn}
                    onClick={() => {
                      setScore(0);
                      setScreen("start");
                    }}
                  >
                    Play again
                  </button>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
