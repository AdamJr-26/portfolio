import Typewriter from 'typewriter-effect';


const GreetingText = () => {

    return (
        <p className=" text-white font-medium text-[24px]" >
            <Typewriter
                options={{
                    autoStart: true,
                    loop: false,
                    delay: 25,
                    deleteSpeed: 25,
                    cursor: '_',
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<span class="text-white text-[36px] md:text-[42px] lg:text-[52px]" >Hi, I\'m </span>')
                        .pauseFor(500)
                        .typeString('<span class="text-stroke-primary font-bold text-[36px] md:text-[42px] lg:text-[52px]"> Adam Marcaida Jr.,</span>')
                        .pauseFor(100)
                        .typeString(' <span class="text-white text-[36px] md:text-[42px] lg:text-[52px]">a</span>')
                        .pauseFor(500)
                        .typeString(`<span class="text-stroke-primary font-bold text-[36px] md:text-[42px] lg:text-[52px]"> Web Developer.</span>`)
                        .pauseFor(10000)
                        .start();
                }}
            />
        </p>

    );
};

export default GreetingText;
