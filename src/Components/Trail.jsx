import axios from "axios";
import { useEffect, useState } from "react";

function Trail()
{
    const [data,setData]=useState(null);
    const [fileList,setFileList] = useState();
    useEffect(()=>{
        axios.get("http://localhost:8081/getplans")
        .then(res=>setData(res.data))
        .catch(err =>console.log(err))
        
        async function filedata(){
            await axios.get('http://localhost:8081/list')
      .then(response => setFileList(response.data))
      .catch(error => console.error('Error fetching file list:', error));
        }
        filedata()
        
        
      },[])
      const handleFileClick = (fileName) => {
        // Download the selected file from the backend
        console.log("lolo boss");
        window.open(`http://localhost:8081/download?fileName=${fileName}`);
      };
    //   console.log(data);
    return(
        <div>
      <h2>File List:</h2>
      
      <ul>
        {fileList?.map((file, index) => (
          <li key={index} onClick={() => handleFileClick(file)}>
            {file}
          </li>
        ))}
      </ul> 
    </div>
    )
}
export default Trail;