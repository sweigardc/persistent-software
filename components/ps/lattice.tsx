import { cn } from '@/lib/utils';

/**
 * A group of cells drawn as one object: a 1px gap over a rule-coloured
 * background with a single border around the whole grid. Cards inside carry no
 * border, fill or shadow of their own.
 */
export function Lattice({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('ps-lattice grid-cols-1', className)} {...props} />;
}

export function LatticeCell({
  index,
  icon: Icon,
  title,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 bg-surface p-7 transition-colors duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-sunk',
        className
      )}
      {...props}
    >
      {(Icon || index) && (
        <div className="flex items-center justify-between">
          {Icon ? <Icon className="size-[22px] text-signal-700" strokeWidth={1.75} /> : <span />}
          {index && (
            <span className="font-mono text-[11px] tracking-[0.12em] text-graphite-500">
              {index}
            </span>
          )}
        </div>
      )}
      {title && <h3 className="text-h4">{title}</h3>}
      {children && <div className="text-[15px] leading-relaxed text-graphite-500">{children}</div>}
    </div>
  );
}
