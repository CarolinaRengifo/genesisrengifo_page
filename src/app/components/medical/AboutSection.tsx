import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';



export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
<div className="relative flex justify-center">
  <img
    src="/images/Corazon.png"
    alt="Dra. Génesis Rengifo - Certificación"
    className="w-64 md:w-100 h-auto rounded-2xl shadow-lg object-cover mx-auto"
  />
</div>

            {/* Stats cards */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Pacientes atendidos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-sky-100">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Sobre la Doctora</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Experiencia y compromiso con tu salud
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              La Dra. Génesis Rengifo es una especialista en cardiología comprometida con brindar
              atención médica de la más alta calidad. Con una formación sólida y experiencia en el
              diagnóstico, tratamiento y prevención de enfermedades cardiovasculares, se dedica a
              cuidar tu corazón con profesionalismo y calidez humana.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Su enfoque está centrado en el paciente, ofreciendo consultas personalizadas tanto
              presenciales como online, para que puedas recibir atención médica especializada estés
              donde estés.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Especialista en Cardiología 
                  </h3>
                  <p className="text-gray-600">
                    Universidad de Buenos Aires (UBA)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Certificada y Actualizada</h3>
                  <p className="text-gray-600">
                    Certificación de la Sociedad Argentina de Cardiología

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Atención Personalizada</h3>
                  <p className="text-gray-600">
                    Cada paciente es único y merece un plan de tratamiento adaptado a sus necesidades
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
