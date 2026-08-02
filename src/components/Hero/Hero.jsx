import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <div>
          <div className="exif">f/1.8 · 1/250 · ISO 200 · TOSHKENT</div>
          <h1 className="hero-title">
            Har bir kadr — <em>bitta hikoya</em>
          </h1>
        </div>

        <div className="hero-side">
          <p>
            LINZA — to'y, portret, mahsulot va oilaviy suratga olishga
            ixtisoslashgan fotostudiya. Yorug'lik bilan ishlaymiz, lahzani
            ushlaymiz.
          </p>
          <a href="#bron" className="btn">
            Bron qilish →
          </a>
        </div>
      </div>

      <div className="aperture-cue">
        <svg viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="27" stroke="#a69c8a" strokeWidth="1" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(0 30 30)" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(60 30 30)" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(120 30 30)" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(180 30 30)" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(240 30 30)" />
          <path d="M30 8 L38 22 L22 22 Z" fill="#e8672a" opacity="0.85" transform="rotate(300 30 30)" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
