interface CardProps {
  theme?: "ligth" | "dark";
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function Card({ theme = "dark", icon, title, text }: CardProps) {
  const variant = {
    ligth: "bg-white border-[1px] border-transparent text-primary hover:border-primary",
    dark: "bg-primary hover:bg-secondary transition-colors text-white",
  }

  return (
    <div className={`${theme === "dark" ? variant.dark : variant.ligth}    
     rounded-sm w-full transition-colors flex flex-col items-center justify-center gap-2 px-8 py-14 md:py-6 shadow-lg`}>
      <div className=" color-white
      text-5xl mb-5
      ">
        {icon}
      </div>
      <h2 className="color-white
      text-lg font-semibold text-center 
      ">
        {title}
      </h2>
      <p className="text-sm text-center font-light">
        {text}
      </p>
    </div>
  )
}