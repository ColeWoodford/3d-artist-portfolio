import step1_a from "constants/imgs/instructions/step1_a.png";
import step1_b from "constants/imgs/instructions/step1_b.png";
import step2_a from "constants/imgs/instructions/step2_a.png";
import step2_b from "constants/imgs/instructions/step2_b.png";
import step3_a from "constants/imgs/instructions/step3_a.png";
import step4_a from "constants/imgs/instructions/step4_a.png";
import step5_a from "constants/imgs/instructions/step5_a.png";
import step5_b from "constants/imgs/instructions/step5_b.png";
import step6_a from "constants/imgs/instructions/step6_a.png";
import step6_b from "constants/imgs/instructions/step6_b.png";
import step6_c from "constants/imgs/instructions/step6_c.png";
import step6_d from "constants/imgs/instructions/step6_d.png";
import step6_e from "constants/imgs/instructions/step6_e.png";
import step7_a from "constants/imgs/instructions/step7_a.png";
import step7_b from "constants/imgs/instructions/step7_b.png";
import step8_a from "constants/imgs/instructions/step8_a.png";
import step9_a from "constants/imgs/instructions/step9_a.png";
import step9_b from "constants/imgs/instructions/step9_b.png";
import step10_a from "constants/imgs/instructions/step10_a.png";
import step11_a from "constants/imgs/instructions/step11_a.png";
import step12_a from "constants/imgs/instructions/step12_a.png";
import step13_a from "constants/imgs/instructions/step13_a.png";
import step14_a from "constants/imgs/instructions/step14_a.png";

export const INSTRUCTION_STEPS = [
  {
    instructions: "Create a sphere and cut it in half",
    images: [step1_a, step1_b],
  },
  {
    instructions:
      "2.	Create a face on the bottom of the dome and extrude to create a cylinder.",
    images: [step2_a, step2_b],
  },
  {
    instructions: "3.	Scale on z-axis so the object becomes squashed.",
    images: [step3_a],
  },
  {
    instructions:
      "4.	Extrude a single face on top along the z-axis, then flatten the top by scaling the z-axis and assigning it a value of 0.",
    images: [step4_a],
  },
  {
    instructions:
      "5.	Near our new column, select another face and use the inset faces tool and extrude tool to create a small column. Flatten the top using the same scale trick as in step 4.",
    images: [step5_a, step5_b],
  },
  {
    instructions:
      "6.	Use inset faces and LoopTools -> Circle to create a circle face for a column.",
    images: [step6_a, step6_b, step6_c, step6_d, step6_e],
  },
  {
    instructions:
      "7.	Triangulate top of cylinder, then scale and extrude to create box on top.",
    images: [step7_a, step7_b],
  },
  {
    instructions: "8.	Create 3 cylinders for the large pipe.",
    images: [step8_a],
  },
  {
    instructions:
      "9.	Remove end faces of the cylinders. Select the edge loops at the end of cylinders that need to be combined, then use the Bridge Edge Loops tool to attach them. Adjust the number of cuts and smoothness until it looks like a good corner.",
    images: [step9_a, step9_b],
  },
  {
    instructions:
      "10.	Use Inset Faces and the Bridge Edge Loops tool to attach the pipe to the bottom of the tank.",
    images: [step10_a],
  },
  {
    instructions: "11.	Repeat step 7 to create a box at the top of the pipe.",
    images: [step11_a],
  },
  {
    instructions:
      "12.	UV unwrap the model as a smart project. Then export the UV layout as png and open in GIMP.",
    images: [step12_a],
  },
  { instructions: "13.	Paint the UV layout in GIMP.", images: [step13_a] },
  {
    instructions: "14.	Apply the texture to the model in Blender.",
    images: [step14_a],
  },
  {
    instructions: "15.	Export as glTF and the model is ready to use in ThreeJS!",
    images: [],
  },
];
