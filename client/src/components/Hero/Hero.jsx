import HeroBg from "../../assets/bg.svg"; // подправь путь под свой проект
import heroCan from "../../assets/draft_spray.svg"; // картинка с баллончиком

const Hero = () => {
  return (
    <section className="relative flex-1 overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,#000000b3_65%,#000000ee_100%)]" />

      <div className="pointer-events-none absolute right-3 top-20 h-6 w-6 border-2 border-[#ff117e] border-b-0 border-l-0" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-2 border-[#ff117e] border-t-0 border-r-0" />
      <div className="relative z-10 flex h-full min-h-[260px] items-center justify-center p-6">
        <img
          src={heroCan}
          alt="Neon spray can"
          className="w-[70vw] max-w-[250px] "
        />
      </div>
    </section>
  );
};

export default Hero;
