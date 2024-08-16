export const FetchApi_Student = {
  PostNopBaiTap: async (formdata) => {
    await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/baitap/nopbai`, {
      method: "POST",
      body: formdata,
      credentials: "include",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  GetBaiTapDaNop: async (idBaiTap,action) => {
    await fetch(
      `${process.env.REACT_APP_URL_SEVER}/api/v1.0/baitap/da-nop?idBaiTap=${idBaiTap}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => action(data[0].file))
      .catch((err) => console.log(err));
  },
};
