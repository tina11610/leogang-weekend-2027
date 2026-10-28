import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function App() {

  const [participants, setParticipants] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const selectedParticipant = participants.find(
  (p) => p.name === selectedPerson
);
useEffect(() => {
  loadParticipants();
}, []);

async function loadParticipants() {
  console.log("loadParticipants aufgerufen");

  const { data, error } = await supabase
    .from("participants")
    .select("*")
    .order("name");

  console.log("Anzahl Teilnehmer:", data?.length);

  if (!error) {
    setParticipants(data);
  }
}

async function updateStatus(status) {
  if (!selectedPerson) {
    alert("Bitte zuerst deinen Namen auswählen.");
    return;
  }

  const participant = participants.find(
  (p) => p.name === selectedPerson
);

if (participant?.status !== "offen") {
  alert(
    "Du hast bereits geantwortet. Änderungen bitte direkt mit Tina abstimmen ❤️"
  );
  return;
}

  const { error } = await supabase
    .from("participants")
    .update({ status })
    .eq("name", selectedPerson);

  if (!error) {
    await loadParticipants();

    alert(
      "Danke für deine Rückmeldung ❤️"
    );
  }
}
const dabei = participants.filter(
  (p) => p.status === "Dabei"
);

const abgesagt = participants.filter(
  (p) => p.status === "Abgesagt"
);

const offen = participants.filter(
  (p) => p.status === "offen"
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
  <a href="#willkommen">❤️ Willkommen</a>
  <a href="#programm">📅 Programm</a>
  <a href="#zusage">🙋 Zusage</a>
  <a href="#teilnehmer">❤️ Wer ist dabei?</a>
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
          <li>16:00 Uhr Treffpunkt an der Bar</li>
          <li>18:00 Uhr Abendessen beim Hüttwirt</li>
          <li>Danach gemütlicher Ausklang 🥂</li>
        </ul>
      </div>

      <div className="card">
        <h3>🎿 Samstag, 23. Jänner</h3>
        <ul>
          <li>Frühstück bis 11:00 Uhr ☕</li>
          <li>13:00 Uhr Hendlfischerei 🐔</li>
          <li>16:00 Uhr Après Ski im B3 🍻</li>
          <li>18:00–20:00 Uhr BBQ im mama thresl 🔥</li>
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

      {/* RSVP */}
      <div className="card">
        <h2 id="zusage">🙋 Bist du dabei?</h2>

        <p>
          <strong>
            Bitte gib mir bis spätestens 1. November 2026 deine Zu- oder
            Absage.
          </strong>
        </p>

        <p>
          So kann ich die Zimmer und Reservierungen rechtzeitig fixieren. ❤️
        </p>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
  <label>
    <strong>Wer bist du?</strong>
  </label>

  <br />

  <select
    value={selectedPerson}
    onChange={(e) => setSelectedPerson(e.target.value)}
    style={{
      marginTop: "10px",
      padding: "10px",
      borderRadius: "8px",
      minWidth: "250px",
    }}
  >
    <option value="">Bitte auswählen...</option>

    {participants.map((person) => (
      <option key={person.id} value={person.name}>
        {person.name}
      </option>
    ))}
  </select>
</div>
       {selectedParticipant &&
selectedParticipant.status !== "offen" ? (

  selectedParticipant.status === "Dabei" ? (

    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        background: "#ecfdf5",
        borderRadius: "10px",
        color: "#166534",
      }}
    >
      🥳 Wie schön, dass du dabei bist!

      <br /><br />

      Ich freue mich riesig auf ein Wochenende mit dir in Leogang. ❤️🏔️🥂
    </div>

  ) : (

    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        background: "#fef2f2",
        borderRadius: "10px",
        color: "#991b1b",
      }}
    >
      ❤️ Danke für deine Rückmeldung.

      <br /><br />

      Schade, dass es dieses Mal nicht klappt. Wir holen das bei Gelegenheit nach. 🥂
    </div>

  )

) : (

  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap",
    }}
  >
    <button
      className="yesButton"
      onClick={() => updateStatus("Dabei")}
    >
      ✅ Ich bin dabei
    </button>

    <button
      className="noButton"
      onClick={() => updateStatus("Abgesagt")}
    >
      ❌ Ich kann leider nicht dabei sein
    </button>
  </div>

)}

      </div>

      {/* Teilnehmer */}
      <div className="card">
        <h2 id="teilnehmer">❤️ Wer ist dabei?</h2>
<div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      background: "#ecfdf5",
      padding: "15px 20px",
      borderRadius: "12px",
      minWidth: "120px",
    }}
  >
    <div>✅</div>
    <strong>{dabei.length}</strong>
    <div>Dabei</div>
  </div>

  <div
    style={{
      background: "#fef2f2",
      padding: "15px 20px",
      borderRadius: "12px",
      minWidth: "120px",
    }}
  >
    <div>❌</div>
    <strong>{abgesagt.length}</strong>
    <div>Abgesagt</div>
  </div>

  <div
    style={{
      background: "#fffbeb",
      padding: "15px 20px",
      borderRadius: "12px",
      minWidth: "120px",
    }}
  >
    <div>⏳</div>
    <strong>{offen.length}</strong>
    <div>Offen</div>
  </div>
</div>
        

<ul>
  {dabei.map((person) => (
    <li
      key={person.id}
      style={{
        listStyle: "none",
        marginBottom: "8px",
      }}
    >
      ✅ {person.name}
    </li>
  ))}
</ul>



<ul>
  {abgesagt.map((person) => (
    <li
      key={person.id}
      style={{
        listStyle: "none",
        marginBottom: "8px",
      }}
    >
      ❌ {person.name}
    </li>
  ))}
</ul>



<ul>
  {offen.map((person) => (
    <li
      key={person.id}
      style={{
        listStyle: "none",
        marginBottom: "8px",
      }}
    >
      ⏳ {person.name}
    </li>
  ))}
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