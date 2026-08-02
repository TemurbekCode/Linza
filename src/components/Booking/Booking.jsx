import { useState } from "react";
import "./Booking.scss";

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("To'y suratga olish");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // hozircha backend yo'q, shuning uchun faqat konsolga chiqaramiz
    console.log({ name, phone, date, service, message });

    setSubmitted(true);
  }

  return (
    <section id="bron">
      <div className="booking reveal">
        <div>
          <div className="eyebrow">Bron qilish</div>
          <h2>Sanangizni band qiling</h2>
          <p className="lead">
            Formani to'ldiring — 24 soat ichida qaytib bog'lanamiz va
            tafsilotlarni kelishib olamiz.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row2">
            <div>
              <label>Ismingiz</label>
              <input
                type="text"
                required
                placeholder="Ism Familiya"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Telefon</label>
              <input
                type="tel"
                required
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="row2">
            <div>
              <label>Sana</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label>Xizmat turi</label>
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option>To'y suratga olish</option>
                <option>Portret</option>
                <option>Mahsulot</option>
                <option>Oilaviy</option>
              </select>
            </div>
          </div>

          <div>
            <label>Xabar</label>
            <textarea
              placeholder="Loyihangiz haqida qisqacha yozing"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            So'rov yuborish
          </button>

          {submitted && (
            <div className="toast show">
              So'rovingiz qabul qilindi — tez orada bog'lanamiz.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Booking;
