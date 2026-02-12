import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import ShinyText from './ShinyText';

interface ModalAction {
  href?: string;
  target?: string;
  text: string;
  icon?: string;
  className?: string;
}

export default function EnhancedModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    imageUrl: '',
    title: '',
    description: '',
    actions: [] as ModalAction[]
  });

  const hideModal = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  const showModal = useCallback((imageUrl: string, title = '', description = '', actions: ModalAction[] = []) => {
    setContent({ imageUrl, title, description, actions });
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).showModal = showModal;
      (window as any).hideModal = hideModal;

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') hideModal();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [showModal, hideModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) hideModal();
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg z-10"
          >
            <SpotlightCard 
              className="bg-white/95 dark:bg-gray-800/95 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden p-8 md:p-10"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              {/* Decoration Background */}
              <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
              </div>

              {/* Close Button */}
              <button
                onClick={hideModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col items-center text-center relative z-10">
                {/* QR Code Container */}
                <div 
                  className="mb-8 p-4 bg-white dark:bg-slate-900/50 rounded-3xl shadow-inner border border-slate-100 dark:border-slate-800 overflow-hidden group"
                >
                  <TiltedCard
                    imageSrc={content.imageUrl}
                    altText={content.title}
                    containerHeight="240px"
                    containerWidth="240px"
                    imageHeight="240px"
                    imageWidth="240px"
                    rotateAmplitude={12}
                    scaleOnHover={1.08}
                    showTooltip={true}
                    captionText="扫码操作"
                  />
                </div>

                {/* Title and Description */}
                <div className="mb-8 w-full">
                  <h3 className="text-3xl font-black mb-3 text-gray-900 dark:text-white tracking-tight">
                    <ShinyText text={content.title} speed={3} color="#3b82f6" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed px-4 max-w-sm mx-auto">
                    {content.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
                  {content.actions.map((action, idx) => (
                    <a
                      key={idx}
                      href={action.href || '#'}
                      target={action.target || '_self'}
                      className={`inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 w-full sm:w-auto ${action.className || ''}`}
                    >
                       {action.icon && <i className={`${action.icon} mr-2 opacity-80`}></i>}
                       {action.text}
                    </a>
                  ))}
                  <button
                    onClick={hideModal}
                    className="px-8 py-3.5 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all active:scale-95 w-full sm:w-auto"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
