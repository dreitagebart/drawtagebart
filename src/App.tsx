import { FC } from 'react'
import { Excalidraw, WelcomeScreen } from '@excalidraw/excalidraw'

const App: FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Excalidraw theme='dark'>
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint>
            <p> Toolbar is here </p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>drawtagebart</WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              draw some sketches here!
            </WelcomeScreen.Center.Heading>
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  )
}

export default App
