import React from 'react';
import "./styles.css";
import classnames from 'classnames';

const Hamburger = (props) => {
    const sifirlaGoster = props.secilenMalzemeler.length === false ? false : true ;
    // Kapsayici icin React fragment kullaniyoruz.
    return (
        <>
            <div>
                <div className="BreadTop" style={{
                    height: "100px"
                }} />
                {
                    props.secilenMalzemeler.map((malzeme) => {
                        const elements = [];
                        const malzemeDivi = <div
                            key={malzeme.id}
                            style={{
                                height: "20px",
                                backgroundColor: malzeme.color,
                                width: "60%",
                                margin: "0 auto",
                                marginTop: "5px",
                                borderRadius:"20px"
                            }}
                        >
                            
                            {/* {malzeme.count} */}
                        </div>;
                        for(let i=0; i< malzeme.count;i++){
                            elements.push(malzemeDivi);
                        }
                        return elements;
                    })
                }
                <div className="BreadBottom" style={{
                    height: "50px"
                }}/>
                <button onClick={() => {
                    props.sifirla()
                }}
                className={classnames({
                    "malzeme-sifirla": true,
                    "disabled": !sifirlaGoster
                })}>Sıfırla</button>
            </div>
        </>
    );
};

export default Hamburger;