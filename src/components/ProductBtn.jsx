import './ProductBtn.css';

const ProductBtn = ({ buttonList, activeButton, onButtonClick }) => {
  return (
    <div className="productBtn">
      {buttonList.map((btnName) => (
        <button
          key={btnName}
          className={activeButton === btnName ? "active" : ""}
          onClick={() => onButtonClick(btnName)} // 핸들러 호출
        >
          {btnName.charAt(0).toUpperCase() + btnName.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ProductBtn;
