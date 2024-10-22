interface CircularLoaderProps {
  size?: number;
}

export function CircularLoader({ size = 6 }: CircularLoaderProps) {
  return (
    <div
      className={`inline-block h-${size} w-${size} animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
      role="status"
    >
    </div>
  );
}