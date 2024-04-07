export default class Education{
    degree: string =  "";
    institution: string =  "";
    startDate: string =  "";
    endDate: string =  ""; // Include end date for new education
    isCurrentlyEnrolled: boolean =  false; // New education shouldn't be currently enrolled by default
    description: string =  "";

    constructor() {};
}