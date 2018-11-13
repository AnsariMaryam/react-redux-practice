export const selectUser = (user) => {
  //console.log(user.firstName);
  return {
    type : "SELECTED_USER",
    payload: user
  }
};
