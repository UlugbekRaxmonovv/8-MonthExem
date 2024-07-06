import React, { useContext } from 'react';
import './Production.scss'
import {useTranslation} from "react-i18next"
import { Context } from '../DarkMore/Context';
const Production = () => {
    let {t} =  useTranslation()
    const {theme} =useContext(Context)
    return (
        <div className={`pro ${theme ? "light" : ""}`}>
             <div className='container'>
            <div className="Production">
                <div className="Production_all">
                    <h1 className='h1'>Блог</h1>
                    <h1>{t("Производство")}</h1>
                </div>
                <div className="Production_all">
                  <p>
                    {t("Интернет-магазин")}
                  </p>
                  <p>
                  {t("Покупая")}
                  </p>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default Production;
