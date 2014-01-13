var applProf = 'http://normetic.org/profil_application/v1.0';

var cdataStart = '<![CDATA[';
var cdataEnd = ']]>';

var encloseIntoCdata = function( str ) {
    return( cdataStart + str + cdataEnd );
}

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

    // MLR Record

    'mlrRec': { 
        '---': 'mlr-8:rc0001',
        'eng': 'mlr-8:MLRRecord',
        'fra': 'mlr-8:enregistrementMLR'
    },
    'mlrRecIdentifier': { 
        '---': 'mlr-8:des0100',
        'eng': 'mlr-8:recordIdentifier',
        'fra': 'mlr-8:identifiantEnregistrement'
    },
    'mlrRecDescribes': { 
        '---': 'mlr-8:des0200',
        'eng': 'mlr-8:describes',
        'fra': 'mlr-8:décrit'
    },
    'mlrRecLanguage': { 
        '---': 'mlr-8:des0400',
        'eng': 'mlr-8:language',
        'fra': 'mlr-8:langue'
    },
    'mlrRecCreator': {
        '---': 'dc:creator',
        'eng': 'dc:creator',
        'fra': 'dc:creator'
    },
    'mlrRecValidator': {
        '---': 'dc:validator',
        'eng': 'dc:validator',
        'fra': 'dc:validator'
    },
    'mlrRecCreated': {
        '---': 'dcterms:created',
        'eng': 'dcterms:created',
        'fra': 'dcterms:created'
    },
    'mlrRecHasApplicationProfile': {
        '---': 'mlr-8:des0600',
        'eng': 'mlr-8:hasApplicationProfile',
        'fra': 'mlr-8:profilDApplication'
    },
    'mlrRecRecordLastUpdate': {
        '---': 'mlr-8:des0900',
        'eng': 'mlr-8:recordLastUpdate',
        'fra': 'mlr-8:dernièreMiseÀJour'
    },

    // Learning Opportunity Provider
    
    'lopLearningOpportunityProvider': { 
        '---': 'oeaf:rc0001',
        'eng': 'oeaf:learningOpportunityProvider',
        'fra': 'oeaf:fournisseurDOpportunitésDÉtude'
    },
    'lopIdentifier': { 
        '---': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'lopName': { 
        '---': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'lopFamilyName': { 
        '---': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'lopGivenName': { 
        '---': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'lopName2': { 
        '---': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'lopEmail': { 
        '---': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'lopWorkTelephone': { 
        '---': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'lopLocation': { 
        '---': 'mlr-9:des1300',
        'eng': 'mlr-9:location',
        'fra': 'mlr-9:localisation'
    },
    'lopWebSite': { 
        '---': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'lopType': { 
        '---': 'oeaf:sed0700',
        'eng': 'oeaf:type',
        'fra': 'oeaf:type'
    },
    'lopContactPerson': {
        '---': 'oeaf:sed0800',
        'eng': 'oeaf:contactPerson',
        'fra': 'oeaf:personneContact'
    },
    'lopOffer': {
        '---': 'oeaf:sed0100',
        'eng': 'oeaf:offer',
        'fra': 'oeaf:offre'
    },
    'lopHasPart': {
        '---': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Generic Learning Opportunity 

    'gloGenericLearningOpportunity': { 
        '---': 'oeaf:rc0002',
        'eng': 'oeaf:genericLearningOpportunity',
        'fra': 'oeaf:opportunitéDÉtudeGénérique'
    },
    'gloIdentifier': { 
        '---': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'gloTitle': {
        '---': 'mlr-2:des0100',
        'eng': 'mlr-2:title',
        'fra': 'mlr-2:titre'
    },
    'gloPublicationDate': {
        '---': 'oeaf:sed1000',
        'eng': 'oeaf:publicationDate',
        'fra': 'oeaf:dateDePublication'
    },
    'gloDescription': {
        '---': 'oeaf:sed1100',
        'eng': 'oeaf:description',
        'fra': 'oeaf:description'
    },
    'gloSubject': {
        '---': 'oeaf:sed1200',
        'eng': 'oeaf:subject',
        'fra': 'oeaf:sujet'
    },
    'gloPrerequisite': {
        '---': 'oeaf:sed1300',
        'eng': 'oeaf:prerequisite',
        'fra': 'oeaf:préalable'
    },
    'gloOpportunityType': {
        '---': 'oeaf:sed1400',
        'eng': 'oeaf:opportunityType',
        'fra': 'oeaf:typeDOpportunité'
    },
    'gloEducationalLevel': {
        '---': 'oeaf:sed1500',
        'eng': 'oeaf:educationcalLevel',
        'fra': 'oeaf:niveauÉducationel'
    },
    'gloCredit': {
        '---': 'oeaf:sed1600',
        'eng': 'oeaf:credit',
        'fra': 'oeaf:crédit'
    },
    'gloAssessmentType': {
        '---': 'oeaf:sed1700',
        'eng': 'oeaf:assessmentType',
        'fra': 'oeaf:typeDÉvaluation'
    },
    'gloObjective': {
        '---': 'oeaf:sed1800',
        'eng': 'oeaf:objective',
        'fra': 'oeaf:objectif'
    },
    'gloOutputQualification': {
        '---': 'oeaf:sed1900',
        'eng': 'oeaf:outputQualification',
        'fra': 'oeaf:qualificationÀLaSortie'
    },
    'gloHasPart': {
        '---': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },
    'gloOfferedBy': {
        '---': 'oeaf:sed0200',
        'eng': 'oeaf:offeredBy',
        'fra': 'oeaf:offertePar'
    },

    // Concrete Learning Opportunity
    
    'cloConcreteLearningOpportunity': { 
        '---': 'oeaf:rc0003',
        'eng': 'oeaf:concreteLearningOpportunity',
        'fra': 'oeaf:opportunitéDÉtudeConcrète'
    },
    'cloIdentifier': { 
        '---': 'oeaf:sed0900',
        'eng': 'oeaf:identifier',
        'fra': 'oeaf:identifiant'
    },
    'cloTitle': {
        '---': 'mlr-2:des0100',
        'eng': 'mlr-2:title',
        'fra': 'mlr-2:titre'
    },
    'cloPublicationDate': {
        '---': 'oeaf:sed1000',
        'eng': 'oeaf:publicationDate',
        'fra': 'oeaf:dateDePublication'
    },
    'cloDescription': {
        '---': 'oeaf:sed1100',
        'eng': 'oeaf:description',
        'fra': 'oeaf:description'
    },
    'cloGeolocation': {
        '---': 'oeaf:sed2000',
        'eng': 'oeaf:geolocation',
        'fra': 'oeaf:géolocalisation'
    },
    'cloStartDate': {
        '---': 'oeaf:sed2100',
        'eng': 'oeaf:startDate',
        'fra': 'oeaf:dateDeDébut'
    },
    'cloEndDate': {
        '---': 'oeaf:sed2200',
        'eng': 'oeaf:endDate',
        'fra': 'oeaf:dateDeFin'
    },
    'cloDuration': {
        '---': 'oeaf:sed2300',
        'eng': 'oeaf:duration',
        'fra': 'oeaf:durée'
    },
    'cloPerformanceDate': {
        '---': 'oeaf:sed2400',
        'eng': 'oeaf:performanceDate',
        'fra': 'oeaf:dateDePrestation'
    },
    'cloNumberOfPlaces': {
        '---': 'oeaf:sed2500',
        'eng': 'oeaf:numberOfPlaces',
        'fra': 'oeaf:nombreDePlaces'
    },
    'cloCost': {
        '---': 'oeaf:sed2600',
        'eng': 'oeaf:cost',
        'fra': 'oeaf:coût'
    },
    'cloPerformanceLanguage': {
        '---': 'oeaf:sed2700',
        'eng': 'oeaf:performanceLanguage',
        'fra': 'oeaf:langueDeLaPrestation'
    },
    'cloDeliveryMode': {
        '---': 'oeaf:sed2800',
        'eng': 'oeaf:deliveryMode',
        'fra': 'oeaf:modeDeLivraison'
    },
    'cloProvider': {
        '---': 'oeaf:sed2900',
        'eng': 'oeaf:provider',
        'fra': 'oeaf:prestataire'
    },
    'naturalPerson': {
        '---': 'mlr-9:rc0001',
        'eng': 'mlr-9:naturalPerson',
        'fra': 'mlr:personneNaturelle'
    },
    'cloRegistrationModalities': {
        '---': 'oeaf:sed3000',
        'eng': 'oeaf:registrationModalities',
        'fra': 'oeaf:modalitésDInscription'
    },
    'cloLastMinuteInfos': {
        '---': 'oeaf:sed3100',
        'eng': 'oeaf:lastMinuteInfos',
        'fra': 'oeaf:infosDeDernièreMinute'
    },
    'geographicalLocation': {
        '---': 'mlr-9:rc0003',
        'eng': 'mlr-9:geographicLocation',
        'fra': 'mlr-9:localisationGéographique'
    },
    'cloLocationLongitude': {
        '---': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'cloLocationLatitude': {
        '---': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'cloLocationDescription': {
        '---': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },
    'cloGenericComponent': {
        '---': 'oeaf:sed0300',
        'eng': 'oeaf:genericComponent',
        'fra': 'oeaf:composantGénérique'
    },
    'cloHasPart': {
        '---': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },
    'cloOfferedBy': {
        '---': 'oeaf:sed0200',
        'eng': 'oeaf:offeredBy',
        'fra': 'oeaf:offertePar'
    },

    // Geolocation
    
    'geoLocGeolocation': { 
        '---': 'mlr-9:rc0003',
        'eng': 'mlr-9:geolocation',
        'fra': 'mlr-9:géolocalisation'
    },
    'geoLocLongitude': {
        '---': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'geoLocLatitude': {
        '---': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'geoLocDescription': {
        '---': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },

    // Natural Person
    
    'npNaturalPerson': { 
        '---': 'mlr-9:rc0001',
        'eng': 'mlr-9:naturalPerson',
        'fra': 'mlr-9:personneNaturelle'
    },
    'npIdentifier': {
        '---': 'mlr-9:des0100',
        'eng': 'mlr-9:identifier',
        'fra': 'mlr-9:identifiant'
    },
    'npName': {
        '---': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'npFamilyName': { 
        '---': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'npGivenName': { 
        '---': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'npName2': { 
        '---': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'npEmail': { 
        '---': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'npWorkTelephone': { 
        '---': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'npWebSite': { 
        '---': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'npWorkFor': {
        '---': 'oeaf:des1100',
        'eng': 'oeaf:workFor',
        'fra': 'oeaf:travaillePour'
    },
    'npHasPart': {
        '---': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    },

    // Organization
    
    'orgOrganization': { 
        '---': 'mlr-9:rc0002',
        'eng': 'mlr-9:organization',
        'fra': 'mlr-9:organisation'
    },
    'orgIdentifier': {
        '---': 'mlr-9:des0100',
        'eng': 'mlr-9:identifier',
        'fra': 'mlr-9:identifiant'
    },
    'orgName': {
        '---': 'mlr-9:des0200',
        'eng': 'mlr-9:name',
        'fra': 'mlr-9:nom'
    },
    'orgFamilyName': { 
        '---': 'mlr-9:des0300',
        'eng': 'mlr-9:familyName',
        'fra': 'mlr-9:nomDeFamille'
    },
    'orgGivenName': { 
        '---': 'mlr-9:des0400',
        'eng': 'mlr-9:givenName',
        'fra': 'mlr-9:prénom'
    },
    'orgName2': { 
        '---': 'mlr-9:des0500',
        'eng': 'mlr-9:name_2',
        'fra': 'mlr-9:nom_2'
    },
    'orgEmail': { 
        '---': 'mlr-9:des0900',
        'eng': 'mlr-9:email',
        'fra': 'mlr-9:courriel'
    },
    'orgWorkTelephone': { 
        '---': 'mlr-9:des1000',
        'eng': 'mlr-9:workTelephone',
        'fra': 'mlr-9:téléphoneAuTravail'
    },
    'orgWebSite': { 
        '---': 'mlr-9:des1800',
        'eng': 'mlr-9:webSite',
        'fra': 'mlr-9:siteWeb'
    },
    'orgGeolocation': { 
        '---': 'oeaf:sed2000',
        'eng': 'oeaf:geolocation',
        'fra': 'oeaf:géolocalisation'
    },
    'orgLocationLongitude': {
        '---': 'mlr-9:des1400',
        'eng': 'mlr-9:longitude',
        'fra': 'mlr-9:longitude'
    },
    'orgLocationLatitude': {
        '---': 'mlr-9:des1500',
        'eng': 'mlr-9:latitude',
        'fra': 'mlr-9:latitude'
    },
    'orgLocationDescription': {
        '---': 'mlr-9:des1700',
        'eng': 'mlr-9:description',
        'fra': 'mlr-9:description'
    },
    'orgHasPart': {
        '---': 'oeaf:sed0400',
        'eng': 'oeaf:hasPart',
        'fra': 'oeaf:composéDe'
    }

};

var langTable = {
    'eng': 'english',
    'fra': 'french'
};

var levelIndent = '&nbsp;&nbsp;&nbsp;&nbsp;';

var typeOfLearningOpportunitiesProviderTable = [];
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T010' ] = 'company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T011' ] = levelIndent + 'craft business';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T012' ] = levelIndent + 'industrial company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T013' ] = levelIndent + 'service company';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T020' ] = 'public organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T030' ] = 'school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T031' ] = levelIndent + 'primary school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T032' ] = levelIndent + 'private school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T033' ] = levelIndent + 'training vocational school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T034' ] = levelIndent + 'secondary school';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T035' ] = levelIndent + 'cegep';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T036' ] = levelIndent + 'university';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T037' ] = levelIndent + 'training center';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T040' ] = 'not for profit organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T041' ] = levelIndent + 'association';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T042' ] = levelIndent + 'NGOs';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T043' ] = levelIndent + 'organization';
typeOfLearningOpportunitiesProviderTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.1#T999' ] = 'other';

var educationalLevelTable = [];
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T010' ] = 'all';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T020' ] = 'preschool education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T030' ] = 'primary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T040' ] = 'secondary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T041' ] = levelIndent + 'general secondary education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T042' ] = levelIndent + 'technical education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T043' ] = levelIndent + 'comprehensive secondary education'
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T044' ] = levelIndent + 'technical education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T050' ] = 'higher education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T051' ] = levelIndent + 'cegep';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T052' ] = levelIndent + 'university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T053' ] = levelIndent + 'general university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T054' ] = levelIndent + 'technical university education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T055' ] = levelIndent + 'undergraduate certificate';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T056' ] = levelIndent + 'graduate certificate';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T057' ] = levelIndent + "bachelor's degree";
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T058' ] = levelIndent + 'master degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T059' ] = levelIndent + 'doctoral degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T060' ] = levelIndent + 'postdoctoral degree';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T080' ] = 'further education';
educationalLevelTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.2#T999' ] = 'other';

var assessmentTypeTable = [];
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T010' ] = 'none';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T020' ] = 'criterion-referenced evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T030' ] = 'classification test';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T040' ] = 'vocational evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T050' ] = 'performance appraisal';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T060' ] = 'attainments evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T070' ] = 'learning evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T080' ] = 'formative evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T090' ] = 'global evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T100' ] = 'normative evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T110' ] = 'periodic evaluation';
assessmentTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.3#T999' ] = 'other';

