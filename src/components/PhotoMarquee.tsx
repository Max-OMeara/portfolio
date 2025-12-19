import dive1 from "../data/images/hobbies/IMG_1436.jpeg";
import run from "../data/images/hobbies/IMG_0617.png";
import surf from "../data/images/hobbies/119D68C6-C1A2-44BC-AED0-C8AC92C31035.JPG";
import row from "../data/images/hobbies/IMG_1366.png";
import rowaward from "../data/images/hobbies/IMG_1435.jpeg";
import dive2 from "../data/images/hobbies/IMG_1434.jpeg";

const PHOTOS = [
  { src: dive1, alt: "Dive1" },
  { src: run, alt: "Run" },
  { src: rowaward, alt: "RowAward" },
  { src: dive2, alt: "Dive2" },
  { src: surf, alt: "Surf" },
  { src: row, alt: "Row" },
];

export function PhotoMarquee() {
  const items = [...PHOTOS, ...PHOTOS]; // duplicate for seamless loop

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold">Beyond Computer Science</h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="marquee flex w-[200%] gap-8 px-8">
          {items.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="h-72 w-[320px] shrink-0 overflow-hidden rounded-2xl shadow"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      </>
  );
}
