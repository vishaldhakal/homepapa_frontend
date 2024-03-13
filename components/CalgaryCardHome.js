import Link from "next/link";
export default function CalgaryCardHome(props) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gx-0 gy-3 py-md-0">
        <div className="col">
          <div className="bg-homem b1 shdwc">
            <div className="logo d-flex justify-content-center pt-5">
              <img
                src="/homep/new_truman_community_logo_myne.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="text-center lastp pt-4">
              Comprising two 5-storey structures, Myne Condominiums will feature
              a total of 217 units
            </p>
            <div className="d-flex justify-content-center pt-4">
              <Link className="btn btn-smm" target="_blank" href={"/"}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-homem b2 shdwc">
            <div className="logo d-flex justify-content-center pt-5">
              <img
                src="/homep/new_truman_community_logo_orson.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="text-center lastp pt-4">
              Orson Condos is set to grace the expanding Wolf Willow Community,
              nestled next to the picturesque Chaparral Lake Community in
              Southeast Calgary.
            </p>
            <div className="d-flex justify-content-center pt-4">
              <Link className="btn btn-smm" target="_blank" href={"/"}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-homem b3 shdwc">
            <div className="logo d-flex justify-content-center pt-5">
              <img
                src="/homep/truman_lincoln_logo_gold.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="text-center lastp pt-4">
              Lincoln Tower, a visionary condo project by Truman that is
              currently in the pre-construction phase.
            </p>
            <div className="d-flex justify-content-center pt-4">
              <Link className="btn btn-smm" target="_blank" href={"/"}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-homem b4 shdwc">
            <div className="logo d-flex justify-content-center pt-5">
              <img
                src="/homep/truman_logo_2019.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="text-center lastp pt-4">
              Marc and Mada Condos, a striking architectural duo in the heart of
              a bustling Canadian city, redefine urban living with their modern
              elegance.
            </p>
            <div className="d-flex justify-content-center pt-4">
              <Link className="btn btn-smm" target="_blank" href={"/"}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
