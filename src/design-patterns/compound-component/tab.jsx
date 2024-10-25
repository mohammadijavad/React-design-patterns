import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const value = { activeIndex, setActiveIndex };

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  return (
    <button
      className={`tab ${activeIndex === index ? "active" : ""}`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ children, index }) {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? (
    <div className="tab-panel">{children}</div>
  ) : null;
}

export default function Container() {
  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
        <Tab index={2}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>Content for Tab 1</TabPanel>
        <TabPanel index={1}>Content for Tab 2</TabPanel>
        <TabPanel index={2}>Content for Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
