import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";
import CalgaryCardHome from "@/components/CalgaryCardHome";
import { notFound } from "next/navigation";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import InstagramPost from "@/components/InstagramPost";
import FixedContactButton from "@/components/FixedContactButton";

async function getData(city) {
  const res = await fetch(
    "https://api.homepapa.ca/api/preconstructions-city/" +
      city +
      "?page_size=10",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getCities() {
  const res = await fetch("https://api.homepapa.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCitiesandProjects() {
  const res = await fetch("https://api.homepapa.ca/api/all-precons", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  let dropdown_cities = await getCitiesandProjects();

  return (
    <>
      <FixedContactButton></FixedContactButton>
      <div className="py-3"></div>
      <div className="pt-3">
        <div className="container-fluid2">
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="fw-mine ccent-line fs-big fs-1">
              Top Projects in Homepapa
            </h2>
          </div>
          <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
            <p className="fs-5 mb-0 text-center">
              Explore 1000+ current & past new homes communities in Homepapa
            </p>
            <Link
              href={"/pre-construction-homes/calgary"}
              className="mt-1 text-mine"
            >
              Pre construction homes and condos in Canada{" "}
              <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
          {/* <CalgaryCardHome></CalgaryCardHome> */}
          <div className="pt-5 mt-5"></div>

          <div className="py-3">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center align-items-center">
              <img src="/topppp.png" alt="Calgary map" className="img-fluid" />
            </div>
          </div>
          <div className="pt-5"></div>
          <div className="py-2"></div>
          <div className="py-5 my-2"></div>
          {/* <div className="d-flex align-items-center justify-content-center">
            <h2 className="fw-mine ccent-line fs-big fs-1">
              <Link href={"/greater-toronto-area/"} className="link-black">
                Toronto
              </Link>
            </h2>
          </div>
          <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
            <p className="fs-5 mb-0 text-center">
              Explore 100+ currently selling & upcoming pre-construction
              communities in Toronto
            </p>
            <Link
              href={"/pre-construction-homes/toronto"}
              className="mt-1 text-mine"
            >
              More developments in Toronto{" "}
              <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {toronto_data.preconstructions &&
              toronto_data.preconstructions.slice(0.5).map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <CondoCard {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5"></div>
          <div>
            <div className="text-center fw-bold fs-3 text-mine">
              Greater Toronto Area Communities
            </div>
            <div className="py-3">
              <div className="row row-cols-2 row-cols-md-3 gy-3">
                {dropdown_cities &&
                  filteredprojects([
                    "Toronto",
                    "Mississauga",
                    "Brampton",
                    "Ajax",
                    "Burlington",
                    "Kitchener",
                    "Hamilton",
                    "Oakville",
                  ]).map((city, no) => (
                    <div className="col-12 col-sm-6 col-md-3 mb-4" key={no}>
                      <Link
                        className="link-black"
                        href={`/pre-construction-homes/${city.slug}/`}
                      >
                        <h4 className="fs-m fw-bold text-center">
                          {city.name}
                        </h4>
                      </Link>
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        {city.preconstructions &&
                          city.preconstructions.length > 0 &&
                          city.preconstructions
                            .slice(0, 5)
                            .map((project, no) => (
                              <Link
                                className="fs-small link-black text-center"
                                href={`/pre-construction-homes/${city.slug}/${project.slug}`}
                              >
                                {project.project_name}
                              </Link>
                            ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}
        </div>
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-4 col-xl-4">
              <Link
                class="d-block properti_city"
                href="pre-construction-homes/toronto"
              >
                <div class="thumb">
                  <img
                    src="/cities/toronto.jpg"
                    alt="toronto"
                    class="img-fluid"
                  />
                </div>
                <div class="overlay">
                  <div class="details">
                    <h4>Toronto</h4>
                    <p>Explore Toronto's finest New construction condos</p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-6 col-lg-8 col-xl-8">
              <Link
                class="d-block properti_city"
                href="pre-construction-homes/brampton"
              >
                <div class="thumb">
                  <img
                    src="/cities/brampton.jpg"
                    alt="brampton"
                    class="img-fluid"
                  />
                </div>
                <div class="overlay">
                  <div class="details">
                    <h4>Brampton</h4>
                    <p>Brampton's finest New construction condos</p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-6 col-lg-8 col-xl-8">
              <Link
                class="d-block properti_city"
                href="pre-construction-homes/etobicoke"
              >
                <div class="thumb">
                  <img
                    src="/cities/etobicoke.jpg"
                    alt="etobicoke"
                    class="img-fluid"
                  />
                </div>
                <div class="overlay">
                  <div class="details">
                    <h4>Etobicoke</h4>
                    <p>Etobicoke's finest New construction condos</p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-6 col-md-4 col-xl-4">
              <Link
                class="d-block properti_city"
                href="pre-construction-homes/mississauga"
              >
                <div class="thumb">
                  <img
                    src="/cities/mississauga.jpg"
                    alt="mississauga"
                    class="img-fluid"
                  />
                </div>
                <div class="overlay">
                  <div class="details">
                    <h4>Mississauga</h4>
                    <p>Mississauga's finest New construction condos</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-3 py-md-5">
          <div className="my-5 py-5">
            <div className="position-relative bg-lightblue container-fluid2">
              <div className="side-img">
                <img
                  src="/label.png"
                  alt="condo in calgary"
                  className="img-fluid"
                />
              </div>
              <div className="side-text">
                <p>
                  Homepapa has one of the largest, most updated database of new
                  construction homes, backed by industry-leading technology and
                  partners.
                </p>
                <h3 className="fw-bold smallm fm-playfair text-blue">
                  Homepapa<span className="text-mine">.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid2">
          <DolphyAdvantage></DolphyAdvantage>
          <div className="py-md-5"></div>
          <div className="py-5 my-5" id="mycontact">
            <div className="container-fluid2">
              <div className="row justify-content-center">
                <img
                  src="/contact-bottom-2.png"
                  alt="dce"
                  className="img-fluid w-25 w-smm-50 mb-3"
                />
              </div>
              <h2 className="fw-mine text-center px-md-4 fs-2 mb-5 fm-playfair">
                Contact Homepapa Team Today
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-3">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <BottomContactForm
                    proj_name="All"
                    city="Home Page"
                  ></BottomContactForm>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
