export const Buttons = () => {
  return (
    <div>
      <button className="right-4 text-ikarus-darkblue bg-white z-10 bottom-16 border-ikarus-darkblue border-2 rounded-3xl fixed shadow-sm hover:bg-white  transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:font-semibold duration-200">
        <a
          href="https://calendly.com/d/gqb-nbn-msh"
          className="inline-flex items-center justify-center whitespace-nowrap py-2 w-32 text-base hover:font-semibold text-ikarus-darkblue "
        >
          Contact Sales
        </a>
      </button>
      <button className="right-4 text-white z-10 bottom-4 border-white border-2 rounded-3xl fixed bg-ikarus-darkblue shadow-sm hover:bg-ikarus-darkblue transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:font-semibold duration-200">
        <a
          href="/contact-us"
          className="inline-flex items-center justify-center whitespace-nowrap py-2 w-32 text-base hover:font-semibold text-white "
        >
          Get in Touch
        </a>
      </button>
    </div>
  );
};
