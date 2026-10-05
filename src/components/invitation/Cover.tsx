import ornament from "../../assets/balinese-ornament.png";
import { invitationConfig as config } from "../../config/invitation";
import { Divider } from "./Divider";

type CoverProps = {
  guest: string;
  onOpen: () => void;
};

export function Cover({ guest, onOpen }: CoverProps) {
  return (
    <section className="invitation-cover" aria-label="Pembuka undangan">
      <div className="corner-frame" aria-hidden="true" />

      <img className="cover-ornament" src={ornament} alt="" aria-hidden="true" />

      <div className="cover-copy">
        <p className="eyebrow">{config.event.eyebrow}</p>

        <h1>{config.event.title}</h1>

        <Divider />

        <p className="cover-name">{config.event.person}</p>

        <div className="guest-block">
          <p className="guest-label">Kepada Yth.</p>
          <p className="guest-name">{guest}</p>
        </div>

        <button type="button" className="ceremonial-button" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
