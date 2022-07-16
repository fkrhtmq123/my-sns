interface Users_inter_Get_Response {
  id: number;
  userId: string;
  email: string;
  name: string;

  last_ip: string | null;
  last_login_at: string | null;

  created_ip: string;
  created_at: string;

  update_ip: string;
  update_at: string;
}

interface Users_Inter_Get_Params {
  email?: string;
  name?: string;
}

interface Users_Inter_Post_Payload {
  userId: string;
  email?: string;
  password?: string;
  name?: string;
}

interface Users_Inter_Post_Response {
  id: number;
  userId: string;
  email: string;
  name: string;

  last_ip: string | null;
  last_login_at: string | null;

  created_ip: string;
  created_at: string;

  update_ip: string;
  update_at: string;
}

interface Users_Inter_Post_Logout_Payload {
  userId?: string;
}

interface Users_Inter_Patch_Payload {
  email?: string;
  name?: string;
}

interface Users_Inter_Patch_Response {
  id: number;
  userId: string;
  email: string;
  name: string;

  last_ip: string | null;
  last_login_at: string | null;

  created_ip: string;
  created_at: string;

  update_ip: string;
  update_at: string;
}

export {
  Users_Inter_Get_Params,
  Users_inter_Get_Response,
  Users_Inter_Post_Payload,
  Users_Inter_Post_Response,
  Users_Inter_Post_Logout_Payload,
  Users_Inter_Patch_Payload,
  Users_Inter_Patch_Response,
};
