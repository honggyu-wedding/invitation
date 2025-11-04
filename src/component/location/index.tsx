import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS.key1}</div>
          <div className="detail">{LOCATION_ADDRESS.key2}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 수인분당선 이용 시 <b>서울숲역 5번출구</b> 
            <br />
            &nbsp;&nbsp;→ 도보 최대 <b>5분</b>
            <br />
            지하철 2호선 <b>뚝섬역 8번출구</b> 
            <br />
            &nbsp;&nbsp;→ 도보 최대 <b>10분</b>
            
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
             간선버스 <b>141, 145, 148, 463</b> 승차 시
            <br />&nbsp;&nbsp;→ <b>뚝섬 서울숲</b> 정류장 하차
            <br />
             간선/지선버스 <b>121, 2014, 2224, 2413</b> 승차 시
            <br />&nbsp;&nbsp;→ <b>성동구민 종합 체육센터</b> 정류장하차
            <br />
          
            <br />
            이하 위와 동일합니다.
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>보테가마지오</b> 검색
            <br />
          </div>
          <div />
          <div className="content">
            <b>
              ※ 건물 내 지하 (B3-B7) 2시간 무료주차
            </b>
            <br />
            &nbsp;&nbsp;&nbsp;<b>(안내데스크 주차 등록)</b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
