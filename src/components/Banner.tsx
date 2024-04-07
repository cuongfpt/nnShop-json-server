import bannerImage from "@/img/banner.png"

const Banner = () => {
  return (
    <>
      <section className="banner">
        <img src={bannerImage} alt="" className="banner__img" />
      </section>
    </>
  );
};

export default Banner;
