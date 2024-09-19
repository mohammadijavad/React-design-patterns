import DataSource from "./data-source";
import UserInfo from "./users"
import Todos from "./todos"
import axios from "axios";

export default function ContainerRenderProps(){
    const fetchData = async (url) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${url}`);
        return response.data;
    };

    const getDataFromLocalStorage = (key) => () => {
        //just for test and show you can add data in local storage as key
        return localStorage.getItem(key);
    };

    return <div>
        <h3>render props example with container</h3>
        <DataSource getData={() => fetchData("/users/1")}  render={(user)=><UserInfo user={user} />}/>

        <DataSource getData={() => getDataFromLocalStorage("test")}  render={(msg)=><Todos msg={msg} />}/>

    </div>
}