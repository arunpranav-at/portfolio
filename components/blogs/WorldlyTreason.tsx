"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WorldlyTreasonBlog = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  
  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-96 w-96 rounded-full bg-purple-600/20 blur-3xl top-20 -left-48"></div>
          <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-3xl bottom-40 right-20"></div>
          <div className="absolute h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl top-1/2 left-1/3"></div>
          
          {/* Stars */}
          <div className="stars absolute inset-0">
            {Array.from({ length: 100 }).map((_, index) => (
              <div 
                key={index}
                className="absolute bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>

          {/* Futuristic Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(128,90,213,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(128,90,213,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <motion.h1 
              variants={slideUp}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300">
                WORLDLY TREASON
              </span>
            </motion.h1>
            
            <motion.div variants={slideUp} className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                The story of a scientist who lost his grand-daughter in a future dystopian world.
              </p>
              
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={scrollToStory}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-medium transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Read Story</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="relative">
                  <button 
                    onClick={copyToClipboard}
                    className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-900/20 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Share</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                  
                  {/* Copy confirmation tooltip */}
                  {showCopyMessage && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-purple-900 text-white px-4 py-2 rounded-md text-sm">
                      URL copied to clipboard!
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Down Arrow */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Story Section - Always Visible */}
      <div ref={storyRef} className="min-h-screen relative pt-16 pb-32">
        {/* Background Elements For Story Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-96 w-96 rounded-full bg-purple-600/10 blur-3xl -top-48 right-20"></div>
          <div className="absolute h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl bottom-40 left-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-6xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Worldly Treason
            </h2>
            
            <div className="prose prose-xl prose-invert max-w-none">
              {/* First paragraph with image */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    I was made to stand in front of the panel of honourable judges. Presidents and Prime Ministers of various
                    nations, press and media people and other dignitaries had gathered at the court hall. Metaverse Universe
                    connectivity was switched on so that people in metaverse could also view the hearing. Agitated people both in
                    online and offline were demanding death sentence for me. &quot;Worldly treason case&quot; has been the talk of the whole
                    world past one week. Even the Martian parliament had passed bill to ban me from the human society. I will tell you
                    why I had been standing here and who am I?
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/1.png" alt="Court scene with judges" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Second paragraph with image */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    I am Gaendiel Veesariel, 76 years old and the project head for the Secret Extra Terrestrial Life Research
                    Sector (SETLRS) under the joint ventures of NASA, CIA and IANA. It was the year 2119 when I was sworn in as the
                    project head. We had already built settlements on Mars which was accessible only to the elite sector. The world
                    where I lived was a typical dystopia. Humans wore protective suits with nostril filter machine to protect themselves
                    from the polluted atmosphere and harmful radiations. We ate 3 tablets and water capsule as the alternative to food
                    and water. Many of the animals, birds and insects were already extinct. The climate on earth was becoming harsher
                    from decade to decade. The elite people managed to locate themselves in comfortable locations while the others
                    need to live in such harsh conditions.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/2.png" alt="Dystopian future world" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Third paragraph with image */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    My family consists of my son, daughter-in-law and my granddaughter Pearl Veesariel. She is 12 years old and
                    was born after 4 years of treatment at the IVF centre for her parents. That was really quick as other couples on
                    average undergo 7 years of treatment. The governments of the nations were majorly controlled by the corporate as
                    they were the one helping the government with funds. Many nations were concentrating on building their own
                    settlements on Mars and Moon. The money was being spent on other planetary research, developing advanced
                    military equipments and research on extra terrestrial life rather than spending money on improving the ecological
                    imbalance on earth. I went to our chief and asked why sufficient funds were not being allotted on other fields which
                    are the basic necessities of normal people? He answered something which I expected. The Earth has already become
                    a place hard to live. The life expectancy and reproduction rates are dropping. People are eating their favourite foods
                    only in metaverse. It is the gadgets like AR VR which is keeping people&apos;s mind in happy mood, stopping them from
                    thinking and also helps governments and corporate in brainwashing large sections of society to stop people&apos;s
                    uprising. He also said there are plans in future to evacuate the earth and find new place to live.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/3.png" alt="Pearl Veesariel" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Fourth paragraph with image */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    Many used to look at me surprisingly as I am still alive at the age of 76 and the average life expectancy is 52.
                    I always cultivated different cereals and veggies at my secret laboratories using the hard found chemical formulas for
                    their growth. There are possibilities that if I inform about my finding, the elites could make use of it in commercial
                    purpose. So I kept them as secret and waited for a right time. I was also busy on the project finding the presence of
                    extra terrestrial life. We were suspecting the presence of human like civilisation at the exo-planet Proxima Centauri B
                    orbiting the star Proxima Centauri. We had already received a dozen of undeciphered radio and microwaves. A year
                    ago we also found the presence of artificial light on Proxima B. We were also sending various signals in binary,
                    quantum, and in various wavelengths spectrums but, got no results. But one day I got a signal from Proxima B which
                    when converted to binary form, gave me zeros and ones which went up to 343 TB.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/4.png" alt="Proxima Centauri B" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Fifth paragraph with image */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    Before I could get into decoding, I got a phone call from by daughter-in-law that my granddaughter has been
                    admitted to the hospital due to some fight with her classmates in her school. Her nostril filter machine was forcefully
                    removed by one of her classmate during fight and she inhaled the unfiltered atmospheric air. She was taken to
                    intensive care unit in the nearby multispecialty hospital. When I reached the hospital, I saw my son and daughter-in-
                    law standing with dull faces. I went near them and looked at them. I could see my daughter-in-law&apos;s eyes filled with
                    tears which would soon flow down her cheeks. My son was already in the state of extreme sadness. He hugged me
                    and started crying. A doctor came out and we three looked at his face with curiosity. He too seemed worried. He
                    said, &quot;Nothing can be said as of now. You can meet her one by one.&quot; My son and his wife went in one after the
                    other. Then at last I went in. Lots of wires and medical equipments were placed around her. A special lung
                    reorganiser machine was kept connected to her nose and mouth.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/5.png" alt="Hospital scene" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Sixth paragraph with image */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    She slowly opened her eyes and saw me. I could see small tear flowing from her left eye. She asked me one thing. Even though her mouth and nose were under inhaler machines, those had nano microphones so I could hear them through speakers. &quot;Grampa, it&apos;s suffocating!&quot; she said slowly. I said, &quot;It will be alright Pearl. Be strong.&quot; She then asked, &quot;Am I going to die grandpa?&quot; I said, &quot;No baby! No! You will live long, long. Aah hah (I cleared my throat)&quot;. &quot;Grampa you are lying. I have stud., studied! Studied in my books grampa! It is., is, is difficult. Difficult to save those who inhaled free air. Right grampa?&quot;
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/6.png" alt="Pearl in hospital" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Seventh paragraph with image */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    &quot;No dear, no! It is difficult. But not impossible. It is possible. You need be strong and confident Pearl.&quot; &ndash; I
                    said. &quot;Grampa, it is not only my classmate who is responsible who my state, but also you and your generation. You
                    had enough time to protect the earth. But, But aaah., haahh., but, you missed it grampa. Missed it. Its dystopia now.
                    Dystopia now!!!. &apos;Aah&apos;!&quot; She said. I stood still. I wasn&apos;t able to talk with her after that. I started weeping and my tears
                    were slowly sliding down my cheeks. Before I could realise what to do, the ECG machine showed a straight line. I
                    started front and out pressing of her chest region and called the doctors at the same time. They asked me leave the
                    room immediately. After half an hour a group of doctors came out and one of them said, &quot;We did everything we
                    could. Sorry. She is no more!&quot; My son got broke down and my daughter-in-law cried endlessly. I felt like heavy
                    weight being dumped on me.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/7.png" alt="Emotional scene" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Eighth paragraph with image */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    From that day I didn&apos;t go to research centre for next three days. No people there except me know about that
                    343 TB binary file. I was deeply shaken by the loss of granddaughter. Her final words were revolving my head
                    continuously. I started getting angry on the whole human race. The way the top people had left the world turn into a
                    dystopia made me mad. I decided to do one thing. It&apos;s not possible to change the elites. The gap surely gets widened.
                    The elite sector go to Mars and then to some other new place to live happily. But others need to live in this polluted
                    dystopia world left behind by them. The climate conferences, agendas set and all initiatives are just for namesake.
                    They weren&apos;t implemented. The world has reached a point where the effects cannot be undone. It is only possible to
                    change the world and fellow humans if some other extra terrestrial species takes control the world. I decided to go
                    and decode that binary file which came from the Proxima B. I successfully decoded the message within a day.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/8.png" alt="Binary data decoding" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Ninth paragraph with image */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    The message is as follows: &quot;It&apos;s a great pleasure for Zekoldernal to connect with the Earth. We have gathered enough
                    information about your earth and we know that you call us by the name Proxima B. Please reply for this message.
                    Would you like to extend relations with us?&quot; I was deeply shocked and surprised. This would be the biggest discovery ever made. Extraterrestrial life
                    exists. They are technologically advanced like humans. I decided to send message on my own before consulting my
                    higher officials. I wrote a brief history of earth from 10,000 BCE to 2,119 CE along with the fact how many humans
                    are greedy, selfish and also about the struggles faced by the normal people. I suggested them to come to earth, take
                    control of earth and undo the harmful effects done by the human species on earth.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/9.png" alt="Alien message" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Tenth paragraph with image */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-xl leading-relaxed mb-8">
                    I sent them successfully via secret signal transfer message. But somehow the CIA found it and arrested me the next moment. I am not sure
                    whether that message reached them, but this the reason for me standing as a criminal in front of the panel of
                    honourable judges. Judges announced life time imprisonment for me. I wasn&apos;t worried for the punishment. I still
                    hope that the aliens will come for my rescue. They will turn this earth into a utopia.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-xl overflow-hidden flex items-center justify-center border border-purple-500/30">
                    <Image src="/blogs/worldlytreason/10.png" alt="Trial scene" width={600} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Elements */}
            <div className="mt-16 flex flex-wrap gap-4">            
              <div className="relative">
                <button 
                  onClick={copyToClipboard}
                  className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-900/20 transition-all duration-300 flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
                
                {/* Copy confirmation tooltip */}
                {showCopyMessage && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-purple-900 text-white px-4 py-2 rounded-md text-sm">
                    URL copied to clipboard!
                  </div>
                )}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="mt-16 flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                AP
              </div>
              <div>
                <div className="font-bold text-lg">Arun Pranav A T</div>
                <div className="text-gray-400">Author &bull; Chennai Institute of Technology</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorldlyTreasonBlog;