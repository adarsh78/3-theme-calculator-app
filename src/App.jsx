import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("theme1");
  const [circleColor, setCircleColor] = useState("hsl(6,63%,50%)");
  const [circlePosition, setCirclePosition] = useState("70px");
  const [inputDivBg, setInputDivBg] = useState("hsl(223,31%,20%)");
  const [screenBg, setScreenBg] = useState("hsl(224,36%,15%)");
  const [keyBg, setKeyBg] = useState({
    "0": "hsl(30,25%,89%)",
    "1": "hsl(30,25%,89%)",
    "2": "hsl(30,25%,89%)",
    "3": "hsl(30,25%,89%)",
    "4": "hsl(30,25%,89%)",
    "5": "hsl(30,25%,89%)",
    "6": "hsl(30,25%,89%)",
    "7": "hsl(30,25%,89%)",
    "8": "hsl(30,25%,89%)",
    "9": "hsl(30,25%,89%)",
    "+": "hsl(30,25%,89%)",
    "-": "hsl(30,25%,89%)",
    "x": "hsl(30,25%,89%)",
    "/": "hsl(30,25%,89%)",
    ".": "hsl(30,25%,89%)",
    "RESET": "hsl(225,21%,49%)",
    "DEL": "hsl(225,21%,49%)", 
    "=": "hsl(6,63%,50%)"
  });
  const [keyColor, setKeyColor] = useState({
    "0": "hsl(221,14%,31%)",
    "1": "hsl(221,14%,31%)",
    "2": "hsl(221,14%,31%)",
    "3": "hsl(221,14%,31%)",
    "4": "hsl(221,14%,31%)",
    "5": "hsl(221,14%,31%)",
    "6": "hsl(221,14%,31%)",
    "7": "hsl(221,14%,31%)",
    "8": "hsl(221,14%,31%)",
    "9": "hsl(221,14%,31%)",
    "+": "hsl(221,14%,31%)",
    "-": "hsl(221,14%,31%)",
    "x": "hsl(221,14%,31%)",
    "/": "hsl(221,14%,31%)",
    ".": "hsl(221,14%,31%)",
    "RESET": "hsl(0,0%,100%)",
    "DEL": "hsl(0,0%,100%)", 
    "=": "hsl(0,0%,100%)"
  });
  const [primaryColor, setPrimaryColor] = useState("hsl(0,0%,100%)");

  const number = 123456755;
  const formattedNumber = new Intl.NumberFormat().format(number);
  

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log(value)
    pageStyles(value);
  };

  useEffect(() => {
    handleChange("theme1");
  }, []);

  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];

  const handleKeysClick = (key) => {
    console.log("Key clicked is: ", key)
  }
  

  const pageStyles = (value) => {
    if(value === "theme1"){
      document.body.style = 'background: hsl(222,26%,31%)';
      setCirclePosition("70px")
      setCircleColor("hsl(6,63%,50%)");
      setInputDivBg("hsl(223,31%,20%)");
      setScreenBg("hsl(224,36%,15%)");
      setKeyBg({
        "0": "hsl(30,25%,89%)",
        "1": "hsl(30,25%,89%)",
        "2": "hsl(30,25%,89%)",
        "3": "hsl(30,25%,89%)",
        "4": "hsl(30,25%,89%)",
        "5": "hsl(30,25%,89%)",
        "6": "hsl(30,25%,89%)",
        "7": "hsl(30,25%,89%)",
        "8": "hsl(30,25%,89%)",
        "9": "hsl(30,25%,89%)",
        "+": "hsl(30,25%,89%)",
        "-": "hsl(30,25%,89%)",
        "x": "hsl(30,25%,89%)",
        "/": "hsl(30,25%,89%)",
        ".": "hsl(30,25%,89%)",
        "RESET": "hsl(225,21%,49%)",
        "DEL": "hsl(225,21%,49%)", 
        "=": "hsl(6,63%,50%)"
      });
      setPrimaryColor("hsl(0,0%,100%)");
      setKeyColor({
          "0": "hsl(221,14%,31%)",
          "1": "hsl(221,14%,31%)",
          "2": "hsl(221,14%,31%)",
          "3": "hsl(221,14%,31%)",
          "4": "hsl(221,14%,31%)",
          "5": "hsl(221,14%,31%)",
          "6": "hsl(221,14%,31%)",
          "7": "hsl(221,14%,31%)",
          "8": "hsl(221,14%,31%)",
          "9": "hsl(221,14%,31%)",
          "+": "hsl(221,14%,31%)",
          "-": "hsl(221,14%,31%)",
          "x": "hsl(221,14%,31%)",
          "/": "hsl(221,14%,31%)",
          ".": "hsl(221,14%,31%)",
          "RESET": "hsl(0,0%,100%)",
          "DEL": "hsl(0,0%,100%)", 
          "=": "hsl(0,0%,100%)"
      })
    }

    else if(value === "theme2"){
      document.body.style = 'background: hsl(0,0%,90%)';
      setCirclePosition("50px")
      setCircleColor("hsl(25,98%,40%)");
      setInputDivBg("hsl(0,5%,81%)");
      setScreenBg("hsl(0,0%,93%)");
      setKeyBg({
        "0": "hsl(45,7%,89%)",
        "1": "hsl(45,7%,89%)",
        "2": "hsl(45,7%,89%)",
        "3": "hsl(45,7%,89%)",
        "4": "hsl(45,7%,89%)",
        "5": "hsl(45,7%,89%)",
        "6": "hsl(45,7%,89%)",
        "7": "hsl(45,7%,89%)",
        "8": "hsl(45,7%,89%)",
        "9": "hsl(45,7%,89%)",
        "+": "hsl(45,7%,89%)",
        "-": "hsl(45,7%,89%)",
        "x": "hsl(45,7%,89%)",
        "/": "hsl(45,7%,89%)",
        ".": "hsl(45,7%,89%)",
        "RESET": "hsl(185,42%,37%)",
        "DEL": "hsl(185,42%,37%)", 
        "=": "hsl(25,98%,40%)"
      });
      setPrimaryColor("hsl(60,10%,19%)");
      setKeyColor({
        "0": "hsl(60,10%,19%)",
        "1": "hsl(60,10%,19%)",
        "2": "hsl(60,10%,19%)",
        "3": "hsl(60,10%,19%)",
        "4": "hsl(60,10%,19%)",
        "5": "hsl(60,10%,19%)",
        "6": "hsl(60,10%,19%)",
        "7": "hsl(60,10%,19%)",
        "8": "hsl(60,10%,19%)",
        "9": "hsl(60,10%,19%)",
        "+": "hsl(60,10%,19%)",
        "-": "hsl(60,10%,19%)",
        "x": "hsl(60,10%,19%)",
        "/": "hsl(60,10%,19%)",
        ".": "hsl(60,10%,19%)",
        "RESET": "hsl(0,0%,100%)",
        "DEL": "hsl(0,0%,100%)", 
        "=": "hsl(0,0%,100%)"
    })
    }

    else if(value === "theme3"){
      document.body.style = 'background: hsl(268,75%,9%)';
      setCirclePosition("30px")
      setCircleColor("hsl(176,100%,44%)");
      setInputDivBg("hsl(268,71%,12%)");
      setScreenBg("hsl(268,71%,12%)");
      setKeyBg({
        "0": "hsl(268,47%,21%)",
        "1": "hsl(268,47%,21%)",
        "2": "hsl(268,47%,21%)",
        "3": "hsl(268,47%,21%)",
        "4": "hsl(268,47%,21%)",
        "5": "hsl(268,47%,21%)",
        "6": "hsl(268,47%,21%)",
        "7": "hsl(268,47%,21%)",
        "8": "hsl(268,47%,21%)",
        "9": "hsl(268,47%,21%)",
        "+": "hsl(268,47%,21%)",
        "-": "hsl(268,47%,21%)",
        "x": "hsl(268,47%,21%)",
        "/": "hsl(268,47%,21%)",
        ".": "hsl(268,47%,21%)",
        "RESET": "hsl(281,89%,26%)",
        "DEL": "hsl(281,89%,26%)", 
        "=": "hsl(176,100%,44%)"
      });    
      setPrimaryColor("hsl(52,100%,62%)");
      setKeyColor({
        "0": "hsl(52,100%,62%)",
        "1": "hsl(52,100%,62%)",
        "2": "hsl(52,100%,62%)",
        "3": "hsl(52,100%,62%)",
        "4": "hsl(52,100%,62%)",
        "5": "hsl(52,100%,62%)",
        "6": "hsl(52,100%,62%)",
        "7": "hsl(52,100%,62%)",
        "8": "hsl(52,100%,62%)",
        "9": "hsl(52,100%,62%)",
        "+": "hsl(52,100%,62%)",
        "-": "hsl(52,100%,62%)",
        "x": "hsl(52,100%,62%)",
        "/": "hsl(52,100%,62%)",
        ".": "hsl(52,100%,62%)",
        "RESET": "hsl(0,0%,100%)",
        "DEL": "hsl(0,0%,100%)", 
        "=": "hsl(198,20%,13%)"
    })
    }
  }


 
  return (
    <>
      <main>
        <div className="heading_theme_btn">
          <h1 style={{ color: primaryColor }}>calc</h1>
          <div className="theme_btn_div">
            <span style={{ color: primaryColor }}>Theme</span>
            <div className="input_div" style={{ backgroundColor: inputDivBg }}>
            <input
              type="radio"
              name="toggle"
              id="theme1"
              value="theme1"
              checked={selectedValue === "theme1"}
              onChange={() => handleChange("theme1")}
            />
              <input
              type="radio"
              name="toggle"
              id="theme2"
              value="theme2"
              checked={selectedValue === "theme2"}
              onChange={() => handleChange("theme2")}
            />
             <input
              type="radio"
              name="toggle"
              id="theme3"
              value="theme3"
              checked={selectedValue === "theme3"}
              onChange={() => handleChange("theme3")}
            />
            </div>
            <span className="circle" style={{ backgroundColor: circleColor, right: circlePosition }}></span>
            <div className="absolute flex gap-2 top-[2.7rem] right-4" style={{ color: primaryColor }}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            </div>
          </div>
        </div>

        <div className="w-[325px] mx-auto h-[70px] flex items-center justify-end pt-1 mt-4 rounded-[10px] overflow-x-auto scroll-container" style={{ backgroundColor: screenBg}}>
          <div className="px-2" style={{ color: primaryColor }}>
            {formattedNumber}
          </div>
        </div>

        <div className="w-[325px] mx-auto h-[435px] mt-3 rounded-[10px]" style={{ backgroundColor: inputDivBg}}>

          <div className="flex gap-2 flex-wrap py-3 justify-center">
          {keys.map((btnKey) => (
            <div 
            key={btnKey} 
            className={`${btnKey === "RESET" || btnKey === "=" ? "w-[136px]" : "w-[60px]"}
             h-[65px] flex items-center justify-center text-sm rounded-sm cursor-pointer`}
            style={{ backgroundColor: keyBg[btnKey], color: keyColor[btnKey] }}
            onClick={() => handleKeysClick(btnKey)}
            >
              {btnKey}
            </div>
          ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
