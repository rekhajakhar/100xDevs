import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);

  return (
    <>
    <button>Home</button>

    <button>MY network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs</button>
    <button>Messaging</button>
    <button>Notifications</button>

    <button>Me</button>
    </>
  )
}

export default App
