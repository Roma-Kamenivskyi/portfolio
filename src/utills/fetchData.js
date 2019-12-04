export const fetchData = async url => {
  const baseUrl =
    'https://raw.githubusercontent.com/Kamenivskyi/portfolio/master/src/db';
  const res = await fetch(`${baseUrl}${url}`);
  return res.json();
};
