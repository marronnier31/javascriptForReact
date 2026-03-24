import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  const dispatch = useDispatch();
  const { moveToPath } = useCustomLogin();

  //인가코드가 카카오톡에서 url로 보내지면 그 인가코드로 다시 엑세스 코드를 가져온다.
  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log(accessToken);
      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log("**** memberInfo ****" + memberInfo);
        dispatch(login(memberInfo));
        //소셜회원이라면 패스워드수정요청, 일반회원이면 메인페이지이동
        if (memberInfo && memberInfo.social) {
          moveToPath("/member/modify");
        } else {
          moveToPath("/");
        }
      });
    });
  }, [authCode, dispatch, moveToPath]);

  return (
    <div>
      <div>Kakao Login Redirect 부터받은 인가코드</div>
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
