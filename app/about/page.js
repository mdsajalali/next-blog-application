export default function page() {
    return (
        <>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
                            About Us
                        </h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                        I am a Web Designer. I am a hardworking, enthusiastic learner and I am always looking for opportunities to learn new technologies.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 rounded-lg">
                        <img
                            className="w-full h-full"
                            src="https://sajalali.netlify.app/images/profile.gif"
                            alt="A group of People"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
