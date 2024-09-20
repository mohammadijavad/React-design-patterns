export default function User({user}){
    console.log(user)
    return <div className='example'>
        <h3>uer name :{user?.name}</h3>
        <p className='intro'>user email:{user?.email}</p>
        <p className='intro'>user phone number:{user?.phone}</p>
        <p className='intro'>user website:{user?.website}</p>
    </div>
}