import ornament from "../../assets/balinese-ornament.png";
import { invitationConfig as config } from "../../config/invitation";
import { Reveal } from "./Reveal";

export function HonoreeSection() {
  return (
    <section className="section honoree-section">
      <Reveal className="honoree-copy">
        <p className="eyebrow">Yang Akan Diupacarai</p>

        <div className="ornament-frame">
          <img src={ornament} alt="" aria-hidden="true" />

          <p className="honoree-name">{config.event.person}</p>
        </div>

        <p className="honoree-parents">
          Putri ke-2 dari pasangan <br></br>
          <span>Anak Agung Gede Agung</span> & <span>Jero Made Puspa</span>
        </p>

        <a
          className="honoree-instagram"
          href="https://instagram.com/gungarin_"
          target="_blank"
          rel="noreferrer"
        >
          @gungarin_
        </a>
      </Reveal>
    </section>
  );
}
