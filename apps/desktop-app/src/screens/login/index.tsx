import { motion } from "motion/react";
import { LogIn } from "lucide-react";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { useAppStore } from "../../store/useAppStore";

export default function Login() { 
  const setScreen = useAppStore((state) => state.setScreen);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="z-10 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-80 h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl flex items-center justify-center mb-8"
          >
            <img src="/logo.png" alt="Rodo's Bakery Logo" className="w-140 h-140 object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.0, ease: "easeOut" }}
            className="text-5xl font-extrabold tracking-tighter text-white mb-2 drop-shadow-md"
          >
            Rodo's Bakery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.0, ease: "easeOut" }}
            className="text-sm font-semibold text-white/70 mb-12 tracking-widest uppercase"
          >
            Sistema de Producción
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
            whileHover={{ 
              y: -2, 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setScreen("dashboard")} 
            className="flex items-center gap-3 bg-white text-slate-900 font-bold rounded-full px-10 py-3.5 tracking-wide shadow-lg hover:bg-slate-100 transition-all duration-300 pointer-events-auto cursor-pointer"
          >
            <LogIn className="w-5 h-5 text-slate-700" />
            Ingresar al Sistema
          </motion.button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}