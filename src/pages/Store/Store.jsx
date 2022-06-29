import './Store.scss'

import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"

export default function Store() {
  return (
    <>
      <Navbar />
      <Filter />
      <Card />
    </>
  )
}
