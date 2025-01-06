import { FC, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Project as ProjectType } from "../types/project";

interface ProjectModalProps {
	project: ProjectType;
	onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		const handleOutsideClick = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.body.style.overflow = "auto";
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
			<div
				ref={modalRef}
				className="bg-zinc-900 p-6 rounded-xl w-11/12 h-11/12 relative overflow-y-auto max-h-[90vh]"
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-2xl font-bold text-emerald-400 hover:text-emerald-600"
				>
					<IoCloseSharp />
				</button>

				<div className="grid gap-6 grid-cols-1 lg:grid-cols-2 w-full">
					<div className="flex-shrink-0 mr-6 w-full h-full">
						<a href={project.linkProject} target="_blank">
							<img
								src={`./${project.image}`}
								alt={project.name}
								className="rounded-xl w-full h-full"
							/>
						</a>
					</div>

					<div className="flex flex-col gap-4 w-full h-full">
						<h2 className="text-3xl font-bold mb-4">{project.name}</h2>
						<p className="text-lg text-slate-200">{project.longDescription}</p>

						<div className="mt-4">
							<h3 className="text-2xl font-bold text-white">Purpose</h3>
							<p className="text-lg text-slate-200">{project.purpose}</p>
						</div>

						<div className="mt-4">
							<h3 className="text-2xl font-bold text-white">Features</h3>
							<ul className="list-disc pl-6 text-lg text-slate-200">
								{project.features.map((feature, index) => (
									<li key={index}>{feature}</li>
								))}
							</ul>
						</div>

						<div className="mt-4">
							<h3 className="text-2xl font-bold text-slate-200">
								Technologies Used
							</h3>
							<ul className="list-disc pl-6 text-lg text-slate-200">
								{project.technologiesDetailed.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
						</div>

						<div className="flex gap-4 justify-end mt-auto uppercase">
							<a
								href={project.linkCode}
								className="border-b-2 border-b-emerald-400 hover:border-b-emerald-600"
								target="_blank"
								rel="noreferrer"
							>
								View Code
							</a>
							{project.linkProject && (
								<a
									href={project.linkProject}
									className="border-b-2 border-b-emerald-400 hover:border-b-emerald-600"
									target="_blank"
									rel="noreferrer"
								>
									View Project
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
