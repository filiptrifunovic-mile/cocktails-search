import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

function PageBtnContainer() {
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  function nextPage() {
    let newPage = page + 1;

    if (newPage > numOfPages) {
      newPage = 1;
    }

    dispatch(changePage(newPage));
  }
  function prevPage() {
    let newPage = page - 1;

    if (newPage < 1) {
      newPage = numOfPages;
    }

    dispatch(changePage(newPage));
  }

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((item, index) => {
          return (
            <button
              className={item === page ? "pageBtn active" : "pageBtn"}
              type="button"
              key={index}
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

export default PageBtnContainer;
