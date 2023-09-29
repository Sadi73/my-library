import { useState } from "react"
import Accordion from "./Test Components/Accordion"
import Checkbox from "./Test Components/Checkbox"
import Form_practice from "./Test Components/Form_practice"
import Radio from "./Test Components/Radio"
import Select from "./Test Components/Select"
import Select_Test from "./Test Components/Select_Test"
import ModalRoot from "./Test Components/Modals/CustomModal/ModalRoot"
import SuccessModalRoot from "./Test Components/Modals/SuccessModal/SuccessModalRoot"
import Tab1 from "./Test Components/Tabs/Tab1"
import Tab2 from "./Test Components/Tabs/Tab2"
import LoaderRoot from "./Test Components/Loader/LoaderRoot"


function App() {

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-yellow-500 text-center font-bold">Welcome</h1>
      {/* <Select/> */}
      {/* <Select_Test /> */}
      {/* <Checkbox/> */}
      {/* <Radio/> */}
      {/* <Form_practice/> */}
      {/* <Accordion /> */}
      {/* <ModalRoot/> */}
      {/* <SuccessModalRoot /> */}
      {/* <Tab1/> */}
      {/* <Tab2/> */}
      <LoaderRoot/>

    </div>
  )
}

export default App
