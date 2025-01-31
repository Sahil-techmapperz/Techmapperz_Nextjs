'use client'
import { motion } from 'framer-motion'
import { MdSearch, MdDocumentScanner, MdDesignServices, MdCode, MdBugReport, MdSettings } from 'react-icons/md'

const ExpandableCards = () => {
	const cards = [
		{
			id: '01',
			title: 'Discovery Workshop',
			icon: <MdSearch className="text-4xl" />,
			description: 'Initial phase of understanding project requirements and goals',
			bgImage: '/Photos/Develop1.png'
		},
		{
			id: '02',
			title: 'Planning & Documentation',
			icon: <MdDocumentScanner className="text-4xl" />,
			description: 'Our development process is meticulously structured and adheres to industry-leading practices of security, performance, and user experience.',
			bgImage: '/Photos/Develop2.png'
		},
		{
			id: '03',
			title: 'IA & UX/UI Design',
			icon: <MdDesignServices className="text-4xl" />,
			description: 'Creating intuitive and engaging user experiences',
			bgImage: '/Photos/Development1.png'
		},
		{
			id: '04',
			title: 'Development',
			icon: <MdCode className="text-4xl" />,
			description: 'Building robust and scalable solutions',
			bgImage: '/Photos/Development2.png'
		},
		{
			id: '05',
			title: 'Testing & Deployment',
			icon: <MdBugReport className="text-4xl" />,
			description: 'Ensuring quality and successful launch',
			bgImage: '/Photos/Development3.png'
		},
		{
			id: '06',
			title: 'Support & Maintenance',
			icon: <MdSettings className="text-4xl" />,
			description: 'Ongoing assistance and updates',
			bgImage: '/Photos/Development6.png'
		}
	]

	return (
		<div className="min-h-screen bg-[#020817] p-4 md:p-8 flex items-center justify-center">
			<div className="flex flex-col md:flex-row w-full max-w-7xl border-2 border-white rounded-2xl overflow-hidden">
				{cards.map((card, index) => (
					<motion.div
						key={card.id}
						className={`relative bg-[#0A1229]/60 backdrop-blur-sm p-4 md:p-6 cursor-pointer group overflow-hidden ${
							index !== cards.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2 border-white' : ''
						}`}

						initial={{ 
							flex: 1,
							minHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '150px' : 'auto'
						}}
						whileHover={{ 
							flex: typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1,
							minHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '200px' : 'auto'
						}}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<div 
							className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 md:group-hover:opacity-30 transition-opacity duration-300"
							style={{ backgroundImage: `url(${card.bgImage})` }}
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<div className="relative z-10">
							<div className="text-cyan-400 mb-2 transform group-hover:scale-110 transition-transform duration-300">
								{card.icon}
							</div>
							<div className="flex items-baseline gap-2 mb-2">
								<span className="text-gray-500 text-xs md:text-sm font-mono">{card.id}</span>
								<h3 className="text-white text-sm md:text-base font-semibold group-hover:text-cyan-300 transition-colors duration-300">
									{card.title}
								</h3>
							</div>
							<p className="text-gray-400 text-xs md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 delay-100 transform md:group-hover:translate-y-0 md:translate-y-2">
								{card.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default ExpandableCards