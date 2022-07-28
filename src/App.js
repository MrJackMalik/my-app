import './App.scss';
import Header from "./components/header/Header"
import Form from "./components/main/form/form"


function App() {
  return (
    <div className="App">
      <Header />
      <Form addItem={this.addItem} />
    </div>
  );
}
export default App;
