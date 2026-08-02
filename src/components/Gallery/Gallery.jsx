import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";
import "./Gallery.scss";

// galereya rasmlari - haqiqiy loyihada bu backend yoki CMS'dan kelishi mumkin
const photos = [
  { cat: "tugi", seed: "linza-w1", label: "To'y · Dilnoza & Sardor" },
  { cat: "portret", seed: "linza-p1", label: "Portret · Studio" },
  { cat: "mahsulot", seed: "linza-m1", label: "Mahsulot · Parfyum" },
  { cat: "oila", seed: "linza-f1", label: "Oila · Bog'da" },
  { cat: "tugi", seed: "linza-w2", label: "To'y · Uzuk almashish" },
  { cat: "portret", seed: "linza-p2", label: "Portret · Tabiiy yorug'lik" },
  { cat: "mahsulot", seed: "linza-m2", label: "Mahsulot · Soat" },
  { cat: "oila", seed: "linza-f2", label: "Oila · Uy muhiti" },
  { cat: "tugi", seed: "linza-w3", label: "To'y · Raqs" },
  { cat: "portret", seed: "linza-p3", label: "Portret · Qora fon" },
];

const filters = [
  { key: "all", label: "Barchasi" },
  { key: "tugi", label: "To'y" },
  { key: "portret", label: "Portret" },
  { key: "mahsulot", label: "Mahsulot" },
  { key: "oila", label: "Oila" },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visiblePhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.cat === activeFilter);

  function handleCardMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform =
      "perspective(800px) rotateY(" + x * 10 + "deg) rotateX(" + -y * 10 + "deg) scale(1.02)";
  }

  function handleCardMouseLeave(e) {
    e.currentTarget.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  }

  function openLightbox(index) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  function nextPhoto() {
    setCurrentIndex((prev) => (prev + 1) % visiblePhotos.length);
  }

  function prevPhoto() {
    setCurrentIndex((prev) => (prev - 1 + visiblePhotos.length) % visiblePhotos.length);
  }

  return (
    <section id="galereya">
      <div className="gallery-head reveal">
        <div>
          <div className="eyebrow">Galereya</div>
          <h2>Tanlangan ishlar</h2>
        </div>

        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={activeFilter === f.key ? "filter-btn active" : "filter-btn"}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid reveal">
        {visiblePhotos.map((photo, index) => (
          <div
            key={photo.seed}
            className={"card cat-" + photo.cat}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            onClick={() => openLightbox(index)}
          >
            <img
              loading="lazy"
              src={"https://picsum.photos/seed/" + photo.seed + "/700/" + (photo.cat === "mahsulot" ? "600" : "900")}
              alt={photo.label}
            />
            <span className="tag">{photo.label}</span>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        photo={visiblePhotos[currentIndex]}
        onClose={() => setLightboxOpen(false)}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  );
}

export default Gallery;
