import isometric from "../assets/cad/mechanical-component-01/01-isometric.png";
import front from "../assets/cad/mechanical-component-01/02-front.png";
import rear from "../assets/cad/mechanical-component-01/03-rear.png";
import side from "../assets/cad/mechanical-component-01/04-side.png";
import top from "../assets/cad/mechanical-component-01/05-top.png";

export const cadProjects = [
  {
    id: "solidworks-mechanical-component",
    title: "Precision Mechanical Component",
    category: "CAD & Engineering",
    software: "SolidWorks",
    type: "3D Mechanical Design",

    description:
      "A detailed 3D mechanical component modeled using SolidWorks. The design demonstrates complex geometry, multiple integrated features, and detailed mechanical modeling presented through multiple views.",

    highlights: [
      "3D Part Modeling",
      "Complex Geometry",
      "Mechanical Design",
      "Multi-View Visualization",
      "SolidWorks CAD Workflow",
    ],

    images: [
      isometric,
      front,
      rear,
      side,
      top,
    ],
  },
];