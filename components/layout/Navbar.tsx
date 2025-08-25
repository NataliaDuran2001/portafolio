"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
	{ name: "Inicio", href: "#hero" },
	{ name: "Sobre mí", href: "#about" },
	{ name: "Experiencia", href: "#experience" },
	{ name: "Proyectos", href: "#projects" },
	{ name: "Habilidades", href: "#skills" },
	{ name: "Educación", href: "#education" },
	{ name: "Contacto", href: "#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-900 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">ND</span>
						</div>
						<span className="font-bold text-xl bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent">
							Natalia Duran
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
							>
								{item.name}
							</button>
						))}
					</div>

					{/* Social Links */}
					<div className="hidden lg:flex items-center space-x-4">
						<Button variant="ghost" size="sm" asChild>
							<a
								href="https://www.linkedin.com/in/natalia-duran-oliva/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="w-4 h-4 text-gray-600" />
							</a>
						</Button>
						<Button variant="ghost" size="sm" asChild>
							<a href="mailto:nataliaduran.dev@gmail.com" target="_blank" rel="noopener noreferrer">
								<Mail className="w-4 h-4 text-gray-600" />
							</a>
						</Button>
						<Button variant="ghost" size="sm" asChild>
							<a href="https://github.com/NataliaDuran2001" target="_blank" rel="noopener noreferrer">
								<Github className="w-4 h-4 text-gray-600" />
							</a>
						</Button>
					</div>

					{/* Mobile Menu */}
					<Sheet>
						<SheetTrigger asChild className="lg:hidden">
							<Button variant="ghost" size="sm">
								<Menu className="w-5 h-5 text-gray-600" />
							</Button>
						</SheetTrigger>
						<SheetContent className="w-1/2">
							<SheetHeader>
								<SheetTitle>Menú</SheetTitle>
								<SheetDescription></SheetDescription>
							</SheetHeader>
							<div className="flex flex-col space-y-6 ml-2">
								{navItems.map((item) => (
									<button
										key={item.name}
										onClick={() => scrollToSection(item.href)}
										className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg"
									>
										{item.name}
									</button>
								))}
								<div className="flex items-center space-x-4 pt-6 border-t">
									<Button variant="ghost" size="sm" asChild>
										<a
											href="https://www.linkedin.com/in/natalia-duran-oliva/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin className="w-4 h-4" />
										</a>
									</Button>
									<Button variant="ghost" size="sm" asChild>
										<a
											href="mailto:nataliaduran.dev@gmail.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Mail className="w-4 h-4" />
										</a>
									</Button>
									<Button variant="ghost" size="sm" asChild>
										<a
											href="https://github.com/NataliaDuran2001"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4" />
										</a>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
