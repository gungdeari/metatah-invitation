import { useEffect, useState } from "react";
import { getCountdown } from "../../lib/countdown";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function CountdownSection() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section section-tinted countdown-section">
      <Reveal className="countdown-copy">
        <p className="eyebrow">Menghitung Hari</p>

        <h2>Menuju Hari Upacara</h2>

        <Divider />

        {countdown.complete ? (
          <div className="countdown-complete">
            <span className="countdown-mark" aria-hidden="true">
              ✤
            </span>

            <p className="countdown-complete-title">Hari yang dinantikan telah tiba</p>

            <p className="countdown-complete-text">
              Semoga seluruh rangkaian upacara berjalan dengan lancar dan penuh rahayu.
            </p>
          </div>
        ) : (
          <div className="countdown-grid">
            {(
              [
                ["Hari", countdown.days],
                ["Jam", countdown.hours],
                ["Menit", countdown.minutes],
                ["Detik", countdown.seconds],
              ] as const
            ).map(([label, value]) => (
              <div className="countdown-item" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>

                <span>{label}</span>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
