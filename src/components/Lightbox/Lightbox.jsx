import "./Lightbox.scss";

// bu component Gallery ichidan boshqariladi
// props: isOpen, photo, onClose, onNext, onPrev
function Lightbox({ isOpen, photo, onClose, onNext, onPrev }) {
  if (!photo) {
    return null;
  }

  const imgSrc =
    "https://picsum.photos/seed/" +
    photo.seed +
    "/1200/" +
    (photo.cat === "mahsulot" ? "1000" : "1500");

  return (
    <div
      className={isOpen ? "lightbox open" : "lightbox"}
      onClick={(e) => {
        // faqat tashqi qora fonga bosilsa yopiladi, rasmga bosilsa yopilmasin
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <span className="lb-close" onClick={onClose}>
        YOPISH ✕
      </span>
      <span className="lb-prev" onClick={onPrev}>
        ← OLDINGI
      </span>
      <img src={imgSrc} alt={photo.label} />
      <span className="lb-next" onClick={onNext}>
        KEYINGI →
      </span>
    </div>
  );
}

export default Lightbox;
