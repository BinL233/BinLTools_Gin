import "./aboutMe.css"
import CV from "../../resources/PDFs/CV.pdf"
import ASADataFest from "../../resources/images/ASADataFest.jpg"
import ASADataFest2 from "../../resources/images/ASADataFest2.JPG"
import AuthorImage from "../../resources/images/AuthorImage.jpg"
import CPU1 from "../../resources/images/CPU1.png"
import CPU2 from "../../resources/images/CPU2.png"
import Flowchart from "../../resources/images/Flowchart.jpg"
import ReviveReviveMockUp from "../../resources/images/ReviveReviveMockUp.jpg"
import RoboMaster from "../../resources/images/RoboMaster.jpg"
import RoboMaster2 from "../../resources/images/RoboMaster2.jpg"
import KueueImage from "../../resources/images/theory-of-operation.svg"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"

function AboutMe() {
    return (
        <div classNameName="aboutMe">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            <div className="container">
                <div id="top_head">
                    <h3><a href="/" id="back_web">Back to my Website</a></h3>
                </div>

                <section id="biography" className="module">
                    <div className="photo-container">
                    <img src={AuthorImage} id="avatar" alt="Kaile Ying" />
                    </div>

                    <h2 id="name">Kaile Ying</h2>
                    <p id="dl_cv">Download my <a href={ CV } target="_blank">CV</a>.</p>
                    <p id="github"><a href="https://github.com/BinL233">
                    <i className="fab fa-github"></i> My Github HomePage
                    </a></p>

                    <div className="container3_around">
                        <div>
                            <h3>Interests</h3>
                            <p>Deep Learning for DNA Analysis</p>
                            <p>Robotics</p>
                            <p>Web Development</p>
                            <p>iOS Applications Development</p>
                        </div>    
                        <div>
                            <h3 id="xx-large_h3">Education</h3>
                            <p className="larger_p">Carnegie Mellon University</p>
                            <p className="medium_p"><i className="far fa-clock"></i> 2025 SP - 2027 SP</p>
                            <p className="medium_p"><i className="fas fa-graduation-cap"></i> Electrical and Computer Engineering Major</p>

                            <p className="larger_p">The Pennsylvania State University - University Park</p>
                            <p className="medium_p"><i className="far fa-clock"></i> 2020 FA - 2024 FA</p>
                            <p className="medium_p"><i className="fas fa-graduation-cap"></i> Computer Science Major</p>
                            <p className="medium_p"><i className="fas fa-graduation-cap"></i> Mathematics Minor</p>
                        </div>
                    </div>
                </section>

                <section id="projects" className="module">
                    <p className="xx-large_p">Projects</p>
                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> (Kubernetes Native) Kueue</h3>
                                </div>
                                <div>
                                    <p className="x-large_p">Jun 2023 - Present</p>
                                </div>
                            </div>

                            <p className="intro">
                            Kueue is a kubernetes-native system that manages quotas and how jobs consume them. Kueue decides when a job should wait,
                            when a job should be admitted to start (as in pods can be created) and when a job should be preempted (as in active pods should be deleted).
                            </p>
                            <p><img src={KueueImage} alt="kueue-theory-of-operation" /></p>
                        </div>
                        <div className="buttons">
                            <a href="https://github.com/kubernetes-sigs/kueue" className="hover_button">Repository</a>
                            <a href="https://kueue.sigs.k8s.io/docs/overview/" className="hover_button">Website</a>
                        </div>
                    </section>

                    <hr className="custom-hr" />

                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> (Application for iOS) Revive</h3>
                                </div>
                                <div>
                                    <p className="x-large_p">Oct 2023 - Present</p>
                                </div>
                            </div>

                            <p className="intro">Revive is a Focus App for iOS, based on taking care of endangered or extinct species.
                            In Revive, you can take care of a species from 0 to 1, starting with an egg. For your species to thrive,
                            you need to do anything in a focused way-----such as studying, working, or other activities, which is the core of Revive.
                            </p>

                            <p className="intro">
                            Features: Core Data, iCloud Sync, Live Activity Notifications, Timer, json Encoder & Decoder, Data Visualization Analysis, UserDefaults.
                            </p>

                            <p className="intro"><b>This app now is available on Apple TestFlight!</b></p>

                            <div className="container3">
                                <div><img className="revive_image" src={ReviveReviveMockUp} alt="ReviveMockUp" /></div>
                                <div><img className="revive_image" src={Flowchart} alt="ReviveFlowChart" /></div>
                            </div>
                        </div>

                        <div className="buttons">
                            <a href="https://testflight.apple.com/join/TfxHXkvb" className="hover_button">Apple TestFlight</a>
                            <a href="https://github.com/BinL233/Revive" className="hover_button">Repository</a>
                            <a href="https://github.com/BinL233/Revive/blob/main/Design/Revive%20-%20Design%20Document.pdf" className="hover_button">Design</a>
                        </div>
                    </section>

                    <hr className="custom-hr" />

                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> (Personal Website) BinLTools</h3>
                                </div>

                                <div>
                                    <p className="x-large_p">Jun 2022 - Present</p>
                                </div>
                            </div>

                            <p className="intro">
                            Gin Framework-based project. Used for medium features and articles created by the author.
                            Applied Gin as Framework, HTML+CSS as Front-end, JavaScript+Golang as Back-end, and Mysql as Database.
                            This website allows users to log in, register, test reactions, convert digits (Binary, Octal, Decimal and
                            Hexadecimal), etc. It also contains an L2D Widget and Author's home page.
                            </p>
                        </div>

                        <div className="buttons">
                            <a href="https://github.com/BinL233/BinLTools_Gin" className="hover_button">Repository</a>
                            <a href="http://binltools.fun/" className="hover_button">Website</a>
                        </div>
                    </section>

                    <hr className="custom-hr" />

                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> Thread scheduler</h3>
                                </div>
                                <div>
                                    <p className="x-large_p">Jan 2023 - Mar 2023</p>
                                </div>
                            </div>
                            <p className="intro">
                            This repository contains code for emulation of a single CPU with the Shortest Remaining Time
                            First scheduling policy and two IO Devices-based thread schedulers. Implemented and parsed various
                            mechanisms for virtual memory to physical memory to page mapping and page scheduling algorithms (FIFO, LRU, CLOCK).
                            Built multi-process, CPU/IO multi-threading (spin locks, mutex locks, and thread scheduling algorithms (FCFS, SRJF)).
                            Constructed TLB mechanisms to determine the physical address of the memory request at the time of the TLB hit.
                            </p>
                        </div>
                        <div className="buttons">
                            <a href="https://github.com/BinL233/Thread-scheduler" className="hover_button">Repository</a>
                            {/* <!--        <a href="#" className="hover_button">Website</a>--> */}
                        </div>
                    </section>

                    <hr className="custom-hr" />

                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> CPU Organization and Design</h3>
                                </div>
                                <div>
                                    <p className="x-large_p">Jun 2022 - Aug 2022</p>
                                </div>
                            </div>

                            <p className="intro">
                            This project builds an FPGA on Vivado via Verilog that simulates the key components and functions of a CPU:
                            Datapath for executing instructions and controlling data transfer; Pipeline Registers such as IDEXEPipelineReg,
                            IFIDPipelineReg. Pipeline Registers such as IDEXEPipelineReg, IFIDPipelineReg, exememPipelineReg and
                            memwbPipelineReg are used to store stage data and status information; Control Unit is used to control other
                            components to perform calculations; Program Counter and Program Counter Adder are used to keep track of the
                            address of the current instruction and increase the number of PCs; Register File is used to store the temporary
                            data of register; ALU is used to perform computation and logic operations; Data Memory is used to store data;
                            RegrtMultiplexer, ALU multiplexer and WbMux are used to select different data sources according to the control
                            signals. By constructing the above components, this virtual CPU can realize read-save and
                            add-subtract-multiply-divide calculations.
                            </p>
                        </div>
                        <div className="container3">
                            <div><img className="CPU_image" src={CPU1} alt="CPU1" /></div>
                            <div><img className="CPU_image" src={CPU2} alt="CPU2" /></div>
                        </div>
                        <div className="buttons">
                            <a href="https://github.com/BinL233/Computer-Organization-and-Design" className="hover_button">Repository</a>
                            {/* <!--        <a href="#" className="hover_button">Website</a>--> */}
                        </div>
                    </section>

                    <hr className="custom-hr" />

                    <section className="section2">
                        <div>
                            <div className="project">
                                <div>
                                    <h3 className="x-large_h3"><i className="fas fa-laptop-code"></i> (Game for Windows) One Death Clear</h3>
                                </div>
                                <div>
                                    <p className="x-large_p">Jul 2021 - Sep 2022</p>
                                </div>
                            </div>

                            <p className="intro">
                            This is a 2D RPG game. Control the character to fight against monsters and defeat the boss at the end to clear the game.
                            The most important thing is that if you die you need to start over!
                            </p>
                        </div>
                        <div className="buttons">
                            <a href="http://binltools.fun/download/No_Death_Clear_0.8.3.exe" className="hover_button">Game</a>
                            <a href="http://binltools.fun/download/No_Death_Clear_0.8.3_Project.zip" className="hover_button">Project</a>
                        </div>
                    </section>
            </section>

            <section id="competitions" className="module">
                <p className="xx-large_p">Competitions</p>
                <section className="section2">
                    <div>
                        <div className="project">
                            <div>
                                <h3 className="x-large_h3">DJI RoboMaster Competition in IEEE International Conference</h3>
                            </div>
                            <div>
                                <p className="x-large_p">May 2022</p>
                            </div>
                        </div>
                        <p className="award_place">- 2nd Place</p>
                    </div>
                    <div className="container3">
                        <div><img className="competition_img" src={RoboMaster} alt="robomaster1" /></div>
                        <div><img className="competition_img" src={RoboMaster2} alt="robomaster2" /></div>
                    </div>
                </section>

                <hr className="custom-hr" />

                <section className="section2">
                    <div>
                        <div className="project">
                            <div>
                                <h3 className="x-large_h3">Nittany AI Challenge</h3>
                            </div>
                            <div>
                                <p className="x-large_p">Feb 2022 - May 2022</p>
                            </div>
                        </div>
                        <p className="award_place">- TOP 20</p>
                    </div>
                </section>

                <hr className="custom-hr" />

                <section className="section2">
                    <div>
                        <div className="project">
                            <div>
                                <h3 className="x-large_h3">ASA DataFest</h3>
                            </div>
                            <div>
                                <p className="x-large_p">Mar 2022</p>
                            </div>
                        </div>
                        <p className="award_place">- Best Data Visualization Team</p>
                    </div>
                    <hr className="custom-hr" />
                        <div className="container3">
                            <div id="datafest">
                                <img className="competition_img" src={ASADataFest} alt="asadatafest1" />
                            </div>
                            <div id="datafest2">
                                <img className="competition_img" src={ASADataFest2} alt="asadatafest2" />
                            </div>
                        </div>
                </section>
            </section>

            <section id="internship" className="module">
                <p className="xx-large_p">Internship</p>
                <section className="section2">
                    <div>
                        <div className="project">
                            <div>
                                <h3 className="x-large_h3"><i className="fas fa-id-badge"></i> DaoCloud Network Technology Co., Ltd.</h3>
                            </div>
                            <div>
                                <p className="x-large_p">May 2023 - Aug 2023</p>
                            </div>
                        </div>
                        <p className="intern_title">- Back-end Developer Intern</p>
                        <p className="intern_intro" ><i className="fas fa-circle fa-xs"></i> <b>Cloud Native: </b> Kubernetes, Docker, Kueue</p>
                        <p className="intern_intro"><i className="fas fa-circle fa-xs"></i> <b>AI Models Platform: </b> KubeRay</p>
                    </div>
                </section>
            </section>


            <section id="research" className="module">
                <p className="xx-large_p">Research</p>
                <section className="section2">
                    <div>
                        <div className="project">
                            <div>
                                <h3 className="x-large_h3"><i className="fas fa-chart-pie"></i>   (Deep Learning for ChIP-nexus) Cage</h3>
                            </div>
                            <div>
                                <p className="x-large_p"> Aug 2023 - Present</p>
                            </div>
                        </div>
                        <p className="intro">
                        We reduce the time complexity of analyzing ChIP-nexus data by analyzing base pairs in DNA sequences.
                        Applied forward and backward propagation in neural networks with multi-scale feature learning.
                        Randomly split the genome into training, validation and test chromosomes.
                        </p>
                    </div>
                </section>
            </section>

            <section id="courses" className="module">
                <p className="xx-large_p">Courses</p>

                <section id="courses_section">
                    <div id="courses_div">
                        <p className="courses_p">CMPSC 464 - Introduction to the Theory of Computation - A</p>
                        <p className="courses_p">CMPSC 461 - Programming Language Concepts - A</p>
                        <p className="courses_p">CMPSC 360 - Discrete Mathematics for Computer Science - A</p>
                        <p className="courses_p">CMPSC 475 - Applications Programming - A</p>
                        <p className="courses_p">CMPSC 461 - Programming Language Concepts - A</p>
                        <p className="courses_p">CMPSC 465 - Data Structures and Algorithms - A-</p>
                        <p className="courses_p">CMPEN 270 - Digital Design - A</p>
                        <p className="courses_p">CMPEN 331 - Computer Organization and Design - A</p>
                        <p className="courses_p">CMPSC 415 - Numerical Computations - A-</p>
                        <p className="courses_p">Stat 414 - Introduction to Probability Theory - A</p>
                        <p className="courses_p">Stat 415 - Introduction to Mathematical Statistics - A</p>
                        <p className="courses_p">CMPSC 221 - Object Oriented Programming with Web-Based Applications - A</p>
                    </div>
                </section>
            </section>

            <section id="skills" className="module">
                <p className="xx-large_p">Skills</p>

                <div id="skills_div">
                    <div className="skills_div2">
                        <h3 className="large_h3"><i className="fas fa-code"></i> Programming Languages</h3>
                        <p className="skills_p">Golang</p>
                        <p className="skills_p">Python</p>
                        <p className="skills_p">Swift</p>
                        <p className="skills_p">C</p>
                        <p className="skills_p">Java</p>
                        <p className="skills_p">HTML & CSS</p>
                        <p className="skills_p">SQL</p>
                    </div>

                    <div className="skills_div2">
                        <h3 className="large_h3"><i className="fas fa-laptop-code"></i> CS Related Technics</h3>
                        <p className="skills_p">Kubernetes</p>
                        <p className="skills_p">Docker</p>
                        <p className="skills_p">Web Development (Gin, Django...)</p>
                        <p className="skills_p">iOS Application Development (SwiftUI, UiKit)</p>
                        <p className="skills_p">Deep Learning (PyTorch)</p>
                        <p className="skills_p">Embedded System Development</p>
                        <p className="skills_p">Game Development</p>
                        <p className="skills_p">Database</p>
                    </div>

                    <div className="skills_div2">
                        <h3 className="large_h3"><i className="fas fa-tools"></i> Non-CS Related Technics</h3>
                        <div className="skills_div2">
                            <p className="skills_p">Video Clip (Premiere)</p>
                            <p className="skills_p">Video Effects (After Effects)</p>
                            <p className="skills_p">MMD (3D)</p>
                            <p className="skills_p">BeatBox</p>
                            <p className="skills_p">Painting</p>
                            <p className="skills_p">Image Processing (PhotoShop)</p>
                        </div>
                    </div>
                </div>

            </section>


            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>

        </div>
    );
}

export default AboutMe;