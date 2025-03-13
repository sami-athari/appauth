import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });

    if (res?.ok) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const session = await getSession();
      const userRole = session?.user?.role;
      if (userRole === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    } else {
      setError("Login gagal. Periksa kembali email dan password Anda.");
    }
    setIsLoading(false);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "22rem" }}>
        <div className="card-body text-center">
          <h2 className="card-title fw-bold text-secondary mb-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger small">{error}</p>}
            <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
            <p className="text-muted mt-3 small">
              Belum punya akun? <Link href="/register" className="text-primary">Daftar sekarang</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
