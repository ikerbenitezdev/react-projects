import { motion } from "framer-motion";

export const AnimatedIconText = ( { children, text }) => {
  return (
    <motion.article
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: +50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
        {children}
        <p className="text-center">{text}</p>
    </motion.article>
  );
}
