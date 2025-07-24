'use client';

export default function AuthorBio() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a4280] mb-4">About Jacob Ken Robinson</h2>
            <p className="text-xl text-black font-medium">The story behind the stories</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Jacob Ken Robinson discovered her passion for storytelling at the age of seven when she wrote her first short story about a magical library. Born and raised in Seattle, Washington, she spent her childhood surrounded by the misty landscapes and rich cultural heritage that would later influence her writing.
              </p>
              
              <p>
                After graduating summa cum laude from Columbia University with a degree in English Literature, Sarah began her career as a journalist for The Seattle Times. Her investigative pieces and human interest stories earned her recognition, but it was her transition to fiction that truly allowed her voice to flourish.
              </p>
              
              <p>
                Her debut novel, &quot;Echoes of Tomorrow,&quot; was published in 2009 and immediately captured the attention of critics and readers alike. The book&apos;s exploration of family dynamics and personal growth resonated with audiences worldwide, establishing Sarah as a powerful new voice in contemporary literature.
              </p>
              
              <p>
                Over the years, Jacob has published eight bestselling novels, each delving deeper into the complexities of human relationships and the resilience of the human spirit. Her work has been translated into twelve languages and has earned numerous prestigious awards, including the National Book Critics Circle Award and the PEN/Faulkner Award.
              </p>
              
              <p>
                When not writing, Jacob enjoys hiking in the Pacific Northwest, practicing yoga, and mentoring emerging writers through various literary programs. She currently divides her time between Seattle and a small cabin in the Cascade Mountains, where she finds inspiration for her most profound works.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Career Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#1a4280] pl-4">
                  <div className="font-semibold text-[#1a4280]">2025</div>
                  <div className="text-sm text-gray-600">Published &quot;The Journey Within&quot;</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2024</div>
                  <div className="text-sm text-gray-600">Won PEN/Faulkner Award</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2023</div>
                  <div className="text-sm text-gray-600">Published &quot;Midnight Reflections&quot;</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2022</div>
                  <div className="text-sm text-gray-600">National Book Critics Circle Award</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2021</div>
                  <div className="text-sm text-gray-600">Published &quot;The Silent Symphony&quot;</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2020</div>
                  <div className="text-sm text-gray-600">Debut novel &quot;Echoes of Tomorrow&quot;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-[#1a4280]/5 to-[#6989b0]/5 rounded-2xl p-8 mt-16">
            <h3 className="text-3xl font-bold text-[#1a4280] mb-6 text-center">Writing Philosophy</h3>
            <blockquote className="text-xl text-gray-700 italic text-center leading-relaxed">
              &quot;I believe that stories have the power to heal, to connect, and to transform. Every character I create carries a piece of the human experience, and through their journeys, I hope to remind readers that they are not alone in their struggles and triumphs.&quot;
            </blockquote>
            <p className="text-center text-gray-600 mt-4">- Jacob Ken Robinson</p>
          </div>
        </div>
      </div>
    </section>
  );
}