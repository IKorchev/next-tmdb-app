import Genres from "./Genres"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Genres />
      {children}
    </>
  )
}

export default Layout
