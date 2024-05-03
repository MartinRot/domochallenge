/* Components */
import Seccion1 from "./components/Seccion1";
import Seccion2 from "./components/Seccion2";
import Seccion3 from "./components/Seccion3";
import Seccion4 from "./components/Seccion4";
import Seccion5 from "./components/Seccion5";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col">
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
      <Seccion5 />
    </main>
  );
}
