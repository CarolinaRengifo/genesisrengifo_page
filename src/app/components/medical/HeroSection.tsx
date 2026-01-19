import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';


export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-sky-100">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Especialista en Cardiología</span>
            </div>

            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Dra. Génesis Rengifo M
            </h1>

            <p className="text-xl text-sky-600 font-semibold">
              💙 Cuidando tu corazón, estés donde estés
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              ¿Sentís palpitaciones, cansancio, dolor en el pecho o querés prevenir enfermedades
              cardíacas? La Dra. Génesis Rengifo te acompaña con atención profesional y
              personalizada, ahora también <strong>100% online</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Reservá tu consulta
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                Ver servicios
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sin esperas</p>
                  <p className="text-sm">Atención inmediata</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Atención online</p>
                  <p className="text-sm">Desde tu hogar</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
           <div className="relative flex justify-center">


  {/* Imagen */}
  <img
    src="/images/doctor.png"
    alt="Dra. Génesis Rengifo - Certificación"
    className="relative w-100 h-auto rounded-2xl shadow-lg object-cover"
  />
</div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Prevención</p>
                  <p className="text-sm text-gray-600">Tu corazón es único</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
