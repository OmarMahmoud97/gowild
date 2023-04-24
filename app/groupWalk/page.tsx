import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
import "./group.css";
function GroupWalk() {
  return (
    <section className="lg:h-[110vh] mt-[6rem] w-screen flex items-center justify-start flex-col p-4">
      <div className="flex items-center justify-center lg:w-[64rem] lg:h-[100vh] flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center lg:p-0">
          <Image
            className="w-60 rounded-xl m-2 lg:m-0 lg:w-80 "
            src={pic}
            alt="Solo dog walk Image"
          />
        </div>
        <div className="lg:w-1/2 flex items-center justify-between h-full flex-col">
          <div>
            <h1 className="font text-3xl font-bold w-full text-center m-2">
              Small Group Walks
            </h1>
            <p className="w-full text-center m-2">&#40;1 Hour walk&#41;</p>
          </div>
          <div className="w-full">
            <div className="table-container w-full table text-center bg-white align-middle">
              <table className="w-[80%] m-auto border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 text-center p-1  bg-[#41cf3459]">
                      Dogs
                    </th>
                    <th className="w-1/2 text-center p-1 bg-[#41cf3459]">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 text-center p-1">1 Dog</td>
                    <td className="w-1/2 text-center p-1">&#163;18</td>
                  </tr>
                  <tr>
                    <td className="w-1/2 text-center p-1">2 Dogs</td>
                    <td className="w-1/2 text-center p-1">&#163;28</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="w-1/2 text-center p-1">3 Dogs</td>
                    <td className="w-1/2 text-center p-1">&#163;40</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <p className="text-center m-2">
            Let your dog embark on an exciting adventure with up to three other
            canine companions. We keep our groups small to ensure all the dogs
            get the attention they deserve&#33;
          </p>
          <ul>
            <li className="list-disc m-2">
              Stimulating exercise, basic training and socialisation.
            </li>
            <li className="list-disc m-2">
              Positive reinforcement to encourage good behaviour and build a
              strong bond
            </li>
            <li className="list-disc m-2">
              Varied walking locations to keep it interesting for the dogs
              &#40;and us too!&#41;
            </li>
            <li className="list-disc m-2">Includes pick up/drop off</li>
          </ul>
          <a href="/contact">
            <button className="btn m-2 cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600 p-2 hover:bg-white hover:text-green-600 ">
              Contact
            </button>
          </a>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  );
}

export default GroupWalk;
