import useOnlineStatus from "../utils/useOnlineStatus";
import { BsWifiOff } from "react-icons/bs";

const About = () => {
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
            <h3>We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
    The best part? Every bit of your work at DishDash will help elevate the lives of our users across India.</h3>
    <h2>Where Do You Belong?</h2>
        </div>
    );
};

export default About