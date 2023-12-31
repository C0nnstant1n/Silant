import { protectedLoader } from "../scripts/loaders.ts";
import Service from "./components/service/service.tsx";
import Info from "./components/service/components/machine/info.tsx";
import ErrorPage from "../error-page.tsx";
import MachineDetail from "./components/service/components/machine/machine_detail.tsx";
import CreateMachine from "./components/service/components/machine/create_machine.tsx";
import Edit from "./components/service/components/machine/edit.tsx";
import Maintenance from "./components/service/components/maintenance/maintenance.tsx";
import Complaints from "./components/service/components/complaints/complaints.tsx";
import ComplaintDetail from "./components/service/components/complaints/complaint_detail.tsx";
import MaintenanceDetail from "./components/service/components/maintenance/maintenance_detail.tsx";
import CreateTO from "./components/service/components/maintenance/create_to.tsx";
import EditTO from "./components/service/components/maintenance/edit_to.tsx";
import CreateComplaint from "./components/service/components/complaints/complaint_create.tsx";
import EditComplaint from "./components/service/components/complaints/edit_complaint.tsx";

const service = {
  path: "service",
  loader: protectedLoader,
  element: <Service />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "info",
      element: <Info />,
      errorElement: <ErrorPage />,
    },
    {
      path: "info/:infoId",
      element: <MachineDetail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "create_machine",
      element: <CreateMachine />,
      errorElement: <ErrorPage />,
    },
    {
      path: "edit_machine/:infoId",
      element: <Edit />,
      errorElement: <ErrorPage />,
    },
    {
      path: "to",
      element: <Maintenance />,
      errorElement: <ErrorPage />,
    },
    {
      path: "to/:toId",
      element: <MaintenanceDetail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "create_to",
      element: <CreateTO />,
      errorElement: <ErrorPage />,
    },
    {
      path: "edit_to/:edit_toId",
      element: <EditTO />,
      errorElement: <ErrorPage />,
    },
    {
      path: "complaints",
      element: <Complaints />,
      errorElement: <ErrorPage />,
    },
    {
      path: `complaints/:complaintId`,
      element: <ComplaintDetail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "create_complaint",
      element: <CreateComplaint />,
      errorElement: <ErrorPage />,
    },
    {
      path: "edit_complaint/:complaintId",
      element: <EditComplaint />,
      errorElement: <ErrorPage />,
    },
  ],
};

export { service };
