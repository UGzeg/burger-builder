import React, {Component} from 'react';
import malzemeler from "../../constants/malzemeler";
import "./styles.css";
import {Hamburger} from "../../components";
import MalzemeSecimi from '../MalzemeSecimi';


class HamburgerApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            secilenMalzemeler: [],
            toplamFiyat: 0
        }
    }

    malzemeEkle = (malzeme) =>{
        // var mi yok mu kontrol ediyoruz
        const varMi = this.state.secilenMalzemeler.find((secilenMalzeme) => secilenMalzeme.id === malzeme.id);
        // var ise sayisini artircaz, yok ise arraye ekliyoruz
        console.log("var mi yok mu", varMi);
        if(varMi){
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.map((secilenMalzeme) => {
                    if(secilenMalzeme.id === malzeme.id){
                        return (
                            this.setState({
                                toplamFiyat: this.state.toplamFiyat + malzeme.price
                            }),
                            {...secilenMalzeme, count: secilenMalzeme.count + 1})
                    }else{
                        return (
                            this.setState({
                            toplamFiyat: this.state.toplamFiyat + malzeme.price
                            }),
                            secilenMalzeme
                        );
                    }
                }),
            })
        }else{
            this.setState({
                toplamFiyat: this.state.toplamFiyat + malzeme.price,
                secilenMalzemeler: [...this.state.secilenMalzemeler, {...malzeme, count: 1}]
            })
        }
    }

    malzemeCikar = (malzeme) => {
        /// olmadigi durumda azalta hic basilamayacagi icin bu satirda malzemenin secili olduguna eminim.
        const secilenMalzeme = this.state.secilenMalzemeler.find((secilen) => secilen.id === malzeme.id);
        const secilenMalzemeCount = secilenMalzeme.count;
        // sayi 1 ise secilenlerden tamamen cikartiyorum, 1 den buyuk ise bu sayiyi azaltiyorum
        if(secilenMalzemeCount > 1){
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.map((secilen) => {
                    if(secilen.id === malzeme.id){
                        return (
                            this.setState({
                            toplamFiyat: this.state.toplamFiyat - malzeme.price
                        }),
                        {...secilen, count: secilen.count - 1})
                    }
                    return (this.state.toplamFiyat, secilen);
                })
            })
        }else{
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.filter((secilen) => {
                    return (
                        this.setState({
                        toplamFiyat: this.state.toplamFiyat - malzeme.price
                        }),secilen.id !== malzeme.id
                        )
                })
            })
        }
    }

    render() {
        const {secilenMalzemeler, toplamFiyat} = this.state;
        return (
            <div>
                <Hamburger secilenMalzemeler={secilenMalzemeler}/>
                <MalzemeSecimi secilenMalzemeler={secilenMalzemeler} malzemeler={malzemeler} malzemeEkle={this.malzemeEkle} malzemeCikar={this.malzemeCikar} toplamFiyat={toplamFiyat} />
            </div>
        );
    }
}

export default HamburgerApp;