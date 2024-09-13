import SplitScreen from "./split-screen";
const LeftSideComp = ({ title }) => {
    return <h2 style={{ background: 'lime' }}> {title}</h2>
}
const RightSideComp = ({ title }) => {
    return <h2 style={{ background: 'red' }}> {title}</h2>
}
export default function Layout() {
    return <SplitScreen>
        <LeftSideComp title='I am left side' />
        <RightSideComp title='Hey I am right side' />
    </SplitScreen>
}