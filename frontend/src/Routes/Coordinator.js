export const goToHome = (history) => {
  history("/");
};

export const goToDetailsPage = (history, id) => {
  history(`/movie/${id}`);
};
