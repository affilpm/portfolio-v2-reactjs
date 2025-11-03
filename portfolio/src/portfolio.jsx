import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Send, 
  ChevronDown, Star, Zap, Award, Target, Heart, Sparkles, Play, 
  Download, MessageCircle, Globe, Smartphone, Database, Music, ShoppingCart, FileText, CheckSquare 
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'Wave – Music Streaming Platform',
      description: 'A full-stack music streaming website where artists can upload songs and albums, and users can create playlists and stream music in Apple HLS format.',
      tech: ['Django', 'React.js', 'Redis', 'Celery', 'AWS S3', 'HLS', 'Razorpay', 'Cloudfront', 'Redux.js'],
      link: 'https://github.com/affilpm/Wave',
      impact: 'Major Project',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      icon: <Music className="w-12 h-12" />
    },
    {
      title: 'Fruitkha – E-Commerce Platform',
      description: 'An online fruit and vegetable e-commerce platform with cart, wishlist, wallet, coupon management, and payment gateway integration.',
      tech: ['Django', 'PostgreSQL', 'Razorpay'],
      link: 'https://github.com/affilpm/Fruitkha',
      impact: 'Full-Stack Project',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: <ShoppingCart className="w-12 h-12" />
    },
    {
      title: 'CMS Blog Platform',
      description: 'A content management system for blogs with JWT authentication, role-based access, media uploads (AWS S3), and admin analytics dashboard.',
      tech: ['Django', 'DRF', 'PostgreSQL', 'AWS S3'],
      link: 'https://github.com/affilpm/cms-blog-django',
      impact: 'Full-Stack Project',
      gradient: 'from-purple-500/20 to-violet-500/20',
      icon: <FileText className="w-12 h-12" />
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for task management with secure authentication, role-based access, and Dockerized deployment.',
      tech: ['Django', 'React.js', 'Redux.js', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/affilpm/task-manager',
      impact: 'Full-Stack Project',
      gradient: 'from-orange-500/20 to-amber-500/20',
      icon: <CheckSquare className="w-12 h-12" />
    },

  ];

  const skills = [
    { name: 'Python', color: 'from-yellow-500 to-amber-500', icon: '🐍' },
    { name: 'Django', color: 'from-green-600 to-emerald-600', icon: '🕸️' },
    { name: 'Django REST Framework', color: 'from-red-500 to-rose-600', icon: '🔥' },
    { name: 'React.js', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Redux.js', color: 'from-purple-500 to-violet-600', icon: '🔁' },
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', icon: '🟨' },
    { name: 'Tailwind CSS', color: 'from-cyan-500 to-teal-500', icon: '💨' },
    { name: 'PostgreSQL', color: 'from-sky-600 to-blue-700', icon: '🐘' },
    { name: 'AWS', color: 'from-orange-500 to-yellow-500', icon: '☁️' },
    { name: 'Docker', color: 'from-blue-600 to-indigo-600', icon: '🐳' },
  ];

  const stats = [
    { icon: <Code className="w-16 h-16" />, number: '6+', label: 'Projects Built', color: 'text-blue-400' },
    { icon: <Target className="w-16 h-16" />, number: '100%', label: 'Passion', color: 'text-rose-400' },
    { icon: <Zap className="w-16 h-16" />, number: '2+', label: 'Years Learning', color: 'text-emerald-400' },
    { icon: <Sparkles className="w-16 h-16" />, number: '∞', label: 'Creativity', color: 'text-purple-400' }
  ];

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `radial-gradient(circle, ${
              ['rgba(236, 72, 153, 0.6)', 'rgba(139, 92, 246, 0.6)', 'rgba(59, 130, 246, 0.6)', 'rgba(16, 185, 129, 0.6)'][Math.floor(Math.random() * 4)]
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite, fadeInOut ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            filter: 'blur(1px)'
          }}
        />
      ))}
      {/* Larger Glowing Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 6}px`,
            height: `${Math.random() * 8 + 6}px`,
            background: `radial-gradient(circle, ${
              ['rgba(236, 72, 153, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(59, 130, 246, 0.8)'][Math.floor(Math.random() * 3)]
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite, pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: `0 0 20px currentColor`,
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Message sent! I\'ll reply within 24 hours 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-rose-950/20 text-white overflow-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.15) rotate(120deg); }
          66% { transform: translate(-30px, 30px) scale(0.95) rotate(240deg); }
        }
        @keyframes wave {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.2); }
        }
        @keyframes colorShift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes gradientShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes scanlineVertical {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animate-wave { animation: wave 3s ease-in-out infinite; }
      `}</style>

      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(236, 72, 153, 0.02) 0%, transparent 50%, rgba(139, 92, 246, 0.02) 100%)
          `,
          animation: 'gradientShift 15s ease infinite'
        }} />
      </div>
      
      {/* Animated Dot Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'dotPulse 8s ease-in-out infinite'
        }} />
      </div>
      
      {/* Scanning Lines Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent" 
          style={{
            animation: 'scanline 6s linear infinite',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
          }} 
        />
        <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" 
          style={{
            animation: 'scanlineVertical 8s linear infinite',
            animationDelay: '2s',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }} 
        />
      </div>
      
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-xl z-50 pointer-events-none mix-blend-add hidden lg:block transition-all duration-150"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px) scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />
      
      {/* Cursor Trail */}
      <div 
        className="fixed w-2 h-2 bg-rose-500/50 rounded-full backdrop-blur-xl z-50 pointer-events-none mix-blend-screen hidden lg:block transition-all duration-500"
        style={{
          left: mousePos.x - 4,
          top: mousePos.y - 4,
        }}
      />

      {/* Animated Background Orbs - Enhanced */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Large Primary Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-blob"
          style={{
            filter: 'blur(60px)',
            animation: 'blob 7s infinite, colorShift 10s ease-in-out infinite'
          }}
        ></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-rose-500/30 to-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{
            filter: 'blur(60px)',
            animation: 'blob 8s infinite 2s, colorShift 12s ease-in-out infinite 3s'
          }}
        ></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{
            filter: 'blur(60px)',
            animation: 'blob 9s infinite 4s, colorShift 11s ease-in-out infinite 2s'
          }}
        ></div>
        
        {/* Medium Secondary Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-blob animation-delay-1000"
          style={{
            filter: 'blur(50px)',
            animation: 'blob 6s infinite 1s, colorShift 9s ease-in-out infinite 1s'
          }}
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-3000"
          style={{
            filter: 'blur(50px)',
            animation: 'blob 7s infinite 3s, colorShift 10s ease-in-out infinite 4s'
          }}
        ></div>
        
        {/* Small Accent Orbs */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"
          style={{
            filter: 'blur(40px)',
            animation: 'blob 5s infinite 2s, spin 20s linear infinite'
          }}
        ></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-fuchsia-500/15 to-pink-500/15 rounded-full blur-2xl"
          style={{
            filter: 'blur(40px)',
            animation: 'blob 6s infinite 4s, spin 25s linear infinite reverse'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10 transition-all duration-500" style={{
        transform: scrollY > 100 ? 'translateY(0)' : 'translateY(0)',
        boxShadow: scrollY > 100 ? '0 10px 40px rgba(0,0,0,0.3)' : 'none'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="group">
            <h1 className="text-3xl font-black bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              <span className="inline-block group-hover:-rotate-6 transition-transform duration-500">✨</span>
              AFFIL P M
            </h1>
          </div>
          
          <div className="hidden xl:flex items-center gap-12">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-lg font-semibold group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 to-purple-500/0 group-hover:from-rose-500/20 group-hover:to-purple-500/20 rounded-full -z-10 transition-all duration-500 blur" />
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 backdrop-blur-sm bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 px-6 pb-6">
            <div className="grid grid-cols-2 gap-6 pt-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group text-center py-4 px-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-lg font-semibold block">{item}</span>
                  <div className="w-full h-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* 3D Avatar Card with enhanced animations */}
          <div
            className="inline-block relative group mb-12"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          >
            {/* Outer glowing animation layer */}
            <div className="absolute -inset-6 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700 animate-pulse" />

            {/* Inner card with gradient and blur */}
            <div className="relative bg-gradient-to-br from-slate-900/50 to-black/30 backdrop-blur-2xl rounded-2xl p-1 border border-white/10 shadow-2xl group-hover:shadow-rose-500/20 transition-shadow duration-700">
              <div className="bg-gradient-to-br from-rose-900/30 to-purple-900/30 rounded-xl p-8 border border-white/10">
                <div className="relative">
                  {/* === Replace User Icon with Your Photo === */}
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-700">
                    <img
                      src="/me.jpeg" // 👈 put your image in public/me.jpg
                      alt="Your Name"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating gradient orbs */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full animate-pulse delay-1000" />
                </div>

                {/* === Text Section === */}
                <div className="mt-8 text-center">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Python Full Stack Developer
                  </h2>
                  <p className="text-sm text-slate-400">
                    Django · DRF · React · Redux · PostgreSQL
                  </p>
                </div>

                {/* === Skill tags === */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {["Python", "Django", "DRF", "React", "Redux", "PostgreSQL", "AWS"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-mono hover:scale-110 transition-transform duration-300"
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 mb-12 group hover:scale-105 transition-all duration-300">
            <div className="relative inline-flex w-5 h-5">
              <div className="animate-ping absolute inset-0.5 rounded-full bg-emerald-400 opacity-75"></div>
              <div className="relative w-full h-full bg-emerald-500 rounded-full"></div>
            </div>
            <span className="font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">
              🚀 Open to Work
            </span>
          </div>

          <h1 className="text-7xl 2xl:text-9xl font-black mb-8 leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="inline-block">
              <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
                AFFIL P M
              </span>
              <span className="inline-block w-full h-2 bg-gradient-to-r from-rose-500/30 to-purple-500/30 rounded-full mt-4 animate-wave" />
            </span>
          </h1>

          <p className="text-xl 2xl:text-2xl text-slate-300/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            I craft <span className="font-semibold text-rose-400 hover:text-rose-300 transition-colors">delightful digital experiences</span> through 
            continuous learning and experimentation. Let's build something <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors">extraordinary</span> together! ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="#contact"
              className="group relative inline-flex px-10 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-rose-500/25 transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Let's Collaborate ✨
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <span>View My Work</span>
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400">
            <a href="#projects" className="flex items-center gap-2 group hover:text-rose-400 transition-colors">
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              Scroll to explore
            </a>
            <div className="w-20 h-px bg-gradient-to-r from-rose-500/30 to-purple-500/30" />
            <a
              href="/affil_cv.pdf"
              download="affil_CV.pdf"
              className="flex items-center gap-2 group hover:text-purple-400 transition-colors"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/30 via-black/20 to-slate-900/30 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-rose-500/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm font-medium tracking-wide">{stat.label}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-pink-500/0 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-rose-500/30 text-rose-400 font-semibold hover:scale-105 transition-transform duration-300">
              <Sparkles size={20} className="animate-spin" style={{animationDuration: '3s'}} />
              Handcrafted with ❤️
            </span>
            <h2 className="text-6xl 2xl:text-8xl font-black mt-6 mb-8">
              Featured <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Every project is a journey of learning, experimenting, and growing as a developer 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-black/30 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-rose-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20 overflow-hidden"
                style={{
                  animation: `float ${5 + index * 0.4}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Impact Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-rose-500/90 to-pink-600/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {project.impact}
                </div>

                {/* Project Icon */}
                <div className="mb-6 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/10">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-700">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:from-rose-600/40 hover:to-purple-600/40 transition-all duration-500 group-hover:translate-x-2"
                >
                  <span>View Project</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 via-pink-500/0 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 text-emerald-400 font-semibold hover:scale-105 transition-transform duration-300">
              <Database size={20} />
              Always Learning
            </span>
            <h2 className="text-6xl 2xl:text-8xl font-black mt-6 mb-8">
              Skills & <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Technologies I'm actively learning and building projects with 💻
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/30 to-black/20 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-700 hover:scale-110 hover:rotate-1"
                style={{
                  animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                    {skill.name}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${skill.color} rounded-full group-hover:w-full transition-all duration-700`} />
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-rose-500/30 text-rose-400 font-semibold text-lg hover:scale-105 transition-transform duration-300">
              <Heart size={24} className="text-rose-400 animate-pulse" />
              Let's create magic together
            </span>
            <h2 className="text-6xl 2xl:text-8xl font-black mt-6 mb-8">
              Get In <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-emerald-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform ideas into reality? Let's connect and build something amazing! 🚀
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-2 space-y-8">
            {/* <div className="bg-gradient-to-br from-rose-900/30 to-purple-900/20 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:scale-105 transition-transform duration-500">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <Send className="w-10 h-10 text-rose-400" />
                  Let's Talk
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Lightning Fast</h4>
                      <p className="text-slate-400 text-sm">Response within 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart size={20} className="text-rose-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Passionate Learner</h4>
                      <p className="text-slate-400 text-sm">Always improving</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Collaborative</h4>
                      <p className="text-slate-400 text-sm">Team player mindset</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Social Links */}
              <div className="bg-gradient-to-br from-slate-900/30 to-black/20 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:scale-105 transition-transform duration-500">
                <h4 className="text-lg font-bold mb-6">Connect With Me</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/affilpm', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/affil-p-m-b9a2b2299', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:affilpm2004@gmail.com', label: 'Email' } // 👈 Updated line
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-gradient-to-br hover:from-rose-600/20 hover:to-purple-600/20 hover:border-rose-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                      title={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={24} className="mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 focus:outline-none focus:border-rose-500/50 focus:scale-105 transition-all duration-500 text-lg placeholder-slate-400"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 focus:outline-none focus:border-rose-500/50 focus:scale-105 transition-all duration-500 text-lg placeholder-slate-400"
                    required
                  />
                </div>
                
                <textarea
                  placeholder="Tell me about your project... What challenges are you facing? What are your goals?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 focus:outline-none focus:border-rose-500/50 focus:scale-105 transition-all duration-500 resize-none text-lg placeholder-slate-400"
                  required
                />

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 py-6 rounded-xl font-bold text-lg flex items-center justify-center gap-4 shadow-xl hover:shadow-rose-500/25 transition-all duration-500 hover:scale-105"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </button>
              </form>
              
              <p className="text-center mt-8 text-slate-400 text-sm font-medium">
                <span className="inline-flex items-center gap-2">
                  <Zap size={16} className="text-emerald-400 animate-pulse" />
                  I reply within 24 hours guaranteed! ⚡
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-gradient-to-r from-slate-900/50 to-black/30 backdrop-blur-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 hover:scale-105 transition-transform duration-300">
            <Heart className="text-rose-400 animate-pulse" size={24} />
            <span className="font-semibold text-white">Made with love & React</span>
          </div>
          
          
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and learn together. Excited to hear your ideas! 🚀
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="#about" className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-110">
              About
            </a>
            <a href="#projects" className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-110">
              Projects
            </a>
            <a href="#skills" className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-110">
              Skills
            </a>
            <a href="#contact" className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-110">
              Contact
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-12">
            <p className="text-slate-500 text-sm">
              © 2025 AFFIL P M. Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}