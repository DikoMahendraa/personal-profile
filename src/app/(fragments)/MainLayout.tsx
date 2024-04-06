type P = {
  className?: string
}

export const MainLayout = (props: React.PropsWithChildren<P>) => {
  const styles = ['layout', props.className].join(' ')
  return <main className={styles}>{props.children}</main>
}
