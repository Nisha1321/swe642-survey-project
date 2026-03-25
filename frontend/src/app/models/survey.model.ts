// Defines the Survey data model matching the backend entity fields.
export interface Survey {
    id?: number;
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephoneNumber: string;
    email: string;
    dateOfSurvey: string;
    campusFeatures: string;
    interestSource: string;
    recommendationLikelihood: string;
    additionalComments?: string;
}
