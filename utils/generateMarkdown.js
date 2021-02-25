// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license !== '') {
     var badgeURL = `https://img.shields.io/static/v1?label=license&message=${license}&color=blue`;
   } else {
     badgeURL = '';
   }
   return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    var licenseURL = `https://opensource.org/licenses/${license}`;
  } else {
    licenseURL = '';
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

  var chosenSections = data.tableOfContents;

  if (chosenSections.indexOf('Installation') !=-1) {
    let sectionHead = 'Installation';
    let sectionContent = data.installation;
    var installationSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    var tocInstallation = `
  * [Installation](#Installation)`;
  } else {
    installationSection = '';
    tocInstallation = '';
  };

  if (chosenSections.indexOf('Usage') !=-1) {
    let sectionHead = 'Usage';
    let sectionContent = data.usage;
    var usageSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    var tocUsage = `
  * [Usage](#Usage)`;
  } else {
    usageSection = '';
    tocUsage = '';
  };

  if (chosenSections.indexOf('Contributing') !=-1) {
    let sectionHead = 'Contributing';
    let sectionContent = data.contributing;
    var contributingSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    var tocContributing = `
  * [Contributing](#Contributing)`;
  } else {
    contributingSection = '';
    tocContributing = '';
  };

  if (chosenSections.indexOf('Tests') !=-1) {
    let sectionHead = 'Tests';
    let sectionContent = data.tests;
    var testsSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    var tocTests = `
  * [Tests](#Tests)`;
  } else {
    testsSection = '';
    tocTests = '';
  };

  if (chosenSections.indexOf('Questions') !=-1) {
    let sectionHead = 'Questions';
    let sectionContent = data.questions;
    var questionsSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    var tocQuestions = `
  * [Questions](#Questions)`;
  } else {
    questionsSection = '';
    tocQuestions = '';
  };

  if (chosenSections.indexOf('License') !=-1) {
    var license = data.license;
    var licenseLink = renderLicenseLink(license);
    var badgeLink = renderLicenseBadge(license);
    var licenseSection = renderLicenseSection(license, renderLicenseLink(license));
    var tocLicense = `
  * [License](#License)`;
  } else {
    licenseSection = '';
    badgeLink = '';
    tocLicense = '';

  };

  return `
# ${data.title} ![badge](${badgeLink})  
${data.description}

## Table of Contents
${tocInstallation}
${tocUsage}
${tocContributing}
${tocTests}
${tocQuestions}
${tocLicense}

${installationSection}

${usageSection}

${contributingSection}

${testsSection}

${questionsSection}

${licenseSection}
`;
}


module.exports = generateMarkdown;

