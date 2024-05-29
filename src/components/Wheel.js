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
        <h2 className="text-2xl mt-5">
          Simplify your process, unify your community, and amplify your impact
          with the full suite of Finalsite School Engagement Solutions.
        </h2>
        <div className="w-full h-3/4 mt-5 grid place-content-center">
          <div className=" size-52 relative mx-auto group">
            <img
              src={logo}
              className="size-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={blueArrow}
              className="absolute size-52 -top-[90px] left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              src={tealArrow}
              className="absolute size-52 top-[90px] left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              src={redArrow}
              className="absolute size-52 top-[90px] -left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
            <img
              src={pinkArrow}
              className="absolute size-52 -top-[90px] -left-[90px] -rotate-6 group-hover:opacity-50 duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};
