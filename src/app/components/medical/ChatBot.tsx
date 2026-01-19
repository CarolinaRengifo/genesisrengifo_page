import { useState, useRef, useEffect } from 'react';
import { Heart, Send, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const servicesInfo = {
  consultas: 'Realizamos consultas cardiológicas completas con evaluación detallada de tu estado cardiovascular.',
  teleconsulta: 'Atención 100% online desde la comodidad de tu hogar, sin esperas y con la misma calidad profesional.',
  electrocardiograma: 'Electrocardiogramas para detectar arritmias y otras condiciones cardíacas.',
  holter: 'Holter de ritmo cardíaco 24/7 para monitoreo continuo de tu corazón.',
  prevencion: 'Programas de prevención cardiovascular personalizados según tu perfil de riesgo.',
  tratamiento: 'Control y tratamiento integral de enfermedades cardíacas crónicas.',
};

const quickResponses = [
  '¿Qué servicios ofrecen?',
  'Quiero agendar una cita',
  '¿Atienden online?',
  'Horarios de atención',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy el asistente virtual de la Dra. Génesis Rengifo. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos')) {
      return '¡Hola! 😊 ¿Te gustaría conocer nuestros servicios cardiológicos o agendar una consulta?';
    }

    if (lowerMessage.includes('servicio')) {
      return `Ofrecemos los siguientes servicios:\n\n✔️ Consultas cardiológicas\n✔️ Teleconsulta cardiológica\n✔️ Electrocardiogramas\n✔️ Holter de ritmo 24/7\n✔️ Prevención cardiovascular\n✔️ Control y tratamiento de enfermedades cardíacas\n\n¿Sobre cuál te gustaría saber más?`;
    }

    if (lowerMessage.includes('cita') || lowerMessage.includes('agendar') || lowerMessage.includes('reserva')) {
      return 'Para agendar tu cita puedes:\n\n📱 WhatsApp: +54 9 113345-8961\n📧 Email: genarengi.1991@gmail.com\n\nTambién puedes llenar el formulario de contacto en nuestra página. ¿Prefieres atención presencial u online?';
    }

    if (lowerMessage.includes('online') || lowerMessage.includes('teleconsulta') || lowerMessage.includes('virtual')) {
      return 'Sí, ofrecemos teleconsultas 100% online! 💙\n\nDesde la comodidad de tu hogar, sin esperas. La Dra. Rengifo te atenderá con la misma calidad profesional. ¿Te gustaría agendar una teleconsulta?';
    }

    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuánto')) {
      return 'Para información sobre precios y planes de pago, por favor comunícate directamente:\n\n📱 WhatsApp: +58 424-123-4567\n📧 Email: dra.rengifo@cardio.com\n\nTenemos opciones flexibles adaptadas a tus necesidades.';
    }

    if (lowerMessage.includes('horario') || lowerMessage.includes('hora')) {
      return 'Horarios de atención:\n\n🕐 Lunes a Viernes: 8:00 AM - 6:00 PM\n🕐 Sábados: 9:00 AM - 2:00 PM\n\nLas teleconsultas tienen horarios más flexibles. ¿Te gustaría agendar?';
    }

    if (lowerMessage.includes('electrocardiograma') || lowerMessage.includes('ecg')) {
      return servicesInfo.electrocardiograma + ' Es un estudio rápido e indoloro. ¿Necesitas agendar uno?';
    }

    if (lowerMessage.includes('holter')) {
      return servicesInfo.holter + ' Es ideal para detectar arritmias intermitentes. ¿Te gustaría más información?';
    }

    if (lowerMessage.includes('palpitaciones') || lowerMessage.includes('dolor') || lowerMessage.includes('cansancio')) {
      return '⚠️ Es importante evaluar estos síntomas. Te recomiendo agendar una consulta con la Dra. Rengifo lo antes posible.\n\nPuedes contactarnos:\n📱 WhatsApp: +58 424-123-4567\n\n¿Te gustaría que te ayude con algo más?';
    }

    if (lowerMessage.includes('gracias')) {
      return '¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en consultarme. ¡Cuida tu corazón! 💙';
    }

    return 'Entiendo tu consulta. Para información más específica, te recomiendo:\n\n📱 Contactarnos al WhatsApp: +58 424-123-4567\n📧 Email: dra.rengifo@cardio.com\n\n¿Hay algo más en lo que pueda ayudarte?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickResponse = (response: string) => {
    setInputValue(response);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Asistente Virtual</h3>
                    <p className="text-xs text-white/90">Dra. Génesis Rengifo</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-sky-500 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Preguntas frecuentes:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-sky-500 hover:bg-sky-600 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
