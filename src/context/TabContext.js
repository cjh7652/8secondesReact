import React, { createContext, useState, useContext } from "react";

// Context 생성
const TabContext = createContext();
// Custom Hook으로 Context 사용하기
export const useTabContext = () => useContext(TabContext);

// Context Provider
export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("WOMEN");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }} >
      {children}
    </TabContext.Provider>
  );
};