const data = [
  {
    id: 1,
    title: 'Photographer',
    icon: "fa fa-camera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 2,
    title: 'Web Designer',
    icon: "fa fa-desktop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 3,
    title: '3D Artist',
    icon: "fa fa-cubes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }
];

export default function Services() {


  return (
    <section id="services" className="services flex flex-col justify-center items-center gap-12 px-5 py-20 border">
      <h2 className="heading text-xl text-center uppercase">
        I do Amazing Things for Clients
      </h2>

      <div className="services-cont flex flex-col gap-10 py-10 bg-yellow-500">
        {data.map(service =>
          <div key={service.id} className="service flex flex-col justify-center items-center gap-5">
            <div className="icon w-[200px] h-[200px] relative rounded-[50%] bg-red-500">
              <i className={`${service.icon} absolute top-[50%] right-[50%]`}/>
            </div>
            <div className="title text-xl font-bold uppercase">
              {service.title}
            </div>
            <div className="description text-center">
              {service.description}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
