

import AllComponentsRoot from "./Library/RootComponent/AllComponentsRoot"
import SideBar from "./Library/RootComponent/SideBar"


function App() {

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-yellow-500 text-center font-bold">Welcome</h1>

      {/* -------------------------Container-------------------------------- */}
      <div className="Container flex gap-6">

        {/*   Main Section   */}
        <AllComponentsRoot/>


        {/*   Side Bar   */}
        <SideBar/>

      </div>

    </div>

  )
}

export default App
