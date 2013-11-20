var prefixTable = {
    'http://purl.org/dc/elements/1.1/': 'dc',
    'http://purl.org/dc/dcterms/': 'dcterms',
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
    'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
    'http:standards.iso.org/iso-iec/19788/-1/ed-1/en/': 'mlr-2',
    'http:standards.iso.org/iso-iec/19788/-8/ed-1/en/': 'mlr-8',
    'http:standards.iso.org/iso-iec/19788/-9/ed-1/en/': 'mlr-9',
    'http://normetic.org/uri/profil_oeaf/v1.0/ns#': 'oeaf',
    'http://www.w3.org/2001/XMLSchema#': 'xsd',
    'http://www.w3.org/2001/XMLSchema-instance': 'xsi'
};

var tagTable = {

    // Learning Opportunity Provider
    
    'lopIdentifier': { 
        '--': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'lopName': { 
        '--': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'lopFamilyName': { 
        '--': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'lopGivenName': { 
        '--': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'lopName2': { 
        '--': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'lopEmail': { 
        '--': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'lopWorkTelephone': { 
        '--': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'lopLocation': { 
        '--': 'mlr-9:des1300',
        'eng': 'mlr-9:location',
        'fra': 'mlr-9:localisation'
    },
    'lopWebSite': { 
        '--': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'lopType': { 
        '--': 'oeaf:sed0700',
        'eng': 'oeaf:type',
        'fra': 'oeaf:type'
    },
    'lopContactPerson': {
        '--': 'oeaf:sed0800',
        'eng': 'oeaf:contactPerson',
        'fra': 'oeaf:personneContact'
    },
    'lopHasPart': {
        '--': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Generic Component 

    'gcIdentifier': { 
        '--': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'gcTitle': {
        '--': 'mlr-2:des0100',
        'eng': 'mlr-2:title',
        'fra': 'mlr-2:titre'
    },
    'gcPublicationDate': {
        '--': 'oeaf:sed1000',
        'eng': 'oeaf:publicationDate',
        'fra': 'oeaf:dateDePublication'
    },
    'gcDescription': {
        '--': 'oeaf:sed1100',
        'eng': 'oeaf:description',
        'fra': 'oeaf:description'
    },
    'gcSubject': {
        '--': 'oeaf:sed1200',
        'eng': 'oeaf:subject',
        'fra': 'oeaf:sujet'
    },
    'gcPrerequisite': {
        '--': 'oeaf:sed1300',
        'eng': 'oeaf:prerequisite',
        'fra': 'oeaf:préalable'
    },
    'gcOpportunityType': {
        '--': 'oeaf:sed1400',
        'eng': 'oeaf:opportunityType',
        'fra': 'oeaf:typeDOpportunité'
    },
    'gcEducationalLevel': {
        '--': 'oeaf:sed1500',
        'eng': 'oeaf:educationcalLevel',
        'fra': 'oeaf:niveauÉducationel'
    },
    'gcCredit': {
        '--': 'oeaf:sed1600',
        'eng': 'oeaf:credit',
        'fra': 'oeaf:crédit'
    },
    'gcAssessmentType': {
        '--': 'oeaf:sed1700',
        'eng': 'oeaf:assessmentType',
        'fra': 'oeaf:typeDÉvaluation'
    },
    'gcObjective': {
        '--': 'oeaf:sed1800',
        'eng': 'oeaf:objective',
        'fra': 'oeaf:objectif'
    },
    'gcOutputQualification': {
        '--': 'oeaf:sed1900',
        'eng': 'oeaf:outputQualification',
        'fra': 'oeaf:qualificationÀLaSortie'
    },
    'gcHasPart': {
        '--': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Learning Opportunity Instance
    
    'loiIdentifier': { 
        '--': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'loiTitle': {
        '--': 'mlr-2:des0100',
        'eng': 'mlr-2:title',
        'fra': 'mlr-2:titre'
    },
    'loiPublicationDate': {
        '--': 'oeaf:sed1000',
        'eng': 'oeaf:publicationDate',
        'fra': 'oeaf:dateDePublication'
    },
    'loiDescription': {
        '--': 'oeaf:sed1100',
        'eng': 'oeaf:description',
        'fra': 'oeaf:description'
    },
    'loiGeolocation': {
        '--': 'oeaf:sed2000',
        'eng': 'oeaf:geolocation',
        'fra': 'oeaf:géolocalisation'
    },
    'loiStartDate': {
        '--': 'oeaf:sed2100',
        'eng': 'oeaf:startDate',
        'fra': 'oeaf:dateDeDébut'
    },
    'loiEndDate': {
        '--': 'oeaf:sed2200',
        'eng': 'oeaf:endDate',
        'fra': 'oeaf:dateDeFin'
    },
    'loiDuration': {
        '--': 'oeaf:sed2300',
        'eng': 'oeaf:duration',
        'fra': 'oeaf:durée'
    },
    'loiPerformanceDate': {
        '--': 'oeaf:sed2400',
        'eng': 'oeaf:performanceDate',
        'fra': 'oeaf:dateDePrestation'
    },
    'loiNumberOfPlaces': {
        '--': 'oeaf:sed2500',
        'eng': 'oeaf:numberOfPlaces',
        'fra': 'oeaf:nombreDePlaces'
    },
    'loiCost': {
        '--': 'oeaf:sed2600',
        'eng': 'oeaf:cost',
        'fra': 'oeaf:coût'
    },
    'loiPerformanceLanguage': {
        '--': 'oeaf:sed2700',
        'eng': 'oeaf:performanceLanguage',
        'fra': 'oeaf:langueDeLaPrestation'
    },
    'loiDeliveryMode': {
        '--': 'oeaf:sed2800',
        'eng': 'oeaf:deliveryMode',
        'fra': 'oeaf:modeDeLivraison'
    },
    'loiProvider': {
        '--': 'oeaf:sed2900',
        'eng': 'oeaf:provider',
        'fra': 'oeaf:prestataire'
    },
    'naturalPerson': {
        '--': 'mlr-9:rc0001',
        'eng': 'mlr-9:naturalPerson',
        'fra': 'mlr:personneNaturelle'
    },
    'loiRegistrationModalities': {
        '--': 'oeaf:sed3000',
        'eng': 'oeaf:registrationModalities',
        'fra': 'oeaf:modalitésDInscription'
    },
    'loiLastMinuteInfos': {
        '--': 'oeaf:sed3100',
        'eng': 'oeaf:lastMinuteInfos',
        'fra': 'oeaf:infosDeDernièreMinute'
    },
    'geographicalLocation': {
        '--': 'mlr-9:rc0003',
        'eng': 'mlr-9:geographicLocation',
        'fra': 'mlr-9:localisationGéographique'
    },
    'loiLocationLongitude': {
        '--': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'loiLocationLatitude': {
        '--': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'loiLocationDescription': {
        '--': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },
    'loiProviderName': {
        '--': 'mlr-9:des0500',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'loiProviderEmail': {
        '--': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'loiProviderWorkTelephone': {
        '--': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneTravail'
    },
    'loiHasPart': {
        '--': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Geolocation
    
    'geoLocLongitude': {
        '--': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'geoLocLatitude': {
        '--': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'geoLocDescription': {
        '--': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },

    // Natural Person
    
    'npIdentifier': {
        '--': 'mlr-9:des0100',
        'eng': 'mlr-9:identifier',
        'fra': 'mlr-9:identifiant'
    },
    'npName': {
        '--': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'npFamilyName': { 
        '--': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'npGivenName': { 
        '--': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'npName2': { 
        '--': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'npEmail': { 
        '--': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'npWorkTelephone': { 
        '--': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'npWebSite': { 
        '--': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'npWorkFor': {
        '--': 'oeaf:des1100',
        'eng': 'oeaf:workFor',
        'fra': 'oeaf:travaillePour'
    },
    'npHasPart': {
        '--': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Organization
    
    'orgIdentifier': {
        '--': 'mlr-9:des0100',
        'eng': 'mlr-9:identifier',
        'fra': 'mlr-9:identifiant'
    },
    'orgName': {
        '--': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'orgFamilyName': { 
        '--': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'orgGivenName': { 
        '--': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'orgName2': { 
        '--': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'orgEmail': { 
        '--': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'orgWorkTelephone': { 
        '--': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'orgWebSite': { 
        '--': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'orgGeolocation': { 
        '--': 'oeaf:sed2000',
        'eng': 'oeaf:geolocation',
        'fra': 'oeaf:géolocalisation'
    },
    'orgLocationLongitude': {
        '--': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'orgLocationLatitude': {
        '--': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'orgLocationDescription': {
        '--': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },
    'orgHasPart': {
        '--': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    }

};

var langTable = {
    'eng': 'english',
    'fra': 'french'
};

var typeOfLearningOpportunitiesProviderTable = [];
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t010' ] = 'company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t011' ] = 'craft business';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t012' ] = 'industrial company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t013' ] = 'service company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t020' ] = 'public organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t030' ] = 'school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t031' ] = 'primary school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t032' ] = 'private school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t033' ] = 'training vocational school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t034' ] = 'secondary school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t035' ] = 'cegep';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t036' ] = 'university';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t037' ] = 'training center';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t040' ] = 'not for profit organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t041' ] = 'association';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t042' ] = 'NGOs';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t043' ] = 'organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#t999' ] = 'other';

var educationalLevelTable = [];
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t010' ] = 'all';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t020' ] = 'preschool education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t030' ] = 'primary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t040' ] = 'secondary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t041' ] = 'general secondary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t042' ] = 'technical education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t043' ] = 'comprehensive secondary education'
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t044' ] = 'technical education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t050' ] = 'higher education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t051' ] = 'cegep';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t052' ] = 'university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t053' ] = 'general university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t054' ] = 'technical university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t055' ] = 'undergraduate certificate';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t056' ] = 'graduate certificate';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t057' ] = "bachelor's degree";
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t058' ] = 'master degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t059' ] = 'doctoral degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t060' ] = 'postdoctoral degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t080' ] = 'further education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#t999' ] = 'other';

var assessmentTypeTable = [];
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t010' ] = 'none';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t020' ] = 'criterion-referenced evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t030' ] = 'classification test';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t040' ] = 'vocational evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t050' ] = 'performance appraisal';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t060' ] = 'attainments evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t070' ] = 'learning evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t080' ] = 'formative evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t090' ] = 'global evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t100' ] = 'normative evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t110' ] = 'periodic evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#t999' ] = 'other';

var opportunityTypeTable = [];
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t010' ] = 'lecture';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t020' ] = 'program';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t030' ] = 'event';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t040' ] = 'conference';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t050' ] = 'congress';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t060' ] = 'meeting';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t070' ] = 'course+workshop???';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t080' ] = 'workshop';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t090' ] = 'seminar';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t100' ] = 'excursion';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t110' ] = 'unconference';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t120' ] = 'BarCamp';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t130' ] = 'Bird of a Feather';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#t999' ] = 'other';

