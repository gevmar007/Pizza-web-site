import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyLoader from "../MyLoader/MyLoader";
function PizzaHistori() {
  const [loading, setLoading] = useState(true);
  const [histori, setHisori] = useState([]);

  const { id } = useParams();

  const history = async () => {
    try {
      const Response = await axios.get(
        ` https://6471f2936a9370d5a41adb88.mockapi.io/users?id=${id}`
      );

      const fetchHistory = Response.data;

      setHisori(fetchHistory);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    history();
  }, [id]);

  if (loading) {
    return <MyLoader />;
  }

  return (
    <div>
      {histori.map((el) => {
        return (
          <div>
            {el.title}
            <img src={el.imageUrl} alt="" />
            <p>
              Պեպերոնի, սալյամիի կծու տարատեսակˋ իտալա–ամերիկական ծագմամբ։
              Սովորաբար պատրաստվում է խոզի մսից, թեև կան նաև ամերիկյան տեսակներ,
              պատրաստված տավարի մսի, հավի և խոզի մսի խառնուրդից։ Արտադրվում է
              հարավային Իտալիայում։ Պեպերոնին ամերիկյան հայտնի պիցերիաների
              բաղադրիչն է։
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PizzaHistori;
