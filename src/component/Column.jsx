
import { TextField } from '@mui/material';
import style from './col.style.module.css';


const Column=()=>{
  return (
    <div className={style.wrap}>
         <div className={style.firts}>
             <div className={style.top}>
                 <span>фамилие имя отчество</span>
                 <TextField style={{backgroundColor:"white"}}/>
             </div>
             <div className={style.midle}>
               <span>Эл почта</span>
               <TextField style={{backgroundColor:"white"}}/>
               
             </div>
             <div className={style.bot}>
                    <span>БИН</span>
                 <TextField style={{backgroundColor:"white"}}/>
                    
             </div>
         </div>
         <div className={style.next}>
            <div className={style.top}>
                <span>Название организации</span>
                <TextField style={{backgroundColor:"white"}}/>
                
            </div>
             <div className={style.midle}>
             <span>номер телефона</span>
             <TextField style={{backgroundColor:"white"}}/>
             
             </div>
             <div className={style.bot}>
             <span>БИК</span>
             <TextField style={{backgroundColor:"white"}}/>
             
             </div>
         </div>
         <div className={style.second}>
         <div className={style.top}>
         <span>Юридический адрес</span>
         <TextField style={{backgroundColor:"white"}}/>
         </div>
             <div className={style.midle}>
                <span>Название банка</span>
                <TextField style={{backgroundColor:"white"}}/>
                </div>
             <div className={style.bot}>
             <span>ИИК</span>
             <TextField style={{backgroundColor:"white"}}/>
             
             </div>
         </div>
    </div>
  )
}

export default Column