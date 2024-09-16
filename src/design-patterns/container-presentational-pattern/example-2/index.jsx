import DataSource from "./data-source";
import UserInfo from "./users"
import Todos from "./todos"
import axios from "axios";

export default function Container(){
    const fetchData = async (url) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${url}`);
        return response.data;
    };

    const getDataFromLocalStorage = (key) => () => {
        //just for test and show you can add data in local storage as key
        return localStorage.getItem(key);
    };

    return <div>
        <DataSource getData={() => fetchData("/users/1")} resourceName={"user"}>
            <UserInfo />
        </DataSource>

        <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
            <Todos />
        </DataSource>
    </div>
}