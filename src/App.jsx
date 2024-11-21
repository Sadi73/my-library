

import AllComponentsRoot from "./Library/RootComponent/AllComponentsRoot"
import LeftSideBar from "./Library/RootComponent/LeftSideBar"
import RightSideBar from "./Library/RootComponent/RightSideBar"

function App() {

  return (
    <div className="md:grid grid-cols-12 gap-6">

      <div className="col-span-2">
        <LeftSideBar />
      </div>

      {/*   Main Section   */}
      <div className="col-span-7 px-10">
        <AllComponentsRoot />
      </div>


      {/*   Side Bar   */}
      <div className="col-span-3">
        <RightSideBar />
      </div>

    </div>

  )
}

export default App
