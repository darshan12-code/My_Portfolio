import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://portfolio-backend-x9am.onrender.com" || "http://127.0.0.1:5000/portfolio";

const api = axios.create({
  baseURL: API_BASE,
  // headers: { "Content-Type": "application/json" },
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      const refresh = localStorage.getItem("refresh_token");

      if (refresh) {
        try {
          const { data } = await axios.post(
            `${API_BASE}/auth/refresh`,
            {},
            {
              headers: { Authorization: `Bearer ${refresh}` },
            }
          );

          localStorage.setItem("access_token", data.access_token);

          original.headers.Authorization = `Bearer ${data.access_token}`;

          return api(original);
        } catch (err) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/admin/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

// ====================
// AUTH API
// ====================

export const authAPI = {
  login: (email, password) =>
    api.post("/auth/login", { email, password }),

  me: () => api.get("/auth/me"),
};

// ====================
// BLOG API
// ====================

export const blogAPI = {
  getAll: (page = 1, limit = 10) =>
    api.get("/blogs", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/blogs/${slug}`),

  create: (data) => api.post("/blogs", data),

  update: (id, data) => api.put(`/blogs/${id}`, data),

  delete: (id) => api.delete(`/blogs/${id}`),
};

// ====================
// CASE STUDY API
// ====================
export const caseStudyAPI = {
  getFeatured: () => api.get("/case-studies/featured"),

  getAll: (page = 1, limit = 10) =>
    api.get("/case-studies", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/case-studies/${slug}`),

  create: (data) => api.post("/case-studies", data),

  update: (id, data) => api.put(`/case-studies/${id}`, data),

  delete: (id) => api.delete(`/case-studies/${id}`),
};
// ====================
// CONTACT API
// ====================

export const contactAPI = {
  send: (data) =>
    api.post("/contact", data),

  getAll: (page = 1, limit = 10) =>
    api.get("/contact", { params: { page, limit } }),
};


export const uploadAPI = {
  // Images for case study preview
  uploadImages: (formData) => api.post("/upload", formData),

  // Media inside editor (images/videos)
  uploadMedia: (file, type) => {
    const form = new FormData();
    form.append(type === "video" ? "videos" : "images", file);
    return api.post("/upload", form);
  }
};
export default api;

