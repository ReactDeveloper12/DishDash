import useOnlineStatus from "../utils/useOnlineStatus";
import { BsWifiOff } from "react-icons/bs";

const Grocery = () => {
    const OnlineStatus = useOnlineStatus();
    if(OnlineStatus === false){
        return (
            <div className="offlineWrapper">
                <h1 className="offline-text">You Are Offline.<BsWifiOff /></h1>
                <h4 className="offline-text-small">Please Check Your Internet Connection.</h4>
            </div>
        );
    }
    return (
        <div>
            <img className="DDMartImg" src="https://cdn3d.iconscout.com/3d/premium/thumb/coming-soon-4485432-3728267.png?f=webp" />
        </div>     
    )
}

export default Grocery