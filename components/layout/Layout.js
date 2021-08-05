import Genres from "./Genres"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Genres />
      {children}
      <Footer />
    </>
  )
}

export default Layout
