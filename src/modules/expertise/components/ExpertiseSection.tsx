import Technologies from "./Technologies";
import "../styles/index.less";

export default function ExpertiseSection() {
  return (
    <section className="py-20">
      <div className="custom-container">
        <h2 className="h2 mb-4 text-center">
          Idealink’s expertise in React Native development
        </h2>
        <p className="body-xl text-center max-w-[1080px] mx-auto mb-8">
          Seasoned React Native engineers employ the latest technologies,
          frameworks, and components to create solutions that combine a strong
          easy-to-use modern design with high performance.
        </p>
      </div>
      <Technologies />
    </section>
  );
}
