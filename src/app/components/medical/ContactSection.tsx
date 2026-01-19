import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            📲 Reservá tu consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Comunicate con nosotros y agenda tu cita
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Teléfono / WhatsApp</p>
                    <p className="text-gray-600">+54 9 113345-8961</p>
                    <p className="text-sm text-gray-500 mt-1">Respuesta rápida por WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600">genarengi.1991@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
                    <p className="text-gray-600">Centro Médico Principal</p>
                    <p className="text-sm text-gray-500 mt-1">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-violet-50 rounded-xl">
                  <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horarios</p>
                    <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notice */}
            <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-2">💙 Teleconsultas disponibles</h4>
              <p className="text-sky-50">
                Ofrecemos consultas 100% online con horarios flexibles. ¡Cuidá tu corazón desde
                casa!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 9 113345-8961"
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  required
                  className="bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 text-lg font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar mensaje
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Te responderemos lo antes posible. Para urgencias, comunicate por WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
