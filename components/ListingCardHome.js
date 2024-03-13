import Link from "next/link";
import Nformatter from "./Nformatter";

export default function ListingCardHome(props) {
  function checkPricing(price) {
    if (parseInt(price) > 0) {
      return `Starting from $${Nformatter(price, 2)}`;
    } else {
      return `Pricing not available`;
    }
  }

  function daysCount(x) {
    let date_1 = new Date(x);
    let date_2 = new Date();
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (TotalDays == 0) {
      return "Today";
    } else {
      return Math.abs(TotalDays) + " day ago ";
    }
  }

  return (
    <>
      <div className="card border-0 shadow-lg rounded-mine my-3 my-md-0 condocard bigg">
        <div className="position-relative is-loading">
          <Link
            href={`/pre-construction-homes/${props.city.slug}/${props.slug}`}
            className="mylinkk"
            target="_blank"
          >
            {props.image.length > 0 ? (
              <img
                loading="lazy"
                src={`${props.image[0].image}`}
                layout="responsive"
                className="img-fluid condocard-img-top"
                alt={`${props.project_name} located at ${props.project_address} image`}
              />
            ) : (
              <img
                loading="lazy"
                src="/noimage.webp"
                className="img-fluid condocard-img-top"
                alt={`no image available for ${props.project_name}`}
              />
            )}
          </Link>
          {/* <span className="p-1 px-2 abs1">Preconstruction</span> */}
          {props.status == "Upcoming" && (
            <span className="mmmmm bg-yellow p-1 px-2">{props.status}</span>
          )}
          {props.status == "Sold out" && (
            <span className="mmmmm bg-green text-white p-1 px-2">
              Past Communities
            </span>
          )}
          {props.status == "Selling" && (
            <span className="mmmmm p-1 px-2">Selling Now</span>
          )}
          {props.occupancy && (
            <span className="shadow-lg p-1 px-2 abs2">
              Completion {props.occupancy}
            </span>
          )}
        </div>
        <Link
          href={`/pre-construction-homes/${props.city.slug}/${props.slug}`}
          className="card-body text-decoration-none text-dark bg-white shadow-lgg rounded-mine"
          target="_blank"
        >
          <div className="card-content pt-2">
            <h3 className="mb-1 cardd-title text-dark">{props.project_name}</h3>
            <h4 className="mb-2 cardd-subtitle">
              {checkPricing(props.price_starting_from)}
            </h4>
            <p className="mb-0 project-address-card">{props.project_address}</p>
            <p className="card-secondary-title mb-0">
              {props.project_type} in {props.city.name} | Updated{" "}
              {daysCount(props.last_updated)}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
