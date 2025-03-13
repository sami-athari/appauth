import React from 'react';
import { useRouter } from 'next/router';
import { LogOut } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #eef2f3, #dfe9f3)' }}>
      <div className="p-4 text-center">
        <h1 className="fw-bold text-primary">User Dashboard</h1>
        <p className="text-secondary">Welcome to your personalized space!</p>
        <button
          onClick={handleLogout}
          className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 mt-3 px-4 py-2 shadow-sm"
          style={{ borderRadius: '25px', backgroundColor: '#ffffff', border: 'none', transition: 'color 0.3s ease-in-out' }}
          onMouseOver={(e) => e.target.style.color = 'black'}
          onMouseOut={(e) => e.target.style.color = ''}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}

export default UserPage;
