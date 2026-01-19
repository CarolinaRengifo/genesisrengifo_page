import { Heart, Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Dra. Génesis Rengifo</h3>
                <p className="text-sm text-gray-400">Cardiología</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Cuidando tu corazón con profesionalismo y dedicación. Atención presencial y online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre la doctora
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Agendar cita
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="text-gray-400">+58 424-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="text-gray-400">dra.rengifo@cardio.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Dra. Génesis Rengifo. Todos los derechos reservados.
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Tu corazón es único. Cuidalo hoy para vivir mejor mañana. 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
