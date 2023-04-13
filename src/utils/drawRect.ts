import {ZoneType} from "../types/timestampTypes";

export const drawRect = (
    context: CanvasRenderingContext2D | null | undefined,
    zone: ZoneType,
    fractions: { height: number, width: number }
) => {
    if (context) {
        context.strokeStyle = 'green';
        context.lineWidth = 5;
        context.strokeRect(
            zone.left * fractions.width,
            zone.top * fractions.height,
            zone.width * fractions.width,
            zone.height * fractions.height
        )
    }
}