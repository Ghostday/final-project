export default function Loader({show}: {show: boolean}): JSX.Element | null {
    return show ? <div className="loader"></div> : null;
}