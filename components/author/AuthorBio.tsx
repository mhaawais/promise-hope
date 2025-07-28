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
                Jacob Ken Robinson is a multifaceted professional whose journey spans over five decades and multiple industries. Born with a passion for service and self-improvement, Jacob began building the foundation of his legacy in the late 1960s. After graduating from Eisenhower High School, he pursued higher education at Illinois State University, where he cultivated the communication and leadership skills that would later define his professional path.
              </p>
              
              <p>
                In 1969, Jacob was drafted into the U.S. military and served honorably in Vietnam as a helicopter supply specialist. His time in the service, from 1969 to 1970, instilled in him a deep sense of discipline, precision, and perseverance—qualities that would guide every step of his life thereafter. Upon returning home, Jacob transitioned into civilian life with a renewed purpose and a vision for building both business and community.
              </p>
              
              <p>
                In the early 1970s, Jacob began his journey in the cosmetology industry, where he quickly established himself as a respected figure. Over the course of more than 30 years, he built a successful career in Black hair care, combining entrepreneurial insight with a passion for cultural representation. His impact reached international levels in 1981 when he was selected as a delegate to Nassau, Bahamas, representing the Illinois Black Chamber of Commerce. There, he engaged in strategic discussions with the late Prime Minister Lynden Pindling on expanding the distribution of Black-owned hair care products.
              </p>
              
              <p>
                Simultaneously, Jacob carved out a parallel career in automotive sales, joining Miles’s dealership and working his way to the top. Over 30 years, he earned multiple “Salesman of the Year” awards and became known for his integrity, customer loyalty, and standout performance in the pre-owned vehicle market. Even after retiring, Jacob was invited back to rejoin the Miles team, where he continues to share his expertise and mentor the next generation of sales professionals.
              </p>
              
              <p>
                Driven by a desire to educate and uplift others, Jacob also dedicated himself to teaching financial literacy. For more than 20 years, he has led workshops and community classes aimed at helping people understand credit, budgeting, and long-term financial planning. His unique ability to combine personal stories, real-world examples, and clear instruction has made him a trusted voice in financial empowerment—especially for underserved communities.
              </p>

               <p>
                Outside of his professional work, Jacob is known for his soulful singing voice and love of classic music. From Neil Diamond to Lloyd Price, he brings life to every note at his favorite karaoke bars, blending entertainment with heart. His charisma, warmth, and authenticity have made him a beloved figure in every circle he joins.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Career Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#1a4280] pl-4">
                  <div className="font-semibold text-[#1a4280]">2020s</div>
                  <div className="text-sm text-gray-600"> Author & Mentor</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">2000s - Present</div>
                  <div className="text-sm text-gray-600">Financial Literacy Educator</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">1980s–2010s</div>
                  <div className="text-sm text-gray-600">Automotive Sales Success</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">1981</div>
                  <div className="text-sm text-gray-600">International Delegation Role</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">Early 1970s</div>
                  <div className="text-sm text-gray-600">Cosmetology Career Begins</div>
                </div>
                <div className="border-l-4 border-[#6989b0] pl-4">
                  <div className="font-semibold text-[#1a4280]">1969–1970</div>
                  <div className="text-sm text-gray-600">Vietnam War Service</div>
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