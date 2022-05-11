import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Trío monstruoso</h1>
        <Testimonio 
        nombre='Monkey D. Luffy "Sombrero de Paja"'
        cargo='Fundador y capitán de los Piratas de Sombrero de Paja'
        texto='Monkey D. Luffy (モンキー・Ｄ・ルフィ Monkī Dī Rufi?), 
        más conocido como Luffy "Sombrero de Paja" (麦わらのルフィ Mugiwara no Rufi?),
        es el protagonista principal de la serie de manga y anime One Piece. 
        Comió una fruta del diablo llamada fruta Gomu Gomu, que le convirtió en un hombre de goma.'
        imagen='luffy'/>
        <Testimonio
        nombre='Roronoa Zoro "El Cazador de Piratas"'
        cargo='Espadachín de los Piratas de Sombrero de Paja'
        texto='Roronoa Zoro (ロロノア・ ゾロ Roronoa Zoro?), conocido como El Cazador de Piratas (海賊狩り Kaizoku Gari?),
         es el combatiente de los Piratas de Sombrero de Paja, y uno de sus dos espadachines, así como un antiguo cazarrecompensas.'
         imagen='zoro'/>
        <Testimonio
        nombre='Vinsmoke Sanji "Pierna Negra"'
        cargo=' Cocinero de los Piratas de Sombrero de Paja'
        texto='Sanji (サンジ Sanji?), conocido como Pierna Negra (黒脚 Kuro Ashi?) y nacido como Vinsmoke Sanji (ヴィンスモーク・サンジ Vinsumōku Sanji?),
         es el cocinero de los Piratas de Sombrero de Paja,el tercer hijo de la familia Vinsmoke.'
        imagen='sanji'
        />
      </div>
    </div>
  );
}

export default App;
