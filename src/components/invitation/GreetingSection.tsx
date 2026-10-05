import { Reveal } from "./Reveal";

export function GreetingSection() {
  return (
    <section className="section greeting-section">
      <Reveal className="greeting-copy">
        <span className="flower-mark" aria-hidden="true">
          ✤
        </span>

        <h2>Om Swastiastu</h2>

        <p className="prayer-line">Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa</p>

        <p className="body-copy">
          Dengan penuh rasa syukur, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk berkenan
          hadir dan memberikan doa restu pada Upacara Manusa Yadnya Metatah.
        </p>
      </Reveal>

      <Reveal className="sloka-block">
        <div className="sloka-mark" aria-hidden="true">
          ❈
        </div>

        <p className="eyebrow">SLOKA</p>

        <blockquote>
          “Jika nafsu itu dapat dikuasai dan dikendalikan, itulah sorga namanya; apabila tidak dapat
          dikuasai, itulah neraka.”
        </blockquote>

        <p className="sloka-context">Tentang pengendalian diri dan ketenangan batin</p>

        <p className="sloka-label">Sarasamuscaya 71</p>
      </Reveal>
    </section>
  );
}
