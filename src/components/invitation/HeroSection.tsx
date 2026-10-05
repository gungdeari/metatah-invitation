import ornament from "../../assets/balinese-ornament.png";
import { invitationConfig as config } from "../../config/invitation";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <section className="section hero-section">
      <img className="hero-ornament" src={ornament} alt="" aria-hidden="true" />

      <Reveal className="hero-copy">
        <p className="eyebrow">{config.event.eyebrow}</p>

        <h2>{config.event.title}</h2>

        <Divider />

        <p className="hero-name">{config.event.person}</p>

        <p className="date-line">
          {config.event.day}, {config.event.dateNumber} {config.event.monthYear}
        </p>
      </Reveal>
    </section>
  );
}
