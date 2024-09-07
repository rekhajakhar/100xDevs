import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
    <button>Home</button>

    <button>MY network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs {jobsCount}</button>
    <button>Messaging {messagingAtomCount}</button>
    <button>Notifications {notificationsCount}</button>
  

    <button>Me {totalNotificationCount}</button>
    </>
  )
}

export default App
