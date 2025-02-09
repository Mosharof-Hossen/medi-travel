export type TServices = {
    procedure: string;
    price: number;
}

export type TClinic = {
    clinicName: string;
    country: string;
    city: string;
    image: string;
    services: TServices[];
    estimatedCost: number;
    usAverageCost: number;
    savings: number;
    notes: string;
}