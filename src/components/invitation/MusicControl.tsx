import { Music2, Pause } from "lucide-react";

type MusicControlProps = {
  isPlaying: boolean;
  onToggle: () => void;
};

export function MusicControl({ isPlaying, onToggle }: MusicControlProps) {
  return (
    <button
      type="button"
      className="music-control"
      onClick={onToggle}
      aria-label={isPlaying ? "Hentikan musik" : "Putar musik"}
      aria-pressed={isPlaying}
    >
      {isPlaying ? <Pause aria-hidden="true" /> : <Music2 aria-hidden="true" />}
    </button>
  );
}
