export interface ZoneType {
    left: number,
    top: number,
    width: number,
    height: number
}

export interface TimeStampType {
    id: number,
    timestamp: number,
    duration: number,
    zone: ZoneType
}