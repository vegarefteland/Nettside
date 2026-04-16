/* ================================================================
 * SITE CONTENT — edit this file to update your portfolio text.
 * No other files need to be touched for content changes.
 * ================================================================ */
const SITE = {

  name: "Vegar Efteland",   // shown in the nav on the home page


  /* ── Projects ───────────────────────────────────────────────────
   * title:       displayed on the card and project page
   * folder:      image subfolder → images/projects/01/
   * cover:       thumbnail shown on the home grid
   * color:       background colour while the cover loads
   * layout:      "grid" for 2-column, omit for full-width stack
   * description: text on the project page — use \n\n for a new paragraph
   * ────────────────────────────────────────────────────────────── */
  projects: [
    {
      title: "F1 – Team Merch",
      folder: "01",
      cover: "images/projects/01/cover.jpg",
      color: "#C8B8A2",
      description:
        "Ongoing personal project.\n\n" +
        "Designing retro inspired formula 1 merch for every team on the grid.",
    },
    {
      title: "F1 – Track Merch",
      folder: "02",
      cover: "images/projects/02/cover.jpg",
      color: "#1C1C1E",
      description:
        "Edit this description in content.js.\n\n" +
        "Describe the project, your role, the brief, and what makes it interesting.",
    },
    {
      title: "Poster Design",
      folder: "03",
      cover: "images/projects/03/cover.jpg",
      color: "#E8E0D5",
      layout: "grid",
      description:
        "Selected poster design projects.\n\n" +
        "School assignments and concept design work.",
    },
    {
      title: "3D Modeling",
      folder: "04",
      cover: "images/projects/04/cover.jpg",
      color: "#3D4A5C",
      description:
        "Modular Desk Interface concept. Inspired by the design language of Braun and Teenage Engineering. " +
        "Built around physical buttons and knobs, materials include sandblasted steel with a matte finish.\n\n" +
        "Modeled and rendered in Blender.",
    },
    {
      title: "Motion Graphics",
      folder: "05",
      cover: "images/projects/05/cover.jpg",
      color: "#D4C5B0",
      description:
        "Promotional showcase video highlighting motion and design work.\n\n" +
        "Created in After Effects and Premiere Pro.",
    },
    {
      title: "Personal Branding",
      folder: "06",
      cover: "images/projects/06/cover.jpg",
      color: "#F0EBE3",
      description:
        "Edit this description in content.js.\n\n" +
        "Describe the project, your role, the brief, and what makes it interesting.",
    },
  ],


  /* ── Archive ────────────────────────────────────────────────────
   * Archive images are loaded automatically from images/archive/
   * by numbering them 01, 02, 03 … (webp / jpg / jpeg / png / gif).
   * You do not need to edit anything here for the archive.
   * ────────────────────────────────────────────────────────────── */
  archive: [],

};