var deliveryModeTable = [];
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t010' ] = 'in-class';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t020' ] = 'on-line';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t030' ] = 'blended';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t040' ] = 'webcasting';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t050' ] = 'podcasting';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t060' ] = 'computer-supported collaborative';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t070' ] = 'computer-based';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#t999' ] = 'other';

function getTag( field, lang ) {
    if( typeof( tagTable[ field ] ) == 'undefined' )
        return( '' );
    return tagTable[ field ][ lang ];
}

function normalizeSpace( str ) {
    if( str ) {
        str = str.replace(/^\s*|\s*$/g, '');
        return str.replace(/\s+/g,' ');
    }
    else
        return '';
}

function initOptionElements( table, selectElementSelector, isMandatory, isMultiple, showAllValues ) {
    var sortedLabels = [];
    var valueTable = [];
    for( var value in table ) {
        var label = table[ value ];
        sortedLabels.push( label );
        valueTable[ label ] = value;
    }
    sortedLabels.sort();
    if( !isMandatory )
        $( selectElementSelector ).append( '<option value=""></option>' );
    for( var i = 0; i < sortedLabels.length; i++ ) {
        var label = sortedLabels[ i ];
        var value = valueTable[ label ];
        $( selectElementSelector ).append( '<option value="' + value + '">' + label + '</option>' );
    }
    if( isMultiple )
        $( selectElementSelector ).attr( 'multiple', 'multiple' );
    if( showAllValues )
        $( selectElementSelector ).attr( 'size', $( selectElementSelector ).children().length );
}

