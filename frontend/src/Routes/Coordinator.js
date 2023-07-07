export const goToHome = (navigate) => {
  navigate("/");
};

export const goToDetailsPage = (navigate, id) => {
  navigate(`/movie/${id}`);
};
