import { FaPlus } from "react-icons/fa6";

import carlProfile from "../../../../images/carl-profile.png";
import hamburguerMenuIcon from "../../../../images/hamburguer-menu.png";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";
import { LuUserSquare } from "react-icons/lu";

const Section1 = () => {
  return (
    <>
      <section className="container-page px-3 py-2 mt-5">
        <div className="max-w-sm mx-auto mb-4">
          <div className="flex items-end gap-4 mb-2">
            <div>
              <img
                className="w-9"
                loading="lazy"
                decoding="async"
                src={carlProfile}
                alt={`Profile`}
              />
            </div>

            <div className="bg-primary-green/10 rounded-lg px-5 py-3 w-full">
              <h3 className="font-bold">Merci de passé commande</h3>
            </div>
          </div>

          <div className="flex items-end gap-4 mb-28">
            <div>
              <img
                className="w-9"
                loading="lazy"
                decoding="async"
                src={carlProfile}
                alt={`Profile`}
              />
            </div>

            <div className="bg-primary-green/10 rounded-lg px-5 py-3 w-full">
              <h3 className="font-bold mb-1">Votre Facture</h3>
              <h3 className="text-sm text-gray-800">FAC-00001.pdf</h3>
            </div>
          </div>

          <div className="bg-primary-green max-w-80 rounded-lg  px-3 py-3">
            <div className="flex items-center gap-3">
              <div>
                <IoFolderOutline className="text-white text-xl" />
              </div>

              <div>
                <h3 className="text-white font-bold">Document</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-b border-gray-100/35 py-3 my-3">
              <div>
                <LuUserSquare className="text-white text-xl" />
              </div>

              <div>
                <h3 className="text-white font-bold">Images - Photo</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b border-gray-100/35 pb-3">
              <div>
                <HiOutlineLocationMarker className="text-white text-xl" />
              </div>

              <div>
                <h3 className="text-white font-bold">Localisation</h3>
              </div>
            </div>

            <button
              className="bg-black text-white text-center w-full py-2 mt-4 rounded-md"
              type="button"
            >
              Annulé
            </button>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div>
              <FaPlus className="text-primary-green text-4xl" />
            </div>

            <div className="flex-[100%]">
              <input
                className="border border-primary-green placeholder:text-black outline-none py-2 px-4 rounded-full w-full"
                type="text"
                placeholder="Aa"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                src={hamburguerMenuIcon}
                alt="Hamburguer Icon"
                className="w-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
