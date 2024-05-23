export const fetchImages = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  const imageList = await response.json();
  return imageList;
};
