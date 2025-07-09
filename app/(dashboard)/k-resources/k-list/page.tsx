import { KResourcesListView } from "@/features/k-resources/k-resources-list";
import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";

export default function KResourceList() {
  return (
    <div>
      <PageBreadcrumb pageTitle="K-리소스 리스트" />
      <div className="space-y-6">
        <KResourcesListView />
      </div>
    </div>
  );
}
