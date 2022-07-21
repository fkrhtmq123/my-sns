import { Users_inter_Get_Response } from "@/interface/users/users/user_inter";

interface Login_inter_Post_Payload {
  userId?: string;
  password?: string;
}

interface Login_inter_Post_Response {
  user: Users_inter_Get_Response;
  token: string;
}

export { Login_inter_Post_Payload, Login_inter_Post_Response };
