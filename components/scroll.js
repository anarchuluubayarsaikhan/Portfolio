import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
export function Scroll() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{ position: "fixed", bottom: "70px", right: "20px" }}
      >
        <FaChevronCircleUp  size={40} color="white"/>
      </button>
      <button
        onClick={scrollToBottom}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <FaChevronCircleDown size={40} color="white" />
      </button>
    </div>
  );
}
