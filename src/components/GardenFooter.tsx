import LocalTime from "@/components/LocalTime";
import { BLOG_URL, EMAIL } from "@/data/portfolio";

const W = 1440;
const H = 360;

/** Small seeded generator so the garden is identical on every render. */
function prng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Plants grow tall at the edges and stay low in the middle. */
const edge = (x: number) => 0.3 + 0.7 * Math.pow(Math.abs(x - W / 2) / (W / 2), 1.5);
const n = (v: number) => Math.round(v * 10) / 10;

function blades(seed: number, count: number, minH: number, maxH: number, width: number, fills: string[]) {
  const r = prng(seed);
  return Array.from({ length: count }, () => {
    const x = r() * W;
    const h = (minH + r() * (maxH - minH)) * edge(x);
    const lean = (r() - 0.5) * h * 0.55;
    const w = width * (0.7 + r() * 0.6);
    return {
      fill: fills[Math.floor(r() * fills.length)],
      d: `M${n(x - w)} ${H}Q${n(x - w + lean * 0.2)} ${n(H - h * 0.55)} ${n(x + lean)} ${n(H - h)}Q${n(x + w + lean * 0.45)} ${n(H - h * 0.5)} ${n(x + w)} ${H}Z`,
    };
  });
}

const backBlades = blades(7, 150, 110, 250, 9, ["#2f7a34", "#37863a", "#2a6e31"]);
const midBlades = blades(21, 150, 70, 170, 8, ["#4a9e3c", "#55ab41", "#3f9238"]);
const frontBlades = blades(42, 190, 30, 80, 6, ["#6cbf4a", "#7bca54", "#5fb443"]);

const leafPlants = [
  { x: 25, h: 215 },
  { x: 215, h: 190 },
  { x: 480, h: 105 },
  { x: 630, h: 62 },
  { x: 935, h: 70 },
  { x: 1190, h: 200 },
  { x: 1320, h: 150 },
  { x: 1420, h: 235 },
];

const flowers = [
  { x: 150, h: 235, r: 30, petal: "white" },
  { x: 255, h: 118, r: 15, petal: "white" },
  { x: 395, h: 150, r: 32, petal: "yellow" },
  { x: 560, h: 72, r: 15, petal: "white" },
  { x: 705, h: 62, r: 17, petal: "white" },
  { x: 860, h: 58, r: 14, petal: "rose" },
  { x: 1012, h: 82, r: 16, petal: "white" },
  { x: 1132, h: 122, r: 15, petal: "yellow" },
  { x: 1255, h: 215, r: 34, petal: "white" },
  { x: 1378, h: 168, r: 32, petal: "coral" },
];

const stones = [
  { x: 178, rx: 62, ry: 42 },
  { x: 300, rx: 30, ry: 19 },
  { x: 822, rx: 36, ry: 22 },
  { x: 1238, rx: 58, ry: 40 },
];

