import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { BackgroundImage, Text } from '@mantine/core'
import BackgroundImageValue from './assets/bash1.webp'

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundImage
        h='calc(100vh)'
        w='100vw'
        src={BackgroundImageValue}
        radius="sm"
        mt='auto'
      >
        <Text>Hello i am bea A!</Text>
      </BackgroundImage>
    </div>
  );
}

export default App;
