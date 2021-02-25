// function that returns a license badge from shields.io based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
   if (license !== '') {
     var badgeURL = `https://img.shields.io/static/v1?label=license&message=${license}&color=blue`;
     var badgeMd = `![badge-image](${badgeURL})`;
   } else {
     badgeMd = '';
   }
   return badgeMd;
}

// function that returns the license link @ opensource.org
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    var licenseURL = `https://opensource.org/licenses/${license}`;
  } else {
    licenseURL = '';
  }
  return licenseURL;
}

// function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license, licenseURL) {
  if (license !== '') {
    var licenseContent = `
  ## License
  This project is licensed under the terms of the ${license} license. View license at:
  ${licenseURL}.`;
    
  } else {
    var licenseContent = '';
  }
  return licenseContent;  
}

// function to generate markdown for README
function generateMarkdown(data, license) {

  // save the array of selected selections to a string
  var chosenSections = data.tableOfContents;

  //if the substring 'installation' is found in the string:
  if (chosenSections.indexOf('Installation') !=-1) {
    //create section contents 
    let sectionHead = 'Installation';
    let sectionContent = data.installation;
    var installationSection = `
  ## ${sectionHead}
  ${sectionContent}`;
    //create table of contents line with internal link
    var tocInstallation = `
  * [Installation](#Installation)`;
  //if the section is not selected, then return empty strings
  } else {
    installationSection = '';
    tocInstallation = '';
  };

  //check for 'Usage' selection
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

  //check for 'Contributing' selection
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

  //check for 'Tests' selection
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

  //check for 'Questions' selection
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

  //check for 'License' selection
  if (chosenSections.indexOf('License') !=-1) {
    var license = data.license;
    var licenseLink = renderLicenseLink(license);
    var badgeImg = renderLicenseBadge(license);
    var licenseSection = renderLicenseSection(license, renderLicenseLink(license));
    var tocLicense = `
  * [License](#License)`;
  } else {
    licenseSection = '';
    badgeImg = '';
    tocLicense = '';

  };

//call data and created sections to create the markdown
  return `
# ${data.title} ${badgeImg}  
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

