<<<<<<< HEAD
import Translate from './components/Translate';

function App() {
  return (
    <>
      <Translate />
    </>
=======
import Header from './components/Header';
import Translate from './components/Translate';
import RecentTrans from './components/recentTranslation';
function App() {
  return (
    <div className="App">
      <Header />
      <Translate />
      <RecentTrans />
    </div>
>>>>>>> fd72defa896cc6029ebc0fb167d6b7d593acb749
  );
}

export default App;
