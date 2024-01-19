export const FetchAPi = async (ROLE, TOKEN) => {
  try {
    const response = fetch(
      `http://trendyt20231-001-site1.ftempurl.com/api/v1/school/user-school`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => data);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
