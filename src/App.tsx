import Calculator from './components/calculator/calculator';
import { Header } from '@m7kra/react-utils';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div id='app'>
      <Header
        logoDark={<img src={logo} height={30}/>}
        logoLight={<img src={logo} height={30}/>}
        title='Portes CE'
        github='https://github.com/m7kra/mail'
        links={[
          {label: 'M7kra', href: 'https://m7kra.github.io/'},
        ]}
      />
      <h1>Portes CE</h1>
      <p>Calculadora de preços do correio editorial nacional</p>
      <p>Fonte: <a href='https://www.ctt.pt/empresas/solucoes-de-gestao-e-setoriais/solucoes-setoriais/editores-e-livreiros/correio-editorial-nacional'>CTT</a> (1/11/2023)</p>
      <div className='vertical-spacer-20'/>
      <Calculator />
      <div className='vertical-spacer-100'/>
      <blockquote>Dedicado a todos os vendedores de livros no OLX ;)</blockquote>
      <p>Feito por: <a href='https://m7kra.github.io/'>M7kra</a></p>
    </div>
  );
}

export default App;
