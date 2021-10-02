import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import { DAppProvider } from "@usedapp/core"
import config from "../utils/dappConfig"
function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  )
}

export default MyApp
