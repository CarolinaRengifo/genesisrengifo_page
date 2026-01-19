import { Activity, Video, Heart, Clock, Shield, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consultas cardiológicas',
    description: 'Evaluación completa de tu salud cardiovascular con atención personalizada.',
    color: 'sky',
  },
  {
    icon: Video,
    title: 'Teleconsulta cardiológica',
    description: 'Atención 100% online desde la comodidad de tu hogar, sin esperas.',
    color: 'cyan',
  },
  {
    icon: Activity,
    title: 'Electrocardiogramas',
    description: 'Estudios para detectar arritmias y evaluar la función cardíaca.',
    color: 'emerald',
  },
  {
    icon: Clock,
    title: 'Holter de ritmo 24/7',
    description: 'Monitoreo continuo del ritmo cardíaco durante 24 horas.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Prevención cardiovascular',
    description: 'Programas personalizados para prevenir enfermedades del corazón.',
    color: 'violet',
  },
  {
    icon: Heart,
    title: 'Control y tratamiento',
    description: 'Seguimiento y manejo de enfermedades cardíacas crónicas.',
    color: 'rose',
  },
];

const colorClasses = {
  sky: 'bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white',
  cyan: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white',
  emerald: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
  violet: 'bg-violet-100 text-violet-600 group-hover:bg-violet-500 group-hover:text-white',
  rose: 'bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white',
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Servicios Profesionales</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-1500 mb-4">
            Servicios Cardiológicos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atención integral para cuidar tu corazón con los más altos estándares de calidad médica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-sky-200 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  colorClasses[service.color as keyof typeof colorClasses]
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Tu corazón es único. Cuidalo hoy para vivir mejor mañana.
            </h3>
            <p className="text-lg text-sky-50 mb-6 max-w-2xl mx-auto">
              No esperes más. La prevención y el cuidado temprano son clave para una vida saludable.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              Reservá tu consulta ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
