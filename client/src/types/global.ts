export interface IHospitals {
    _id: string
    clinicName: string
    country: string
    city: string
    image: string
    services: Service[]
    estimatedCost: number
    usAverageCost: number
    savings: number
    notes: string
    __v: number
}

export interface Service {
    procedure: string
    price: number
    _id: string
}