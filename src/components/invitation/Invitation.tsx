import { useEffect, useRef, useState } from "react";
import { invitationConfig as config } from "../../config/invitation";
import { Cover } from "./Cover";
import { HeroSection } from "./HeroSection";
import { GreetingSection } from "./GreetingSection";
import { HonoreeSection } from "./HonoreeSection";
import { CeremonySection } from "./CeremonySection";
import { CountdownSection } from "./CountdownSection";
import { LocationSection } from "./LocationSection";
import { ClosingSection } from "./ClosingSection";
import { MusicControl } from "./MusicControl";

export function Invitation() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [guest, setGuest] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("kepada") ?? params.get("to");
    if (value?.trim()) setGuest(value.trim());
  }, []);

  const openInvitation = async () => {
    setOpened(true);
    document.body.classList.remove("invitation-locked");

    try {
      await audioRef.current?.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="invitation-shell">
      <audio ref={audioRef} src={config.music.src} loop preload="none" />

      <div className={`cover-layer ${opened ? "cover-layer-open" : ""}`}>
        <Cover guest={guest} onOpen={openInvitation} />
      </div>

      <main
        className={opened ? "invitation-main is-open" : "invitation-main"}
        aria-hidden={!opened}
      >
        <HeroSection />
        <GreetingSection />
        <HonoreeSection />
        <CeremonySection />
        <CountdownSection />
        <LocationSection />
        <ClosingSection />
      </main>

      {opened && <MusicControl isPlaying={playing} onToggle={toggleMusic} />}
    </div>
  );
}
