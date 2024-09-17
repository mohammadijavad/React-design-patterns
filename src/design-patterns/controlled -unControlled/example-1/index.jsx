import ControlledForm from "./controlled";
import UncontrolledForm from "./uncontrolled";

export default function ControlledPattern() {
    return <div className='example'>
        <h3>controlled component</h3>
        <ControlledForm />
        <h3>Uncontrolled component</h3>
        <UncontrolledForm />
    </div>
}