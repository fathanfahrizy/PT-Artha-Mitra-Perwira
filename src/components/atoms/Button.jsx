export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-bold cursor-pointer rounded-md";
  
  const variants = {
    primary: "bg-[#c2182b] text-white hover:bg-[#a01526]",
    outline: "bg-white border border-[#0a1428] text-[#0a1428] hover:bg-[#0a1428] hover:text-white",
    ghost: "bg-[#ececec] text-[#0a1428] hover:bg-[#e2e8f0]",
    active: "bg-[#c2182b] text-white hover:bg-[#a01526]",
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href} 
      className={`${baseStyles} ${variants[variant] || ''} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}
