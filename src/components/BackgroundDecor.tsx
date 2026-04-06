export function BackgroundDecor() {
  return (
    <>
      <div id="custom-cursor" />
      <svg id="chrono-background" viewBox="0 0 1000 1000" aria-hidden="true">
        <circle cx="500" cy="500" r="450" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="5,10" />
        <circle cx="500" cy="500" r="300" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        <g id="gears-group" />
      </svg>
    </>
  );
}