export default function GardenFooter() {
  return (
    <footer className="footer">
      <p className="footer-note">
        © {new Date().getFullYear()} · Built with care, <em>one commit at a time.</em>
      </p>
      <nav className="footer-links" aria-label="Footer">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="https://github.com/nehaaprasad" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={`mailto:${EMAIL}`}>Email</a>
      </nav>
      <p className="footer-meta">
        <LocalTime />
        <span aria-hidden="true"> · </span>
        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <span aria-hidden="true"> · </span>
        <a
          href="https://github.com/nehaprasad-dev/neha-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>

      <svg
        className="garden"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="petal-white" cx="50%" cy="35%" r="75%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e6e1d3" />
          </radialGradient>
          <radialGradient id="petal-yellow" cx="50%" cy="35%" r="75%">
            <stop offset="0" stopColor="#ffdb6b" />
            <stop offset="1" stopColor="#f0a41c" />
          </radialGradient>
          <radialGradient id="petal-coral" cx="50%" cy="35%" r="75%">
            <stop offset="0" stopColor="#ffa79c" />
            <stop offset="1" stopColor="#ea6661" />
          </radialGradient>
          <radialGradient id="petal-rose" cx="50%" cy="35%" r="75%">
            <stop offset="0" stopColor="#f2a3b6" />
            <stop offset="1" stopColor="#c9566f" />
          </radialGradient>
          <radialGradient id="flower-center" cx="40%" cy="35%" r="70%">
            <stop offset="0" stopColor="#ffcf5e" />
            <stop offset="1" stopColor="#ee8612" />
          </radialGradient>
          <radialGradient id="stone" cx="38%" cy="28%" r="80%">
            <stop offset="0" stopColor="#e2d4be" />
            <stop offset="1" stopColor="#a08c72" />
          </radialGradient>
          <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4fa343" />
            <stop offset="1" stopColor="#2c7434" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#62b13f" />
            <stop offset="1" stopColor="#3d8c2e" />
          </linearGradient>
        </defs>

        {backBlades.map((b, i) => (
          <path key={`b${i}`} d={b.d} fill={b.fill} />
        ))}

        {leafPlants.map((p, i) => {
          const lean = (i % 2 ? 1 : -1) * p.h * 0.08;
          const pairs = Math.max(3, Math.round(p.h / 45));
          return (
            <g
              key={`l${i}`}
              className="sway"
              style={{ transformOrigin: `${p.x}px ${H}px`, animationDelay: `${-i * 0.9}s` }}
            >
              <path
                d={`M${p.x} ${H}Q${p.x} ${n(H - p.h * 0.5)} ${n(p.x + lean)} ${n(H - p.h)}`}
                stroke="#2f7a34"
                strokeWidth={n(Math.max(3, p.h * 0.03))}
                strokeLinecap="round"
                fill="none"
              />
              {Array.from({ length: pairs }, (_, k) => {
                const t = (k + 1) / (pairs + 0.4);
                const cx = p.x + lean * t * t;
                const cy = H - p.h * t;
                const len = p.h * 0.16 * (1.15 - t * 0.5);
                return [-1, 1].map((side) => (
                  <ellipse
                    key={`${k}${side}`}
                    cx={n(cx + side * len * 0.8)}
                    cy={n(cy - len * 0.45)}
                    rx={n(len)}
                    ry={n(len * 0.4)}
                    fill="url(#leaf)"
                    transform={`rotate(${side * -32} ${n(cx)} ${n(cy)})`}
                  />
                ));
              })}
            </g>
          );
        })}

        {midBlades.map((b, i) => (
          <path key={`m${i}`} d={b.d} fill={b.fill} />
        ))}

        {stones.map((s, i) => (
          <ellipse key={`s${i}`} cx={s.x} cy={H - s.ry * 0.45} rx={s.rx} ry={s.ry} fill="url(#stone)" />
        ))}

        {flowers.map((f, i) => {
          const lean = (i % 2 ? -1 : 1) * f.h * 0.07;
          const tx = n(f.x + lean);
          const ty = n(H - f.h);
          return (
            <g
              key={`f${i}`}
              className="sway"
              style={{ transformOrigin: `${f.x}px ${H}px`, animationDelay: `${-i * 0.7}s` }}
            >
              <path
                d={`M${f.x} ${H}Q${f.x} ${n(H - f.h * 0.5)} ${tx} ${ty}`}
                stroke="#3a8a39"
                strokeWidth={n(Math.max(2.5, f.r * 0.16))}
                strokeLinecap="round"
                fill="none"
              />
              <g transform={`translate(${tx} ${ty})`}>
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse
                    key={a}
                    cx="0"
                    cy={n(-f.r * 0.62)}
                    rx={n(f.r * 0.47)}
                    ry={n(f.r * 0.62)}
                    fill={`url(#petal-${f.petal})`}
                    transform={`rotate(${a + i * 11})`}
                  />
                ))}
                <circle r={n(f.r * 0.34)} fill="url(#flower-center)" />
              </g>
            </g>
          );
        })}

        {frontBlades.map((b, i) => (
          <path key={`fr${i}`} d={b.d} fill={b.fill} />
        ))}

        <path
          d={`M0 ${H}V${H - 22}Q360 ${H - 44} 720 ${H - 26}T${W} ${H - 22}V${H}Z`}
          fill="url(#ground)"
        />
      </svg>
    </footer>
  );
}
