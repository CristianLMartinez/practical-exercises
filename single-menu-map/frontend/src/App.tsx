import { useEffect, useState } from "react"
import Input from "./components/UI/Input"
import { TestingService } from "./components/services/testing.service"


function App() {

  const [morty, setMorty] = useState();
  

  const fetchMorty = async () => {
    const {data} = await TestingService()
    setMorty(data);
  }

  useEffect(() => {
    try{
      fetchMorty()
    } catch(error) {

    }

  }, []);


  return (
    <>
      <h1>Let's go code..</h1>
      <div>
        {JSON.stringify(morty)}
      </div>
      {/* <Input type="primary" placeholder="Some text here..." id="some" name="some" /> */}
    </>
  )
}

export default App
