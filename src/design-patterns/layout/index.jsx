import SplitScreen from "./example-1/split-screen";
import { RegularList } from "./example-2/lists/Regular";
import{authors} from "./example-2/data/authors"
import { SmallAuthorListItem } from "./example-2/authors/SmallListItems";

const LeftSideComp = ({ title }) => {
    return <h2 style={{ background: 'lime' }}> {title}</h2>
}
const RightSideComp = ({ title }) => {
    return <h2 style={{ background: 'red' }}> {title}</h2>
}


export default function Layout() {
    return (
        <div>
            <div className='example'>   
            <h3>split screen example</h3>
            <SplitScreen>
                <LeftSideComp title='I am left side' />
                <RightSideComp title='Hey I am right side' />
            </SplitScreen>
            </div>
            <div className='example'>
            <div>
                <h3>lists example</h3>
                <RegularList items={authors} sourceName='author' ItemComponent={SmallAuthorListItem} />
            </div>
            </div>
        </div>
    )
}