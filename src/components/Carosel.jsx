import React, { useState } from "react";

import Card from "./Card";

function Carosel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            name: "TriviaTok",
            desc: "Tiktok style doom-scrollable trivia. AI question generation with Google's Gemini API",
            img: "/TriviaTokImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
                "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
                "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
                "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
            ],
            link: "https://triviatok.us/",
            host: "/TriviaTokLogo.png",
        },
        {
            name: "NES Emulator",
            desc: "Nintendo Entertainment System emulator. Which emulates the 6502 processor, ppu, and I/O.",
            img: "/NesEmuImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/192599922-3a8ceb1c-ff1d-40bc-b73c-99ea1182d8ad.png",
            ],
            link: "https://github.com/CadenMilne04/nes_emulator",
            host: "/GitHubLogo.png",
        },
        {
            name: "Workout App",
            desc: "Web application with active users to track workout data.",
            img: "/WorkoutAppImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
                "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
                "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
                "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
            ],
            link: "https://workout-app-ugjg.onrender.com/",
            host: "/GitHubLogo.png",
        },
        {
            name: "Dopa-Mirror",
            desc: "AI powered emotion detecting mirror that unlocks when smiled at.",
            img: "/MyDopaMirrorImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
                "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa",
            ],
            link: "https://www.youtube.com/watch?v=0eU8fmNTzb4&ab_channel=CadenMilne",
            host: "/YouTubeLogo.png",
        },
        {
            name: "'C'rappy Bird",
            desc: "Fully functional flappy bird clone that runs on my custom graphics library without using C Standard Library.",
            img: "/CrappyBirdImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
                "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa",
            ],
            link: "https://github.com/CadenMilne04/crappy-bird",
            host: "/GitHubLogo.png",
        },
        {
            name: '"Braille" Phone',
            desc: "Audio based phone designed for the blind. Built with rPI and python + Twilio API.",
            img: "/MyBlindPhoneImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
                "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa",
            ],
            link: "https://www.youtube.com/watch?v=p1zOldm9Yd4&ab_channel=CadenMilne",
            host: "/YouTubeLogo.png",
        },
        {
            name: "My Shell",
            desc: "Linux shell written in C which runs custom plugins and user binaries.",
            img: "/MyShellImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
                "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa",
            ],
            link: "https://github.com/CadenMilne04/my_shell",
            host: "/GitHubLogo.png",
        },
        {
            name: "My Malloc",
            desc: "Custom implementation of C's malloc written in C.",
            img: "/MyMallocImage.png",
            logos: [
                "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
                "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa",
            ],
            link: "https://github.com/CadenMilne04/my_malloc",
            host: "/GitHubLogo.png",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
        );
    };

    return (
        <div className="h-[calc(100vh-80px)]">
            <div className="grid grid-cols-2 mt-20 h-full">
                {/* Project Carosel */}
                <div className="grid grid-rows-2">
                    {/* Hero Section */}
                    <div>Hi. I'm Caden Milne!</div>

                    <div className="relative flex overflow-hidden">
                        {/* Carousel Images */}
                        <div
                            className="flex items-center transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / projects.length)}%)` }}
                        >
                            {projects.map((project, i) => (
                                <div className={currentIndex == i ? "scale-105" : "scale-95"}>
                                    <Card
                                        name={project.name}
                                        desc={project.desc}
                                        img={project.img}
                                        logos={project.logos}
                                        link={project.link}
                                        host={project.host}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>

                {/* Project Description */}
                <div></div>
            </div>
        </div>
    );
}

export default Carosel;
