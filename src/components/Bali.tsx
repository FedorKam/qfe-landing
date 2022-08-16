import baliBack from "../images/bali_back.png";
import bali1 from "../images/bali_1.svg";
import bali2 from "../images/bali_2.svg";
import bali3 from "../images/bali_3.svg";
import bali4 from "../images/bali_4.svg";

export function Bali() {
  return (
    <div id="bali" className="bali">
      <div className="bali__content">
        <h2 className="bali__head">
          Комьюнити на Бали и в <i className="bali__head_blue">метавселенной</i>
        </h2>
        <h2 className="bali__head bali__head_mob">
          Недвижимость
          <br />
          на Бали и<br />в метавселенной
        </h2>
        <span className="bali__text">
          Вы жаждите приключений и хотите найти свое место в этом необъятном
          мире? Мы создали для вас прекрасное пространство которое одновременно
          находится в реальном и виртуальном мире. Это сосредоточие творческих
          личностей, которые каждый день совершенствуют себя и свои навыки,
          проходя 4 квадранта денежного богатства. Здесь каждый может найти себе
          партнеров по бизнесу, клиентов, заказчиков, друзей или просто
          единомышленников. Пространство полностью располагает к дружескому и
          деловому общению.
        </span>
        <a href="#" className="bali__plan">
          Скачать план{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.7398 2.05999L11.7798 7.09999H0.799805V8.89999H11.7798L6.7398 13.94L7.9998 15.2L15.1998 7.99999L7.9998 0.799988L6.7398 2.05999Z" />
          </svg>
        </a>
        <img src={baliBack} className="bali__img" />
        <div className="bali__forBlock">
          <div className="bali__nav">
            <a className="bali__arrow bali__arrow_left">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.72369 10.0973C6.81128 10.0114 6.88077 9.9093 6.92818 9.79694C6.9756 9.68459 7 9.56414 7 9.4425C7 9.32086 6.9756 9.20042 6.92818 9.08806C6.88077 8.97571 6.81128 8.87365 6.72369 8.78773L3.05782 5.18412L6.72369 1.58052C6.90035 1.40686 6.9996 1.17133 6.9996 0.925743C6.9996 0.680154 6.90035 0.444621 6.72369 0.270964C6.54704 0.0973053 6.30743 -0.000252724 6.0576 -0.000252724C5.80777 -0.000252724 5.56817 0.0973053 5.39151 0.270964L1.05481 4.53399C0.96722 4.61991 0.897732 4.72197 0.850319 4.83433C0.802907 4.94668 0.778503 5.06713 0.778503 5.18877C0.778503 5.31041 0.802907 5.43085 0.850319 5.54321C0.897732 5.65556 0.96722 5.75762 1.05481 5.84354L5.39151 10.1066C5.75054 10.4595 6.35522 10.4595 6.72369 10.0973Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="bali__arrow bali__arrow_right">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.276306 10.0973C0.188718 10.0114 0.119229 9.9093 0.0718169 9.79694C0.0244047 9.68459 0 9.56414 0 9.4425C0 9.32086 0.0244047 9.20042 0.0718169 9.08806C0.119229 8.97571 0.188718 8.87365 0.276306 8.78773L3.94218 5.18412L0.276306 1.58052C0.0996464 1.40686 0.000400064 1.17133 0.000400064 0.925743C0.000400064 0.680154 0.0996464 0.444621 0.276306 0.270964C0.452965 0.0973053 0.692566 -0.000252724 0.9424 -0.000252724C1.19223 -0.000252724 1.43183 0.0973053 1.60849 0.270964L5.94519 4.53399C6.03278 4.61991 6.10227 4.72197 6.14968 4.83433C6.19709 4.94668 6.2215 5.06713 6.2215 5.18877C6.2215 5.31041 6.19709 5.43085 6.14968 5.54321C6.10227 5.65556 6.03278 5.75762 5.94519 5.84354L1.60849 10.1066C1.24946 10.4595 0.644783 10.4595 0.276306 10.0973Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="bali__cardBlock" card-count="4">
            <div className="bali__card bali__card_active" card-num="1">
              <h4 className="bali__cardName">Для творческих</h4>
              <img src={bali1} className="bali__cardIcon" />
              <span className="bali__cardText">
                Фрилансеры работающие удаленно и сотрудники крупных компаний
              </span>
            </div>
            <div className="bali__card" card-num="2">
              <h4 className="bali__cardName">Для духовных</h4>
              <img src={bali2} className="bali__cardIcon" />
              <span className="bali__cardText">
                Коучи, наставники, психологи и духовные практики
              </span>
            </div>
            <div className="bali__card" card-num="3">
              <h4 className="bali__cardName">Для IT-шников</h4>
              <img src={bali3} className="bali__cardIcon" />
              <span className="bali__cardText">
                Территория повышения квалификации и комьюнити для владельцев IT
                проектов
              </span>
            </div>
            <div className="bali__card" card-num="4">
              <h4 className="bali__cardName">Для инвесторов</h4>
              <img src={bali4} className="bali__cardIcon" />
              <span className="bali__cardText">
                Криптопроектов, NFT, metaverse, реальной недвижимости, офлайн
                бизнесов и т.д.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