function setUriIfNeeded( uriElementSelector ) {
    return( function() {
        if( normalizeSpace( $( this ).val() ) != '' ) {
            if( normalizeSpace( $( uriElementSelector ).val() ) == '' ) {
                var uri = uuid.v4();
                $( uriElementSelector ).val( 'urn:' + uri );
            }
        }
    } );
}

function removeField() {
    var divToRemove = $( this ).parent();
    $( divToRemove ).remove();
    codeIt();
    return( false );
}

function addField( fieldName ) {
    return( 
        function() {
            var lastField = null;
            var parentFieldSet = $( this ).parents( 'fieldset' );
            var childenInputs = parentFieldSet.find( 'input[type="text"]' );
            for( var i = 0; i < childenInputs.length; i++ ) {
                if( childenInputs[ i ].id.substring( 0,  fieldName.length ) == fieldName )
                    lastField = childenInputs[ i ];
            }
            var lastNumber = parseInt( lastField.id.substring( fieldName.length, lastField.length ) );
            var newNumber = lastNumber + 1;
            var newId = fieldName + newNumber;

            var newDiv = document.createElement( 'div' );
            $( newDiv ).attr( 'class', 'field' );

            var newLabel = document.createElement( 'label' );
            $( newLabel ).attr( 'for', newId );
            $( newLabel ).html( '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' );
            
            var newInput = document.createElement( 'input' );
            $( newInput ).attr( 'type', 'text' );
            $( newInput ).attr( 'id', newId );
            $( newInput ).attr( 'class', fieldName + "TextField" );
            $( newInput ).keyup( window.codeIt );
            $( newInput ).click( window.codeIt );

            var newButton = document.createElement( 'button' );
            $( newButton ).attr( 'class', 'removeFieldButton' );
            $( newButton ).text( '-' );
            $( newButton ).click( removeField );

            $( lastField ).parent().after( newDiv );

            $( newDiv ).append( newLabel );
            $( newDiv ).append( newInput );
            $( newDiv ).append( newButton );

            return( false );
        } 
    );
}

