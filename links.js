const path = window.location.pathname.split("/")[1];

const mainMenuMap = {
  aboutVision: "aboutVision",
  aboutUs: "aboutVision",
  abtStfBini: "aboutVision",
  whatGishur: "whatGishur",
  whatStages: "whatGishur",
  whatPros: "whatGishur",
  fieldsFamily: "fieldsFamily",
  fieldsWork: "fieldsFamily",
  fieldsBusiness: "fieldsFamily",
  arbitrationRealEstate: "arbitrationRealEstate",
  arbitrationPublicSector: "arbitrationRealEstate",
  arbitration: "arbitrationRealEstate",
  managementInterest: "managementInterest",
  management: "managementInterest",
  customers: "customers",
  customersPublicSector: "customers",
  contactBranch: "contactBranch",
  contactUs: "contactBranch",
};
const mainMenuHref = mainMenuMap[path];
const links = document.querySelectorAll(
  `a[href='/${mainMenuHref}/index.html']`
);
links.forEach((link) => {
  link.classList.add("active");
});
