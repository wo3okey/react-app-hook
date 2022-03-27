import {useState, useEffect, useMemo} from 'react'

const Memo = () => {
  const [number, setNumber] = useState(1);
  const [isKorea, setIsKorea] = useState(false);
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    };
  }, [isKorea]);

  const changeNumber = (e) => {
    setNumber(e.target.value)
  };

  const changeCountry = () => {
    setIsKorea(!isKorea)
  };

  useEffect(() => {
    console.log("useEffect 호출!!")
  }, [location]);

  return(
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={changeNumber}
        >
      </input>
      <hr></hr>
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={changeCountry}>비행기타자</button>
    </div>
  );

};

export default Memo
