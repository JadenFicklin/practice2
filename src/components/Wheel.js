import blueArrow from '../assets/wheel/blue_piece.svg';
import tealArrow from '../assets/wheel/teal_piece.svg';
import redArrow from '../assets/wheel/red_piece.svg';
import pinkArrow from '../assets/wheel/Pink_piece.svg';
import logo from '../assets/wheel/logo-icon-red.svg';

export const Wheel = () => {
  return (
    <>
      <div className="w-7/12 mx-auto h-[70vh] mt-[15vh] text-center">
        <h1 className="text-6xl">Simplify. Unify. Amplify.</h1>
        <h2 className="mt-5 text-2xl">
          Simplify your process, unify your community, and amplify your impact
          with the full suite of Finalsite School Engagement Solutions.
        </h2>
        <div className="grid w-full mt-5 h-3/4 place-content-center">
          <div className="relative mx-auto  size-52 group">
            <img
              alt="wheel section"
              src={logo}
              className="absolute -translate-x-1/2 -translate-y-1/2 size-14 left-1/2 top-1/2"
            />
            <img
              alt="wheel section"
              src={blueArrow}
              className="absolute size-52 -top-[90px] left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              alt="wheel section"
              src={tealArrow}
              className="absolute size-52 top-[90px] left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              alt="wheel section"
              src={redArrow}
              className="absolute size-52 top-[90px] -left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              alt="wheel section"
              src={pinkArrow}
              className="absolute size-52 -top-[90px] -left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};
