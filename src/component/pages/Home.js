import img1 from "./img1.png";
import "./home.css";

export default function Home(){
    return  <div className="evote">
        <img className="i" src={img1} alt="img1" height={1000} width={1000} />
        <h1>Just like we do vote, this online voting system is made to make the task easy and save time.</h1>
</div>

}