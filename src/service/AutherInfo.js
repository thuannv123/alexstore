const API_USER = "https://reqres.in/api";
export const login = async (email, password) => {
  const response = await fetch(`${API_USER}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Đăng nhập không thành công");
  return response.json();
};
export const getUser = async (id) => {
  const response = await fetch(`${API_USER}/users/${id}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};
