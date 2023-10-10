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
import ProgressBarRoot from "./Test Components/ProgressBar/ProgressBarRoot"


function App() {

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-yellow-500 text-center font-bold">Welcome</h1>
      {/* <Select/> */}
      {/* <Select_Test /> */}
      {/* <Checkbox/> */}
      {/* <Radio/> */}
      {/* <Form_practice/> */}
      <div className="my-10">
        <h1 className="text-center text-xl font-bold">Accordion</h1>
        <Accordion />
        <hr />
      </div>

      <div className="my-10">
        <h1 className="text-center text-xl font-bold">Modal</h1>
        <ModalRoot />
        <hr />
      </div>

      <div className="my-10">
        <h1 className="text-center text-xl font-bold">SuccessModal</h1>
        <SuccessModalRoot />
        <hr />
      </div>

      <div className="my-10">
        <h1 className="text-center text-xl font-bold">Tab 1</h1>
        <Tab1 />
        <hr />
      </div>

      <div className="my-10">
        <h2 className="text-center text-xl font-bold">Tab 2</h2>
        <Tab2 />
        <hr />
      </div>
      <div className="my-10">
        <h1 className="text-center text-xl font-bold">Loader</h1>
        <LoaderRoot />
        <hr />
      </div>

      <div className="my-10">
        <h1 className="text-center text-xl font-bold">Progress Bar</h1>
        <ProgressBarRoot />
      </div>




    </div>
  )
}

export default App
