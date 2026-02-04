import CoreConcept from "./concepts/CoreConcept";
import Example from "./example/Example";
import Header from "./header/Header";


function App() {


  return (
    <>
    {/* header */}
    <Header />
    <main>
      <CoreConcept />
      <Example />
    </main>
    </>
  )
}

export default App
