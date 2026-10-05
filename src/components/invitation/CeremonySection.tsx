import { invitationConfig as config } from "../../config/invitation";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function CeremonySection() {
  return (
    <section className="section ceremony-section">
      <Reveal className="ceremony-copy">
        <p className="eyebrow">Waktu Upacara</p>

        <p className="body-copy compact">Upacara akan dilaksanakan pada</p>

        <h2>Upacara Metatah</h2>

        <Divider />

        <div className="date-card">
          <span>{config.event.day}</span>

          <strong>{config.event.dateNumber}</strong>

          <span>{config.event.monthYear}</span>

          <i aria-hidden="true" />

          <small>Waktu</small>

          <b>{config.event.time}</b>

          <em>Sampai selesai</em>
        </div>

        <div className="dress-code">
          <p>Mohon mengenakan busana adat Bali</p>
          <span className="dress-code-mark" aria-hidden="true">
            ✤
          </span>
        </div>
      </Reveal>
    </section>
  );
}
