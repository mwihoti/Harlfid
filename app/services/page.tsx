import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TechBackground from "../components/tech-background"
import ServicePricingButton from "../components/service-pricing-button"

const workSteps = [
  {
    step: 1,
    title: "Discover",
    description:
      "We begin by learning about your business, goals, and challenges through in-depth consultations and research to ensure we fully understand your needs.",
  },
  {
    step: 2,
    title: "Strategize",
    description:
      "Next, we craft a customized plan with strategies tailored to your business objectives, focusing on measurable outcomes and long-term growth.",
  },
  {
    step: 3,
    title: "Execute",
    description:
      "Our team puts the plan into action, leveraging the right tools and expertise to deliver high-quality results efficiently and effectively.",
  },
  {
    step: 4,
    title: "Optimize",
    description:
      "Finally, we track performance, provide regular updates, and continuously refine strategies to maximize impact and ensure sustained success.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050e2d]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TechBackground color="#0a78ff" density={70} speed={0.3} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Transform Your Vision into Reality with Our Digital Expertise.
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            We offer a wide array of professional services designed to help your business thrive in the digital era.
            Here's an overview of the services we provide and how we deliver exceptional value.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How we work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {workSteps.map((step) => (
              <div key={step.step} className="bg-[#0a3b7e] p-6 rounded-lg">
                <div className="text-blue-400 font-bold mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Digital Marketing */}
            <div id="digital-marketing" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Digital Marketing</h2>
              <p className="text-white/80 mb-6">
                In today's digital-driven world, marketing is no longer just about advertising—it's about creating
                meaningful connections with your audience. We offer comprehensive digital marketing services designed to
                help your business grow, reach the right audience, and achieve measurable results. From improving your
                online visibility to driving customer engagement, our digital marketing strategies are data-driven,
                innovative, and tailored to your goals.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Search Engine Optimization (SEO)</h3>
                  <p className="text-white/80">
                    SEO focuses on improving your website's visibility in search engine results, ensuring your business
                    appears when potential customers search for relevant keywords.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Pay-Per-Click Advertising (PPC)</h3>
                  <p className="text-white/80">
                    Involves running paid ads on platforms like Google Ads, Facebook, or LinkedIn to drive targeted
                    traffic to your website.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media Marketing</h3>
                  <p className="text-white/80">
                    Leverages platforms like Facebook, Instagram, Twitter, and LinkedIn to connect with your audience,
                    build brand loyalty, and promote your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Content Marketing</h3>
                  <p className="text-white/80">
                    Focuses on creating valuable and relevant content that attracts and retains your target audience,
                    ultimately driving profitable customer actions.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Marketing</h3>
                  <p className="text-white/80">
                    Is a powerful tool for nurturing leads and maintaining relationships with your audience through
                    personalized and automated email campaigns.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Analytics & Reporting</h3>
                  <p className="text-white/80">
                    Involves tracking and analyzing the performance of your digital marketing efforts to measure success
                    and optimize future campaigns.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Affiliate Marketing</h3>
                  <p className="text-white/80">
                    Collaborating with partners or affiliates who promote your products or services in exchange for a
                    commission, helping expand your reach.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Influencer Marketing</h3>
                  <p className="text-white/80">
                    Partnering with influential individuals in your industry to promote your brand, increasing
                    credibility and visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Mobile Marketing</h3>
                  <p className="text-white/80">
                    Targeting audiences through mobile devices with SMS campaigns, mobile apps, or mobile-optimized
                    websites to enhance engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Video Marketing</h3>
                  <p className="text-white/80">
                    Using videos to engage your audience, explain your offerings, and build brand awareness through
                    platforms like YouTube, TikTok, and social media.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/digital-marketing"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Social Media Management */}
            <div id="social-media" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Social Media Management</h2>
              <p className="text-white/80 mb-6">
                Harlfid provides a complete suite of social media management services designed to elevate your brand's
                presence, engage your audience, and drive measurable growth. Our services are tailored to meet your
                business needs and maximize your social media platforms.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media Strategy Development</h3>
                  <p className="text-white/80">
                    We craft data-driven strategies based on your business goals, target audience, and industry trends.
                    Our plans focus on increasing engagement, building brand loyalty, and achieving measurable results.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Content Creation and Curation</h3>
                  <p className="text-white/80">
                    Our team produces high-quality, platform-specific content, including graphics, videos, and written
                    posts, designed to captivate your audience. We also curate relevant third-party content to keep your
                    feed fresh and engaging.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Profile Optimization</h3>
                  <p className="text-white/80">
                    We optimize your social media profiles to reflect your brand identity, ensuring consistent
                    messaging, professional visuals, and discoverability across all platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Scheduling and Posting</h3>
                  <p className="text-white/80">
                    Using advanced tools, we schedule posts at optimal times to maximize reach and engagement. Our
                    consistency ensures your brand stays active and relevant.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Community Management</h3>
                  <p className="text-white/80">
                    We engage with your audience by responding to comments, messages, and reviews promptly. Building
                    strong relationships with your followers is at the core of our approach.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Analytics and Reporting</h3>
                  <p className="text-white/80">
                    Our team provides regular reports on performance metrics, such as engagement rates, follower growth,
                    and campaign success. We use these insights to refine strategies and deliver continuous improvement.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Paid Social Media Advertising</h3>
                  <p className="text-white/80">
                    We design and manage targeted ad campaigns to increase brand awareness, drive traffic, and generate
                    leads. Our expertise in platforms like Facebook Ads, Instagram Ads, LinkedIn Ads, and Twitter Ads
                    ensures optimal results.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Competitor Analysis</h3>
                  <p className="text-white/80">
                    We keep an eye on your competitors to identify trends, strategies, and opportunities to stay ahead
                    in your industry.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/social-media"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Web Design and Development */}
            <div id="web-design" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Web Design and Development</h2>
              <p className="text-white/80 mb-6">
                At Harlfid, we specialize in crafting visually stunning and highly functional websites that serve as
                powerful tools for your business. Whether you need a sleek corporate website, an engaging e-commerce
                platform, or a dynamic landing page, our designs are tailored to captivate your audience and enhance
                user experience. With a focus on responsive design and seamless navigation, we ensure your website looks
                and performs flawlessly on any device.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom Website Design</h3>
                  <p className="text-white/80">
                    Unique, tailor-made designs that align perfectly with your brand and business goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">E-commerce Website Design</h3>
                  <p className="text-white/80">
                    Professional online store designs with secure payment integrations and seamless shopping
                    experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Responsive Website Design</h3>
                  <p className="text-white/80">
                    Optimized designs that provide a flawless user experience across all devices, including desktops,
                    tablets, and mobile phones.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Landing Page Design</h3>
                  <p className="text-white/80">
                    High-converting single-page designs tailored for marketing campaigns, promotions, or lead
                    generation.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-white/80">
                    User-centered designs that enhance functionality, improve navigation, and create engaging
                    interactions.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/web-design"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Executive Virtual Assistance */}
            <div id="virtual-assistance" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Executive Virtual Assistance</h2>
              <p className="text-white/80 mb-6">
                We provide professional virtual assistance services that help streamline your operations and improve
                productivity. From managing emails and schedules to handling customer inquiries and research, our
                skilled virtual assistants are here to support you with a wide range of administrative tasks, allowing
                you to focus on what matters most—growing your business.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Management</h3>
                  <p className="text-white/80">
                    Keeping your inbox organized and clutter-free, our VAs handle email sorting, prioritization, and
                    timely responses. Whether it's managing client inquiries, scheduling follow-ups, or flagging
                    important messages, we ensure you never miss critical communications.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Calendar Management</h3>
                  <p className="text-white/80">
                    Efficiently managing your schedule, our VAs coordinate meetings, appointments, and events, ensuring
                    no overlaps or missed commitments. We also handle reminders and adjustments, helping you stay
                    organized and focused.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Data Entry</h3>
                  <p className="text-white/80">
                    With precision and accuracy, our VAs input, organize, and maintain data for your business. From
                    spreadsheets to CRM systems, we ensure your records are up-to-date and error-free, saving you
                    valuable time.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Travel Planning</h3>
                  <p className="text-white/80">
                    Our VAs simplify your travel needs by booking flights, accommodations, and transportation tailored
                    to your preferences. We also provide detailed itineraries, ensuring seamless travel experiences,
                    whether for business or leisure.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Meeting Support</h3>
                  <p className="text-white/80">
                    Elevate your meetings with professional assistance in creating agendas, distributing meeting
                    materials, and taking accurate minutes. Our VAs help you prepare, document, and follow up on key
                    discussion points and action items.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media Management</h3>
                  <p className="text-white/80">
                    Our VAs help manage your social media accounts by scheduling posts, monitoring engagement, and
                    responding to messages, ensuring your online presence remains active and engaging.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Administrative Support</h3>
                  <p className="text-white/80">
                    Providing general administrative help, including file management, invoice creation, database
                    updates, and other day-to-day operational tasks to ensure smooth business operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Project Management</h3>
                  <p className="text-white/80">
                    Our Virtual Assistants streamline your projects by providing comprehensive support in planning,
                    organizing, and executing tasks. They assist with creating project timelines, assigning tasks,
                    tracking progress, and ensuring deadlines are met.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/virtual-assistance"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* AI and Machine Learning */}
            <div id="ai-ml" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Artificial Intelligence & Machine Learning</h2>
              <p className="text-white/80 mb-6">
                Harlfid leverages the power of Artificial Intelligence (AI) and Machine Learning (ML) to help businesses
                automate processes, gain valuable insights, and stay ahead of the competition. Our solutions are
                tailored to meet your business's unique needs, enabling you to harness cutting-edge technologies for
                innovation and efficiency.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-white/80">
                    Harness the power of historical data to forecast trends, customer behavior, and market shifts. Our
                    predictive models provide actionable insights for informed decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Natural Language Processing (NLP)</h3>
                  <p className="text-white/80">
                    Extract meaningful insights from text data using advanced NLP techniques. From sentiment analysis to
                    language translation and chatbots, we make your systems smarter and more responsive.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Recommendation Systems</h3>
                  <p className="text-white/80">
                    Enhance customer experiences with personalized product or content recommendations. Our
                    recommendation engines help improve engagement and increase sales.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Computer Vision</h3>
                  <p className="text-white/80">
                    Empower your business with image and video recognition capabilities. Our computer vision solutions
                    can assist in quality control, object detection, and facial recognition applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Automation and Workflow Optimization</h3>
                  <p className="text-white/80">
                    Reduce repetitive tasks and increase productivity with intelligent automation solutions powered by
                    AI. We streamline processes and improve operational efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom AI Models</h3>
                  <p className="text-white/80">
                    We develop and deploy AI models tailored to your specific industry needs, from finance to
                    healthcare, e-commerce, and more.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Big Data Integration</h3>
                  <p className="text-white/80">
                    Our expertise in handling large datasets ensures accurate processing, analysis, and insights
                    generation, enabling you to make data-driven decisions seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/ai-ml"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Cybersecurity */}
            <div id="cybersecurity" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cybersecurity</h2>
              <p className="text-white/80 mb-6">
                Cybersecurity means safeguarding businesses from digital threats by providing comprehensive protection
                for their data, networks, and systems. Our solutions are designed to prevent cyberattacks, secure
                sensitive information, and ensure business continuity. By leveraging advanced technologies and proactive
                strategies, we help clients operate confidently in the ever-evolving digital landscape.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Network Security</h3>
                  <p className="text-white/80">
                    Protects your business network from unauthorized access, attacks, and disruptions through firewalls,
                    intrusion detection systems, and secure configurations.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Endpoint Security</h3>
                  <p className="text-white/80">
                    Secures devices like laptops, desktops, and mobile phones that connect to your network, ensuring
                    they are protected from malware, ransomware, and other threats.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Cloud Security</h3>
                  <p className="text-white/80">
                    Safeguards data, applications, and services stored or accessed via the cloud using encryption,
                    secure access controls, and monitoring.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Application Security</h3>
                  <p className="text-white/80">
                    Focuses on securing software applications by identifying and addressing vulnerabilities to prevent
                    breaches and data theft.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Data Encryption</h3>
                  <p className="text-white/80">
                    Ensures sensitive information is protected during storage and transmission by converting it into a
                    secure, unreadable format.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Incident Response</h3>
                  <p className="text-white/80">
                    Offers quick action plans to identify, manage, and resolve cybersecurity incidents, minimizing
                    damage and recovery time.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Penetration Testing</h3>
                  <p className="text-white/80">
                    Simulates cyberattacks to identify weaknesses in your system, helping strengthen defenses before
                    real threats arise.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Identity and Access Management (IAM)</h3>
                  <p className="text-white/80">
                    Controls and monitors user access to systems and data, ensuring only authorized individuals can
                    access sensitive information.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Managed Security Services</h3>
                  <p className="text-white/80">
                    Provides ongoing monitoring, threat detection, and response through outsourced cybersecurity
                    expertise.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/cybersecurity"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Data Science & Analysis */}
            <div id="data-science" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Science & Analysis Services</h2>
              <p className="text-white/80 mb-6">
                At Harlfid, we leverage advanced data science techniques to transform raw data into actionable insights
                that drive informed decision-making and business growth. Our data science solutions are designed to help
                businesses uncover hidden patterns, predict trends, and optimize operations in a fast-evolving digital
                landscape.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Data Analysis and Insights</h3>
                  <p className="text-white/80">
                    We extract meaningful insights from your data to help you make data-driven decisions. Our expertise
                    in exploratory and statistical analysis ensures a deep understanding of your business challenges and
                    opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-white/80">
                    Using advanced machine learning algorithms, we forecast future trends and behaviors, enabling you to
                    anticipate customer needs, market shifts, and business risks with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Data Visualization</h3>
                  <p className="text-white/80">
                    Presenting complex data in clear, interactive, and visually compelling formats, we make it easy for
                    you to understand and act on key insights. From dashboards to reports, we deliver information that's
                    both accessible and impactful.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Machine Learning Models</h3>
                  <p className="text-white/80">
                    Our team builds and deploys custom machine learning models to automate processes, enhance
                    decision-making, and improve operational efficiency. These models are tailored to fit your specific
                    business requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Natural Language Processing (NLP)</h3>
                  <p className="text-white/80">
                    We utilize NLP techniques to analyze and extract value from textual data, such as customer reviews,
                    social media feedback, and support tickets, helping you understand customer sentiment and
                    preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Big Data Processing</h3>
                  <p className="text-white/80">
                    Handling large and complex datasets, we process and analyze massive volumes of data to deliver
                    insights at scale. Our expertise in big data tools and platforms ensures fast, reliable results.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Data Engineering</h3>
                  <p className="text-white/80">
                    We design and implement robust data pipelines that ensure the smooth collection, storage, and
                    integration of data from various sources, making it readily available for analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Real-Time Analysis</h3>
                  <p className="text-white/80">
                    Stay updated with real-time insights that enable quick decision-making in dynamic environments. From
                    live dashboards to automated reporting, we ensure you have access to up- to-the-minute data.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/data-science"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>

            {/* Graphic Design */}
            <div id="graphic-design" className="bg-[#0a4da8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Graphic Design</h2>
              <p className="text-white/80 mb-6">
                We understand the power of visual communication. Our expert graphic designers work to create stunning
                visuals that leave a lasting impression. Whether you're looking to enhance your brand, promote a new
                product, or create engaging content, we provide customized graphic design solutions that capture your
                unique vision.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Brand Identity Design</h3>
                  <p className="text-white/80">
                    From logo creation to full brand guidelines, we help businesses build a memorable and cohesive brand
                    presence that resonates with your audience.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media Graphics</h3>
                  <p className="text-white/80">
                    We design eye-catching visuals optimized for all social media platforms, ensuring your content
                    stands out in a crowded digital landscape.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Marketing Collateral</h3>
                  <p className="text-white/80">
                    Whether it's brochures, flyers, banners, or business cards, we create marketing materials that
                    communicate your message effectively and professionally.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Web Design & UI/UX</h3>
                  <p className="text-white/80">
                    Our team creates user-friendly website designs that are not only aesthetically pleasing but also
                    provide a seamless experience for your visitors.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services/graphic-design"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <ServicePricingButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

