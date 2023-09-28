import React, { useState } from 'react'
import style from './comp.module.css'

export default function Comp() {

    const[num1,setnum1]=useState("XXXX")
    const[num2,setnum2]=useState("XXXX")
    const[num3,setnum3]=useState("XXXX")
    const[num4,setnum4]=useState("XXXX")

    const[name,setname]=useState("__________ ")
    const[cvv,setcvv]=useState("xxx")

    const handlename=(e)=>{
        setname(e.target.value)
        if(name===""){
            setname("__________ ")
        }
    }
    const handlecvv=(e)=>{
        setcvv(e.target.value)
        if(cvv>99 || cvv<1){
            setcvv('XXX')
        }
    }

    const handlechange1=(e)=>{
        setnum1(e.target.value);
        if(num1>999 || num1<1){
            setnum1('XXXX')
        }

    }
    const handlechange2=(e)=>{
        setnum2(e.target.value);
        if(num2>999 || num2<1){
            setnum2('XXXX')
        }

    }
    const handlechange3=(e)=>{
        setnum3(e.target.value);
        if(num3>999 || num3<1){
            setnum3('XXXX')
        }

    }
    const handlechange4=(e)=>{
        setnum4(e.target.value);
        if(num4>999 || num4<1){
            setnum4('XXXX')
        }

    }

  return (
    <>
    <div className={style.cardbox}>
        <div className={style.card_wrapper}>
            <div className={style.card_front}>
                <div className={style.card_front_bank}>
                    <div className={style.bank}>BANK</div>
                </div>
                <div className={style.card_front_logo}></div>
                <div className={style.card_front_number}>
                    <div className={style.pair}>{num1}</div>
                    <div className={style.pair}>{num2}</div>
                    <div className={style.pair}>{num3}</div>
                    <div className={style.pair}>{num4}</div>
                </div>
                <div className={style.card_front_personal}>
                    <div className={style.name}>{name}</div>
                    <div className={style.expiry}>06/24</div>
                </div>
            </div>
            <div className={style.card_back}>
                <div className={style.empty1}></div>
                <div className={style.black}></div>
                <div className={style.empty2}></div>
                <div className={style.white}>
                    <div className={style.cvv}>{cvv}</div>
                </div>
                <div className={style.empty3}></div>
                <div className={style.end_back}>https://www.xyzlbank.com</div>
            </div>
        </div>
      
    </div>


    <div className={style.form}>
        <div className={style.form_wrapper}>
            <div className={style.dabbe1}><p className={style.formlabel}>Enter Card Number</p></div>
            <div className={style.dabbe2}>
                <input className={style.numberinput} placeholder='XXXX'  type='number'  min="1" max="9" onChange={handlechange1}/>
                <input className={style.numberinput} placeholder='XXXX'  type='number'  onChange={handlechange2}/>
                <input className={style.numberinput} placeholder='XXXX'  type='number'  onChange={handlechange3}/>
                <input className={style.numberinput} placeholder='XXXX'  type='number'  onChange={handlechange4}/>
            </div>
            <div className={style.dabbe1}>
                <p className={style.formlabel}>Enter Card Holder's Name</p>
            </div>
            <div className={style.dabbe4}>
                <input placeholder='Name-Here' type="text" className={style.nameinput}  onChange={handlename} />
            </div>
            <div className={style.dabbe1}>
                <p className={style.formlabel}>Enter The CVV</p>
            </div>
            <div className={style.dabbe6}>
                <input placeholder='CVV here' type="text" className={style.nameinput}  onChange={handlecvv} />
            </div>

        </div>

    </div>
    <div className={style.footer}></div>
    </>
  )
}
