import React from 'react';
import {OverlayTrigger, Tooltip ,ButtonToolbar} from "react-bootstrap";

const Tooltiphov = ({key , placement, texto, children}) => {
    return (
        <OverlayTrigger
            key={key}
            placement={placement}
            overlay={
                <Tooltip id={`tooltip-${placement}`}>
                    {texto}
                </Tooltip>
            }
        >
            {children}
        </OverlayTrigger>
    )
};

export default Tooltiphov;