import { getEmotionImage } from "../util/getEmotionImage";
import "./EmotionItem.css";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick})=>{
  return<>
    <div className={`EmotionItem ${isSelected?`EmotionItem_on`:""}`} onClick={onClick}>
      <img src={getEmotionImage(emotionId)} className="emotion_img"/>
      <div className="emotion_name">{emotionName}</div>
    </div>
  </>
}
export default EmotionItem;