function doDefaultInit() {
    $( 'input' ).keyup( window.codeIt );
    $( 'input' ).click( window.codeIt );
    $( 'textarea' ).keyup( window.codeIt );
    $( 'textarea' ).click( window.codeIt );
    $( 'select' ).click( window.codeIt );
    $( '#genMainElementOnly' ).click( 
        function() {
            if( $( this ).is( ':checked' ) ) 
                $( '#validationButton' ).addClass( 'notDisplayed' );
            else
                $( '#validationButton' ).removeClass( 'notDisplayed' );
        }
    );
    $( '#outputTypeRdf' ).click( 
        function() {
            if( $( this ).is( ':checked' ) ) 
                $( '#previewSection' ).addClass( 'notDisplayed' );
            else
                $( '#previewSection' ).removeClass( 'notDisplayed' );
        }
    );
    $( '#outputTypeRdfaHtml' ).click( 
        function() {
            if( $( this ).is( ':checked' ) ) 
                $( '#previewSection' ).removeClass( 'notDisplayed' );
            else
                $( '#previewSection' ).addClass( 'notDisplayed' );
        }
    );
    $( '#outputTypeRdfaXhtml' ).click( 
        function() {
            if( $( this ).is( ':checked' ) ) 
                $( '#previewSection' ).removeClass( 'notDisplayed' );
            else
                $( '#previewSection' ).addClass( 'notDisplayed' );
        }
    );
}

function doReset() {
    codeIt();
}

function codeIt() {
    var code = getCode();
    $( '#sampleCode' ).text( code );
    hljs.tabReplace = '    ';
    hljs.highlightBlock( $( '#sampleCode' ).get( 0 ) );

    if( $( 'input:radio[name=outputType]' )[ 0 ].checked ) { // RDF
        $( '#preview' ).html( '' );
        $( '#RDF' ).val( code );
        $( '#validationButton' ).attr( 'form', 'rdfValidation' );
    }
    else { // RDFa HTML and RDFa XHTML
        $( '#preview' ).html( code );
        $( '#text' ).val( code );
        $( '#validationButton' ).attr( 'form', 'rdfaValidation' );
        if( $( 'input:radio[name=outputType]' )[ 1 ].checked ) // RDFa HTML
            $( '#host-language_text' ).val( 'html' );
        else // RDFa XHTML
            $( '#host-language_text' ).val( 'xhtml' );
    }
}
