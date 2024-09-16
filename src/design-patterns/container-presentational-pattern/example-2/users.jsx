export default function Users({user}){
    return <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
    </div>
}