import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';

const Aims = ({ language }) => {
  return (
    <div className="background_footer py-10 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >


        <Title text={language === 'ar' ? 'هدفنا' : "Our Aim"} />  {/* Title based on language */}

      </motion.h2>
      <motion.p
        className={`text-center max-w-[80%] text-lg  text-white ${language === 'ar' ? 'text-right font-ar' : 'text-left font-en'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {language === 'ar'
          ? 'نفهم أن وقتك ومواردك ذات قيمة. لهذا السبب نركز على تقديم حلول فعالة تساعدك على تحقيق أهدافك دون إضاعة الوقت أو المال. سنعمل معك لتحديد أكثر الاستراتيجيات فعالية بنجاح نشاطك التجاري وتنفيذها بدقة والاهتمام بالتفاصيل.'
          : 'We understand that your time and resources are valuable. That’s why we focus on delivering effective solutions that help you achieve your goals without wasting time or money. We’ll work with you to identify the most effective strategies to ensure your business success and execute them with precision and attention to detail.'}
      </motion.p>
      {/* <motion.button
        className={`mt-8 px-6 py-3 bg-heading text-white 
        text-lg font-semibold rounded-lg hover:bg-white hover:text-heading transition ${language === 'ar' ? 'text-right font-ar' : 'text-left font-en'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {language === 'ar' ? 'أعرف أكثر' : 'Learn More'}
      </motion.button> */}
    </div>
  );
};

export default Aims;
