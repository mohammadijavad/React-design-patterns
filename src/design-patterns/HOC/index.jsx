import checkProps from "./example-1-check-props/check-props";
import Users from "./example-1-check-props/users";

export default function HOCPattern(){

    const WrapperProps=checkProps(Users)
    return  <div>
        <WrapperProps user={{email:"test@gmail.com"}} />
    </div>
}