 'use client'
import StickyScrollCards from './StickyScrollCards'

const StickyScrollExample = () => {
	const sampleCards = [
		{
			title: "Custom Web Design",
			description: "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand.",
			icon: "layout"
		},
		{
			title: "Responsive Web Design",
			description: "Our websites adapt seamlessly to all devices, ensuring your content looks perfect on desktop, tablet, and mobile.",
			icon: "code"
		},
		{
			title: "Web Development",
			description: "We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.We build robust, scalable web applications using the latest technologies and best practices.",
			icon: "server"
		},
		{
			title: "UI/UX Design",
			description: "Creating intuitive and engaging user experiences that drive conversions and user satisfaction.",
			icon: "database"
		}
	]

	return (
		<StickyScrollCards
			subtitle="WHY DIGITAL SILK?"
			title="Discover Our Expertise as a Web Design Company"
			description="As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement."
			cards={sampleCards}
		/>
	)
}

export default StickyScrollExample



