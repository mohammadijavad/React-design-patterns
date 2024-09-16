export default function Todos({msg}){
    return <div className='example'>
        {!!msg?<h1>{JSON.stringify(msg)}</h1>:<h3>there is not data in your local storage with key <strong>msg☑️</strong></h3>}
    </div>
}