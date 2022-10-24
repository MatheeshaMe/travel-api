export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };

//   {
//     "name": "matheesha",
//     "email": "praveenmatheesha@gmail.com",
//     "country": "Sri Lanka",
//     "city": "Gampaha",
//     "img": "image1",
//     "phone": "0778321835",
//     "password": "12345",
//     "isAdmin": false
// }