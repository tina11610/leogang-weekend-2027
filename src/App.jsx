export default function App() {

  const selectedParticipant = participants.find(
  (p) => p.name === selectedPerson
);

const eventDate = new Date("2027-01-22");

const today = new Date();

const daysUntil = Math.ceil(
  (eventDate - today) / (1000 * 60 * 60 * 24)
);
<nav
  style={{
    position: "sticky",
    top: 0,
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 100,
  }}
>
  <a href="#willkommen">❤️ Willkommen</a>
  <a href="#programm">📅 Programm</a>
  <a href="#zusage">🙋 Zusage</a>
  <a href="#teilnehmer">❤️ Wer ist dabei?</a>
  <a href="#fotos">📷 Fotos</a>
</nav>
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "30px",
      }}
    >
      <nav
  style={{
    position: "sticky",
    top: "10px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  <a href="#programm">📅 Programm</a>
  <a href="#fotos">📷 Fotos</a>
</nav>
        {/* Hero */}
      <div
  style={{
    backgroundImage:
      "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "24px",
    padding: "60px 30px",
    color: "white",
    marginBottom: "30px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
  <h1
  style={{
    color: "white",
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3rem)",
    lineHeight: "1.1",
    whiteSpace: "pre-line",
  }}
>
{`🎿🍻🥳
Geburtstags-
wochenende`}
</h1>

    <h2
      style={{
        color: "white",
        marginTop: "15px",
      }}
    >
      mama thresl • Leogang
    </h2>

    <p
  style={{
    fontSize: "1.2rem",
  }}
>
  22. bis 24. Jänner 2027
</p>

<p
  style={{
    marginTop: "15px",
    fontSize: "1.1rem",
    fontWeight: "bold",
  }}
>
  ⏳ Noch {daysUntil} Tage bis Leogang
</p>
  </div>
</div>

      {/* Willkommen */}
      <div className="card" id="willkommen">
        <h2>❤️ Willkommen</h2>

        <p>
          Hallo zusammen,
        </p>

        <p>
          dieses Jahr habe ich eigentlich nur einen Geburtstagswunsch:
          <strong> ein Wochenende mit euch verbringen.</strong>
        </p>

        <p>
          Kein großes Programm, keine Verpflichtungen, keine
          Anwesenheitskontrolle mit Stempelkarte.
          Einfach gemeinsam ein paar schöne Tage in den Bergen verbringen,
          lachen, essen, anstoßen und das machen, worauf man Lust hat.
        </p>

        <h3>✨ Alles kann, nichts muss.</h3>

        <p>
          Daher lade ich euch herzlich vom
          <strong> 22. bis 24. Jänner 2027 </strong>
          ins <strong>mama thresl in Leogang</strong> ein.
        </p>

        <p>
          Ich freue mich auf ein Wochenende mit meinen Lieblingsmenschen.
          Ohne Stress, ohne Erwartungen und ohne festes Programm.
        </p>

        <p>
          <strong>
            Kurz gesagt: Ich wünsche mir einfach Zeit mit euch. ❤️
          </strong>
        </p>

        <p>
          Bussi <br />
          <strong>Tina</strong> 🎂🥂🏔️
        </p>
      </div>

      {/* Wichtigste */}
      <div className="card">
        <h2>💝 Das Wichtigste</h2>

        <p>
          Als kleines Dankeschön dafür, dass ihr mein Leben seit Jahren
          bereichert, übernehme ich die Kosten für die Unterkunft sowie die
          gemeinsamen Abendessen.
        </p>

        <h3>✅ Inklusive</h3>

        <ul>
          <li>Zimmer im mama thresl</li>
          <li>Abendessen beim Hüttwirt</li>
          <li>BBQ im mama thresl</li>
        </ul>

        <h3>💳 Selbst zu bezahlen</h3>

        <ul>
          <li>Liftkarten</li>
          <li>Leihski und Skiausrüstung</li>
          <li>Weitere Getränke und persönliche Ausgaben</li>
          <li>Alles, was ihr darüber hinaus anstellt</li>
        </ul>
      </div>

      {/* Programm */}
      <h2 id="programm">📅 Programm</h2>

      <div className="card">
        <h3>🏔️ Freitag, 22. Jänner</h3>
        <ul>
          <li>15:00 Uhr Zimmerbezug</li>
          <li>16:30 Uhr Treffpunkt an der Bar</li>
          <li>18:30 Uhr Abendessen beim Hüttwirt</li>
          <li>Danach gemütlicher Ausklang im mama thresl 🥂</li>
        </ul>
      </div>

      <div className="card">
        <h3>🎿 Samstag, 23. Jänner</h3>
        <ul>
          <li>Frühstück bis 11:00 Uhr ☕</li>
          <li>14:00 Uhr Hendlfischerei 🐔</li>
          <li>16:00 Uhr Après Ski im B3 🍻</li>
          <li>oder wer mag ab in die Sauna im mama thresl 🧘</li>
          <li>20:15 Uhr BBQ im mama thresl 🔥</li>
          <li>Gemeinsamer Ausklang am Abend</li>
        </ul>
      </div>

      <div className="card">
        <h3>🥐 Sonntag, 24. Jänner</h3>
        <ul>
          <li>Frühstück & Check-out bis 11:00 Uhr</li>
          <li>
            <strong>Option A:</strong> Skifahren & Hendlfischerei
          </li>
          <li>
            <strong>Option B:</strong> Heimreise
          </li>
        </ul>
      </div>

    

    

      {/* Fotos */}
      <div className="card">
        <h2 id="fotos">📷 Fotos & Erinnerungen</h2>

        <p>
          Damit wir die schönsten Momente nicht nur im Kopf behalten,
          gibt es hier ein gemeinsames Fotoalbum.
          Ladet gerne eure Schnappschüsse hoch und stöbert durch die
          Erinnerungen an unser Wochenende in Leogang. ❤️🏔️🥂
        </p>

        <a
  href="https://1drv.ms/f/c/05f0e84e6ff6e00b/IgAY02DQ0xCURZQ19A6UHP1YATpeiZ0CDdwV_Ot_URG8j-E?e=4gO052"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "20px",
    background: "#2563eb",
    color: "white",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "10px",
  }}
>
  📸 Zum Fotoalbum
</a>
      </div>
    </div>
  );
}