import { Hero } from './Components/Home/Hero';
import { Description } from './Components/Home/Description';
import { MainProducts } from './Components/Home/MainProducts';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <p>I'm making a web app and a mobile app for learning propurses only. But I'm very, very exited!</p>

        <Hero />

        <Description />

        <MainProducts />
      </main>
    </div>
  );
}
