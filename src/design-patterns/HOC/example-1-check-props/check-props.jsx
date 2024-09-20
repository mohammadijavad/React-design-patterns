export default function checkProps(Component){
return (props)=> {
    console.log(props)
    return <Component {...props} />}
}