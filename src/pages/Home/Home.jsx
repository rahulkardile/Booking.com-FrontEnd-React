import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Header from "../../components/Header/Header.jsx"
import Featured from "../../components/Featured/Featured"
import Property from "../../components/Property/Property"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import MailList from "../../components/MailList/MailList"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Property />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home