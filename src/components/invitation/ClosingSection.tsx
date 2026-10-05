import illustration from "../../assets/balinese-closing-illustration.png";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function ClosingSection() {
  return (
    <section className="section closing-section">
      <Reveal className="closing-copy">
        <p className="body-copy">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
          hadir serta memberikan doa dan restu.
        </p>

        <h2>
          Om Shanti, Shanti,
          <br />
          Shanti Om
        </h2>

        <Divider />

        <p className="closing-name">Keluarga Anak Agung Arin Aprilianti</p>
      </Reveal>

      <div className="closing-art-wrap">
        <img className="closing-illustration" src={illustration} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
