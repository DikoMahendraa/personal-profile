'use client'

import { motion } from 'framer-motion'

type P = {
  className?: string
}

export const MainLayout = (props: React.PropsWithChildren<P>) => {
  const styles = ['layout', props.className].join(' ')
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles}
    >
      {props.children}
    </motion.main>
  )
}
