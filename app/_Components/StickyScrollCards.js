'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiDatabase } from 'react-icons/fi'

const iconMap = {
	'code': FiCode,
	'layout': FiLayout,
	'server': FiServer,
	'database': FiDatabase
}

const StickyScrollCards = ({ title, subtitle, description, cards }) => {
	const containerRef = useRef(null)
	const isInView = useInView(containerRef, { once: true, amount: 0.1 })
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	})

	return (
		<div ref={containerRef} className="min-h-[100vh] relative bg-[#020817]">
			<div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817] to-[#0A1229] opacity-50" />
			<div className="sticky top-0 h-[80vh] flex items-center">
				{/* Left Side Content */}
				<div className="w-1/2 h-full flex flex-col justify-center p-16 relative">
					<div className="max-w-xl">
						<h3 className="text-cyan-400 text-xl font-medium mb-4">{subtitle}</h3>
						<h2 className="text-5xl font-bold text-white mb-8 leading-tight">{title}</h2>
						<p className="text-gray-300 text-lg leading-relaxed">
							{description}
						</p>
					</div>
				</div>

				{/* Right Side Cards */}
				<div className="w-1/2 h-full flex items-center">
					<div className="h-full w-full relative">
						{cards.map((card, index) => {
							const isFirst = index === 0;
							const isLast = index === cards.length - 1;
							const showStart = index === 0 ? 0 : index * 0.25;
							const showEnd = showStart + 0.03;
							const hideStart = isLast ? 1 : showStart + 0.15;
							const hideEnd = isLast ? 1 : hideStart + 0.03;
							
							const IconComponent = iconMap[card.icon] || FiCode;
							
							return (
								<motion.div
									key={index}
									className="absolute w-full px-12 top-1/3 -translate-y-1/3"
									initial={{ opacity: 0, y: 150 }}
									animate={isFirst && isInView ? { opacity: 1, y: 0 } : undefined}
									style={{
										opacity: useTransform(
											scrollYProgress,
											[showStart, showEnd, hideStart, hideEnd],
											[isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
										),
										y: useTransform(
											scrollYProgress,
											[showStart, showEnd, hideStart, hideEnd],
											[150, 0, 0, isLast ? 0 : -150]
										),
										zIndex: cards.length - index
									}}
								>
									<div className="bg-[#0A1229]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 border border-cyan-950/50 hover:scale-[1.02] min-h-[300px] flex flex-col">
										<div className="mb-6 flex justify-center">
											<IconComponent className="w-16 h-16 text-cyan-400" />
										</div>
										<h3 className="text-2xl font-semibold text-white mb-4 text-center">{card.title}</h3>
										<p className="text-gray-400 leading-relaxed text-center flex-grow">
											{card.description}
										</p>
									</div>
								</motion.div>

							);
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default StickyScrollCards








