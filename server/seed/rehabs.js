//step 4 -->
//purpose = fill the database collections with actual data about the rehabs, boroughs, and detox centers
//Use Mongo shell (mongosh), or a query.js file, to read the data BECAUSE: -->
//This data is being stored on the server, we cannot access it online (yet) or directly in our terminal.
//our terminal is for what's being stored on our computer

//QUESTION: where is the data stored/what server?

//pulling in our db and models
const db = require("../db");
//searching for relevant variables within the models folder:
const { Rehab } = require("../models");
const { County } = require("../models");
//connecting to the db / giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions.
//That way, even if it only takes .01 seconds, code-lines won't get thrown out of order
const main = async () => {
  const BronxCounty = await County.find({
    name: "Bronx County",
  });

  const KingsCounty = await County.find({
    name: "Kings County",
  });
  const QueensCounty = await County.find({
    name: "Queens County",
  });
  console.log(QueensCounty);

  const RichmondCounty = await County.find({
    name: "Richmond County",
  });

  const NewYorkCounty = await County.find({
    name: "New York County",
  });

  const SullivanCounty = await County.find({
    name: "Sullivan County",
  });
  console.log(SullivanCounty);

  const rehabs = [
    {
      name: "The Bronx Addiction Treatment Center",
      number: "(718) 904-0026",
      description:
        "The Bronx Addiction Treatment Center is a 38-bed facility dedicated to serving the needs of adult men, women, LGBT individuals, and Spanish monolingual patients. The center's services are meticulously designed to address the fundamental healthcare needs of each patient, encompassing specific physical, psychological, and social symptoms associated with psychoactive substance abuse. With a strong commitment to cultural competence, patient-centered care, and evidence-based practices, the center caters to individuals aged 18 and above. Each patient's length of stay and treatment plan is tailored individually, taking into account their unique requirements, all under the guidance of a dedicated treatment team. The center specializes in: Providing expertise in supporting individuals dealing with intimate partner/domestic violence. Offering tailored assistance to women and families. Active participation in comprehensive criminal justice workshops. Delivering specialized Spanish monolingual services for those who prefer it. Proficiency in addressing co-occurring mental health disorders and addiction. The Bronx Addiction Treatment Center is dedicated to providing comprehensive care while respecting the diverse needs of its patients.",
      coconditions: true,
      detox: false, //detox refers to if the rehab facility has an onsite detox services as well
      sexseparated: false,
      address: "1500 Waters Place Bronx, NY 10461-2723",
      county: BronxCounty[0]._id,
      url: "https://oasas.ny.gov/location/bronx-addiction-treatment-center",
    },

    {
      name: "Kingsboro Addiction Treatment Center",
      number: "(718) 453-3200",
      description:
        "Kingsboro is a welcoming 70-bed inpatient addiction treatment facility catering to both adult males and females. Vibrantly decorated patient rooms, recreational areas, an outdoor patio, and a shared dining room collectively contribute to fostering a positive and supportive environment for the recovery journey to commence. Notable specialties at Kingsboro encompass: Medically-supervised Withdrawal, Gender Specific Treatment, Gambling help, A monolingual Spanish-language program, Addictions counseling group, Self-help resources, Special issues groups, Social work services, Physical and psychiatric evaluations, Nutrition assessment, Structured recreation, Client and family education, Co-occurring mental health disorders and addictions.",
      coconditions: true,
      detox: true, //detox refers to if the rehab facility has an onsite detox services as well
      sexseparated: false,
      address: "754 Lexington Avenue Brooklyn, NY 11221",
      county: KingsCounty[0]._id,
      url: "https://oasas.ny.gov/location/kingsboro-addiction-treatment-center",
    },

    {
      name: "Creedmoor Addiction Treatment Center",
      number: "(718) 264-3742",
      description:
        "The Creedmoor Addiction Treatment Center is a focused 26-bed short-term inpatient addiction rehabilitation program, designed to support the recovery of adult men and women. The center's services are dedicated to addressing each individual's fundamental healthcare needs while effectively addressing the specific physical, psychological, and social symptoms associated with addictive diseases. Notable specialties at the Creedmoor Addiction Treatment Center include: A specialized Women's Track, Support for Homeless Men, Expertise in managing Problem Gambling, Comprehensive Medical, Psychiatric, and Psychosocial Interventions, Access to Self-Help Groups, Individual, Group, and Family Counseling Services, Education and Support, Proficiency in Managing Co-occurring Mental Health Disorders and Addictions. The Creedmoor Addiction Treatment Center is committed to providing a compassionate and effective environment for individuals to overcome addiction and embark on their path to recovery.",
      coconditions: true,
      detox: false, //detox refers to if the rehab facility has an onsite detox services as well
      sexseparated: false,
      address: "80-45 Winchester Blvd #19 Queens Village , NY 11427",
      county: QueensCounty[0]._id,
      url: "https://oasas.ny.gov/location/creedmoor-addiction-treatment-center",
    },

    {
      name: "South Beach Addiction Treatment Center",
      number: "(718) 667-5202 & (718) 667-2551",
      description:
        "The South Beach Addiction Treatment Center operates as a 30-bed facility, offering short-term rehabilitation for adult men and women dealing with addiction. The hallmark of their approach lies in tailoring treatment plans to individual strengths, needs, and issues, recognizing the unique nature of each person in treatment. Length of stay is determined by the specific needs of the individuals being served and can range from 2 to 6 weeks. Key specialties at the South Beach Addiction Treatment Center encompass: Expertise in addressing co-occurring addictions and mental health disorders, Comprehensive Individual, Group, and Family Counseling Services, Educational Support, Access to Self-Help Meetings, Thoughtful Aftercare Planning, Assistance for those dealing with problems gambling.",
      coconditions: true,
      detox: false, //detox refers to if the rehab facility has an onsite detox services as well
      sexseparated: false,
      address: "777 Seaview Avenue, Building #3 Staten Island, NY 10305",
      county: RichmondCounty[0]._id,
      url: "https://oasas.ny.gov/location/south-beach-addiction-treatment-center",
    },

    {
      name: "Parallax Center",
      number: "(212) 779-9207",
      description:
        "While our site recommends inpatient treatment, Parallax's Outpatient 822 Program helps individuals facing addiction or substance use disorder who have already completed, or wwho will not do, inpatient treatment. It recognizes the complexities of addiction as a chronic illness. The program firmly believes in the power of comprehensive care, and it combines counseling, approved medications, and supportive services all delivered through a strength-based, person-centered, and trauma-informed approach. At its core, the Outpatient 822 Program prioritizes individual strengths, tailoring each step to meet the unique needs and goals of the participants. The program addresses co-occurring disorders, provides essential medical and psychiatric services, offers vocational rehabilitation, and places a strong emphasis on family intervention and support. Together, participants and the program embark on a shared journey of transformation, overcoming challenges, reclaiming lives, and unlocking boundless potential.",
      coconditions: true,
      detox: false, //detox refers to if the rehab facility has an onsite detox services as well
      sexseparated: false,
      address: "145 East 32nd Street, 6th Floor, New York, NY, 10016",
      county: NewYorkCounty[0]._id,
      url: "https://www.parallaxcenter.com/",
    },

    {
      name: "New Hope Manor",
      number: "(845) 557-8353",
      description:
        "New Hope Manor is a dedicated community that stands united in its commitment to addressing the needs of all those affected by substance abuse. Through a comprehensive process of reconciliation, we strive to empower each person, guiding them towards achieving harmony within themselves, fostering connections with others in the community, establishing a deeper bond with their environment, and drawing strength from their spiritual foundations. Philosophy of Treatment: Our approach to treatment is multifaceted, encompassing self-discovery, self-actualization, and the internalization of goals and values that support lasting sobriety. At New Hope Manor, we hold a deep respect for the dignity and individuality of every person who seeks our assistance. Each client is seen as a unique individual, not merely a diagnosis. Our therapeutic program is designed to provide the opportunity for developing self-awareness and cultivating the values essential for successful self-governance.",
      coconditions: true,
      detox: false,
      sexseparated: true,
      address: "35 Hillside Road Barryville, New York 12719",
      county: SullivanCounty[0]._id,
      url: "https://newhopemanor.org/",
    },

    //   movie: RememberMe[0]._id,
  ];
  await Rehab.deleteMany();
  let createRehab= await Rehab.insertMany(rehabs);
  console.log(createRehab)
  console.log("Created rehabs!");
};

//we keep these functions seperate so they can each run independently (atomically) and perform their necessary task -->
//it will prevent a lot of errors
const run = async () => {
  //runs our main function and awaits for the data to populate
  await main();
  //closes our db after its run so things don't break
  db.close();
};

run();
