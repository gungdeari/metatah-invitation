import { MapPin, Navigation } from "lucide-react";
import { invitationConfig as config } from "../../config/invitation";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function LocationSection() {
  return (
    <section className="section location-section">
      <Reveal className="location-copy">
        <div className="location-mark" aria-hidden="true">
          <MapPin />
        </div>

        <p className="eyebrow">Lokasi Upacara</p>

        <h2>{config.location.name}</h2>

        <Divider />

        <p className="body-copy compact">{config.location.address}</p>

        <div className="map-preview">
          <div className="map-placeholder">
            <MapPin aria-hidden="true" />
            <span>Lokasi Upacara</span>
          </div>
        </div>

        <a
          className="ceremonial-button location-button"
          href={config.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation aria-hidden="true" />
          Buka Google Maps
        </a>

        <p className="location-note">
          Silakan gunakan Google Maps untuk mendapatkan petunjuk menuju lokasi upacara.
        </p>
      </Reveal>
    </section>
  );
}
