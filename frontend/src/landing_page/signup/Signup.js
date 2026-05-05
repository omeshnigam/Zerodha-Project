import React, { useState } from 'react';

function Signup() {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        const endpoint = isLogin
            ? 'http://localhost:3002/login'
            : 'http://localhost:3002/signup';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                if (isLogin) {
                    // LOGIN SUCCESS → redirect to dashboard
                    window.location.href = "http://localhost:3001/";
                } else {
                    // SIGNUP SUCCESS → show message & switch to login
                    setSuccess('Account created successfully! Please login.');
                    setIsLogin(true);
                    setFormData({ username: '', email: formData.email, password: '' });
                }
            } else {
                setError(data.message || 'Something went wrong.');
            }
        } catch (err) {
            setError('Cannot connect to server. Make sure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

                .auth-wrapper {
                    width: 100%;
                    max-width: 440px;
                    animation: slideUp 0.6s ease-out;
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .auth-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 48px 40px;
                    box-shadow:
                        0 4px 6px rgba(0, 0, 0, 0.04),
                        0 10px 24px rgba(0, 0, 0, 0.06),
                        0 0 0 1px rgba(0, 0, 0, 0.03);
                    text-align: center;
                    transition: box-shadow 0.3s ease;
                }

                .auth-card:hover {
                    box-shadow:
                        0 8px 16px rgba(0, 0, 0, 0.06),
                        0 16px 40px rgba(0, 0, 0, 0.09),
                        0 0 0 1px rgba(0, 0, 0, 0.03);
                }

                .auth-logo {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #387ED1 0%, #387ED1 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 24px auto;
                    font-size: 22px;
                    font-weight: 800;
                    color: white;
                    letter-spacing: -1px;
                }

                .auth-title {
                    margin: 0 0 6px 0;
                    color: #1a1a2e;
                    font-size: 26px;
                    font-weight: 800;
                    font-family: 'Inter', sans-serif;
                    letter-spacing: -0.5px;
                }

                .auth-subtitle {
                    margin: 0 0 32px 0;
                    color: #6b7280;
                    font-size: 14px;
                    font-weight: 400;
                    font-family: 'Inter', sans-serif;
                }

                .auth-input {
                    width: 100%;
                    padding: 14px 16px;
                    margin: 0 0 16px 0;
                    border: 1.5px solid #e5e7eb;
                    border-radius: 10px;
                    font-size: 15px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    box-sizing: border-box;
                    transition: all 0.25s ease;
                    background-color: #fafafa;
                    color: #111827;
                    outline: none;
                }

                .auth-input::placeholder {
                    color: #9ca3af;
                    font-weight: 400;
                }

                .auth-input:focus {
                    border-color: #387ED1;
                    background-color: #fff;
                    box-shadow: 0 0 0 3px rgba(232, 83, 63, 0.12);
                }

                .auth-btn {
                    width: 100%;
                    padding: 15px;
                    background: linear-gradient(135deg, #387ED1 0%, #387ED1 100%);
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 700;
                    font-family: 'Inter', sans-serif;
                    cursor: pointer;
                    margin-top: 8px;
                    transition: all 0.25s ease;
                    box-shadow: 0 4px 12px rgba(232, 83, 63, 0.3);
                    letter-spacing: 0.3px;
                }

                .auth-btn:hover {
                    background: linear-gradient(135deg, #387ED1 0%, #387ED1 100%);
                    box-shadow: 0 6px 20px rgba(232, 83, 63, 0.4);
                    transform: translateY(-1px);
                }

                .auth-btn:active {
                    transform: translateY(0) scale(0.98);
                }

                .auth-btn:disabled {
                    background: #d1d5db;
                    box-shadow: none;
                    cursor: not-allowed;
                    transform: none;
                }

                .toggle-text {
                    color: #6b7280;
                    cursor: pointer;
                    font-weight: 500;
                    margin-top: 24px;
                    display: block;
                    font-size: 14px;
                    font-family: 'Inter', sans-serif;
                    transition: color 0.2s;
                }

                .toggle-text span {
                    color: #387ED1;
                    font-weight: 700;
                }

                .toggle-text:hover span {
                    text-decoration: underline;
                }

                .error-box {
                    color: #ff0000;
                    background: #fef2f2;
                    padding: 12px 16px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #fecaca;
                    text-align: left;
                    animation: shake 0.4s ease;
                }

                .success-box {
                    color: #16a34a;
                    background: #f0fdf4;
                    padding: 12px 16px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #bbf7d0;
                    text-align: left;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-6px); }
                    40% { transform: translateX(6px); }
                    60% { transform: translateX(-4px); }
                    80% { transform: translateX(4px); }
                }

                .spinner {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    border: 2.5px solid rgba(255,255,255,0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.6s linear infinite;
                    vertical-align: middle;
                    margin-right: 8px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .input-slide-in {
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="auth-wrapper">
                <div className="auth-card">
                    <div className="auth-logo">Z</div>
                    <h2 className="auth-title">
                        {isLogin ? 'Welcome back' : 'Create account'}
                    </h2>
                    <p className="auth-subtitle">
                        {isLogin
                            ? 'Enter your credentials to access your dashboard'
                            : 'Sign up to start trading on Zerodha'}
                    </p>

                    {error && <div className="error-box">⚠ {error}</div>}
                    {success && <div className="success-box">✓ {success}</div>}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="input-slide-in">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Full Name"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="auth-input"
                                    required
                                />
                            </div>
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="auth-input"
                            required
                            minLength={6}
                        />

                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading
                                ? <><span className="spinner"></span>Please wait...</>
                                : (isLogin ? 'Login' : 'Create Account')}
                        </button>
                    </form>

                    <div className="toggle-text" onClick={() => {
                        setIsLogin(!isLogin);
                        setError('');
                        setSuccess('');
                    }}>
                        {isLogin
                            ? <>Don't have an account? <span>Sign up</span></>
                            : <>Already have an account? <span>Login</span></>}
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #fdfbfb 0%, #ebedee 100%)',
        fontFamily: "'Inter', sans-serif",
        padding: '40px 20px'
    }
};

export default Signup;