import "./App.css";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
import Game from "./components/tictactoe/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobleStyle } from "./GlobalStyle";
import Photos from "./components/photo/Photos";
function App() {
  return (
    <div>
      {/* <Toggle></Toggle>
      <YoutubeList></YoutubeList>
      <Game></Game>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <GlobleStyle></GlobleStyle>
      <CardList>
        <Card secondary = {true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      <Photos></Photos>
    </div>
  );
}

export default App;
