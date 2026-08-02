import "./Pricing.scss";

// narx paketlari - keyinchalik bu ma'lumotni backend'dan olish mumkin
const packages = [
  {
    frame: "FRAME 01/03",
    title: "Boshlang'ich",
    price: "850 000",
    featured: false,
    items: [
      "1 soatlik suratga olish",
      "1 lokatsiya",
      "20 ta tahrirlangan surat",
      "3 kun ichida topshirish",
    ],
  },
  {
    frame: "FRAME 02/03",
    title: "Standart",
    price: "1 650 000",
    featured: true,
    items: [
      "3 soatlik suratga olish",
      "2 lokatsiya",
      "60 ta tahrirlangan surat",
      "Onlayn galereya",
      "2 kun ichida topshirish",
    ],
  },
  {
    frame: "FRAME 03/03",
    title: "Premium",
    price: "3 200 000",
    featured: false,
    items: [
      "To'liq kunlik suratga olish",
      "Cheklanmagan lokatsiya",
      "150+ tahrirlangan surat",
      "Bosma albom",
      "Bir kunda tayyor kadrlar",
    ],
  },
];

function Pricing() {
  return (
    <section id="narxlar">
      <div className="reveal">
        <div className="eyebrow">Narxlar</div>
        <h2>Sizga mos paket tanlang</h2>
      </div>

      <div className="packages reveal">
        {packages.map((pkg) => (
          <div key={pkg.title} className={pkg.featured ? "pkg featured" : "pkg"}>
            <div className="pkg-frame">{pkg.frame}</div>
            <h3>{pkg.title}</h3>
            <div className="price">
              {pkg.price} <span>so'm</span>
            </div>
            <ul>
              {pkg.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#bron" className="btn">
              Tanlash
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
