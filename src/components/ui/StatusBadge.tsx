import type { ProjectStatus } from "../../utils/models/types";

const config: Record<ProjectStatus, { label: string; className: string }> = {
    portfolio: { label: "Demo", className: "bg-blue-500/10 text-blue-700 border border-blue-200" },
    pilot: { label: "Prueba piloto", className: "bg-amber-500/10 text-amber-700 border border-amber-200" },
    completed: { label: "Completado", className: "bg-green-600/10 text-green-700 border border-green-200" },
};

interface Props {
    status: ProjectStatus;
}

const StatusBadge = ({ status }: Props) => {
    const badge = config[status];
    if (!badge) return null;

    return (
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge.className}`}>
            {badge.label}
        </span>
    );
};
export default StatusBadge;