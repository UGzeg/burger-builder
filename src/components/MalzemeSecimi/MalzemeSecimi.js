import React from 'react';
import "./styles.css";
import classnames from 'classnames';

const MalzemeSecimi = (props) => {
    const {secilenMalzemeler, malzemeler,toplamFiyat} = props;
    return (
        <div className="main">
            <div className="box">
                <h2 className="box-title">Malzeme Seçimi</h2>
                <div className="box-item">
                    <ul>
                        {
                            malzemeler.map((malzeme) => {
                                // mazeleme seculi ise azalt butonu aktif, degilse disabled
                                const azaltButonunuGoster = secilenMalzemeler.find((secilenMalzeme) => secilenMalzeme.id === malzeme.id)
                                return <li key={malzeme.id}>
                                    <div className="box-item-left">
                                        <div className="title">{malzeme.name}</div>
                                        <div className="price">Fiyat: {malzeme.price}₺</div>
                                     
                                    </div>
                                    <div className="box-item-center">
                                    <button onClick={() => {
                                        props.malzemeEkle(malzeme)
                                    }} className="malzeme-ekle">Ekle</button>
                                    </div>
                                    <div className="box-item-right">
                                        <button onClick={() => {
                                            props.malzemeCikar(malzeme)
                                        }}
                                        className={classnames({
                                            "malzeme-cikar": true,
                                            "disabled": !azaltButonunuGoster
                                        })}>Azalt</button>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div> 
                <div className="box-price">
                    <h3>Fiyat {toplamFiyat}</h3>
                </div>
            </div>
        </div>
    );
};

export default MalzemeSecimi;