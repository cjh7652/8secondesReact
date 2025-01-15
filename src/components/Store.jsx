import React, { useState } from "react";
import { store } from "../data/Data";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiTimer } from "react-icons/ci";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const Store = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // 서치기능
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 37.5665, lng: 126.9783 });

  const getSelectedStore = () => {
    return store.find((item) => item.id === selectedStoreId);
  };

  const containerStyle = {
    width: "100%",
    height: "550px",
  };
  const containerStyle2 = {
    width: "100%",
    height: "550px",
  };

  const center = selectedStoreId
    ? {
        lat: getSelectedStore().lat,
        lng: getSelectedStore().lng,
      }
    : { lat: 37.5665, lng: 126.9783 };

  const handleOnClickOpen = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const handleAddressSearch = () => {
    const geocoder = new window.google.maps.Geocoder(); // 구글 Geocoder 객체 생성
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const { lat, lng } = results[0].geometry.location;
        setLocation({ lat: lat(), lng: lng() }); // 변환된 위치로 상태 업데이트
      } else {
        console.error("주소 변환 오류: ", status);
      }
    });
    setAddress("")
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="store">
      <h2>서울특별시 근교 매장</h2>
      <div className="storeSwiper">
        <Swiper
          className="Swiper"
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={25}
          slidesPerView={4}
          navigation
        >
          {store.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="storeSwiperContainer"
              onClick={() => setSelectedStoreId(item.id)}
            >
              <div className="storeSlideBox" onClick={handleOnClickOpen}>
                <img src={item.url} alt={store} />
                <div className="storeSlideTxtBox">
                  <h3>8Seconds {item.title}</h3>
                  <span>{item.address1}</span>
                  <span>{item.address2}</span>
                  <div className="timerBox">
                    <CiTimer></CiTimer>
                    <p>{item.time}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`storeDetails ${isOpen ? "active" : ""}`}>
        <div className="storeDetailsContainer">
          <button className="closeBtn" onClick={handleModalClose}>닫기</button>
          {selectedStoreId ? (
            (() => {
              const selectedStore = getSelectedStore();
              return (
                <div className="selectedStoreDtContainer">
                  <div className="selectedStoreDtTxtBox">
                    <h3>8Seconds {selectedStore.title}</h3>
                    <p>
                      {selectedStore.address1}
                      {selectedStore.address2}
                    </p>
                    <div className="storeDtTimer">
                      <CiTimer style={{ fontSize: "14px" }}></CiTimer>
                      <p>{selectedStore.time}</p>
                    </div>
                    <p style={{ color: "#535353", fontSize: "12px" }}>
                      주차 공간이 한정되어 있으니 혼잡 시간대에는 대중교통 이용을 권장드리며, 차량 이용 시 반드시 매장 직원에게 주차 확인을 요청하시기 바랍니다.
                    </p>
                  </div>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </div>
              );
            })()
          ) : null}
        </div>
      </div>
      <div className="storeSearchContainer">
        <div className="storeSearchTop">
        <h2>다른 매장 찾기</h2>
        <input
          type="text"
          placeholder="매장명을 입력해 주세요"
          value={address}
          onChange={handleAddressChange}
        />
        <button onClick={handleAddressSearch}><FaSearch/></button>
        </div>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle2}
            center={location}
            zoom={14}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Store;