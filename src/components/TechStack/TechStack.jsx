import "./stack.css";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';


export default function TechStack() {
    return (
        <>

            <section className="flex-col min-h-screen text-center sm:w-[60%] sm:min-h-screen ">
                <span className="text-[40px]">
                    <strong className="text-red-500">HTML </strong><strong className="text-blue-500">CSS </strong><strong className="text-yellow-500">javaScript</strong><br></br><strong className="text-blue-300">ReactJs </strong>
                    <strong className="text-green-500">NodeJs</strong>
                </span>
                <p className="text-5x1 better"> I'm constantly getting better</p>
                <div className="text-white m-[30px]">
                    <p className="slide-in-right">
                        <FaHtml5 className="text-5xl text-red-500" />
                        <strong className="text-red-500">HTML :</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident optio porro quod at aperiam totam? Nulla nihil eligendi, fugiat accusamus nemo ipsa dolorem qui sed iusto dolor, ratione officia minima pariatur vero illo amet autem vitae voluptate enim quidem veniam rem. Ipsam nisi error, delectus officia dicta quos neque, cumque saepe molestias laborum.
                    </p>
                    <p className="slide-in-left">
                        <FaCss3Alt className="text-5xl text-blue-500" />
                        <strong className="text-blue-500">CSS :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam libero aperiam at temporibus, tenetur ullam vitae praesentium voluptates aspernatur praesentium delectus at natus accusantium eum laboriosam repellendus molestias asperiores error.
                    </p>
                    <p className="slide-in-right">
                        <FaJs className="text-5xl text-yellow-500" />
                        <strong className="text-yellow-500">javaScript :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, similique deleniti eveniet vel quos provident ipsum voluptatibus non facere iusto repellendus ab consequuntur perferendis quaerat officia doloremque ad eum reiciendis sequi optio ducimus! Quae tempore perspiciatis aliquid ullam incidunt! Nemo deleniti dicta error possimus ducimus totam tempora iste. Quaerat aliquid officiis voluptatibus dolore minima aperiam.
                    </p>
                    <p className="slide-in-left">
                        <FaReact className="text-5xl text-blue-300" />
                        <strong className="text-blue-300">ReactJs :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, similique deleniti eveniet vel quos provident ipsum voluptatibus non facere iusto repellendus ab consequuntur perferendis quaerat officia doloremque ad eum reiciendis sequi.
                    </p>
                    <p className="slide-in-right">
                        <FaNodeJs className="text-5xl text-green-500" />
                        <strong className="text-green-500">NodeJs :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, similique deleniti eveniet vel quos provident ipsum voluptatibus non facere iusto repellendus ab consequuntur perferendis quaerat officia doloremque ad eum reiciendis sequi.
                    </p>
                </div>

            </section>
            <ScrollToTopButton />
        </>
    )
}