var opportunityTypeTable = [];
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T010' ] = 'lecture';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T020' ] = 'program';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T030' ] = 'event';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T040' ] = 'conference';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T050' ] = 'congress';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T060' ] = 'meeting';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T070' ] = 'course+workshop???';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T080' ] = 'workshop';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T090' ] = 'seminar';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T100' ] = 'excursion';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T110' ] = 'unconference';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T120' ] = 'BarCamp';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T130' ] = 'Bird of a Feather';
opportunityTypeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.4#T999' ] = 'other';

var deliveryModeTable = [];
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T010' ] = 'in-class';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T020' ] = 'on-line';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T030' ] = 'blended';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T040' ] = 'webcasting';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T050' ] = 'podcasting';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T060' ] = 'computer-supported collaborative';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T070' ] = 'computer-based';
deliveryModeTable[ 'http://normetic.org/uri/profil_oeaf/v1.0/va2.5#T999' ] = 'other';

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

function initOptionElements( table, selectElementSelector, isMandatory, isMultiple, showAllValues, isSorted ) {
    var labels = [];
    var valueTable = [];
    for( var value in table ) {
        var label = table[ value ];
        labels.push( label );
        valueTable[ label ] = value;
    }
    if( isSorted )
        labels.sort();
    if( !isMandatory )
        $( selectElementSelector ).append( '<option value=""></option>' );
    for( var i = 0; i < labels.length; i++ ) {
        var label = labels[ i ];
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
    $( '#outputTypeTurtle' ).click( 
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
    else if( $( 'input:radio[name=outputType]' )[ 1 ].checked ) { // Turtle
        $( '#preview' ).html( '' );
        $( '#Turtle' ).val( code );
        $( '#validationButton' ).attr( 'form', 'turtleValidation' );
    }
    else { // RDFa HTML and RDFa XHTML
        $( '#preview' ).html( code );
        $( '#text' ).val( code );
        $( '#validationButton' ).attr( 'form', 'rdfaValidation' );
        if( $( 'input:radio[name=outputType]' )[ 2 ].checked ) // RDFa HTML
            $( '#host-language_text' ).val( 'html' );
        else // RDFa XHTML
            $( '#host-language_text' ).val( 'xhtml' );
    }
}
