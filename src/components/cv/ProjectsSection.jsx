import Section from "./Section";
import { getTechIcon } from "./techIcons";

export default function ProjectsSection({ projects }) {
  return (
    <Section title="Projects">
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={`${project.name}-${index}`}
            className="print-avoid-break space-y-2.5 rounded-md border border-slate-200 p-3.5"
          >
            <div className="space-y-0.5">
              <h4 className="text-[16px] font-semibold leading-tight text-slate-900">{project.name}</h4>
              {project.type ? (
                <p className="text-[12px] font-medium uppercase tracking-wide text-blue-700">{project.type}</p>
              ) : null}
            </div>

            <p className="text-[13px] leading-[1.45] text-slate-700">{project.description}</p>

            <div className="space-y-1">
              <p className="text-[12px] font-medium text-slate-700">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack?.map((tech, techIndex) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[12px] leading-none text-slate-700"
                    >
                      <Icon size={12} className="text-slate-500" />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-0.5 text-[12px] text-blue-700">
              {project.github ? (
                <p>
                  <span className="font-semibold">GitHub: </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:no-underline"
                  >
                    {project.github}
                  </a>
                </p>
              ) : null}
              {project.live ? (
                <p>
                  <span className="font-semibold">Live: </span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:no-underline"
                  >
                    {project.live}
                  </a>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
