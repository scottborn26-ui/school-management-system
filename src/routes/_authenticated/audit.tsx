import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RequireSchool } from "@/components/require-school";
import { DataTable, type Column } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { useSchool } from "@/hooks/use-school";
import { formatDateTime } from "@/lib/format";

export const Route = createFileRoute("/_authenticated/audit")({
  head: () => ({
    meta: [
      { title: "Audit logs · SHANSCOTT CBE" },
      {
        name: "description",
        content:
          "Immutable audit trail of every create, update and delete action performed in your school workspace.",
      },
      { property: "og:title", content: "Audit logs · SHANSCOTT CBE" },
      {
        property: "og:description",
        content: "Accountability trail of all changes made in your school workspace.",
      },
    ],
  }),
  component: () => (
    <RequireSchool roles={["principal", "super_admin"]}>
      <AuditPage />
    </RequireSchool>
  ),
});

interface AuditRow {
  id: string;
  action: string;
  entity: string;
  entity_id: string | null;
  actor_name: string | null;
  created_at: string;
}

const ACTION_TONE: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  create: "default",
  update: "secondary",
  delete: "destructive",
};

function AuditPage() {
  const school = useSchool();
  const schoolId = school.schoolId!;
  const [action, setAction] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["audit", schoolId],
    queryFn: async () => {
      const { data: rows, error } = await supabase
        .from("audit_logs")
        .select("id, action, entity, entity_id, actor_name, created_at")
        .eq("school_id", schoolId)
        .order("created_at", { ascending: false })
        .limit(500);
      if (error) throw error;
      return (rows ?? []) as AuditRow[];
    },
  });

  const rows = (data ?? []).filter((r) => action === "all" || r.action === action);

  const columns: Column<AuditRow>[] = [
    {
      key: "created_at",
      header: "When",
      sortable: true,
      sortValue: (r) => r.created_at,
      cell: (r) => formatDateTime(r.created_at),
    },
    {
      key: "action",
      header: "Action",
      cell: (r) => (
        <Badge variant={ACTION_TONE[r.action] ?? "outline"} className="capitalize">
          {r.action}
        </Badge>
      ),
    },
    {
      key: "entity",
      header: "Record",
      sortable: true,
      sortValue: (r) => r.entity,
      cell: (r) => <span className="capitalize">{r.entity.replace(/_/g, " ")}</span>,
    },
    { key: "actor_name", header: "Performed by", cell: (r) => r.actor_name ?? "System" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Audit logs</h1>
        <p className="text-sm text-muted-foreground">
          The 500 most recent actions in this school. Entries cannot be edited or deleted.
        </p>
      </div>

      <DataTable
        rows={rows}
        columns={columns}
        loading={isLoading}
        rowKey={(r) => r.id}
        searchPlaceholder="Search by record or person…"
        searchValue={(r) => `${r.entity} ${r.action} ${r.actor_name ?? ""}`}
        onReset={() => setAction("all")}
        emptyTitle="No audit entries yet"
        emptyDescription="Actions such as admitting learners or adding staff will be recorded here."
        filters={
          <Select value={action} onValueChange={setAction}>
            <SelectTrigger className="w-[160px]" aria-label="Filter by action">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All actions</SelectItem>
              <SelectItem value="create">Create</SelectItem>
              <SelectItem value="update">Update</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        }
      />
    </div>
  );
}
