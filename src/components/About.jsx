import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className='w-full h-64' alt="About" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo optio enim perspiciatis eum unde recusandae officiis natus obcaecati consequatur ratione libero omnis, eaque dolore, est error magnam laudantium. Officia, id!
          </p>
      </article>
      </div>
      
    </section>
  )
}

export default About
