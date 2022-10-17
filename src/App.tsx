/* eslint-disable no-useless-computed-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import logo from './logo.svg'
import './App.css'
// @ts-ignore
import Torus from '../embed/upbondEmbed.esm'

function App() {
  const loginEmbed = async () => {
    const torus = new Torus({
      buttonPosition: 'bottom-left'
    })
    await torus.init({
      buildEnv: 'development',
      enabledVerifiers: {
        reddit: false
      },
      enableLogging: true,
      network: {
        chainId: 80001,
        networkName: 'Polygon Mumbai',
        host: 'https://polygon-mumbai.infura.io/v3/c85705179b1f4a3eb3b399bc0c6b5b33',
        blockExplorer: 'https://mumbai.polygonscan.com/',
        ticker: 'matic',
        tickerName: 'Matic'
      },
      loginConfig: {
        // @ts-ignore
        ["upbond-wallet-tesnet-line"]: {
          description: "LINE with UPBOND Identity",
          typeOfLogin: "line",
          jwtParameters: {
            domain: 'https://lzg2dndj.auth.dev.upbond.io',
            connection: "line",
            clientId: 'FoQ_Ri8rKSXkHf82GRzZK',
            redirect_uri: "http://localhost:3002",
            scope: "openid email profile offline_access",
          },
          clientId: "BGbtA2oA0SYvm1fipIPaSgSTPfGJG8Q6Ep_XHuZY9qQVW5jUXTMd0l8xVtXPx91aCmFfuVqTZt9CK79BgHTNanU",
          logoHover: "",
          logoLight:"https://app.upbond.io/assets/images/common/UPBOND%E3%83%AD%E3%82%B4new-01.svg",
          logoDark: "https://app.upbond.io/assets/images/common/UPBOND%E3%83%AD%E3%82%B4new-01.svg",
          showOnModal: true,
          showOnDesktop: true,
          showOnMobile: true,
          mainOption: true,
          priority: 1,
        }
      }
    })
    console.log('login success!')
    const info = await torus.login()
    console.log(info, '@info?')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={loginEmbed}
          style={{ cursor: 'pointer' }}
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
