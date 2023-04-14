import { motion } from "framer-motion";

export default function PageTransition({
  children,
  initial
}: {
  children: React.ReactNode;
  initial: number
}) {
  return (
    <motion.div
      initial={{ x: initial, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{
        type: "tween",
        // duration: 2,
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
