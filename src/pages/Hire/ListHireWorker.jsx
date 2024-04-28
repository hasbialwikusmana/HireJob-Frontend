import { useState, useEffect } from "react";
import api from "../../services/api";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/NavbarUtama";
import image from "../../assets/img/undraw.png";

function ListRecruiter() {
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    const fetchRecruiter = async () => {
      try {
        const response = await api.get("/hire/workers");
        console.log(response.data.data);
        setRecruiters(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecruiter();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(5);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Menghitung index pertama dan terakhir dari item yang ditampilkan di halaman saat ini
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = recruiters.slice(indexOfFirstProfile, indexOfLastProfile);

  // Mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Menampilkan detail profil
  const handleProfileClick = (profileId) => {
    const selected = recruiters.find((profile) => profile.id === profileId);
    setSelectedProfile(selected);
  };

  // Menghitung jumlah halaman
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recruiters.length / profilesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <div className="container pt-20 pb-12 mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap -mx-4">
          {currentProfiles.length > 0 ? (
            <div className="w-full lg:w-2/3 px-4 mb-4 lg:mb-0">
              <div className="bg-white shadow rounded overflow-hidden">
                <div className="p-4 md:p-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Hire
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentProfiles.map((profile) => (
                        <tr key={profile.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleProfileClick(profile.id)}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={profile.recruiter_photo} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{profile.recruiter_name}</div>
                                <div className="text-sm text-gray-500">{profile.recruiter_company}</div>
                                <div className="text-sm text-gray-500">{profile.recruiter_position}</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {pageNumbers.length > 1 && (
                  <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Sebelumnya
                      </button>
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === pageNumbers.length}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Selanjutnya
                      </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Halaman <span className="font-medium">{currentPage}</span> dari <span className="font-medium">{pageNumbers.length}</span>
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                          {pageNumbers.length > 3 ? (
                            <>
                              <button
                                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                                className="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                              >
                                Prev
                              </button>
                              {pageNumbers.slice(currentPage - 1, currentPage + 2).map((number) => (
                                <button
                                  key={number}
                                  onClick={() => paginate(number)}
                                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                    currentPage === number ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                                  }`}
                                >
                                  {number}
                                </button>
                              ))}
                              <button
                                onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                                className="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                              >
                                Next
                              </button>
                            </>
                          ) : (
                            pageNumbers.map((number) => (
                              <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                  currentPage === number ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                                }`}
                              >
                                {number}
                              </button>
                            ))
                          )}
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full lg:w-1/2 pl-4">
              <div className="bg-white shadow rounded overflow-hidden">
                <div className="p-4 md:p-6 flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img src={image} alt="Placeholder" className="max-w-xs mb-4" />
                    <p className="text-lg font-semibold text-center">Belum Ada Data</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="p-4 md:p-6">
                {!selectedProfile ? (
                  <div className="flex flex-col justify-center items-center">
                    <p className="h-64 w-h-64" />
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col items-center text-center">
                      <img className="h-24 w-24 rounded-full" src={selectedProfile?.recruiter_photo} alt="" />
                      <h3 className="mt-4 font-bold text-lg">{selectedProfile?.recruiter_name}</h3>
                      <p className="text-sm text-gray-600">{selectedProfile?.recruiter_company}</p>
                      <p className="text-sm text-gray-600">{selectedProfile?.recruiter_position}</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-gray-900">Detail Pesan:</h4>
                      <p className="text-sm text-gray-600">Tujuan Pesan: {selectedProfile?.message_purpose}</p>
                      <p className="text-sm text-gray-600">Nama Peminta: {selectedProfile?.name_request_hire}</p>
                      <p className="text-sm text-gray-600">Email Peminta: {selectedProfile?.email_request_hire}</p>
                      <p className="text-sm text-gray-600">Telepon Peminta: {selectedProfile?.phone_request_hire}</p>
                      <p className="text-sm text-gray-600">Deskripsi Permintaan: {selectedProfile?.description_request_hire || "-"}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default ListRecruiter;
