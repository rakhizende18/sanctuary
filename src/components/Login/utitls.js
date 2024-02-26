
import { users } from "../../mocks";
export const getLoggedInUser = (loginDetails) =>
  users.find(
    (user) =>
      user.uname === loginDetails?.username &&
      user.pwd === loginDetails?.password
  );
