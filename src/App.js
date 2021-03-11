import Camera from './component/Camera/Camera';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from './video/back.mp4';
import './App.css';

function App() {

  return (
    <section className="camera-section">
      <video className="videoBack" src={video} autoPlay loop playsInline muted />
      <Camera />
    </section>
  );
}

export default App;
