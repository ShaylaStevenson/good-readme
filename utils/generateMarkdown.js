// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license !== '') {
     var badgeURL = `https://img.shields.io/static/v1?label=license&message=${license}&color=blue`;
   } else {
     var badgeURL = '';
   }
   return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    var licenseURL = `https://opensource.org/licenses/${license}`;
  } else {
    var licenseURL = '';
  }
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseURL) {
  if (license !== '') {
    var licenseContent = 
      `## License
  This project is licensed under the terms of the ${license} license. View license at:
  ${licenseURL}.`;
    
  } else {
    var licenseContent = '';
  }
  return licenseContent;  
}

// TODO: Create a function to generate markldown for README
function generateMarkdown(data, license) {
  var license = data.license;
  var licenseLink = renderLicenseLink(license);
  var badgeLink = renderLicenseBadge(license);
  var licenseSection = renderLicenseSection(license, renderLicenseLink(license));
  
  return `
# ${data.title} ![badge-image](${badgeLink})  
${data.description}

## Table of Contents
[${data.tableOfContents}](#${data.tableOfContents})

## Installation
   ${data.installation}

## Usage
   ${data.usage}

## Contributing
   ${data.contributing}

## Tests
   ${data.tests}

## Questions
   ${data.questions}

${licenseSection}
`;
}


module.exports = generateMarkdown;

