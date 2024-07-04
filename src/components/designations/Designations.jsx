import WebDesign from "../../assets/designations/web-design.png";
import ProfessionalPhotography from "../../assets/designations/professional-photography.png";
import ThreeDModelingAndAnimations from "../../assets/designations/3D-modeling-animations.png";


const data = [
  {
    id: 1,
    title: "High Quality Web-Design",
    image: WebDesign,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  },
  {
    id: 2,
    title: "Professional Photography",
    image: ProfessionalPhotography,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  },
  {
    id: 3,
    title: "3D Modeling And Animations",
    image: ThreeDModelingAndAnimations,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  }
];

export default function Designations() {

  return (
    <section className="designations py-20">
      {data.map(designation =>
        <div key={designation.id} className="designation">
          <div className="image" style={{ backgroundImage: `url(${designation.image})` }}/>
          <div className="content flex flex-col gap-5 px-10 py-10">
            <h6 className="font-bold uppercase">
              {designation.title}
            </h6>
            <p className="description">
              {designation.description}
            </p>
            <button className="w-fit text-left border p-5 px-5  uppercase">
              Read More
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
