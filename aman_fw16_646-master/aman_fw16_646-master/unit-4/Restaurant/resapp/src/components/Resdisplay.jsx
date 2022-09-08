import styles from './Resdisplay.module.css';

function Resdisplay({ props }) {
    
    const { title, dish, vote, rating, cost, imgURL,card,cash } = props;
    

    return (
        <div  className={styles.main}>
            <div>
                <img style={{ width: '150px', height: "100px" }} src={imgURL} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{dish}</p>
                <p>Cost Rs {cost} for one</p>
            </div>
            <div>
                <h4>{rating}</h4>
                <p>{vote}</p>
            </div>
            <div>
                <h4>Card Accepted:{card?"Yes":"No"}</h4>
                <h4>Cash Accepted:{cash?"Yes":"No"}</h4>
            </div>
        </div>
    );
}

export default Resdisplay;