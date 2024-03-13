import Link from "next/link";
import Nformatter from "./Nformatter";

export default function CondoCard(props) {
  function checkPricing(price) {
    if (parseInt(price) > 0) {
      return `Starting from $${Nformatter(price, 2)}`;
    } else {
      return `Pricing not available`;
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
                src={`https://api.homepapa.ca${props.image[0].image}`}
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
            <span className="mmmmm bg-yellow p-1 px-2">Coming Soon</span>
          )}
          {props.status == "Sold out" && (
            <span className="mmmmm bg-green text-white p-1 px-2">
              Past Communities
            </span>
          )}
          {props.status == "Selling" && (
            <span className="mmmmm p-1 px-2">Selling Now</span>
          )}
          {props.status == "Planning Phase" && (
            <span className="mmmmm bg-yellow p-1 px-2">Planning Phase</span>
          )}
          <span className="px-2 abs2">
            {props.no + 1 ? props.no + 1 + " " : " "}
          </span>
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
              {props.project_type} | Completion {props.occupancy}
            </p>
            <p className="card-secondary-title2 mb-0">
              {`Updated on: ${
                months[new Date(props.last_updated).getMonth()]
              } ${new Date(props.last_updated).getDate()}, ${new Date(
                props.last_updated
              ).getFullYear()}`}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
