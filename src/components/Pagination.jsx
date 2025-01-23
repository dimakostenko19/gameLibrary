import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Pagination({ page, setPage }) {
  const nextPage = (page)=>{
    setPage(page+1)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  const backPage = (page)=>{
    if(page>1){
      setPage(page-1)
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="navigate">
      {page > 1 ? (
    <div>
      <div className="back-arrow">
        <FaAngleLeft onClick={() => backPage(page)} />
      </div>
      <span>{page}</span>
      <div className="next-arrow">
        <FaAngleRight onClick={() => nextPage(page)} />
      </div>
    </div>
  ) : (
    <div>
      <span>{page}</span>
      <div className="next-arrow">
        <FaAngleRight onClick={() => nextPage(page)} />
      </div>
    </div>
  )}
    </div>
  );
}