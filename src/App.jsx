

import AllComponentsRoot from "./Test Components/RootComponent/AllComponentsRoot"
import SideBar from "./Test Components/RootComponent/SideBar"


function App() {

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-yellow-500 text-center font-bold">Welcome</h1>

      {/* -------------------------Container-------------------------------- */}
      <div className="Container flex  ">

        {/*   Main Section   */}
        <AllComponentsRoot/>


        {/*   Side Bar   */}
        <SideBar/>

      </div>

    </div>

  )
}

export default App
