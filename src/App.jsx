import Balance from './components/Balance/Balance';
import Chart from './components/Chart/Chart';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'

export default function App() {
  return (
    <>
      <main className="main-container">
        <Balance />
        <Chart />
      </main>
      <Footer />
    </>
  );
}