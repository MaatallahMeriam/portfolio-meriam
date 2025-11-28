"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 hover:bg-white/10 transition">
      <div className="container px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Mail className="h-10 w-10 mx-auto mb-4" />
            <p className="text-lg">mkdmeriam22@gmail.com</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Phone className="h-10 w-10 mx-auto mb-4" />
            <p className="text-lg">+216 28 401 413</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <MapPin className="h-10 w-10 mx-auto mb-4" />
            <p className="text-lg">Rades,  Ben arous Tunisia</p>
          </motion.div>
        </div>

        <motion.a
          href="mailto:mkdmeriam22@gmail.com"
          className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Send className="h-6 w-6" />
          send me message
        </motion.a>
      </div>
    </section>
  );
}