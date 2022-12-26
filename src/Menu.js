import Latte from "./Latte";
import Milks from './Milks';
import Upgrades from './Upgrades';

const Menu =() => {
    return(
        <div id="menu">
            <div className="title-container">
                    <div className="title-block">
                        <div className="title-ch">閃電特調</div>
                        <div className="title-en">SIGNATURE LATTE</div>
                    </div>
                    <div className="capacity-block">
                        <div className="regular-block">
                            <div className="regular-title-ch">中杯</div>
                            <div className="regular-title-en">REGULAR</div>
                        </div>
                        <div className="upsize-block">
                            <div className="upsize-title-ch">大杯</div>
                            <div className="upsize-title-en">UPSIZE</div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <Latte />
                <Milks />
                <Upgrades />
        </div>
    )
}

export default Menu;