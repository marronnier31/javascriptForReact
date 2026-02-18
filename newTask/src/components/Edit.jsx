import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { useContext, useMemo } from "react";
import { BoardDispatchContext, BoardStateContext } from "../App";
import Editor from "./Editor";

const Edit = ()=>{
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(BoardStateContext);
  const {onUpdate} = useContext(BoardDispatchContext);
  //Edit가 마운트 되는 순간 => params.no를 통해서 data에서 해당되는 항목을 찾고, curBoardItem에 저장
  // useState와 useEffect를 제거하고 useMemo로 대체
  const curBoardItem = useMemo(() => {
    return data.find((item) => String(item.no) === String(params.no));
  }, [data, params.no]); // data나 no가 바뀔 때만 다시 계산

// 데이터가 로드될 때까지 렌더링 방어
if (!curBoardItem) {
  return <div>데이터를 불러오는 중입니다...</div>;
}

//수정하기
const onSubmit =input=>{
  if(window.confirm(`${params.no}번의 글을 정말로 수정하실건가요?`)){
    onUpdate(Number(params.no),input.title, input.writer, input.content, input.regDate);
    nav("/",{replace:true})
  }
}
  return <>
  <Header title={`${params.no}번의 글 수정`}/>
  <Editor initData={curBoardItem} onSubmit={onSubmit}/>
  </>
}
export default Edit;