import GlobalStyle from "./GlobalStyle"
import BaseContextProvider from "./Context/BaseContext"
import Forms from "./Components/Forms"
import Lists from "./Components/Lists"
import DownloadButton from "./Components/DownloadButton"

function App() {
  return (
    <div>
      <GlobalStyle />
      <BaseContextProvider>
        <Forms />
        <Lists />
        <DownloadButton />
      </BaseContextProvider>
    </div>
  )
}

export default App
