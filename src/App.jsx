
import ModalRoot from "./Test Components/Modals/CustomModal/ModalRoot"
import SuccessModalRoot from "./Test Components/Modals/SuccessModal/SuccessModalRoot"
import Tab1 from "./Test Components/Tabs/Tab1"
import Tab2 from "./Test Components/Tabs/Tab2"
import LoaderRoot from "./Test Components/Loader/LoaderRoot"
import ProgressBarRoot from "./Test Components/ProgressBar/ProgressBarRoot"
import RatingRoot from "./Test Components/Rating/RatingRoot"
import DateFieldRoot from "./Test Components/DateField/DateFieldRoot"
import Accordion from "./Test Components/Accordion/Accordion"
import SwitchRoot from "./Test Components/ToggleSwitch/SwitchRoot"
import ShowInputImage from "./Test Components/Inputs/ShowInputImage"
import CustomRadioInput from "./Test Components/Inputs/CustomRadioInput"
import AddMore from "./Test Components/Inputs/AddMore"


function App() {

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-yellow-500 text-center font-bold">Welcome</h1>

      <div>
        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Accordion</h1>
          <Accordion />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Modal</h1>
          <ModalRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">SuccessModal</h1>
          <SuccessModalRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Tab 1</h1>
          <Tab1 />
        </div>
        <hr />

        <div className="my-10">
          <h2 className="text-center text-xl font-bold">Tab 2</h2>
          <Tab2 />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Loader</h1>
          <LoaderRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Progress Bar</h1>
          <ProgressBarRoot />
        </div>
        <hr />


        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Number Rating</h1>
          <RatingRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Date Field</h1>
          <DateFieldRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Toggle Switch</h1>
          <SwitchRoot />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Input Image</h1>
          <ShowInputImage />
        </div>
        <hr />

        <div className="my-10">
          <h1 className="text-center text-xl font-bold">Radio input Custom Style</h1>
          <CustomRadioInput />
        </div>
        <hr />


        <div className="my-10">
        <h1 className="text-center text-xl font-bold">Add More</h1>
        <AddMore />
      </div>
      <hr />

      </div>

      {/* <div className="my-10">
        <h1 className="text-center text-xl font-bold">Add More</h1>
        <AddMore />
      </div>
      <hr /> 
    
      
      */}










    </div>

  )
}

export default App
