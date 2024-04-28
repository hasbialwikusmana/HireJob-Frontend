import { useEffect, useState } from "react";
import NavbarTop from "../../components/Navbar/NavbarTop";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import api from "../../services/api";
import defaultProfile from "../../assets/img/profile/user.png";
import LoadingSpinner from "../../components/LoadingSpinner";

function Home() {
  const [workerData, setWorkerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/workers", {
          params: {
            ...Object.fromEntries(searchParams),
            sortBy: sortOption,
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        const { data, pagination } = response.data;
        setWorkerData(data);
        setLoading(false);
        setTotalPages(Math.ceil(pagination.totalData / itemsPerPage));
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams, sortOption, currentPage]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setSearchParams({ search: searchTerm });
    } else {
      setSearchParams({});
    }
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="bg-white">
      <NavbarTop />
      <section className="w-5/6 mx-auto flex items-center justify-between relative z-10">
        <div className="relative flex-1 mt-4 bg-white">
          <input type="text" placeholder="Search ..." className="w-full border p-2 rounded outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        <div className="ml-2 relative mt-4 z-20">
          <select className="w-full border p-2 rounded outline-none" value={sortOption} onChange={handleSort}>
            <option value="">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <button onClick={handleSearch} className="ml-2 mt-4 bg-primary text-white p-2 rounded">
          Search
        </button>
      </section>
      {loading && <LoadingSpinner />}
      <section>
        {workerData.length === 0 && !loading && <div className="text-center text-gray-500 mt-8 mb-8">Data Tidak Ditemukan</div>}

        {workerData.map((worker) => (
          <div className="dataProfile flex flex-col md:flex-row items-start px-8 w-5/6 mt-10 mx-auto bg-white p-5 mb-10 rounded-lg shadow-md" key={worker.id}>
            <div className="user">
              <img className="mr-5 rounded-full object-cover w-20 h-20 md:w-40 md:h-40" src={worker.photo || defaultProfile} alt={worker.name} />
            </div>
            <div className="bio">
              <div className="desc-name mt-2">
                <h3 className="text-2xl font-semibold">{worker.name}</h3>
                <p className="text-lg text-[#636363] mb-3">{worker.job_desk ? worker.job_desk : "-"}</p>
              </div>
              <div className="location flex items-center gap-3 mb-3">
                {worker?.domicile ? (
                  <>
                    <FaMapMarkerAlt className="text-[#9EA0A5]" />
                    <p className="text-gray-600 text-[14px]">{worker.domicile}</p>
                  </>
                ) : (
                  <p className="text-gray-600 text-[14px]">-</p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {worker.skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="bg-amber-400 bg-opacity-60 rounded border border-amber-400 text-center text-white px-2 py-1 text-md">
                    {skill}
                  </div>
                ))}
                {worker.skills.length > 3 && <div className="text-zinc-400 text-base font-normal font-['Open Sans'] text-center px-2 py-1 text-md">{worker.skills.length - 3}+</div>}
              </div>
            </div>
            <div className="lihatProfile ms-auto my-auto mt-8">
              <button className="bg-primary text-white rounded p-2 w-40">
                <Link to={`/profile/${worker.id}`}>Lihat Profile</Link>
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className="w-full mx-auto flex items-center justify-center space-x-4 mt-8 mb-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded border border-gray-200 flex items-center justify-center ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100 focus:outline-none"}`}
        >
          <FaChevronLeft className={`text-${currentPage === 1 ? "gray-500" : "primary"} transition duration-300`} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 rounded border border-gray-200 flex items-center justify-center ${currentPage === i + 1 ? "bg-primary text-white font-bold cursor-not-allowed" : "text-zinc-400 hover:bg-gray-100 focus:outline-none"}`}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded border border-gray-200 flex items-center justify-center ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100 focus:outline-none"}`}
        >
          <FaChevronRight className={`text-${currentPage === totalPages ? "gray-500" : "primary"} transition duration-300`} />
        </button>
      </div>
    </div>
  );
}

export default Home;
