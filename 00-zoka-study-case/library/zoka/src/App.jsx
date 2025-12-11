import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <header class="container">
        <h1 id="logo">ZOKA</h1>

        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Photography</a>
            </li>
            <li>
              <a>Photoshoot</a>
            </li>
          </ul>
        </nav>

        <a id="youtube-btn">
          <span>YouTube</span>
          <img src="polygon.svg" />
        </a>
      </header>

      <main>
        <section id="hero-section" class="container">
          <div id="left">
            <h2>Where creative process happens</h2>
            <p>
              Your creativity, our inspiration Whatever your story, set if free.
            </p>
            <a>
              <span>Get in touch!</span>
              <div>
                <img src="chevron-right.svg" />
              </div>
            </a>
          </div>

          <div id="right">
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </section>

        <section id="why-choose-us-section" class="container">
          <h2>Why Choose us</h2>

          <div class="card-wrapper">
            <Card image="photo-gallery.svg" />
            <Card image="my-location.svg" />
            <Card image="camera.svg" />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/* -------------------------- Cara membuat tampilan ------------------------- */
// 1. Buat sebuah fungsi
// 2. Pastikan fungsinya mengembalikan (return) sebuah element HTML
// 3. Kirim fungsi tersebut secara default (export default)

/* ----------------------------------- JSX ---------------------------------- */
// JavaScript with X (HTML)
/*
1. Kita bisa nulis JavaScript HANYA sebelum keyword return
2. Kita bisa nulis HTML HANYA setelah return
3. Pengualian: Kita bisa menulis JS di dalam HTML, asal dibungkus {}
*/
