
// import {app} from './firebase'
import {ChangeEvent, SyntheticEvent, useState,useCallback} from 'react';
import _debounce from 'lodash/debounce'
import {app} from './firebase'
import {getFirestore,addDoc,collection,serverTimestamp,onSnapshot,query,orderBy} from 'firebase/firestore'
function App() {
  const db = getFirestore(app)
  // const [data,setData] = useState<string>();
  const [inputData,setInputData] = useState<string>();
  const submitHandler =  async(e:SyntheticEvent)=>{
    e.preventDefault();
    try{
      await addDoc(collection(db,"FormData"),{
        text:inputData,
       createdAt:serverTimestamp()
      })
      setInputData("");
    }
    catch(error)
    {
     alert(error)
    }
    alert(inputData)

  }
  const debouncedSearch:any = useCallback(_debounce((searchTerm:string) => {
    // Perform the search or API call with searchTerm
    console.log(searchTerm);
    
  }, 2000),[]);
  const inputHandler = (e:ChangeEvent<HTMLInputElement>)=>{

    setInputData(e.target.value)
    debouncedSearch(e.target.value)
  }




  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-red-100">
     <form onSubmit={submitHandler} className="flex flex-col justify-around items-center h-[10rem] w-[30rem] bg-sky-50" action="">
      <label>Enter your data here </label>
      <input onChange={(e)=>(inputHandler(e))} className="h-10 w-[20rem] outline-2 border border-solid-black p-2" type="text" />
      <button  className="text-white bg-blue-900 h-10 w-[10rem] rounded-xl " type={"submit"}>submit</button>
     </form>
    </div>
  )
}

export default App
