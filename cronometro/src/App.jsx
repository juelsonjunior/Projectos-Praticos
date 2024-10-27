import bgVideo from "./assets/bgFundo.mp4";
import { StopWatch } from "./components/stop-watch/stop-watch";
function App() {
  return (
    <div className="relative">
      <video
        src={bgVideo}
        autoPlay
        muted
        className="w-full h-lvh absolute top-0 -z-10 object-cover filter brightness-50"
      ></video>

      <div className="w-full h-lvh absolute top-0 left-0 z-10 flex items-center justify-center flex-col gap-5 backdrop-blur-sm">
        <h4 className="text-white text-5xl">Cronometro</h4>

        <StopWatch />
      </div>
    </div>
  );
}

export default App;
