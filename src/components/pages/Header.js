import React, { forwardRef } from "react";



const Header = (refs)  =>{

    return (
        <div className="regulamin">
            <h1>tu bedzei regulamin czy co ciocia lub marek wymysli</h1>
            <br></br>
                <h1 id="regulamin"> 
                <p className="regulamin-text">→ zwierzęta nie są akceptowane </p>
                <p className="regulamin-text">→ doba hotelowa kończy się o godzinie 10.00 </p>
                <p className="regulamin-text">→ doba hotelowa rozpoczyna się o godzinie 15.00 </p>
                </h1>

        </div>
    );
};

export default Header