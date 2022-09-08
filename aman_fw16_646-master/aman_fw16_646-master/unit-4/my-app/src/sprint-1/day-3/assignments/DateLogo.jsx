import  styles from "./DateLogo.module.css"
const DateLogo= (props)=>{
    const{date,logo}=props;
return (
    <div className={styles.dldiv}>
        <h2>{date}</h2>
        <img className={styles.blogo} src={logo}/>
    </div>
)
}

export {DateLogo}